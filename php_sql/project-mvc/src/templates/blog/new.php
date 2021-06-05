<h1>Add new post</h1>

<form action="/post/new/" method="POST">
	<div class="form-group">
		<label for="">Name</label>
		<input type="text" class="form-control" name="name">
	</div>
	<div class="form-group">
		<label for="">Text</label>
		<textarea class="form-control" rows="10" name="text"></textarea>
	</div>
	<div class="form-group">
		<label for="">Author</label>
		<select name="author" id="" class="form-control">
			<?foreach($users as $user):?>
				<option value="<?=$user->getId()?>"><?=$user->getName()?></option>
			<?endforeach?>
		</select>
	</div>
	<button class="btn btn-primary" name="submit" value="submit">Save</button>
</form>
