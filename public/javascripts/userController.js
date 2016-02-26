/**
 * Created by Sunrin on 2016. 2. 16..
 */

/** 스크롤 제어 함수 */
function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto';  // firefox, chrome
    document.body.scroll = "yes"; // ie only
}

function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
}
/** 스크롤 제어 함수 */


function SetLanguageButton(){ /** 언어 추가시 언어 객체 초기화 함수 */
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

/** 언어 코드와 그에 따른 언어 레이블 정의 */
var languageLabel=['한국어','English','日本語','中文','Español','català','اللغة العربية الفصحى','Русский язык','Dutch','français','Deutsch','čeština','Svenska','suomi','Türkçe','português','Polski','Italiano','dansk','norsk','Bahasa Indonesia'];
var languageShort=['KOR','ENG','JAP','CHI','ESP','CAT','ARA','RUS','DUT','FRA','DEU','CZE','SVE','FIN','TUR','POR','POL','ITA','DAN','NOR','IND'];
/** 언어 코드와 그에 따른 언어 레이블 정의 */

var selectedLanguage=0; //현재 선택된 언어
var registerLanguageForms = []; //최종적으로 폼으로 보낼 언어 객체들
var tempLanguage=null; //중복검사를 위해 현재 언어를 잠시 담을 부분
$(document).ready(function(){

    /** 다이얼로그 닫기 버튼에 리스너 추가 */
    $('.loginDialogCloseButton').click(function(){
        $('#loginDialog-wrapper').hide();
    });
    $('.registerDialogCloseButton').click(function(){
        $('#firstRequired').prop('checked',false);
        $('#secondRequired').prop('checked',false);
        $('#thirdRequired').prop('checked',false);
        $('#registerTerms-wrapper').hide();
    });
    $('.registerEmailDialogCloseButton').click(function(){
        $('#registerEmailDialog-wrapper').hide();
    });
    $('.registerInformationCloseButton').click(function(){
        $('#registerInformation-wrapper').hide();
    });
    /** 다이얼로그 닫기 버튼에 리스너 추가 */

    /** 다이얼로그를 닫혀진 상태로 시작하기 위한 부분 */
    $('#loginDialog-wrapper').hide();
    $('#registerTerms-wrapper').hide();
    $('#registerEmailDialog-wrapper').hide();
    $('#registerInformation-wrapper').hide();
    /** 다이얼로그를 닫혀진 상태로 시작하기 위한 부분 */

    /** 다이얼로그 상태에 따른 스크롤 제어*/
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
    $(document).click(); //스크롤 제어 초기화
    /** 다이얼로그 상태에 따른 스크롤 제어*/

    /** 비밀번호 라이브 체킹 및 정규식 */
    $('.rightPassword').hide();
    $('.wrongPassword').hide();
    $('#registerPassword').keyup(function(){
       var password = $('#registerPassword').val();
       if(6 <= password.length && /[a-z]/.test(password) && /[0-9]/.test(password)){
           $('#checkDone').show();
           $('#checkFail').hide();
       }else{
           $('#checkDone').hide();
           $('#checkFail').show();
       }
    });
    $('#registerPassword').keyup();
    $('#registerPasswordConfirm').keyup(function(){
        var password = $('#registerPassword').val();
        var passwordConfirm = $('#registerPasswordConfirm').val();
        if(password==passwordConfirm){
            $('.rightPassword').show();
            $('.wrongPassword').hide();
        }else{
            $('.rightPassword').hide();
            $('.wrongPassword').show();
        }
    });
    /** 비밀번호 라이브 체킹 및 정규식 */

    /** 생년월일 드롭다운 초기화 */
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
    /** 생년월일 드롭다운 초기화 */

    /** 단계별 언어능력 추가 시스템 */
    $('.languageLevelDialog').hide();
    $('#languageDropdown li a').click(function(){// 선택한 언어를 레벨 선택 스텝으로 넘기고 중복 검사를 한다
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
        $('.levelCount').mouseenter();
        var durationTooltip = 5000;
        var tempInterval = setInterval(intervalCallback,durationTooltip);
        function intervalCallback(){
            $('.levelCount').mouseleave();
            clearInterval(tempInterval);
        }
    });
    $('.levelMinus').click(function(){ //언어레벨 인터페이스
        var level = parseInt($('.levelCount').text());
        if(1<level){
            level-=1;
        }
        $('.levelCount').text(level);
    });
    $('.levelPlus').click(function(){ //언어레벨 인터페이스
        var level = parseInt($('.levelCount').text());
        if(level<3){
            level+=1;
        }
        $('.levelCount').text(level);
    });
    $('.levelConfirmCancleButton').click(function(){ //언어 선택 취소 리스너 및 초기화
        selectedLanguage=0;
        $('.levelCount').text('1');
       $('.languageLevelDialog').hide();
    });

    /** 커스텀 툴팁을 사용하기 위한 꼼수 구문 */
    $('.material-tooltip').append('<div>1) Level 1: 더듬더듬 우리 단어로 대화해요.<br>2) Level 2: 문화에 대해 설명해드릴 수 있어요.<br>3) Level 3: 말씀 편하게 하세요.</div>');
    /** 커스텀 툴팁을 사용하기 위한 꼼수 구문 */

    $('.levelConfirmSettingButton').click(function(){ //언어 선택 최종 적용
        var dataLevel = $('.levelCount').text();
        var dataText = languageShort[selectedLanguage]+'·'+'LV'+dataLevel;
        $('.registerLanguageForm').prepend('<span language-code="'+selectedLanguage+'" language-level="'+dataLevel+'">'+dataText+'</span>');
        $('.levelCount').text('1');
        SetLanguageButton();
        $('.languageLevelDialog').hide();
    });
    /** 단계별 언어능력 추가 시스템 */

    /** 비로그인 상태 처리 */
    $.post('/getuser',{},function(data){
        console.log(data);
    });
    $('.signedUserContent').hide();
    /** 비로그인 상태 처리 */

    $('.nav_registerButton').click(function(){
        $('#registerTerms-wrapper').show();
    });
    $('.SignUpLink').click(function(){
        $('#loginDialog-wrapper').hide();
        $('#registerTerms-wrapper').show();
    });
    $('.nav_loginButton').click(function(){
        $('#loginDialog-wrapper').show();
    });

    /** 약관 동의 체크 및 다이얼로그 전환 처리 */
    $('.nextRegisterStepButton').click(function(){
        var firstTermsGate = $('#firstRequired').is(':checked');
        var secondTermsGate = $('#secondRequired').is(':checked');
        var result = firstTermsGate&&secondTermsGate;
        if(!result){
            alert('필수 약관에 동의해야 합니다.');
            return;
        }
        $('#registerTerms-wrapper').hide();
        $('#registerEmailDialog-wrapper').show();
    });
    /** 약관 동의 체크 및 다이얼로그 전환 처리 */

    /** 애스크 컬쳐 회원가입 아이디 비밀번호 검사 및 다이얼로그 전환 처리 */
    $('.lastRegisterStepButton').click(function(){
        if($('#registerEmail').val()==''){
            alert('이메일을 입력해주세요.');
            return;
        }
        if($('#registerFirstName').val()==''){
            alert('First Name을 입력해주세요.');
            return;
        }
        if($('#registerLastName').val()==''){
            alert('Last Name을 입력해주세요.');
            return;
        }
        if($('#registerPassword').val()==''){
            alert('비밀번호를 입력해주세요.');
            return;
        }
        if($('#registerPasswordConfirm').val()==''){
            alert('비밀번호 확인을 입력해주세요.');
            return;
        }
        if($('#registerEmail').val().indexOf('@')==-1||$('#registerEmail').val().indexOf('.')==-1){
            alert('이메일 형식이 옳지않습니다.');
            return;
        }
        if($('#checkFail').css('display')!='none'){
            alert('비밀번호는 반드시 숫자와 영문자를 혼합하여 6자리 이상이여야 합니다');
            return;
        }
        if($('.wrongPassword').css('display')!='none'){
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        $('#registerEmailDialog').hide();
        $('#registerInformation-wrapper').show();
    });
    /** 애스크 컬쳐 회원가입 아이디 비밀번호 검사 및 다이얼로그 전환 처리 */

    /** 최종 회원가입 최종 전송 */
    $('.registerSubmitButton').click(function(){
        var formObject = new Object();
        formObject.noti = $('#thirdRequired').is(':checked').toString();
        formObject.email = $('#registerEmail').val();
        formObject.family = $('#registerLastName').val();
        formObject.first = $('#registerFirstName').val();
        var birthdayYear = $('#yearsDropdown').val();
        var birthdayMonth = $('#MonthDropdown').val();
        var birthdayDay = $('#DayDropdown').val();
        formObject.birth = new Date(birthdayYear+'-'+birthdayMonth+'-'+birthdayDay);
        var registerInterest = new Array();
        var InterestArray = $('.registerFavoriteGenreForm input').toArray();
        for(var i=1;i<InterestArray.length;i++){
            if($(InterestArray[i]).is(':checked')){
                registerInterest.push(i-1);
            }
        }
        formObject.interest = registerInterest.join(',');
        var registerLanguageArray = new Array();
        var registerLanguageLevel = new Array();
        var registerLanguageObject = $('.registerLanguageForm span').toArray();
        for(var i=0;i<registerLanguageObject.length;i++){
            console.log($(registerLanguageObject[i]).attr("language-code"));
            registerLanguageArray.push(parseInt($(registerLanguageObject[i]).attr("language-code")));
            registerLanguageLevel.push(parseInt($(registerLanguageObject[i]).attr("language-level")));
        }
        formObject.language=registerLanguageArray.join(',');
        formObject.skill=registerLanguageLevel.join(',');
        formObject.country=$('#registerStateCode').val();
        formObject.password=$('#registerPassword').val();
        formObject.sex=$('input[name=registerGender]:radio:checked').val();
        $.post('/register',formObject,function(data){
            console.log(data);
        });
    });
    /** 최종 회원가입 최종 전송 */

    $('.loginSubmitButton').click(function(){
        var loginFormEmail = $('#loginFormEmail').val();
        var loginFormPasswork = $('#loginFormPassword').val();
        var loginFormObject = new Object();
        loginFormObject.email = loginFormEmail;
        loginFormObject.password = loginFormPasswork;
        $.post('/login',loginFormObject,function(data){
            if(data!='good'){
                alert(data);
            }
        });
    });
});
/** 관심분야 모두 선택 처리 */
function onChangeSelectAll(){
    var booleanSelectAll = $('#registerGenreCheckAll').is(':checked');
    $('.registerFavoriteGenreForm input').prop('checked', booleanSelectAll);
}
/** 관심분야 모두 선택 처리 */