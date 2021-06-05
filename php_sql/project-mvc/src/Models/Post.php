<?php
namespace Models;
use Libs\DB;

class Post extends Model{
	protected $id;
	protected $name;
	protected $text;
	protected $author_id;
	protected $created_at;

	public function getId(){ return $this->id;}
	public function getName(){ return $this->name;}
	public function getText(){ return $this->text;}
	public function getAuthorId(){ return $this->author_id;}
	public function getCreatedAt(){ return $this->created_at;}
	public function getAuthor(){ return User::getById( $this->getAuthorId() );}

	public function setName(string $text){ $this->name = $text;}
	public function setText(string $text){ $this->text = $text;}
	public function setAuthorId(int $id){ $this->author_id = $id;}

	public static function getTableName(){ return 'posts';}
}
