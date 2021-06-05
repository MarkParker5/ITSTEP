<?php
/*$ex = new Exception('Error: errors not found');
throw $ex;*/

function f1(){
	try{
		// throw new Exception('Error: errors not found');
		f2();
	}catch(Exception $e){
		echo 'Error: ' . $e->getMessage();
	}
}
function f2(){
	$a = 4;
	$b = 0;
	if($b == 0) throw new Exception('Division by zero');
	echo $a/$b;
}

f1();

