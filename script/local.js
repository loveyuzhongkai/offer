//绑定事件
$(function () {

    //-------------鼠标移入banner
    autoPlay();
    $(".banner .img_btn li").mouseover(function () {
        clearInterval(timer);
        var index = $(this).index();
        $(this).addClass("hover").siblings().removeClass("hover");
        $(".banner .img").eq(index).fadeIn(100).siblings(".img").fadeOut(100);
    }).mouseout(function () {
        setInterval(autoPlay());
    });
    //-------------回车键事件
    document.onkeydown = function(event_e){
        if(window.event)
            event_e = window.event;
            var int_keycode = event_e.charCode||event_e.keyCode;
            if(int_keycode ==13){
                $('.loader').show();
                $('.opacity_bg').show();
                var v = $(".search").val();
                var url= "search.html"+"?"+"c="+v;
                setTimeout(function () {
                    location.href = encodeURI(url);
                },3000);
        }
    }

    //-------------屏幕滚动事件
    $(window).scroll(function () {
      var m = $(document).scrollTop();
        //document.title = m;
        if(m>300){
            $(".nav").fadeIn(500);
        }else{
            $(".nav").fadeOut(500);
        }
        if(m>800){
            $(".back_top").fadeIn(300);
        }else{
            $(".back_top").fadeOut(800);
        }
    })

    //-------------logo点击事件
    $(document).on("click",".nav_left", function () {
        location.href = "offer.html";
    });
    //-------------返回顶部事件
    $(document).on("click",".back_top", function () {
        $("html,body").animate({"scrollTop": 0}, 400);
    })
})
