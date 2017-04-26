$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // ----------------------------------------------

    var ratingBoxCount = $(".rating-box").length - 1;
    var ratingBoxIndex;

    // ----------------------------------------------

    var choiseListCount =  $(".choise-list").length;
    var choiseListIndex = 0;
    var choiseLinkCount;
    var choiseLinkIndex;

    // -----------------------------------------------

    getTriangleSize();

    getBodyPadding();

    getResponsiveNavHeight();


    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // -------------------------

        getTriangleSize();

        getBodyPadding();

        getResponsiveNavHeight();

        getLinkTriangleSize();

    });

    $(document).scroll(function() {
        
        getResponsiveNavHeight();

    });


    $(function() {

        setTimeout(function() {

            $(".wrapper").css({"min-height" : $(window).height() + "px"});

            $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        }, 500);

    });

    // ----------------------------------------

    $(function() {

        // var choiseListCount =  $(".choise-list").length;

        // var choiseListIndex = 0;

        // var choiseLinkCount;

        // var choiseLinkIndex;

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

    $(function() {

        $(this).keydown(function(eventObject){
            if (eventObject.which == 27) {
                
                $(".popup-block").fadeOut(300);
                $(".popup-block .popup").fadeOut(300);

             }
        });

    });

    // ------------------------------------------

    $(function() {

        $(".upload-file").click(function() {

            var uploadFileAttr = $(this).attr("data-file-index");

            $("input[id = upload_file_" + uploadFileAttr +"]").click();

        });

    });

    // ------------------------------------------

    $(function() {

        $(".tab-link").click(function() {

            var tabLinkParent = $(this).parent($(".tabs-links"));

            var indexTabsSection =  tabLinkParent.index(".tabs-links");

            console.log(indexTabsSection);

            if( $(this).hasClass("active") ) {

                return false;

            } else {

                $(".tabs-links:eq("+ indexTabsSection +") .tab-link").removeClass("active");

                $(this).addClass("active");

            }

        });

    });

    // ----------------------------------------

    $(function() {

        $(".resp-btn").click(function() {

            if( $(".resp-nav").is(":hidden") ) {

                $(this).addClass("active");

                $(".resp-nav").fadeIn(300);

                getResponsiveNavHeight();

            } else {

                $(this).removeClass("active");

                $(".resp-nav").fadeOut(300);

            }

        });       

    });

    // ----------------------------------------

    function getTriangleSize() {

        for(ratingBoxIndex = 0; ratingBoxIndex <= ratingBoxCount; ratingBoxIndex++) {

            $(".rating-box:eq("+ ratingBoxIndex +") .triangle-green").css({
                                    "border-top": ( $(".rating-box:eq("+ ratingBoxIndex +")").outerHeight() / 2 ) + "px solid transparent",
                                    "border-bottom": ( $(".rating-box:eq("+ ratingBoxIndex +")").outerHeight() / 2 ) + "px solid transparent"
                                });

        }

    }

    function getBodyPadding() {

        if(bodyWidth <= 768) {

            $("body").css({
                "padding-top" : $(".header .top-row").height() + "px"
            });

        } else {

            $("body").css({
                "padding-top" : "0px"
            });

        }

    }

    function getResponsiveNavHeight() {

        if(bodyWidth <= 768) {

            $(".resp-nav").css({
                "top" : $(".header .top-row").height() + "px",
                "height" : $(window).height() - $(".header .top-row").height() + "px"
            });

        }

    }

    function getLinkTriangleSize() {

        for ( choiseListIndex = 0; choiseListIndex < choiseListCount; choiseListIndex++ ) {

            choiseLinkCount = $(".choise-list:eq("+ choiseListIndex +") li").length;

            for( choiseLinkIndex = 0; choiseLinkIndex < choiseLinkCount; choiseLinkIndex++) {

                $(".choise-list:eq("+ choiseListIndex +") li a:eq("+ choiseLinkIndex +") .link-triangle").css({
                    "border-top": ( $(".choise-list:eq("+ choiseListIndex +") li:eq("+ choiseLinkIndex +")").height() / 2 ) + "px solid transparent",
                    "border-bottom": ( $(".choise-list:eq("+ choiseListIndex +") li:eq("+ choiseLinkIndex +")").height() / 2 ) + "px solid transparent"
                });

            }

        }

    }



});
