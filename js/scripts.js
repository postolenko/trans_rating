$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // -------------------------

        $(".triangle-green").css({
                            "border-top": ( $(".green-box").outerHeight() / 2 ) + "px solid transparent",
                            "border-bottom": ( $(".green-box").outerHeight() / 2 ) + "px solid transparent"
                        });

    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });

    // ----------------------------------------

    $(".triangle-green").css({
                                "border-top": ( $(".green-box").outerHeight() / 2 ) + "px solid transparent",
                                "border-bottom": ( $(".green-box").outerHeight() / 2 ) + "px solid transparent"
                            });


});
