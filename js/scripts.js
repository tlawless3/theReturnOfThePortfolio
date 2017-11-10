
//Home Page
//cycles in portfolio page
$(".portfolioLink").click(function(){
  $(".centerText").css("position", "absolute");
  $(".centerText").animate({
    left: "150%",
  }, 500);
  setTimeout(function(){
    $(".navbarPortfolio").css("display", "");
    $(".centerText").toggle();
    $(".portfolioContent").animate({
      right: "0%",
    }, 500);
    $(".navbarPortfolio").animate({
      left: "2.5%",
    }, 500);
  }, 500);
});
//cycles in the contact page
$(".contactLink").click(function(){
  $(".centerText").css("position", "absolute");
  $(".centerText").animate({
    left: "150%",
  }, 500);
  setTimeout(function(){
    $(".contactContent").toggle();
    $(".centerText").css("display", "none");
    $(".contactContent").animate({
      left: "0%",
    }, 500);
  }, 500);
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
    $(".centerText").toggle();
    $(".navbarPortfolio").css("display", "none");
    setTimeout(function(){
      $(".centerText").css("position", "static");
    }, 500);
    $(".centerText").animate({
      left: "28%",
    }, 500);
  }, 500)
});

//Concact Page
