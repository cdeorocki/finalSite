$(document).ready(function(){
	// alert('Connected');

	$("body").ready(function(){
		$(".wrapper").delay(1000);
		$(".wrapper").slideDown(1000);
	});

	$(".wrapper").ready(function(){
		$(".content").delay(2000);
		$(".content").fadeIn(3000);
		$("#button").fadeIn(3000);
	});

});	

