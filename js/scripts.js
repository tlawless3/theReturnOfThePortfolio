
$(".portfolioLink").click(function(){
  $(".centerText").css("position", "absolute");
  $(".centerText").animate({
    left: "150%",
  }, 500);
  setTimeout(function(){
    $(".portfolioContent").animate({
      right: "0%",
    }, 500)
  }, 500);
});
