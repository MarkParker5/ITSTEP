<?php
//------------------------------------------------------------------
//header('refresh: 5');	// - автообновление, удалить до релиза
//------------------------------------------------------------------
require_once 'vendor/autoload.php';
spl_autoload_register(function($class){
	require_once 'src\\'.$class.'.php';
});
session_start();

Libs\Route::init();
