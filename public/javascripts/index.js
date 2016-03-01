/**
 * Created by Astora on 2015-12-04.
 */
//var backgroundNum = 2;
//var firstToggle=false;
//var secondToggle=false;
//$(document).ready(setInterval(function () {
//        $('#contentHomeBox').css('background-image', 'url(/images/bg' + backgroundNum + '.png)');
//        backgroundNum++;
//        if (backgroundNum > 7)backgroundNum = 1;
//    }, 3000)
//);
$(document).ready(function () {
    $('.HowToContentBox').slideToggle();
    $('.brand-logo img').attr('src','/images/logo_white.png');
    $('nav').css('color', '#ffffff');
    $('nav .nav_button').css({'color': '#ffffff','border':'solid 1px #ffffff'});
    $('.HowToContentBox').css('position','absolute');
    $('.searchNav').hide();
    $('.submitBubble').hide();

    $("nav").css('background','none','!important');
    $('nav').css('box-shadow','none');
    $('nav').css('box-shadow','none');
    $('.brand-logo img').attr('src', '/images/logo_white.png');
    $('.nav-wrapper .material-icons').css('color','#fff');
    var fullWidth = $(window).width();

    $('.searchInputBox input').focus(function(){
        $('nav').css('box-shadow','0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)');
        $('.submitBubble').show()
        $("nav").css('background','rgba(255,255,255,1)','!important');
        $('#map').css('z-index',200);
        $('.brand-logo img').attr('src','/images/logo.png');
        $('nav').css('color', '#ff9800');
        $('nav .nav_button').css({'color': '#ff9800','border':'solid 1px #ff9800'});
        $('.searchPlace').css('z-index',201).animate({top: '80vh'},'slow');
    });
    $('.searchInputBox input').blur(function(){
        if($('.searchInputBox input').val()==''){
            $("nav").css('background','none','!important')
            $('#map').css('z-index',-10);
            $('nav').css('box-shadow','none')
            $('.brand-logo img').attr('src','/images/logo_white.png');
            $('nav').css('color', '#ffffff');
            $('nav .nav_button').css({'color': '#ffffff','border':'solid 1px #ffffff'});
            $('.nav-wrapper .material-icons').css('color','#ff9800');     
            $('.submitBubble').hide();
            $('.searchPlace').css('z-index',201).animate({top: '60vh'},'slow');
        }
    })
    $('.indicator').css('background','#19bdc4');

    if(fullWidth < 1000)
    {
        $('.indicator').hide();
        $('#ToBeAVisitor').click();
        $(window).scroll(function(){
            var currentScroll = $(window).scrollTop();
            if(currentScroll > 0)
            {
                $('nav').css('box-shadow','0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)');
                $("nav").css('background','rgba(255,255,255,1)','!important');
                $('nav').css('color', '#ff9800');
                $('.brand-logo img').attr('src', '/images/logo.png');
                $('.nav-wrapper .material-icons').css('color','#ff9800');
            }
            else
            {
                $("nav").css('background','none','!important');
                $('nav').css('box-shadow','none');
                $('nav').css('box-shadow','none');
                $('.brand-logo img').attr('src', '/images/logo_white.png');
                $('.nav-wrapper .material-icons').css('color','#fff');
            }
        })
        $('.tabs li a').click(function(){
            if($(this).parent().index()==2){
                $('#ToBeMypage').css('display','block');
                var $pointerMypage = $('.pointerMypage span');
                var flipsnapMypage = Flipsnap('.FlipsnapMypage');
                flipsnapMypage.element.addEventListener('fspointmove', function() {
                $pointerMypage.filter('.current').removeClass('current');
                $pointerMypage.eq(flipsnapMypage.currentPoint).addClass('current');
                }, false);
                $('.indicator').css('background','rgba(223, 98, 37, 1)','!important');
            }else if($(this).parent().index()==0){
                $('#ToBeAVisitor').css('display','block');
                var $pointerVisitor = $('.pointerAVisitor span');
                var flipsnapVisitor = Flipsnap('.FlipsnapAVisitor');
                flipsnapVisitor.element.addEventListener('fspointmove', function() {
                $pointerVisitor.filter('.current').removeClass('current');
                $pointerVisitor.eq(flipsnapVisitor.currentPoint).addClass('current');
                }, false);
                $('.indicator').css('background','rgba(25, 189, 196, 1)','!important');
            }else{
                $('#ToBeALocal').css('display','block');
                var $pointerLocal = $('.pointerALocal span');
                var flipsnapLocal = Flipsnap('.FlipsnapALocal');
                flipsnapLocal.element.addEventListener('fspointmove', function() {
                $pointerLocal.filter('.current').removeClass('current');
                $pointerLocal.eq(flipsnapLocal.currentPoint).addClass('current');
                }, false);
                $('.indicator').css('background','rgba(242, 147, 26, 1)','!important');
            }
        });
        $('.tabs li:eq(0) a').click();
    }
    else
    {
        $('.tabs li a').click(function(){
            if($(this).parent().index()==2){
                $('#ToBeMypage').css('display','block');
                $('.indicator').css('background','rgba(223, 98, 37, 1)','!important');
            }else if($(this).parent().index()==0){
                $('#ToBeAVisitor').css('display','block');
                $('.indicator').css('background','rgba(25, 189, 196, 1)','!important');
            }else{
                $('#ToBeALocal').css('display','block');
                $('.indicator').css('background','rgba(242, 147, 26, 1)','!important');
            }
        });
    }
    $('.tabs li:eq(0) a').click();

    /* MOBILE READY CODE */
    (window).scroll(function(){
        window.scrollTop(0,0);
    });
    /* END */
});

