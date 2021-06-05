<?php

function setSession($key, $value){ $_SESSION[$key] = $value; }

function issetSession($key){ return $_SESSION[$key] ?? null; }

function removeSession($key){ if( issetSession($key) ) unset( $_SESSION[$key] ); }

function setMessage($text, $type){ setSession('msg', compact('text', 'type')); }

function showMessage(){ 
	if( issetSession('msg') ){
		extract( issetSession('msg') );
		if( is_array($text) )  $text = '<ul><li>' . implode('</li><li>', $text) . '</ul></li>';
		echo "<div class=\"alert alert-$type col-6 \">$text</div>";
	};
}
function getError($name){ return $_SESSION['msg']['text'][$name] ?? null;}