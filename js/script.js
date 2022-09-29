// JavaScript Document
/*
//메뉴
$(".navi li").mouseover(function( ){        
    $(".submenu").stop( ).slideDown( );    
});

$(".navi li").mouseleave(function( ){
    $(".submenu").stop().slideUp( );
});   
*/

//한빈
//메뉴
$(".navi li").mouseover(function( ){
    $(".submenu").stop( ).slideDown( );
});

$(".navi li").mouseleave(function( ){
    $(".submenu").stop( ).slideUp( );
});



//이미지슬라이드
var imgs=2;
var now=0;
Start();
function Start(){
$("#imgslide>a").eq(0).siblings().animate({height:"-350px"});

setInterval(function(){
    now = now==imgs?0:now+=1;
    $("#imgslide>a").eq(now-1).animate({height:"-350px"});
    $("#imgslide>a").eq(now).animate({height:"350px"});},3000);
}


/*
//이미지슬라이딩
var imgs=2;
var now=0;
start();
function start( ){
$("#imgslide>a").eq(0).siblings( ).animate({height:"-350px"});

setInterval(function( ){
now = now==imgs?0:now+=1;
$("#imgslide>a").eq(now-1).animate({height:"-350px"});   
$("#imgslide>a").eq(now).animate({height:"350px"});},3000); 
}
*/