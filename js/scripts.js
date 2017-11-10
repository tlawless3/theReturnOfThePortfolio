
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
//cycles in home page
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
  }, 500);
});
//cycles in contact page
$("#contactButtonPortfolio").click(function(){
  $(".portfolioContent").animate({
    right: "100%",
  }, 500);
  $(".navbarPortfolio").animate({
    left: "100%",
  }, 500);
  setTimeout(function(){
    $(".contactContent").toggle();
    $(".navbarPortfolio").css("display", "none");
    $(".contactContent").animate({
      left: "0%",
    }, 500);
  }, 500);
})

//Concact Page
//cycles in home page
$("#homeButtonContacts").click(function(){
  $(".contactContent").animate({
    left: "100%",
  }, 500);
  setTimeout(function(){
    $(".contactContent").toggle();
    $(".centerText").toggle();
    setTimeout(function(){
      $(".centerText").css("position", "static");
    }, 500);
    $(".centerText").animate({
      left: "28%",
    }, 500);
  }, 500);
});
//cycles in portfolio page
$("#portfolioButtonContacts").click(function(){
  $(".contactContent").animate({
    left: "100%",
  }, 500);
  setTimeout(function(){
    $(".navbarPortfolio").css("display", "");
    $(".contactContent").toggle();
    $(".portfolioContent").animate({
      right: "0%",
    }, 500);
    $(".navbarPortfolio").animate({
      left: "2.5%",
    }, 500);
  }, 500);
});
