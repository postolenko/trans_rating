$(document).ready(function() {

    
    var footerPosition;


    $(window).resize(function() {


        // footerPosition = setTimeout(function() {

        setTimeout(function() {
            // clearTimeout(footerPosition);

            $(".wrapper").css({"min-height" : $(window).height() + "px"});

            $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        }, 300);

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

        }, 300);

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


});
