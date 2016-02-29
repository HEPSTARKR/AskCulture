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
});