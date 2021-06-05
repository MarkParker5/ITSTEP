<div class="container">

<h1 class="text-center">Guest Book</h1>

<form action="" method="POST" class="col-6 m-auto">
	<? showMessage() ?>
	<div class="form-group">
		<label for="username">Name: </label>
		<input type="text" id="username" name="username" class="form-control" value="<?= issetSession('user') ? explode('@', issetSession('user'))[0] : '' ?>">
	</div>
	<div class="form-group">
		<label for="msg">Message: </label>
		<textarea id="msg" name="msg" class="form-control"></textarea>
	</div>

	<button class="btn btn-primary" name="action" value="sendBook">Send</button>
</form>

<? showGuestBook() ?>
</div>