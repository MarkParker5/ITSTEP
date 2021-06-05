<?php
$w = 200;
$h = 50;
$font = 'IMPACT.TTF';
$letters = 'qwertyuiopasdfghjklzxcvbnm1234567890';
$word = '';

header('Content-Type: image/jpeg');
$img = imagecreatetruecolor($w, $h);

imagefill($img, 0, 0, 0xAAAAAA);
for($i = 0; $i < 1000; $i++){
	imagesetpixel($img, rand(0, $w), rand(0, $h), 0x777777);
};

for($i = 0; $i < 5; $i++){
	$letter = $letters[rand(0, strlen($letters)-1)];
	$word .= $letter;
	//imagestring($img, 7, $i*30+30, 15, $letter, 0x000000);
	imagettftext($img, 20, rand(-30, 30), $i*30+30, 30, 0x000000, $font, $letter);
};

imagejpeg($img);
