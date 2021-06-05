<?php
return [
	'/'					=> 'MainController@home',
	'pdf' 			=> 'MainController@pdf',
	'contacts' 			=> 'MainController@contacts',
	'about'				=> 'MainController@about',
	'blog' 				=> 'BlogController@index',
	'post/new'			=> 'BlogController@new',
	'post/{id}'			=> 'BlogController@show',
	'post/{id}/edit'	=> 'BlogController@edit',
	'post/{id}/delete'	=> 'BlogController@delete',
	'post/delete-ajax'	=> 'BlogController@deleteAjax',
	'users' 			=> 'UserController@index',
	'registration'		=> 'UserController@registration',
	'login'				=> 'UserController@login',
	'logout'			=> 'UserController@logout',
	'activate'			=> 'UserController@activate',
	'welcome' 			=> 'UserController@welcome',
];