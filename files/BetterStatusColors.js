jQuery( document ).ready( function()
{
	jQuery( '#buglist tbody tr' ).each( function( i, tr )
	{
		var status = jQuery( tr ).find( 'td.column-status i' );

		if( status.length ) {
			var classes = status.attr( 'class' ).split( /\s+/ );

			classes = jQuery.grep( classes, function( c ) { return /^status-/.test( c ); } );

			if( classes.length ) {
				var colorClass = classes[ 0 ].replace( '-fg', '-color' );

				status.parentsUntil( 'tr' ).addClass( colorClass );
				status.hide();
			}

			jQuery( 'td.column-status > div' ).css( 'color', '#393939' );
		}
	} );
} );
