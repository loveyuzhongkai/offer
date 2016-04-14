
//banner自动播放函数
var index = 0;
var timer =  null;
function autoPlay(){
    timer = setInterval(function(){
        index++;
        if(index<4){
            if(index == 3){
                index = -1;
            }
            $(".banner .img").eq(index).fadeIn(1000).siblings(".img").fadeOut(1000);
            $(".banner li").eq(index).addClass("hover").siblings().removeClass("hover");
        }
    },3000);
}