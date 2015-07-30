
$(window).load(function() {
		// Animate loader off screen
		$("#intro").removeClass('hiddenDIV');
    $("#outro").removeClass('hiddenDIV');
    $(".loading").fadeOut("slow");;
	});

$(document).ready(function(){
  $("#allBombs").ready(function(){
    for (i=0; i<15695;i++) {
        $("#allBombs").append("<img src='imgs/bomb.png' width='100px'>");
    }
  });

});
