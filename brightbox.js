// brightbox

/*global $, console, alert, window, setTimeout, document */

( function() {

	// jshint is yelling at me:
	'use strict';

	var lb = {

		// variables to hold different dimensions for positioning:
		pageWidth: '',
		pageHeight: '',
		largeImageSrc: '',
		largeImageHeight: '',
		largeImageWidth: '',
		closeIconTop: '',
		closeIconLeft: '',

		// close the brightbox:
		closeBrightbox: function() {

			// just remove all these elements from the DOM:
			$( '.brightbox-bg, .brightbox-img, .brightbox-close' )
				.remove();

		},

		// open the brightbox:
		openBrightbox: function( image ) {

			// set needed dimensions:
			lb.largeImageSrc = $( image ).attr( 'data-largeSrc');
			lb.largeImageWidth = $( image ).attr( 'data-largeWidth' );
			lb.largeImageHeight = $( image ).attr( 'data-largeHeight' );

			// create elements needed for the brightbox, using set dimensions:
			$( 'body' )
				.append( '<div class="brightbox-bg"><!></div>' )
				.append( '<img class="brightbox-img" src="' + lb.largeImageSrc + '" width="' + lb.largeImageWidth + '" height="' + lb.largeImageHeight + '" />' )
				.append( '<div class="brightbox-close">X</div>' );

			// needed to correctly position new elements:
			lb.resetPageDimensions();

			// close the brightbox when you click on the background or the close button:
			$( '.brightbox-bg, .brightbox-close' ).on( 'click', function() {
				lb.closeBrightbox();
			});

		},

		//reset the page dimensions:
		resetPageDimensions: function() {

			// set page dimensions:
			lb.pageWidth = $( window ).width();
			lb.pageHeight = $( window ).height();

			// position the large image in the center of the page:
			$( '.brightbox-img' )
				.css({
					'top': ( lb.pageHeight / 2 ) - ( lb.largeImageHeight / 2 ),
					'left': ( lb.pageWidth / 2 ) - ( lb.largeImageWidth / 2 )
				});

			// set where the close icon should be:
			lb.closeIconTop = ( lb.pageHeight / 2 ) - ( lb.largeImageHeight / 2 ) - 10;
			lb.closeIconLeft = ( lb.pageWidth / 2 ) + ( lb.largeImageWidth / 2 ) - 30;

			// position the close button in the upper right of the large image:
			$( '.brightbox-close' )
				.css({
					'top': lb.closeIconTop,
					'left': lb.closeIconLeft
				});

		},

		// stuff to do when the page is ready:
		initialize: function() {

			// open the brightbox when the thumb image is clicked:
			$( '.brightbox-thumb' ).on( 'click', function() {
				lb.openBrightbox( this );
			});

		}

	};

	// if the window is resized, make sure everything still looks good:
	$( window ).resize( function() {
		lb.resetPageDimensions();
	});

	// do this stuff when the document is ready:
	$( document ).ready( function() {

		// lets's get the party started!!
		lb.initialize();

	});

}());