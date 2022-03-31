$(window).scroll(function(){
    if($(this).scrollTop()> 150)
    {
        $(".bg-light").addClass("sticky1")
        $(".logo").addClass("mlogo")


    }
    else{
        $(".bg-light").removeClass("sticky1")
        $(".logo").removeClass("mlogo")


    }
})