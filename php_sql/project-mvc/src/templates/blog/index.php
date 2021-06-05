<h1><?=$title?></h1>

<?foreach ($posts as $post):?>
	<article class="mb-3 border-top">
		<h3><a href="/post/<?=$post->getId()?>"><?=$post->getName()?></a></h3>
		<p><?=$post->getText()?></p>
		<p><em>-<?=$post->getAuthor()->getName()?></em></p>
		<p>	<a href="/post/<?=$post->getId()?>/edit/" class="btn btn-primary" style="padding: 1px 3px;">Edit</a>
			<a href="/post/<?=$post->getId()?>/delete/" class="btn btn-danger" style="padding: 1px 3px;">Delete</a></p>
			<a href="#" class="btn btn-danger delete-ajax" style="padding: 1px 3px;" data-id="<?=$post->getId()?>">Delete AJAX</a></p>
	</article>
<?endforeach?>