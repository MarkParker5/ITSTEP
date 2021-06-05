<?php
namespace Controllers;
use View\View;
use Libs\DB;
use Libs\Mail;
use Models\User;
use Exceptions\InvalidPropertyException;

class UserController{
	public function index(){
		$users = User::all();
		$title = 'Users Page';
		View::render('user/index', compact('users', 'title'));
	}
	public function registration(){	
		if( $_POST ){
			try{
				$user = User::signUp($_POST);
			}catch(InvalidPropertyException $e){
				View::render('user/registration', ['error' => $e->getMessage()] );
				return;
			}
			if($user instanceOf User){
				$msg = '<a href="http://project-mvc/activate?token='.$user->getAuthToken().'&id='.$user->lastId().'">Confirm email</a>';
				Mail::sendMail($user->getEmail(), 'Email Confirmation', $msg);
				View::render('user/registration', ['alert' => 'Check your mail'] );
			}
			die();
		}
		View::render('user/registration');
	}
	public function activate(){
		$token 	= $_GET['token'];
		$id 	= $_GET['id'];
		$user  	= User::findOneByColumn('auth_token', $token);
		if( $user->getId() == $id && $user->getAuthToken() == $token ){
			$user->confirm();
			$user->save();
			$_SESSION['user'] = $user;
			header("Location: /welcome/");
			die();
		} 
		header("Location: /");
		die();
	}
	public function login(){
		if( $_POST ){
			try{
				$user = User::login($_POST);
			}catch(InvalidPropertyException $e){
				View::render('user/login', ['error' => $e->getMessage()] );
				return;
			}
			if($user instanceOf User){
				header("Location: /welcome/");
				$_SESSION['user'] = $user;
			}
			die();
		}
		View::render('user/login');
	}
	public function welcome(){
		$user = $_SESSION['user'];
		View::render('user/welcome', compact('user'));
	}
	public function logout(){
		$_SESSION = array();
		session_destroy();
		header("Location: /");
		die();
	}
}