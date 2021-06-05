<?php
$w = $_GET['w'] ?? 400;
$h = $_GET['h'] ?? 400;

header('Content-Type: image/jpeg');
$img = imagecreatetruecolor($w, $h);

imagefill($img, 0, 0, 0x111111);

//imagefilledellipse($img, 200, 200, 200, 200, 0xFFFFFF);
imageellipse($img, 200, 200, 300, 300, 0xFFFFFF);
imagefilledellipse($img, 160, 160, 70, 70, 0xFFFFFF);
imagefilledellipse($img, 270, 160, 70, 70, 0xFFFFFF);

imagefilledellipse($img, 160, 160, 20, 20, 0x0000FF);
imagefilledellipse($img, 270, 160, 20, 20, 0x0000FF);

imagearc($img, 200, 200, 200, 200, 30, 120, 0xFFFFFF);

imagejpeg($img);