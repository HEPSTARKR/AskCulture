/**
 * Created by Astora on 2015-12-04.
 */
var backgroundNum = 2;
var firstToggle=false;
var secondToggle=false;
$(document).ready(setInterval(function () {
        $('#contentHomeBox').css('background-image', 'url(/images/bg' + backgroundNum + '.jpg)');
        backgroundNum++;
        if (backgroundNum > 6)backgroundNum = 1;
    }, 10000)
);
$(document).ready(function () {
    $('.HowToContentBox').slideToggle();
    $('.HowToContentBox').css('position','absolute');
    $('.VisitorContentBox').css('left','-100vw');
    $('.LocalContentBox').css('left','100vw');
    $('.VisitorButton').click(function () {
        if(!firstToggle) {
            $('.HowToVisitor').animate({paddingBottom: '30%'});
            $('.VisitorContentBox').slideToggle().animate({left: '0px'});

        }else{
            $('.HowToVisitor').animate({paddingBottom: '0%'})
            $('.VisitorContentBox').slideToggle().animate({left: '-100vw'});

        }
        firstToggle=!firstToggle;
    });
    $('.LocalButton').click(function () {
        if(!secondToggle){
            $('.HowToLocal').animate({paddingBottom: '30%'});
            $('.LocalContentBox').slideToggle().animate({left: '0px'});
        }else{
            $('.HowToLocal').animate({paddingBottom: '0%'})
            $('.LocalContentBox').slideToggle().animate({left: '100vw'});
        }
        secondToggle=!secondToggle;
    });
})
;