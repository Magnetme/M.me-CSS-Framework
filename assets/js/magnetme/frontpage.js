function vertical_center() {
    var height = $(window).height();
    var container = $('.curtain#introductie');
    var height_container = $(container).height();
    

    
    if(height_container+50 < height*0.90){

	    var ninetypc = (90 * height) / 100;
	    $("#red_bg").css('height',ninetypc + 'px');
    	var offset = (ninetypc - height_container - 50)/2;
	    $(container).css('margin-top',offset+25);   
    } else{
	    $("#red_bg").css('height','auto');
	    $(container).css('padding-top','1em');
    }
}

$(document).ready(function() {
    
    $("#vimeo_container").fitVids();
    
/*
    jQuery(".headline").fitText(1.2, { maxFontSize: '65px' })
    jQuery(".tagline").fitText(1.05, { maxFontSize: '26px' })
    
    jQuery("#uitleg h1, #uitleg h2").not('.tagline').fitText(1.25, { maxFontSize: '49px' })
*/
    
    vertical_center();
    $(window).bind('resize', vertical_center);
    
    $('body').stellar({
	    responsive:true,
	    hideDistantElements: false,
    });
    
    $('#registration input, #registration button').tooltip();
    
    $("#registration button").click(function() {
    	event.preventDefault();

    		$("#registration input").addClass('shake').wait(1500).removeClass('shake');
    	});
    
    $('.alert').addClass("fadeInDown");
    
    $('.headline, .tagline').addClass("fadeInLeft");
});


