jQuery( document ).ready( function()
{
	jQuery( '#buglist tbody tr' ).each( function( i, tr )
	{
		var status = jQuery( tr ).find( 'td.column-status i' );

		if( status.length ) {
			var colorClass = getStatusClass( status );

			if( colorClass ) {
				
				status.parentsUntil( 'tr' ).addClass( colorClass );
				status.hide();
			
				jQuery( 'td.column-status > div' ).css( 'color', '#393939' );
			}
		}
	} );

	jQuery( '#view-issue-page td.bug-status' ).each( function( i, td )
	{
		var status = jQuery( td ).find( '.fa-status-box' );

		if( status.length ) {
			var colorClass = getStatusClass( status );
            
            if( colorClass ) {

				td = jQuery( td );

				td.addClass( colorClass );
				status.hide();

				td.css( 'color', '#393939' );
			}
		}
	} );
} );

function getStatusClass( status )
{
	var classes = status.attr( 'class' ).split( /\s+/ );
	var ret = null;

	classes = jQuery.grep( classes, function( c ) { return /^status-/.test( c ); } );

	if( classes.length )
		ret = classes[ 0 ].replace( '-fg', '-color' );

	return ret;
}
