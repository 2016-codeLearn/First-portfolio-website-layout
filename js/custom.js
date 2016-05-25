

$(document).ready(function(){

	$("#header").mouseenter(function(){

			$("#dropdown_container").slideDown();
		});

		$("#dropdown_container").mouseleave(function(){
			$("#dropdown_container").slideUp();
		});
	});






function val(){
	if(comments.email.value =='')
	{
		alert("please enter a correct email");
		comments.email.focus();
		return false;
	}
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	if (reg.test(comments.email.value) == false)
	{
		alert('Invalid email address');
		comments.email.focus();
		return false;

	}

	return true;
}



// back to top --------------
$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});