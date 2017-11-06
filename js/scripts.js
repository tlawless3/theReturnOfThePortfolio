//Home Page
$(".portfolioLink").click(function(){
  $(".centerText").css("position", "absolute");
  $(".centerText").animate({
    left: "150%",
  }, 500);
  setTimeout(function(){
    setTimeout(function(){
      $(".centerText").css("display", "none");
      $(".navbarPortfolio").css("overflow", "visible");
    }, 500);
    $(".portfolioContent").animate({
      right: "0%",
    }, 500);
    $(".navbarPortfolio").animate({
      left: "2.5%",
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
    $(".centerText").css("display", "flex");
    setTimeout(function(){
      $(".centerText").css("position", "static");
      $(".navbarPortfolio").css("overflow", "hidden");
    }, 500);
    $(".centerText").animate({
      left: "28%",
    }, 500);
  }, 500)
});
