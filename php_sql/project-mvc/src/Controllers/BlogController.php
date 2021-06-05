<?php
namespace Controllers;
use View\View;
use Models\Post;
use Models\User;

class BlogController{
	public function index(){
		$posts = Post::all();
		$title = 'Blog Page';
		View::render('blog/index', compact('posts', 'title'));
	}
	public function show(array $vars){
		$post = Post::getById($vars[1]);
		if(!$post){ throw new PageNotFoundException(); }
		// $user = User::getById( $post->getAuthorId() );
		View::render('blog/post', compact('post'));
	}
	public function edit(array $vars){
		$post = Post::getById($vars[1]);
		$users = User::all();
		if( isset($_POST['submit']) ){
			$post->setName($_POST['name']);
			$post->setText($_POST['text']);
			$post->setAuthorId((int)$_POST['author']);
			$post->save();
			header("Location: /blog/");
			die();
		}
		View::render('blog/edit', compact('post', 'users'));
	}
	public function delete(array $vars){
		//Post::getById($vars[1])->delete();
		Post::deleteById($vars[1]);
		header("Location: /blog/");
		die();
	}
	public function deleteAjax(){
		Post::deleteById( $_POST['id'] );
	}
	public function new(array $vars){
		if( isset($_POST['submit']) ){
			/*
			$post = new Post();
			$post->setName($_POST['name']);
			$post->setText($_POST['text']);
			$post->setAuthorId($_POST['author']);
			$post->save();
			*/
			$properties = [
				'name' 		=> $_POST['name'] ?? '',
				'text' 		=> $_POST['text'] ?? '',
				'author_id' => (int)$_POST['author'] ?? 0
			];
			/*$post = */Post::create($properties);
			
			//header("Location: /post/".$post->getId());
			header("Location: /blog/");
			die();
		}
		$users = User::all();
		View::render('blog/new', compact('users'));
	}
}	