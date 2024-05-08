$(document).ready(function () {
    $(window).scroll(function () {

        //scroll // offset
        let scrollTop = $(this).scrollTop();
        let windowHeight = $(this).height();
        console.log(windowHeight);
        $(".box").each(function () {
            let boxOffset = $(this).offset().top;
            if (scrollTop + windowHeight > boxOffset + 100) {
                $(this).addClass("active");

            } else {
                $(this).removeClass("active");
            }
        });
    });
});