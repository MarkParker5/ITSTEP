<?php
namespace Models;
use Libs\DB;

abstract class Model{
	abstract public static function getTableName();
	//abstract public static function create();

	public static function all(){
		$db = DB::getInstance(); 
		return $db->query('select * from ' . static::getTableName(), [], static::class) ?? null;
	}
	public static function getById($id){
		$db = DB::getInstance();
		$post = $db->query( 'select * from ' . static::getTableName() . ' where id = ?', [$id], static::class );
		return $post ? $post[0] : null;
	}
	public static function lastId(){
		$db = DB::getInstance();
		return (int)$db->query( 'select max(id) as id from ' . static::getTableName())[0]->id;
	}
	public function delete(){
		$db = DB::getInstance();
		$db->query( 'delete from ' . static::getTableName() . ' where id = ?', [$this->id]);
	}
	public static function deleteById($id){
		$db = DB::getInstance();
		$db->query( 'delete from ' . static::getTableName() . ' where id = ?', [$id]);
	}
	public function save(){
		$reflection = new \ReflectionObject($this);
		$properties = $reflection->getProperties();
		$placeholders = [];
		$params = [];
		
		if( $this->id ){
			foreach ($properties as $p) {
				$placeholders[] = $p->name . '=:' . $p->name;
				$name = $p->name;
				$params[$p->name] = $this->$name;
			}
			$query = 'update ' . static::getTableName() . ' set ' . implode($placeholders, ', ') . ' where id=:id';
		}else{
			foreach ($properties as $p) {
				$name = $p->name;
				if($this->$name){
					$placeholders1[] = $name;
					$placeholders2[] = ':' . $name;
					$params[$p->name] = $this->$name;
				}
			}
			$query = 'insert into ' . static::getTableName() . '(' . implode($placeholders1, ', ') . ') values(' . implode($placeholders2, ', ') . ')';
		}
		$db = DB::getInstance();
		$db->query($query, $params);
	}
	public static function create(array $properties){
		$placeholders = [];
		$params = [];
		foreach ($properties as $p => $v) {
			$placeholders[] = $p;
			$params[] = $v;
		}

		$query = 'insert into ' . static::getTableName() . '('.implode($placeholders, ', ').')' . ' values(?, ?, ?) ';
		$db = DB::getInstance();
		$db->query($query, $params);
		return static::getById(static::lastId());
	}
	public static function findOneByColumn(string $column, $value){
		$db = DB::getInstance();
		$result = $db->query('select * from ' . static::getTableName() . ' where ' . $column . ' = ?;', [$value], static::class );
		if(!$result) return null;
		else return $result[0];
	}
}