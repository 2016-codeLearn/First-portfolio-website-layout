

$(document).ready(function(){

	$("#header").click(function(){

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
        $('header, body').animate({scrollTop : 0},800);
        return false;
    });

});

// Back to top function ends here






// canvas Logo starts











var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(151,23);
ctx.lineTo(220,65);
ctx.lineTo(220,142);
ctx.lineTo(220,143);
ctx.lineTo(151,182);
ctx.lineTo(82,143);
ctx.lineTo(82,63);
ctx.lineTo(151,23);

ctx.moveTo(95,72);
ctx.lineTo(209,134);

ctx.moveTo(94,134);
ctx.lineTo(209,72);

ctx.moveTo(149,108);
ctx.arc(150,102,50,0,2*Math.PI);


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeFill = "blue";

ctx.moveTo (221,149);
ctx.lineTo(151,189);
ctx.lineTo(220,224);
ctx.lineTo(220,149);
ctx.lineTo(221,149);
ctx.moveTo(81,224);
ctx.lineTo(81,149);
ctx.lineTo(151,189);
ctx.lineTo(81,223);


ctx.moveTo(81,223);
ctx.lineTo(47,224);
ctx.lineTo(47,166);
ctx.lineTo(81,166);

ctx.moveTo(221,166);
ctx.lineTo(255,166);
ctx.lineTo(255,224);
ctx.lineTo(221,223);


ctx.font = "38px Arial";
ctx.fillText("OHK",106,273);
ctx.stroke();





//  Canvas Logo Ends;



// canvas Logo starts


// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.moveTo(46,153);
// ctx.bezierCurveTo(31,152,31,127,32,128);
// ctx.lineTo(40,128);
// ctx.lineTo(46,118);
// ctx.bezierCurveTo(90,76,176,80,193,112);
// ctx.bezierCurveTo(249,118,251,128,254,128);
// ctx.bezierCurveTo(248,136,249,144,248,152);
// ctx.lineTo(231,153);
// ctx.bezierCurveTo(228,125,192,126,190,153);
// ctx.lineTo(94,153);
// ctx.bezierCurveTo(94,123,56,123,52,153);
// ctx.lineTo(46,153);
// ctx.stroke();

//  Canvas Logo Ends;