$(function(){ 
	$('#big-img').Jcrop({
		minSize: [150, 150],
        setSelect:   [ 200, 200, 50, 50 ],
        aspectRatio: 1,
        onSelect: showCoords,
        onChange: showCoords,

    });

    function showCoords(c){
    	$('#x').val(c.x);
    	$('#y').val(c.y);
    	$('#w').val(c.w);
    	$('#h').val(c.h);
    };
});