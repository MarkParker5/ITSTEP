<br>

<?if( isset($error) ):?>
	<div class="alert alert-danger"><?= $error ?></div>
<?endif; if( isset($alert) ):?>
	<div class="alert alert-success"><?= $alert ?></div>
<?endif;?>

<form action="/login/" method="POST" class="col-7">
	<div class="form-group">
		<label for="">Email</label>
		<input type="email" class="form-control" name="email">
	</div>
	<div class="form-group">
		<label for="">Password</label>
		<input type="password" class="form-control" name="password">
	</div>
	<button class="btn btn-primary">Log in</button>
</form>