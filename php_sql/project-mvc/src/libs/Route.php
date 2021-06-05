<?php
namespace Libs;
use View\View;
use Exceptions\PageNotFoundException;
use Exception;
class Route{
	public static function init(){
		try{
			$routes = require_once 'src/routes.php';
			$url = $_GET['url'] ?? '/';
			$result = false;

			if(substr($url, -1)!='/') $url = $url . '/';

			foreach ($routes as $k => $rout) {
				if($k != '/') $k = $k . '/';
				$str = preg_replace("~{.+?}~", '(\d+)', $k);
				preg_match('~^'.$str.'$~', $url, $result);
				if($result)	break;
			}

			if(!$result){
				throw new PageNotFoundException();
			};

			list($nameController, $nameMethod) = explode('@', $rout);

			$pathController = "Controllers\\".$nameController;
			if( !file_exists("src\\".$pathController.'.php') ) throw new Exception('Controller "' . $pathController . '" not found');

			$controller = new $pathController();
			if( !method_exists($controller, $nameMethod) ) throw new Exception('Method "' . $nameMethod . '" not found');

			$controller->$nameMethod($result);

		}catch(PageNotFoundException $e){
			View::render('errors/404',[],404);
		}catch(Exception $e){
			echo $e->getMessage();
		}//try-catch
	}//init
}//class