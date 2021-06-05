<?php

header('Content-Type: image/png');
$img = imagecreatetruecolor(280, 280);

imagefill($img, 0, 0, 0xDDDDDD);

$voiting = explode('/', file('../voiting.txt')[0]);
$text = ['cars','fruit','ships'];
$colors = [0x006400,0xFF4500,0x00009B];
$colors2 = [0x004500,0xAA2500,0x000033];

$sum = 0;
$font = 'IMPACT.TTF';
foreach ($voiting as $j) {
	$sum += $j;
}

foreach ($voiting as $i => $j){
	$x = 80*$i + 40;
	$y = 280;
	$w = 40;
	$h = round(250 * $j / $sum);
	imagefilledrectangle($img, $x-5, $y-$h-5, $x+$w+5, $y+5, $colors2[$i]);
	imagefilledrectangle($img, $x, $y-$h, $x+$w, $y, $colors[$i]);
	imagettftext($img, 15, 0, $x, 275, 0xFFFFFF, $font, $text[$i]);
}


imagepng($img);