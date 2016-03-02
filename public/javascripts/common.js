/**
 * Created by Sunrin on 2016. 2. 17..
 */
$(document).ready(function(){
	$('.moreLink-Item a').mouseenter(function(){
	    var path=$(this).children().attr('src').replace('Link','LinkActive');
	    $(this).children().attr('src',path);
	});
	$('.moreLink-Item a').mouseleave(function(){
	    var path=$(this).children().attr('src').replace('LinkActive','Link');
	    $(this).children().attr('src',path);
	});
	$('select').material_select();
	$('ul.tabs').tabs();

	if ((navigator.userAgent.match(/iPhone/)) ) {
		$('head').append('<link rel="stylesheet" type="text/css" href="/stylesheets/Iphone.css">');
	}

});
/**
 * Created by Sunrin on 2016. 2. 17..
 */
$(document).ready(function() {
    $('.moreLink-Item a').mouseenter(function () {
        var path = $(this).children().attr('src').replace('Link', 'LinkActive');
        $(this).children().attr('src', path);
    });
    $('.moreLink-Item a').mouseleave(function () {
        var path = $(this).children().attr('src').replace('LinkActive', 'Link');
        $(this).children().attr('src', path);
    });
    if ((navigator.userAgent.match(/iPhone/)) ) {
		$('head').append('<link rel="stylesheet" type="text/css" href="/stylesheets/Iphone.css">');
	}
    $('ul.tabs').tabs();
    $('.cultureEditBox').hide();
    $('select').material_select();
    for(var i=0; i<12;i++){
        console.log('d');
        var randMax = 1;
        if(i%6<3){
            randMax++;
        }
        var rand = parseInt(Math.random()*randMax)+1;
        $('.randBg .container:eq('+i+')').css('background-image','url(/images/place'+((i%6)+1)+'/'+rand+'.png)');
    }
});
function makeQuery(){
    var query = '?lat='+$('#realValue').attr('lat')+'&lng='+$('#realValue').attr('lng');
    $('#goSuggestions').attr('href',$('#goSuggestions').attr('href')+query);
    $('#goAskings').attr('href',$('#goSuggestions').attr('href')+query);
}