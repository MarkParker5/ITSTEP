<article class="mb-3 border-top">
	<h1><?=$post->getName()?></h1>
	<p><small><?=$post->getCreatedAt()?></small></p> <hr>
	<p> <?=$post->getText()?></p>
	<em>-<?=$post->getAuthor()->getName()?></em>
</article>



<? $id = $post->getId(); ?>
<?if($id > 1):?><a href="/post/<?= $id-1 ?>"> Previous </a><?endif;?>
<?if($id < Models\Post::lastId() ):?><a href="/post/<?= $id+1 ?>"> Next </a><?endif;?>
