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
function SetLanguageButton(){
    $('.registerLanguageForm span').mouseenter(function(){
        tempLanguage=$(this).text();
        $(this).text('삭 제');
    });
    $('.registerLanguageForm span').mouseleave(function(){
        if(tempLanguage!=null) {
            $(this).text(tempLanguage);
            tempLanguage = null;
        }
    });
    $('.registerLanguageForm span').click(function(){
        $(this).remove();
    });
};
var languageLabel=['한국어','English','日本語','中文','Español','català','اللغة العربية الفصحى','Русский язык','Dutch','français','Deutsch','čeština','Svenska','suomi','Türkçe','português','Polski','Italiano','dansk','norsk','Bahasa Indonesia'];
var languageShort=['KOR','ENG','JAP','CHI','ESP','CAT','ARA','RUS','DUT','FRA','DEU','CZE','SVE','FIN','TUR','POR','POL','ITA','DAN','NOR','IND'];
var selectedLanguage=0;
var registerLanguageForms = [];
var tempLanguage=null;
$(document).ready(function(){
    $('.loginDialogCloseButton').click(function(){
        $('#loginDialog-wrapper').hide();
    });
    $('.registerDialogCloseButton').click(function(){
        $('#registerTerms-wrapper').hide();
    });
    $('.registerEmailDialogCloseButton').click(function(){
        $('#registerEmailDialog-wrapper').hide();
    });
    $('.registerInformationCloseButton').click(function(){
        $('#registerInformation-wrapper').hide();
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
    for(var year=2016;1885<year;year--){
        $('#yearsDropdown').append('<option value="'+year+'">'+year+'</option>');
    }
    for(var month=1;month<=12;month++){
        $('#MonthDropdown').append('<option value="'+month+'">'+month+'</option>');
    }
    for(var day=1;day<=31;day++){
        $('#DayDropdown').append('<option value="'+day+'">'+day+'</option>');
    }
    $('select').material_select();
    $('.languageLevelDialog').hide();
    $('#languageDropdown li a').click(function(){
        if($('.languageLevelDialog').css('display')!='none') {
            selectedLanguage=0;
            return false;
        }
        selectedLanguage=parseInt($(this).attr('language-code'))-1;
        var TempSelectLanguage=languageShort[selectedLanguage];
        var languageArray=$('.registerLanguageForm span').toArray();
        if(0<languageArray.length) {
            for (var i = 0; i < languageArray.length; i++) {
                if (languageArray[i].innerHTML.search(TempSelectLanguage) != -1) {
                    alert('중복된 언어입니다.');
                    return false;
                }
            }
        }
        $('.languageLevelDialog').show();
    });
    $('.levelMinus').click(function(){
        var level = parseInt($('.levelCount').text());
        if(1<level){
            level-=1;
        }
        $('.levelCount').text(level);
    });
    $('.levelPlus').click(function(){
        var level = parseInt($('.levelCount').text());
        if(level<3){
            level+=1;
        }
        $('.levelCount').text(level);
    });
    $('.levelConfirmCancleButton').click(function(){
        selectedLanguage=0;
        $('.levelCount').text('1');
       $('.languageLevelDialog').hide();
    });
    $('.material-tooltip').append('<div>1) Level 1: 더듬더듬 우리 단어로 대화해요.<br>2) Level 2: 문화에 대해 설명해드릴 수 있어요.<br>3) Level 3: 말씀 편하게 하세요.</div>');
    $('.levelConfirmSettingButton').click(function(){
        var dataLevel = $('.levelCount').text();
        var dataText = languageShort[selectedLanguage]+'·'+'LV'+dataLevel;
        $('.registerLanguageForm').prepend('<span>'+dataText+'</span>');
        $('.levelCount').text('1');
        SetLanguageButton();
        $('.languageLevelDialog').hide();
    });
});
