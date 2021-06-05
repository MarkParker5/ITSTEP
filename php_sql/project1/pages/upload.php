<div class="container">
	<h1>Upload Photo</h1>
	<?showMessage()?>
	<form action="index.php" method="POST" class="col-6" enctype="multipart/form-data">
		<p>Upload image to slider</p>
		<?php
		$img = issetSession('img');
		if($img):?>
			<img src='<?=$img?>' alt='<?=$img?>' id='big-img'/> <br>
			<form action="index.php" method="POST">
				<input type="hidden" name="x" id="x">
				<input type="hidden" name="y" id="y">
				<input type="hidden" name="w" id="w">
				<input type="hidden" name="h" id="h">
				<input type="hidden" name="img" value="<?=issetSession('img')?>">
				<button name="action" value="jCropImage" class="btn btn-primary">Send</button>
			</form>	
	<?php removeSession('img'); 
		endif;
		if(!$img):?>
		<select name="folder">
			<? $folders = glob('img/*', GLOB_ONLYDIR);
			foreach($folders as $f):?>
				<option value="<?=$f?>"><?=explode('/',$f)[1]?></option>
			<?endforeach;?>
		</select>
		<input type="hidden" name="MAX_FILE_SIZE" value="524288">
		<input type="file" name="file"> 
		<button name="action" value="uploadImage" class="btn btn-primary">Upload</button>
	<?endif?>
	<?=issetSession('img')?>
	</form>
	<hr>
	<form action="index.php" method="POST" class="col-6" enctype="multipart/form-data">
		<p>Create new slider</p>
		<input type="text" name="folder">
		<button name="action" value="addFolder" class="btn btn-primary">Create</button>
	</form>
	<hr><hr>
	<form action="index.php" method="POST" class="col-6" enctype="multipart/form-data">
		<p>Remove slider</p>
		<select name="folder">
			<?foreach($folders as $f):?>
				<option value="<?=$f?>"><?=explode('/',$f)[1]?></option>
			<?endforeach;?>
		</select>
		<button name="action" value="deleteFolder" class="btn btn-primary">Remove</button>
	</form>

	
	<?php
		/*$f = opendir('img');
		while($file = readdir($f)){
			if($file != '.' && $file != '..' && !is_dir($file)) echo "<img src='img/$file' alt='$file' width='400px'/>";
		};
		closedir($f);*/

		/*$f = array_slice(scandir('img'), 2);
		foreach ($f as $file) {
			echo "<img src='img/$file' alt='$file' width='400px'/>";
		};*/
		/*
		$folders = glob('img/*', GLOB_ONLYDIR);
		foreach ($folders as $slider) {
			$f = glob($slider.'/*.{jpg,jpeg,png,gif,webp}', GLOB_BRACE);
			echo '<br>';
			foreach ($f as $file) {
				echo "<img src='$file' alt='$file' width='400px'/>";
			};
		};*/

	?>
</div>


