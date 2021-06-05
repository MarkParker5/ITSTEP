<div class="container">

<h1>Contacts</h1>

<img src="img-php/test.php?w=400&h=600" alt="">

<?showMessage()?>

<form action="" method="POST" class="col-6">
	<div class="form-group">
		<label for="email">Your mail:</label>
		<input type="email" id="email" name="email" class="form-control <?= getError('email') ? 'is-invalid' : '' ?>">
	</div>
	<div class="form-group">
		<label for="msg">Message: </label>
		<textarea id="msg" name="msg" class="form-control <?= getError('msg') ? 'is-invalid' : '' ?>"></textarea>
	</div>
	<div class="form-group">
		<img src="img-php/captcha.php" alt="">
		<input type="text" name="captcha" class="form-control">
	</div>

	<button class="btn btn-primary" name="action" value="sendMail">Send</button>
</form>
</div>
