/**
 * Created by Astora on 2015-12-04.
 */
var backgroundNum = 2;
$(document).ready(setInterval(function () {
        $('.contentBox:first-child').css('background-image', 'url(/images/bg' + backgroundNum + '.jpg)');
        backgroundNum++;
        if(backgroundNum>6)backgroundNum=1;
    }, 10000)
);