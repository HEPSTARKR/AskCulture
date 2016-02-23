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
    $('.rightPassword').hide();
    $('.wrongPassword').hide();
    $('#password').keyup(function(){
       var password = $('#password').val();
       if(6 <= password.length && /[a-z]/.test(password) && /[0-9]/.test(password)){
           $('#checkDone').show();
           $('#checkFail').hide();
       }else{
           $('#checkDone').hide();
           $('#checkFail').show();
       }
    });
    $('#password').keyup();
    $('#passwordConfirm').keyup(function(){
        var password = $('#password').val();
        var passwordConfirm = $('#passwordConfirm').val();
        if(password==passwordConfirm){
            $('.rightPassword').show();
            $('.wrongPassword').hide();
        }else{
            $('.rightPassword').hide();
            $('.wrongPassword').show();
        }
    });
});
