<h1><?=$title?></h1>

<?foreach ($users as $user):?>
	<article class="mb-3 border-top">
		<h3><?=$user->getName()?></h3>
		<p> <?=$user->getMail()?></p>
	</article>
<?endforeach?>