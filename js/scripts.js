$(document).ready(function(){

  /* automatically load bomb icons for total number of bombs */

  function makeBombs() {

    var html = [];
    for (var i = 0; i < 15695; i++) {
      html.push("<img alt='bomb' class='bomb' src='imgs/greyBomb100px.gif'>");
    }

    document.getElementById('allBombs').innerHTML = html.join('');

  }

  makeBombs();

  /* hide loading notice after load. show post bomb content */

  $(window).load(function() {
    $("#loading").hide()
    $("#outro").removeClass("hiddenDIV");

  });

  /*animate footer slide 10000px from top. hide at 70000px. autoscroll to bottom on click */

  $(document).scroll(function() {

    var top = $(document).scrollTop();

    if (top > 10000) $("#slider").slideDown();
    if (top > 70000) $("#slider").addClass("hiddenDIV");

  });


  var $root = $('html, body');
  $('a').click(function() {
    $root.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 6000);
    return false;
  });

  /* Generate small bombs for each country on button click */

  $("#NKoreaButton").click(function(){
    $("#NKoreaBombs").after("<p>Less than 10 Nuclear Weapons</p>");
    for (i=0; i<10;i++) {
      $("#NKoreaBombs").delay(100).queue(function (next) {
        $(this).after("<img src='imgs/NKoreaBomb.gif' width='25%'>");
        next();
      });
    }
  });

  $("#IsraelButton").click(function(){
    $("#IsraelBombs").after("<p>80 Nuclear Weapons</p>");
    for (i=0; i<80;i++) {
      $("#IsraelBombs").delay(50).queue(function (next) {
        $(this).after("<img src='imgs/IsrealBomb.gif' width='25%'>");
        next();
      });
    }
  });

  $("#IndiaButton").click(function(){

    for (i=0; i<110;i++) {
      $("#IndiaBombs").delay(50).queue(function (next) {
        $(this).after("<img src='imgs/IndiaBomb.gif' width='25%'>");
        next();
      });
    }
    $("#IndiaBombs").after("<p>110 Nuclear Weapons</p>");
  });

  $("#PakistanButton").click(function(){

    for (i=0; i<120;i++) {
      $("#PakistanBombs").delay(50).queue(function (next) {
        $(this).after("<img src='imgs/PakistanBomb.gif' width='25%'>");
        next();
      });
    }
    $("#PakistanBombs").after("<p>120 Nuclear Weapons</p>");
  });

  $("#UKButton").click(function(){

    for (i=0; i<225;i++) {
      $("#UKBombs").delay(25).queue(function (next) {
        $(this).after("<img src='imgs/UKBomb.gif' width='25%'>");
        next();
      });
    }
    $("#UKBombs").after("<p>225 Nuclear Weapons</p>");
  });

  $("#ChinaButton").click(function(){

    for (i=0; i<250;i++) {
      $("#ChinaBombs").delay(25).queue(function (next) {
        $(this).after("<img src='imgs/ChinaBomb.gif' width='25%'>");
        next();
      });
    }
    $("#ChinaBombs").after("<p>250 Nuclear Weapons</p>");
  });

  $("#FranceButton").click(function(){

    for (i=0; i<300;i++) {
      $("#FranceBombs").delay(25).queue(function (next) {
        $(this).after("<img src='imgs/FrenchBomb.gif' width='25%'>");
        next();
      });
    }
    $("#FranceBombs").after("<p>300 Nuclear Weapons</p>");
  });

  $("#USButton").click(function(){

    for (i=0; i<7100;i++) {
      $("#USBombs").prepend("<img src='imgs/USBomb.gif' width='25%'>");

    }

    $("#USBombs").append("<p>7,100 Nuclear Weapons</p>");
  });

  $("#RussianButton").click(function(){

    for (i=0; i<7500;i++) {
      $("#RussiaBombs").prepend("<img src='imgs/RussiaBomb.gif' width='25%'>");
    }
    $("#RussiaBombs").append("<p>7,500 Nuclear Weapons</p>");
  });


});
