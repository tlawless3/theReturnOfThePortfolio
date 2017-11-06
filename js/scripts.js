//Home Page
$(".portfolioLink").click(function(){
  $(".centerText").css("position", "absolute");
  $(".centerText").animate({
    left: "150%",
  }, 500);
  setTimeout(function(){
    $(".navbarPortfolio").css("display", "");
    setTimeout(function(){
      $(".centerText").css("display", "none");
    }, 500);
    $(".portfolioContent").animate({
      right: "0%",
    }, 500);
    $(".navbarPortfolio").animate({
      left: "2.5%",
    }, 500);
  }, 500);
});

//TODO add code that shuffles the contact Link in and out
$(".contactLink").click(function(){

});

//Portfolio Page
$("#homeButtonPortfolio").click(function(){
  $(".portfolioContent").animate({
    right: "100%",
  }, 500);
  $(".navbarPortfolio").animate({
    left: "100%",
  }, 500);
  setTimeout(function(){
    $(".centerText").css("display", "");
    setTimeout(function(){
      $(".centerText").css("position", "static");
      $(".navbarPortfolio").css("display", "none");
    }, 500);
    $(".centerText").animate({
      left: "28%",
    }, 500);
  }, 500)
});

//Concact Page
