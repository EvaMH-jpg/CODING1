
// note: check the .css, the height of the body is like 500%, so that 
// there is something to scroll

$(window).on("scroll",function(e){


    // the scroll position of the page is in $(window).scrollTop()
    //console.log($(window).scrollTop())

//    console.log( $(window).height() );
//    console.log( $(window).scrollTop() );
    
    var pos = $(window).height() - $(window).scrollTop();
    
    $(".square-green").css("top", $(window).height() +  pos/4)   
    $(".square-green1").css("top",  $(window).height() + pos/2)   
    $(".square-green2").css("top", $(window).height() +  pos/8)
    $(".square-green3").css("top", $(window).height() +  pos/8)
    $(".square-green6").css("top", $(window).height() +  pos/8)
    $(".square-green7").css("top", $(window).height() +  pos/8)
    $(".square-green8").css("top", $(window).height() +  pos/4)
    $(".square-green10").css("top", $(window).height() +  pos/3)
    $(".square-green12").css("top", $(window).height() +  pos/2)
    $(".square-green13").css("top", $(window).height() +  pos/3)
    $(".square-green14").css("top", $(window).height() +  pos/2)
    $(".square-green15").css("top", $(window).height() +  pos/8)
    $(".square-green16").css("top", $(window).height() +  pos/8)
    $(".square-green19").css("top", $(window).height() +  pos/2)
    $(".square-green20").css("top", $(window).height() +  pos/2)
    $(".square-green21").css("left", $(window).height() +  pos/2)
    $(".square-green23").css("left", $(window).height() +  pos/16)
    $(".square-green24").css("left", $(window).height() +  pos/6)
    $(".square-green25").css("top", $(window).height() +  pos/4)
    $(".square-green27").css("top", $(window).height() +  pos/4)
    $(".text7").css("top", $(window).height() +  pos/5)
    $(".square").css("top", $(window).height() +  pos/2)
    $(".square1").css("top", $(window).height() +  pos/4)
    $(".headline").css("top", $(window).height() +  pos/8)
    $(".smalltextimage").css("top", $(window).height() +  pos/8)
   $(".textvonimage").css("top", $(window).height() +  pos/8) 
    $(".square-green8").css("left", $(window).height() +  pos/8) 
    $(".square-green2_2").css("left", $(window).height() +  pos/2)
    $(".square-green2_3").css("left", $(window).height() +  pos/8)
    $(".square-green11").css("top", $(window).height() +  pos/16)
    $(".square-green14").css("top", $(window).height() +  pos/2)
    $(".square-green17").css("top", $(window).height() +  pos/2)
    $(".square-green4").css("left", $(window).height() +  pos/10)
    $(".conclusion").css("top", $(window).height() +  pos/2)
    
   

});


var el2 = document.getElementById('d');
var ctx2 = el2.getContext('2d');
var isDrawing2;

el2.onmousedown = function(e) {
  isDrawing2 = true;
  ctx2.lineWidth = 90;
ctx2.strokeStyle="white";
  ctx2.lineJoin = ctx2.lineCap = 'round';
  ctx2.moveTo(e.offsetX, e.offsetY);
};
el2.onmousemove = function(e) {
  if (isDrawing2) {
    ctx2.lineTo(e.offsetX, e.offsetY);
    ctx2.stroke();
  }
};
el2.onmouseup = function() {
  isDrawing2 = false;
};





/*var controller = new ScrollMagic.Controller();

$(function () { 
		var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 300})
						.setPin("#pin1")
						.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
						.addTo(controller);
	});*/