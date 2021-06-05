<div class="container">

<h1>Login</h1>

<? showMessage();

?>

<div class="col-6">
<form action="" method="POST">
	<div class="form-group">
		<label for="email">Email:</label>
		<input type="text" id="text" name="email" class="form-control">
	</div>
	<div class="form-group">
		<label for="password">Password: </label>
		<input id="password" name="password" type="password" class="form-control">
	</div>
	<button class="btn btn-primary" name="action" value="tryLogin">Login</button>
</form>

<div>
Don't have an account yet?
<a href="index.php?page=registration"><strong>Registration</strong></a>
</div>

</div>

</div>