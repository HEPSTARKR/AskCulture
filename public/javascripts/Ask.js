/**
 * Created by Sunrin on 2016. 1. 8..
 */
var ImageArray;
var currentAnchor=0;
$(document).ready(function(){
    $('ul.tabs').tabs();
    $('select').material_select();
    $('video').mouseenter(function(){
        document.getElementsByTagName("video")[0].play();
    });
    $('video').mouseleave(function(){
        document.getElementsByTagName("video")[0].pause();
    });
    $('.navImgBefore').click(function(){
       if(currentAnchor==0) return;
        console.log(currentAnchor);
       $('.SuggestImage img').attr('src',URL.createObjectURL(ImageArray[--currentAnchor]));
    });
    $('.navImgNext').click(function(){
       if(currentAnchor==ImageArray.length-1) return;
        console.log(currentAnchor);
       $('.SuggestImage img').attr('src',URL.createObjectURL(ImageArray[++currentAnchor]));
    });
});
OnChangeImages = function(event){
    for(var i=0;i<5;i++){
        console.log(URL.createObjectURL(event.target.files[i]));
        if(i>event.target.files.length){
            document.getElementsByClassName('ImagePreView')[i].style.background='none';
            continue;
        }
        document.getElementsByClassName('ImagePreView')[i].style.background='url('+URL.createObjectURL(event.target.files[i])+')';
    }
    ImageArray= event.target.files;
    currentAnchor=0;
    $('.SuggestImage img').attr('src',URL.createObjectURL(ImageArray[0]));
};
OnIndexClicked = function(number){
    currentAnchor= number;
    $('.SuggestImage img').attr('src',URL.createObjectURL(ImageArray[currentAnchor]));
};


function disableselect(e){
        return false
}

function reEnable(){
    return true
}

if (typeof document.onselectstart!="undefined")
    document.onselectstart=new Function ("return false")
else{
    document.onmousedown=disableselect
    document.onmouseup=reEnable
}