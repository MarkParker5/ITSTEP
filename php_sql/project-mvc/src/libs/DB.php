<?php
namespace Libs;
use PDO;

class DB{
	private $pdo;
	private static $instance;

	private function __construct(){
		extract( (require __DIR__ . '/../settings.php')['db'] );
		$this->pdo = new PDO("mysql:host={$host};dbname={$name}", $user, $password);
	}
	public function query(string $sql = null, array $params = [], string $className = 'stdClass'){
		$sth 	= $this->pdo->prepare($sql);
		$result = $sth->execute($params);
		if($result) return $sth->fetchAll(PDO::FETCH_CLASS, $className);
		return null;
	}
	public static function getInstance(){
		if(!self::$instance) self::$instance = new self();
		return self::$instance;
	}
}