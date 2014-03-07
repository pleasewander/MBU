function hideAboutSection(){
	$("#about1").hide();
	$("#about2").hide();
	$("#about3").hide();
}

function showAboutSection(){
	$('#about1').fadeIn(1200, function(){$('#about2').fadeIn(1200, function(){$('#about3').fadeIn(1200, function(){});});});
}

function hideMajorSection(){

	$('#foxinfo').hide();
	$('#gorillainfo').hide();
	$('#lioninfo').hide();
	$('#squirrelinfo').hide();
}

$( document ).ready(function(){
	hideAboutSection();
	$('.sticky-element').waypoint('sticky');


	$('#sectionabout').waypoint(function(){showAboutSection();});

	hideMajorSection();
	$('#foxinfo').slideToggle();

	$('#foxbutton').click(function(){
		hideMajorSection();
		$('#foxinfo').slideToggle(1000);
	});

	$('#gorillabutton').click(function(){
		hideMajorSection();
		$('#gorillainfo').slideToggle(1000);
	});
	
	$('#lionbutton').click(function(){
		hideMajorSection();
		$('#lioninfo').slideToggle(1000);
	});

	$('#squirrelbutton').click(function(){
		hideMajorSection();
		$('#squirrelinfo').slideToggle(1000);
	});
	
	
});
