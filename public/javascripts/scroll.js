$('#ToBeMypage').scroll(function(){
    alert('scroll!');
    $('html, body').stop().animate({ scrollTop : '+=300' }, 1000, 'easeOutElastic');
})
