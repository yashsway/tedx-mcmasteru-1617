$(document).ready(function () {
    $("#typing").typed({
        strings: ["Discovery.", "Creativity.", "Optimism.", "TEDx McMaster U"],
        typeSpeed: 50,
        backSpeed: 10,
        loop: false,
        backDelay: 1500,
        showCursor: true
    });
    //file:///users/yash/Documents/Coding/Work/TedX/staticTeaser/assets/particles.json
    particlesJS.load('particles-js', 'assets/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });
    //cache some jQuery objects
    var transitionLayer = $('.transition-layer'),
        transitionBackground = transitionLayer.children();
    var frameProportion = 1.78, //png frame aspect ratio
        frames = 25, //number of png frames
        resize = false;
    //set transitionBackground dimentions
    setLayerDimensions();
    $(window).on('resize', function () {
        if (!resize) {
            resize = true;
            (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300): window.requestAnimationFrame(setLayerDimensions);
        }
    });

    //opening transition splash
    $("#reveal").on('click', function (event) {
        event.preventDefault();
        $("#reveal").css("opacity", "0");
        transitionLayer.addClass('visible opening');
        var delay = ($('.no-cssanimations').length > 0) ? 0 : 600;
        setTimeout(function () {
            transitionLayer.addClass('closing');
            transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                transitionLayer.removeClass('closing opening visible');
                transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
            });
            $(".landing-page").css("visibility","hidden");
            $(".sponsors-page").css('visibility','visible');
            $("#reveal").css("visibility", "hidden");
        }, 600);
    });

    //closing transition splash
    $('.sponsors-page').on('click', '.modal-close', function (event) {
        event.preventDefault();
        $("#reveal").css("visibility", "visible");

        transitionLayer.addClass('visible opening');
        setTimeout(function () {
            transitionLayer.addClass('closing');
            transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                transitionLayer.removeClass('closing opening visible');
                transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
            });
            $(".landing-page").css("visibility","visible");
            $('.sponsors-page').css("visibility", "hidden");
            $("#reveal").css("opacity", "1");
        }, 600);
    });

    function setLayerDimensions() {
        var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            layerHeight, layerWidth;

        if (windowWidth / windowHeight > frameProportion) {
            layerWidth = windowWidth;
            layerHeight = layerWidth / frameProportion;
        } else {
            layerHeight = windowHeight * 1.2;
            layerWidth = layerHeight * frameProportion;
        }

        transitionBackground.css({
            'width': layerWidth * frames + 'px',
            'height': layerHeight + 'px',
        });

        resize = false;
    }
});
