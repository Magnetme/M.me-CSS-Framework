function vertical_center() {
    var height = $(window).height();
    var container = $('.curtain#introductie');
    var height_container = $(container).height();
    
    if(height_container+50 < height*0.90){
	    var ninetypc = (90 * height) / 100;
	    $("#fp_intro_red").css('height',ninetypc + 'px');
    	var offset = (ninetypc - height_container)/2;
	    $(container).css('margin-top',offset);   
    } else{
	    $("#fp_intro_red").css('height','auto');
	    $(container).css('margin-top','2em');
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
    
/*
    $('body').stellar({
	    responsive:false,
	    hideDistantElements: false,
    });
*/
    
	 $('#registration input').iCheck({
	    checkboxClass: 'icheckbox_minimal-grey',
	    radioClass: 'iradio_minimal-grey',
	    labelHoverClass: 'hover',
	    });
    
    $('#registration input, #registration button').tooltip();
    
    $('.typeahead').typeahead();
    
/*
    $("#registration button").click(function() {
    	event.preventDefault();
    	$("#registration .studentmail-wrapper").addClass('shake');
    	$('.error-message').addClass("fadeInLeft");
    });
*/
    
    $('.alert').addClass("fadeInRightBig");
    

  	$(function () { 
  		$("input,select,textarea").not("[type=radio], [type=submit]").jqBootstrapValidation(); 
  	} );

    
    
});	