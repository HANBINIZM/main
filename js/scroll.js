//이미지 페이드인아웃

var now = 0;
var imgs = 2;
start();

function start(){
    $(".fade>a").eq(0).siblings().css({"opacity":"0"});
function fade(){
        now=now==imgs?0:now+=1
    $(".fade>a").eq(now).css({"opacity":"1"});
    $(".fade>a").eq(now-1).css({"opacity":"0"});};
setInterval(function(){fade();},3000);
};

var nows = 0;
var imgz = 2;
end();

function end(){
    $(".slide>a").eq(0).siblings().animate({width:"-950px"});
setInterval(function(){
    nows=nows==imgs?0:imgz+=1;
    $(".slide>a").eq(now-1).animate({width:"-900px"});
    $(".slide>a").eq(now).animate({width:"950px"});}
,3000);};