$(document).ready(function(){
  $(".menu").hide();
  $(".icon-menu, .icon-close").click(openMenu);
});

var openMenu = function(){
  $(".menu").slideToggle(200);
}
