$(".mobile-manu").hide();
$(".hide").hide();


$(".show").click(function (){
  $(".mobile-manu").show(30);
  $(".hide").show();
  $(".show").hide();
})


$(".hide").click(function (){
  $(".mobile-manu").hide(200);
  $(".hide").hide();
  $(".show").show();
})