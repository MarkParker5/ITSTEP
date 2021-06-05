<?php
namespace Controllers;
use View\View;
class MainController{
	public function __construct(){
		
	}
	public function home(){
		View::render('main/home');
	}
	public function contacts(){
		View::render('main/contacts');
	}
	public function about(){
		$name = 'About Us';
		$text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor libero nobis minima ad soluta vitae optio quasi suscipit porro eum. Voluptatum quisquam iure rem et quibusdam voluptatibus, quis mollitia eum, ullam distinctio aut, libero dolor quaerat vel illo at numquam magnam. Rem sint voluptatibus minima tenetur, laboriosam voluptates illum labore!';
		View::render('main/about', compact('name','text'));
	}
	public function pdf(){
		$posts = \Models\Post::all();
		$mpdf = new \Mpdf\Mpdf();
		foreach ($posts as $post) {
			$mpdf->WriteHTML('<h1>'.$post->getName().'</h1>');
			$mpdf->WriteHTML('<div>'.$post->getText().'</div>');
		}
		$mpdf->Output('blog.pdf', 'D');
	}
}