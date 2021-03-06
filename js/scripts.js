$(document).ready(function(){

  /* automatically load bomb icons for total number of bombs */

  function makeBombs() {

    var html = [];
    for (var i = 0; i < 13355; i++) {
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
    }, 7000);
    return false;
  });

/* custom share buttons. code via http://www.savjee.be/2015/01/Creating-static-social-share-buttons/ */





  /* Generate small bombs for each country on button click */

  $("#NKoreaButton").one('click', function(){
    $("#NKoreaBombs").after("<p>Less than 20 Nuclear Weapons</p>");
    for (i=0; i<20;i++) {
      $("#NKoreaBombs").delay(100).queue(function (next) {
        $(this).after("<img src='imgs/NKoreaBomb.gif' width='25%'>");
        next();
      });
    }
  });

  $("#IsraelButton").one('click', function(){
    $("#IsraelBombs").after("<p>80 Nuclear Weapons</p>");
    for (i=0; i<80;i++) {
      $("#IsraelBombs").delay(50).queue(function (next) {
        $(this).after("<img src='imgs/IsrealBomb.gif' width='25%'>");
        next();
      });
    }
  });

  $("#IndiaButton").one('click', function(){

    for (i=0; i<130;i++) {
      $("#IndiaBombs").delay(50).queue(function (next) {
        $(this).after("<img src='imgs/IndiaBomb.gif' width='25%'>");
        next();
      });
    }
    $("#IndiaBombs").after("<p>130 Nuclear Weapons</p>");
  });

  $("#PakistanButton").one('click', function(){

    for (i=0; i<150;i++) {
      $("#PakistanBombs").delay(50).queue(function (next) {
        $(this).after("<img src='imgs/PakistanBomb.gif' width='25%'>");
        next();
      });
    }
    $("#PakistanBombs").after("<p>150 Nuclear Weapons</p>");
  });

  $("#UKButton").one('click', function(){

    for (i=0; i<215;i++) {
      $("#UKBombs").delay(25).queue(function (next) {
        $(this).after("<img src='imgs/UKBomb.gif' width='25%'>");
        next();
      });
    }
    $("#UKBombs").after("<p>215 Nuclear Weapons</p>");
  });

  $("#ChinaButton").one('click', function(){

    for (i=0; i<290;i++) {
      $("#ChinaBombs").delay(25).queue(function (next) {
        $(this).after("<img src='imgs/ChinaBomb.gif' width='25%'>");
        next();
      });
    }
    $("#ChinaBombs").after("<p>290 Nuclear Weapons</p>");
  });

  $("#FranceButton").one('click', function(){

    for (i=0; i<300;i++) {
      $("#FranceBombs").delay(25).queue(function (next) {
        $(this).after("<img src='imgs/FrenchBomb.gif' width='25%'>");
        next();
      });
    }
    $("#FranceBombs").after("<p>300 Nuclear Weapons</p>");
  });

  $("#USButton").one('click', function(){

    for (i=0; i<5800;i++) {
      $("#USBombs").prepend("<img src='imgs/USBomb.gif' width='25%'>");

    }

    $("#USBombs").append("<p>5800 Nuclear Weapons</p>");
  });

  $("#RussianButton").one('click', function(){

    for (i=0; i<6370;i++) {
      $("#RussiaBombs").prepend("<img src='imgs/RussiaBomb.gif' width='25%'>");
    }
    $("#RussiaBombs").append("<p>6370 Nuclear Weapons</p>");
  });


});
