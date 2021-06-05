<div class="container">

<h1>Registration</h1>

<?showMessage()?>

<div class="col-6">
<form action="" method="POST">
	<div class="form-group">
		<label for="email">Username:</label>
		<input type="text" id="email" name="email" class="form-control">
	</div>
	<div class="form-group">
		<label for="password">Password: </label>
		<input id="password" name="password" type="password" class="form-control">
	</div>
	<div class="form-group">
		<label for="repassword">Repeat password: </label>
		<input id="repassword" name="repassword" type="password" class="form-control">
	</div>

	<button class="btn btn-primary" name="action" value="registration">Register</button>
</form>

<div>
Already have an account?
<a href="index.php?page=login"><strong>Login</strong></a>
</div>

</div>
</div>