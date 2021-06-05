<h1>Home</h1>

<div id="big"><img></div>

<div class="sliders">
	<? $folders = glob('img/*', GLOB_ONLYDIR);
	foreach ($folders as $slider):?>
		<h3><?=explode('/', $slider)[1]?></h3>
		<div class="window">
			<div class="thumbs">
				<? $f = glob($slider.'/*.{jpg,jpeg,png,gif,webp}', GLOB_BRACE);
				foreach ($f as $file):?>
					<img src='<?=$file?>' width='300px'/>
				<?endforeach;?>
			</div>
		</div>
	<?endforeach;?>
</div>


<div class="container">
<?if(!issetSession('voiting')):?>
	<h3>Choose the best slider</h3>
	<form action="index.php" method="POST">
		<div class="form-group"><label><input type="radio" name="voiting" value="1"> Cars </label></div>
		<div class="form-group"><label><input type="radio" name="voiting" value="2"> Fruit </label></div>
		<div class="form-group"><label><input type="radio" name="voiting" value="3"> Ships </label></div>
		<button name="action" value="voit" class="btn btn-primary">Send</button>
	</form>
	
<script src="js/slider.js" type="text/javascript"></script>
<?else:?>
	<h3>Results:</h3>
	<img src="img-php/voiting.php" alt="">
	<form action="index.php" method="POST">
		<button class="btn btn-primary" name="action" value="cancelVoit">Cancel</button>
	</form>
<?endif;?>
</div>
<br>


<script src="js/slider.js" type="text/javascript"></script>