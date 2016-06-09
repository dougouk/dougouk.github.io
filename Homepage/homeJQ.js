$(document).ready(function(){
    $("div").hide();
    $(".jumbotron").hide();
    $("#dantastic").slideUp(500).fadeIn(2000, fadeInJumbo());

});

var fadeInJumbo = function(){
  $(".jumbotron").fadeIn(3000, fadeInText());
}
var fadeInText = function(){
    $("div").fadeIn(1000);
};
