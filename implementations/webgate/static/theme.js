// Overclouds
// Author: Romain Claret
// Latest update: 15th July 2016

// global. currently active menu item
var current_item = 0;

// few settings
var section_hide_time = 500;
var section_show_time = 500;

// jQuery stuff
jQuery(document).ready(function($) {

	// Switch section
	$("a", '.mainmenu').click(function()
	{
		if( ! $(this).hasClass('active') ) {
			current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() {
				$('a', '.mainmenu').removeClass( 'active' );
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}
		return false;
	});

	$('.customfadein').click(function()
	{
		if( ! $(this).hasClass('active') ) {
			current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() {
				// $('a', '.customfadein').removeClass( 'active' );
				$('a', '.mainmenu').removeClass( 'active' );
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );

		}
		return false;
	});
});
