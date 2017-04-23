$(document).ready(function() {


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

        setTimeout(function() {

            $(".wrapper").css({"min-height" : $(window).height() + "px"});

            $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        }, 500);

    });

    // ----------------------------------------

    $(".triangle-green").css({
                                "border-top": ( $(".green-box").outerHeight() / 2 ) + "px solid transparent",
                                "border-bottom": ( $(".green-box").outerHeight() / 2 ) + "px solid transparent"
                            });


    // ----------------------------------------

    var choiseListCount =  $(".choise-list").length;

    var choiseListIndex = 0;

    var choiseLinkCount;

    var choiseLinkIndex;

    for ( choiseListIndex = 0; choiseListIndex < choiseListCount; choiseListIndex++ ) {

        choiseLinkCount = $(".choise-list:eq("+ choiseListIndex +") li").length;

        for( choiseLinkIndex = 0; choiseLinkIndex < choiseLinkCount; choiseLinkIndex++) {

            $(".choise-list:eq("+ choiseListIndex +") li a:eq("+ choiseLinkIndex +")").append("<span class='link-triangle'></span>");

            $(".choise-list:eq("+ choiseListIndex +") li a:eq("+ choiseLinkIndex +") .link-triangle").css({
                "border-top": ( $(".choise-list:eq("+ choiseListIndex +") li:eq("+ choiseLinkIndex +")").height() / 2 ) + "px solid transparent",
                "border-bottom": ( $(".choise-list:eq("+ choiseListIndex +") li:eq("+ choiseLinkIndex +")").height() / 2 ) + "px solid transparent"
            });

        }

    }

    // ----------------------------------------

    $(function() {

        var popupName;

        $(".show_popup").click(function(clickEvent) {

            clickEvent.preventDefault();

            popupName = $(this).attr("data-popup-name");

            $(".popup-block").fadeIn(300);

            $(".popup-block .popup[data-popup-name = " + popupName + "]").fadeIn(300);

        });

        $(".popup-bg, .close-popup").click(function() {

            $(".popup-block").fadeOut(300);

            $(".popup-block .popup[data-popup-name = " + popupName + "]").fadeOut(300);

        });

    });

    // ------------------------------------------

    $(function() {

        $(this).keydown(function(eventObject){
            if (eventObject.which == 27) {
                
                $(".popup-block").fadeOut(300);
                $(".popup-block .popup").fadeOut(300);

             }
        });

    });



});
