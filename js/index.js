// only after document ready, define functions
$(document).ready(function() {
	
 // ************* Intro page *************  
  // On click of #start button after page ready
  $( "#start" ).click(function() {

	  // Prevent the default for click
	  event.preventDefault();
	  
	  // Scroll intro div up at same rate next div appears from below
	  $( ".intro" ).hide('slide',{direction:'down'},1000);
	  
	  // Scroll first div up at same rate intro div exits screen
		$( ".first" ).show('slide',{direction:'up'},1000);
	});
	
// ************* First question *************  
	  // If user selects "play" button
  $( "#play" ).click(function() {

	  // Prevent the default for click
	  event.preventDefault();
	  
	  // Hide existing divs - slide right.
    $( ".first" ).hide('slide',{direction:'right'},1000);
    $( "#tangled" ).hide('slide',{direction:'right'},1000);
    
    // Show question 2 divs - enter from different directions to switch things up
    $( "#question2a" ).show('slide',{direction:'left'},1000);
    $( "#question2b" ).show('slide',{direction:'right'},1000);
    $( "#css" ).show('slide',{direction:'down'},1000);
    $( "#layout" ).show('slide',{direction:'down'},1000);
 
	});
	
	// If user selects "run" button
	$( "#run" ).click(function() {

	  // Prevent the default for click
	  event.preventDefault();
	  
	  // Hide the run button
    $( this ).hide('scale', 450);
    
    // Drop in text telling the user put his big boy pants on...
    $( "#think-again" ).delay(450).show('bounce', 1000);
 
	});
	
 // ************* Second question *************  	
	// Create two sortable lists
	 $(function() {
	    $( "#sortable1, #sortable2" ).sortable({
	      connectWith: ".connectedSortable"
	    }).disableSelection();
	  });

	// when hit submit button do the following
	 $( "#boom" ).click(function() {
	 		
	 		// clear the array created by list
	 		var array = [];
	 		
	 		// define the correct order for the array/list
	 		// because the answers are the same there are two possibilities
	 		var correct = ["list1", "list2", "list3", "list4", "list5", "list6", "list7", "list8", "list9", "list10", "list11", "list12", "list13", "list14"];
	 		var correct2 = ["list1", "list2", "list3", "list4", "list5", "list6", "list7", "list13", "list9", "list10", "list11", "list12", "list8", "list14"];
	 		
	 		// convert list order created on page by the user into array[]
	 		$( "ul#sortable1 li img" ).each(function () {
	 				array.push( $( this).attr( "id" )) 
	 		});
	 		
	 		// compare the array created from the screen to the correct order(s)
	 		var isequal = array.length == correct.length && array.every(function(element, index) {
    		return element === correct[index]; 
			});
			
			var isequal2 = array.length == correct2.length && array.every(function(element, index) {
    		return element === correct2[index]; 
			});
	 		
	 		// if answer is correct move on to next question	
	 		if ( isequal === true || isequal2 === true ) {

	 			$( "#question2a" ).hide('size', 1000);
    		$( "#question2b" ).hide('size', 1000);
    		$( "#css" ).hide('size', 500);
    		$( "#layout" ).hide('size', 500);
 
    		
    		$( "#question3a" ).show('puff', 1000);
    		$( "#question3b" ).show('puff', 1000);
	 		
	 		// if answer is incorrect go to lose/end screen
	 		} else {

	 				$( "#question2a" ).hide('shake', 800);
	    		$( "#question2b" ).hide('shake', 800);
	    		$( "body" ).addClass( "back-to-black" );
	    		$( "#css" ).hide('shake', 1000);
	    		$( "#layout" ).hide('shake', 1000);
	    		
	    		$( "#inner" ).delay(800).show('slide', 500);
	    		$( "#lose" ).delay(900).show('slide', 500);
	 		}

	 });


// ************* Third question *************  	
	// on hover over the "good one, bro" button
	$( "#q3b-opt1" ).hover(function() {

		// Prevent the default event.
		event.preventDefault();
		// move the button
		$( this ).addClass("offstage-bottom");
		
		// and change the button's text to "nope."
		$( this ).text("Nope.");
		
		// if user clicks on the nope button, harrass him
		$( "#q3b-opt1" ).click(function() {
			event.preventDefault();
			$( this ).text("Dude, really?");
			
			// if the persistent user clicks on the "dude, really" button transisiton to lose screen
			$( "#q3b-opt1" ).click(function() {
				event.preventDefault();
				$( "body" ).addClass( "back-to-black" );
				$( "#question3a" ).hide( "puff", 800);
				$( "#question3b" ).hide( "puff", 800);
				$( ".inner" ).delay(800).show('blind', 800);
	    	$( "#lose" ).delay(800).show('blind', 000);
	    	$( "#good-day-sir" ).delay(1600).show('explode', 1000);
			});
		});
	});
	
	// if the user selects the "yup" button, transition to winning screen
	$( "#q3b-opt2" ).click(function() {

		// Prevent the default event.
		event.preventDefault();
	  $( "body" ).addClass( "back-to-black" );
		$( "#question3a" ).hide( "drop", {direction:'down'}, 800);

		$( "#question3b" ).hide( "drop", {direction:'up'}, 800);
		
		$( "#win" ).delay(500).show("blind", 800);
		$( "#kickline" ).delay(500).show("explode", 800);

	});
	
});

