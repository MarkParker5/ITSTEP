<?php
namespace Models;
use Exceptions\InvalidPropertyException;

class User extends Model{
	protected $id;
	protected $name;
	protected $email;
	protected $is_confirm;
	protected $role;
	protected $password_hash;
	protected $auth_token;
	protected $created_at;

	public function getId(){ return $this->id;}
	public function getName(){ return $this->name;}
	public function getRole(){ return $this->role;}
	public function getEmail(){ return $this->email;}
	public function isConfirm(){ return $this->is_confirm;}
	public function getAuthToken(){ return $this->auth_token;}
	public function getCreateDate(){ return $this->created_at;}
	public function getPasswordHash(){ return $this->password_hash;}

	public static function getTableName(){ return 'users';}

	public function confirm(int $value = 1){$this->is_confirm = $value;}
	public function setRole(string $value){$this->role = $value;}
	public function setAuthToken(string $value){$this->auth_token = $value;}

	public function setName(string $value){
		if(!$value) throw new InvalidPropertyException('Name is required');
		$this->name = $value;
	}
	public function setEmail(string $value){
		if(!$value) throw new InvalidPropertyException('Email is required');
		if( !filter_var($value, FILTER_VALIDATE_EMAIL) ) throw new InvalidPropertyException('Email is not correct');
		$this->email = $value;
	}
	public function setPassword(string $value){
		if(!$value) throw new InvalidPropertyException('Password is required');
		$this->password_hash = password_hash($value, PASSWORD_DEFAULT);
	}

	public static function signUp(array $userData){
		if( self::findOneByColumn('email', $userData['email']) ) throw new InvalidPropertyException('Email is already taken;');

		$user = new User();
		$user->setName($userData['name']);
		$user->setEmail($userData['email']);
		$user->setPassword($userData['password']);	
		$user->confirm(0);
		$user->setRole('user');
		$user->setAuthToken( sha1(random_bytes(100)) );
		//$user->created_at = date('Y-m-d H:i:s');
		$user->save();
		return $user;
	}
	public static function login(array $formData){
		$user = self::findOneByColumn('email', $formData['email']);
		if( !$user ) throw new InvalidPropertyException('Invalid email');

		if( !password_verify( $formData['password'], $user->getPasswordHash() ) ) throw new InvalidPropertyException('Invalid email or password');

		return $user;
	}
}