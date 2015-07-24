$(document).ready(function(){
                // Get a reference to the container.

            var container = $( ".first" );

            // Bind the link to toggle the slide.

            $( "#start" ).click(
                function( event ){

                    // Prevent the default event.
                    event.preventDefault();
                    // Toggle the slide based on its current
                    // visibility.
                    if (container.is( ":visible" )){
                        // Hide - slide up.
                        container.slideUp( 2000 );
                    } else {
                        // Show - slide down.
                        container.slideDown( 2000 );
                    }
                }
            );
        });