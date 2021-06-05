<?
$action = $_POST['action'] ?? null;
if($action) $action();

function dump($arr){
	echo '<pre>' . print_r($arr, true) . '</pre>';
};

function redirect($page){
	if($page) header("Location: index.php?page=$page");
	else header("Location: index.php");
	die;//exit;
};

function saveImage($file, $dir){
	$fileTypes = [
		'image/jpeg',
		'image/png',
		'image/gif',
		'image/webp',
	];
	$fName = time() . '_' . $file['name'];
	if(!$file || $file['error'] == 4){
		setMessage('File is required', 'danger'); 
		return null;
	};
	if(!$file['type'] || !in_array($file['type'], $fileTypes)){
		setMessage('Invalid file type', 'danger'); 
		return null;
	};
	if($file['error'] == 2 || $file['size'] > 1024*1024*0.5){
		setMessage('File size must be < 0.5M', 'danger'); 
		return null;
	};
	if(!file_exists($dir)) mkdir($dir);
	move_uploaded_file($file['tmp_name'], $dir.'/big/'.$fName);
	copy($dir.'/big/'.$fName, $dir.'/'.$fName);
	setMessage('Crop image','success');
	return 	$fName;
};

function sendMail(){
	$email = $_POST['email'] ?? null;
	$msg = $_POST['msg'] ?? null;
	$errors = [];
	if(!$email) $errors['email'] = 'Email is required';
	if(!$msg) $errors['msg'] = 'Message is required';
	if($errors) setMessage($errors, 'danger');
	else{ 
		mail('to', 'subject', 'msg') ? setMessage('Thank you for message', 'success') : null;
		redirect('contacts');
	};
	//exit;//die;
};

function sendBook(){
	$name = $_POST['username'] ?? null;
	$msg = $_POST['msg'] ?? null;
	if(!$name || !$msg){
		setMessage('All fields required', 'danger');
	}else{
		$file = fopen('guest.txt', 'a+');
		fwrite($file, $name . '|' . $msg . '|' . time() . "\r\n");
		fclose($file);
	}
	redirect('guest-book');
};

function showGuestBook(){
	//$file = file_get_contents('guest.txt');
	//echo $file;
	if( file_exists('guest.txt')){
		$file = array_reverse(file('guest.txt'));
		$count = ceil(count($file)/3);
		$p = $_GET['p'] ?? 0;
		if($p >= $count) $p = $count - 1;
		echo "<ul class='pagination'>";
		for($i = 0; $i < $count; $i++){
			echo "<li class='page-item ".($p==$i?'active':'')."'><a href='index.php?page=guest-book&p=$i' class='page-link'>".($i+1)."</a></li>";
		};
		echo "</ul>";
		for($i = $p*3; $i < ($p+1)*3 && $i < count($file); $i++){
			//if($i == count($file)) break;
			list($name, $msg, $time) = explode('|', $file[$i]);
			echo "<div class=\"my-2 border mt-5\"> $msg <br> $name, ".date('d.m.Y H:i', (int)$time)." </div>";
		};
	}
};

function tryLogin(){
	$email = $_POST['email'] ?? null;
	$password = $_POST['password'] ?? null;
	foreach (file('users.txt') as $user) {
		$user = explode('||', trim($user));
		if($user[0] == $email && $user[1] == $password){
			login($email);
			return null;
		};
	};
	setMessage('Wrong email or password', 'danger');
};

function registration(){
	$email = $_POST['email'] ?? null;
	$password = $_POST['password'] ?? null;
	$repassword = $_POST['repassword'] ?? null;
	$errors = [];
	foreach (file('users.txt') as $user) {
		$user = explode('||', trim($user));
		if($user[0] == $email && $user[1] == $password){
			login($email, $password);
			return null;
		};
		if($user[0] == $email) $errors['olduser'] = 'This email is already registered';
		if($user[1] == $password) $errors['olduser'] = 'This password is already taken by ' . $user[0];
	};
	if(!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Invalid email';
	if(preg_match("/[а-я]/i", $password)) $errors['password1']  = 'Password must contain only latin';
	if(!preg_match("/[0-9]/", $password)) $errors['password2'] 	= 'Password must contain numbers';
	if(!preg_match("/[A-Z]/", $password)) $errors['password3'] 	= 'Password must contain capital letter';
	if( mb_strlen($password) < 8) $errors['password4'] 		  	= 'Length of password must be 8+';
	if($password != $repassword) $errors['password5'] 		  	= 'Password mismatch';
	if($errors) setMessage($errors, 'danger');
	else{ 
		$file = fopen('users.txt', 'a+');
		fwrite($file, $email . '||' . $password . "\n");
		fclose($file);
		login($email);
	};
};

function login($email){
	setSession('user', $email);
	redirect('home');
};

function logout(){
	removeSession('user');
	redirect('home');
};

function uploadImage(){
	$file = $_FILES['file'] ?? null;
	$folder = $_POST['folder'] ?? 'img/general';

	$fName = saveImage($file, $folder);
	if($fName) setSession('img', $folder . '/' . $fName);

	//if($fName) cropImage($fName, $folder, 300, true); square
	//if($fName) cropImage($fName, $folder, 300);
	redirect('upload');
};

function addFolder(){
	$folder = $_POST['folder'] ?? null;
	if(!file_exists('img/' . $folder)){
		mkdir('img/' . $folder);
		mkdir('img/' . $folder . '/big');
		setMessage('Slider added','success');
	}else setMessage('Slider already exists','danger');
	redirect('upload');
};

function deleteFolder(){
	$folder = $_POST['folder'] ?? null;
	dirDel($folder);
	redirect('upload');
};

function dirDel($dir){  
    $d=opendir($dir);  
    while(($entry=readdir($d))!==false){ 
        if ($entry != "." && $entry != ".."){ 
            if (is_dir($dir."/".$entry)){  
                dirDel($dir."/".$entry);  
            }else{  
                unlink ($dir."/".$entry);  
            } 
        } 
    } 
    closedir($d);  
    rmdir ($dir);  
};

function cropImage($fName, $dir, $width, $crop=false){
	$create_f = getFunction('imagecreatefrom', $fName);
	$save_f = getFunction('image', $fName);

	$src = $create_f( $dir . '/' . $fName );
	$w_src = imagesx($src);
	$h_src = imagesy($src);

	if($crop){
		$dest = imagecreatetruecolor($width, $width);
		if($w_src > $h_src) imagecopyresized($dest, $src, 0, 0, ($w_src - $h_src)/2, 0, $width, $width, $h_src, $h_src);
		else imagecopyresized($dest, $src, 0, 0, 0, ($h_src - $w_src)/2, $width, $width, $w_src, $w_src);
		$save_f($dest, "{$dir}/{$width}x{$width}_{$fName}");
	}else{
		$height = round($width * $h_src / $w_src);
		$dest = imagecreatetruecolor($width, $height);
		imagecopyresized($dest, $src, 0, 0, 0, 0, $width, $height, $w_src, $h_src);
		$save_f($dest, "{$dir}/{$width}x{$height}_{$fName}");
	};
};

function getFunction($begin, $fName){
	$ext = strtolower( substr($fName, strrpos($fName, '.') + 1) ); //$ext = strtolower( end(explode('.', $fName)));
	if($ext == 'jpg') $ext = 'jpeg';
	return $begin . $ext;
};

function jCropImage(){
	$x = $_POST['x'] ?? null;
	$y = $_POST['y'] ?? null;
	$w = $_POST['w'] ?? null;
	$h = $_POST['h'] ?? null;
	$img = $_POST['img'] ?? null;

	$parts = explode('/', $img);
	$parts[count($parts)-2] = '';
	$parts = implode('/', $parts);

	$create_f = getFunction('imagecreatefrom', $img);
	$save_f = getFunction('image', $img);

	$src = $create_f($img);
	$dest = imagecreatetruecolor(150, 150);

	imagecopyresized($dest, $src, 0, 0, $x, $y, 150, 150, $w, $h);
	$save_f($dest, $img);

	setMessage('Image uploaded','success');
	redirect('upload');
};

function voit(){
	$choice = $_POST['voiting'] ?? null;

	if($choice){
	$voiting = explode('/', file('voiting.txt')[0]);
	$voiting[$choice-1]++ ;
	setSession('voiting', $choice);

	$file = fopen('voiting.txt', 'w+');
	fwrite($file, implode('/', $voiting));
	fclose($file);
	};
	redirect('');
};

function cancelVoit(){
	$voiting = explode('/', file('voiting.txt')[0]);
	$voiting[issetSession('voiting')-1]-- ;
	removeSession('voiting');

	$file = fopen('voiting.txt', 'w+');
	fwrite($file, implode('/', $voiting));
	fclose($file);
	redirect('');
}