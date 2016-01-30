$(document).ready(function() {
	$('.DialogIntroduce').hide();
	$('.dialogCloseButton').click(function(){
		$('.DialogIntroduce').hide();
	});
	$('.RegisterButton').click(function(){
		$('.DialogIntroduce').show();
	});

	$('.SignUpButton input[type=submit]').click(function(){
		if(!($('#AgreeCheckbox').is(':checked')===true)){
			alert('수신에 동의해주세요.');
			return;
		}else{
			if(!($('#emailInput').val())){
				alert('이메일을 입력해주세요.');
				return;
			}else if(($('#emailInput').val().toString().indexOf('@')=== -1)||($('#emailInput').val().toString().indexOf('.')===-1)){
				alert('올바른 이메일 형식이 아닙니다.');
				return;
			}else{
				$.post('/register',{email: $('.SignUpButton input[type=email]').val()},function(data){
					if(data=='사전등록이 완료되었습니다.'){
						alert(data+' 감사합니다.');
						$('.DialogIntroduce').hide();
					}else{
						alert(data);
					}
					return;
				})
			}
		}
	});
});
