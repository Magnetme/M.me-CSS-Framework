function vertical_center() {
    var height = $(window).height();
    var container = $('.curtain#introductie');
    var height_container = $(container).height();
    
    if(height_container+50 < height*0.80){

	    var ninetypc = (80 * height) / 100;
	    $("#red_bg").css('height',ninetypc + 'px');
    	var offset = (ninetypc - height_container - 50)/2;
	    $(container).css('margin-top',offset);   
    } else{
	    $("#red_bg").css('height','auto');
	    $(container).css('margin-top','1em');
    }
}

$(document).ready(function() {
    vertical_center();
    $("#vimeo_container").fitVids();
    
    $(window).bind('resize', vertical_center);
});

