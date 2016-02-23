/**
 * Created by Sunrin on 2016. 2. 16..
 */
function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto';  // firefox, chrome
    document.body.scroll = "yes"; // ie only
}

function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
}
$(document).ready(function(){
    $('.loginDialogCloseButton').click(function(){
        $('#loginDialog-wrapper').hide();
    });
    $('.registerDialogCloseButton').click(function(){
        $('#registerTerms-wrapper').hide();
    });
    $('#loginDialog-wrapper').hide();
    $(document).click(function(){
       var scrollConfig = document.getElementsByClassName("backgroundDialog-wrapper");
       var count=0;
       for(var i=0;i<scrollConfig.length;i++){
           if(scrollConfig[i].style.display=="none"){
               count+=1;
           }
       }
       if(count==scrollConfig.length){
           reloadScrollBars();
       }else{
           unloadScrollBars();
       }
    });
    $(document).click();
});
