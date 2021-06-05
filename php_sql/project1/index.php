<?php
	session_start();
 	$menu = require_once 'navbar.php';
	$page = $_GET['page'] ?? 'home';
	require_once "libs/session.php";
	require_once "libs/form.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>PHP</title>
	<link rel="stylesheet" href="css/jquery.Jcrop.min.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/slider.css">
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="index.php">Project 1</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <ul class="navbar-nav mr-auto">
		<? foreach ($menu as $key => $text): ?>
		    <li class="nav-item  <?= $key==$page ? 'active' : none ?>">
		    	<a class="nav-link" href="index.php?page=<?=$key?>"><?=$text?></a>
		    </li>
		<? endforeach ?>
    </ul>
	
    <?= issetSession('user') ? 'Hello, '.explode('@', issetSession('user'))[0].
    	'<form action="" method="POST"><button value="logout" name="action">Log out</button></form>' :
    	'<a href="index.php?page=registration">Registration</a>'?>

  </div>
</nav>



<?php 
	$page = $_GET['page'] ?? 'home';
	if(!file_exists("pages/{$page}.php")) $page = '404';
	require_once "pages/{$page}.php";
	removeSession('msg');
?>



<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>


<script src="js/jquery.Jcrop.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>