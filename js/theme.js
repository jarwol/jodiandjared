jQuery(document).ready(function($) {
	"use strict"; 
	
	 $(".responsive-menu ul").tinyNav({
	  active: 'active', // String: Set the "active" class
	  header: '-Navigation-', // String: Specify text for "header" and show header instead of the active item
	  label: '' // String: Sets the <label> text for the <select> (if not set, no label will be added)
	});
	
	/* ----------------------------------------------------- */
  	/* contact form ajax validate */	
	$("#contactForm").validate({
		submitHandler:function(form){
			$.ajax({
				type: 'POST',
				url: 'php/sendmail.php',
				data: $("#contactForm").serialize(),
				beforeSend: function(){
					$("#contactForm").hide();
					$(".sending").show();
				},
				success: function(){
					$(".sending").hide();
					$(".formOK").show();
				},
				error: function(html){
					$(".sending").hide();
					$(".formNOK").show();
					$(".formNOK").append(html);
				}
			});
			return false;
		}
	});
	
	
	$("a[rel^='prettyPhoto']").prettyPhoto({
			animation_speed: 'fast', /* fast/slow/normal */
			slideshow: 5000, /* false OR interval time in ms */
			autoplay_slideshow: false, /* true/false */
			opacity: 0.80, /* Value between 0 and 1 */
			show_title: true, /* true/false */
			allow_resize: true, /* Resize the photos bigger than viewport. true/false */
			default_width: 500,
			default_height: 344,
			counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
			theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			horizontal_padding: 20, /* The padding on each side of the picture */
			hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
			wmode: 'opaque', /* Set the flash wmode attribute */
			autoplay: true, /* Automatically start videos: True/False */
			modal: false, /* If set to true, only the close button will close the window */
			deeplinking: false, /* Allow prettyPhoto to update the url to enable deeplinking. */
			overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
			keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
			changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
			callback: function(){}, /* Called when prettyPhoto is closed */
			ie6_fallback: true,
			
			social_tools: false /* html or false to disable */
	});
	
	
	/*Accordion*/
	$('.zooshortcode-zccordion .actitle a').click(function () {
		var acuname = $(this).attr("rel");
			
		$('#'+acuname+' .acinner').hide();
		$($(this).attr("href")).show();
		
		$('#'+acuname+' .actitle a').removeClass('active');
		$(this).addClass('active');
		
		return false;
	});
	
	
	/*Tabs*/	
	$('div.zooshortcode-tab ul.tabNavigation a').click(function () {
		var uname = $(this).attr("rel");
			
		$('div#'+uname+' > div').hide();
		$($(this).attr("href")).show();
		$($(this).attr("href")).css('opacity', '1');
		
		$('div#'+uname+' ul.tabNavigation a').removeClass('active');
		$(this).addClass('active');
		
		return false;
	});
	
});