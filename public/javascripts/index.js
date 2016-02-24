/**
 * Created by Astora on 2015-12-04.
 */

$(document).ready(function () {
    $('.HowToContentBox').slideToggle();
    $('.brand-logo img').attr('src','/images/logo_white.png');
    $('nav').css('color', '#ffffff');
    $('nav .nav_button').css({'color': '#ffffff','border':'solid 1px #ffffff'});
    $('.HowToContentBox').css('position','absolute');
    $('.searchNav').hide();
    $('.submitBubble').hide();
    $('ul.tabs').tabs();
    $('.tabs li a').click(function(){
        if($(this).parent().index()==2){
            $('.indicator').css('background','rgba(223, 98, 37, 1)','!important')
            console.log($('.indecator').css('background'))
        }else if($(this).parent().index()==0){
            $('.indicator').css('background','rgba(25, 189, 196, 1)','!important')
            console.log($('.indecator').css('background'))
        }else{
            $('.indicator').css('background','rgba(242, 147, 26, 1)','!important')
            console.log($('.indecator').css('background'))
        }
    })
    $('.tabs li a').click()
    $('.searchInputBox input').focus(function(){
        $('nav').css('box-shadow','0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)');
        $('.submitBubble').show()
        $("nav").css('background','rgba(255,255,255,1)','!important')
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
            $('.submitBubble').hide();
            $('.searchPlace').css('z-index',201).animate({top: '60vh'},'slow');
        }
    })
});