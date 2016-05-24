

$(document).ready(function(){

	$("#header").mouseenter(function(){

			$("#dropdown_container").slideDown();
		});

		$("#dropdown_container").mouseleave(function(){
			$("#dropdown_container").slideUp();
		});
	});
