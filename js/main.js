$(document).ready(function() {
    $(".hire-me").click(function() {
        return $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500), !1
    });
    
            $("ul.nav-pills li a").click(function() {
        $("ul.nav-pills li.active").removeClass("active")
                , $(this).parent("li").addClass("active")
    }),
            $(window).load(function() {
        var e = $(".grid-wrapper");

        e.isotope({
            filter: "*",
            animationOptions: {
                duration: 750, easing: "linear"
                , queue: !1
            }
        }),
        $(".grid-controls li a").click(function() {
            $(".grid-controls .current").removeClass("current"),
                    $(this).addClass("current");

            var i = $(this).attr("data-filter");

            return e.isotope({
                filter: i, animationOptions: {
                    duration: 750, easing: "linear", queue: !1}
            }), !1
        })
    }),
            $(".grid-wrapper").magnificPopup({
        delegate: "a",
        type: "image", gallery: {
            enabled: !0
        }
    }),
    $(".navbar").sticky({
        topSpacing: 0
    }),
    $("#main-menu").onePageNav({
        currentClass: "active",
        changeHash: !1,
        scrollThreshold: .5,
        scrollSpeed: 750,
        filter: "",
        easing: "swing"
    }),
    $(".chart").waypoint(function() {
        $(this).easyPieChart({barColor: "#3498db", size: "150", easing: "easeOutBounce", onStep: function(e, i, a) {
                $(this.el).find(".percent").text(Math.round(a))
            }
        })
    }, {
        triggerOnce: !0,
        offset: "bottom-in-view"
    });
    
    $.vegas("slideshow", {
        backgrounds: [{src: "img/slider/01.jpg", fade: 1e3}
            , {src: "img/slider/02.jpg", fade: 1e3}
            , {src: "img/slider/03.jpg", fade: 1e3}
            , {src: "img/slider/04.jpg", fade: 1e3}]
    })("overlay", {src: "img/overlays/16.png"});
    
    $("#vegas-next").click(function() {
        $.vegas("next")
    }
    ),
    $("#vegas-prev").click(function() {
        $.vegas("previous")
    }
    ), $("#contact-form").validate({
        rules: {name: {minlength: 2, required: !0}
                , email: {required: !0, email: !0}
                , message: {minlength: 2, required: !0}
        }
        , highlight: function(e) {
            $(e).closest(".control-group").removeClass("success").addClass("error")
        }
        , success: function(e) {
            e.text("OK!").addClass("valid").closest(".control-group").removeClass("error").addClass("success")
        }
    })
});
