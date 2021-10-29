$(document).ready(function () {
    console.log("ready");
  
    $(".button").click(function () {
      $(".menu").toggleClass("open");
    });
  });

$(document).ready(function() {
  console.log("ready");

  $('div.lbutton').click(function() {
      $('div.title').addClass('orange');
  });


$('div.lbutton-font').click(function(){
    $('div.main2').addClass('sans');
});


$('div.lbutton-day').click(function(){
  $('div.main2').addClass('day');
});


$('div.lbutton-night').click(function(){
  $('div.main2').addClass('night');
});


});




