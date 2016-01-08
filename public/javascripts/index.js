/**
 * Created by Astora on 2015-12-04.
 */
var backgroundNum = 2;
var firstToggle=false;
var secondToggle=false;
$(document).ready(setInterval(function () {
        $('#contentHomeBox').css('background-image', 'url(/images/bg' + backgroundNum + '.png)');
        backgroundNum++;
        if (backgroundNum > 7)backgroundNum = 1;
    }, 3000)
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
    $('.searchNav').hide();
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
    $('.submitBubble').hide();
    $('ul.tabs').tabs();
    $('.tabs li a').click(function(){
        console.log($('.indicator').css('left'))
        if($('.indicator').css('left')=='0px'){
            $('.indicator').css('background','rgba(242, 147, 26, 1)','!important')
            console.log($('.indecator').css('background'))
        }else{
            $('.indicator').css('background','rgba(25, 189, 196, 1)','!important')
            console.log($('.indecator').css('background'))
        }
    })
    $('.tabs li a').click()
    $('.searchInputBox i').hide();
    $('.searchInputBox input').focus(function(){
        $('.searchInputBox i').fadeIn()
        $('.submitBubble').show()
        $("nav").css('background','rgba(0,0,0,0.6)','!important')
        $('#map').css('z-index',200);
        $('.searchPlace').css('z-index',201).animate({top: '80vh'},'slow');
    });
    $('.searchInputBox input').blur(function(){
        $('.searchInputBox i').fadeOut()
        if($('.searchInputBox input').val()==''){
            $("nav").css('background','none','!important')
            $('#map').css('z-index',-10);
            $('.submitBubble').hide();
            $('.searchPlace').css('z-index',201).animate({top: '60vh'},'slow');
        }
    })
});