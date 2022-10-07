//자바 스크립트.
//문제2. GREEN 복재재단

//메뉴 슬라이드
$(".menu li").mouseover(function(){
    $(".sub").stop().slideDown()
    });
$(".menu li").mouseleave(function(){
    $(".sub").stop().slideUp()
    });

//이미지 슬라이드
var imgs = 2;
var now = 0;
start();
function start(){
    $("#slide>a").eq(0).siblings().animate({width:"-1250px"});
    setInterval(function(){
        now = now==imgs?0:now+=1;
    $("#slide>a").eq(now-1).animate({width:"-1250px"});
    $("#slide>a").eq(now).animate({width:"1250px"});},3000);}


//레이어 팝업

$(".cc").click(function(){
    $(".modal").show();});
$(".button button").click(function(){
    $(".modal").hide();});    
/*
var imgs=2;
var now=0;

Start();
function Start(){
$("#slide>a").eq(0).siblings().animate({height:"-350px"});

setInterval(function(){
    now = now==imgs?0:now+=1;
    $("#slide>a").eq(now-1).animate({height:"-350px"});
    $("#slide>a").eq(now).animate({height:"350px"});},3000);
}
*/
//
