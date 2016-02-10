/**
 * Created by Sunrin on 2016. 2. 10..
 */
$('.asdf').click(function(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST",'/writepost',false);
    var formdata = new FormData();
    formdata.append("title",$('#title').val());
    formdata.append("text",$('#text').val());
    formdata.append("include",$('#include').val());
    formdata.append("exclude",$('#exclude').val());
    formdata.append("person",$('#person').val());
    formdata.append("range",$('#range').val());
    formdata.append("value",$('#value').val());
    formdata.append("x",$('#x').val());
    formdata.append("y",$('#y').val());
    formdata.append("area",$('#area').val());
    formdata.append("pickup",$('#pickup').val());
    formdata.append("day",$('#date').val());
    formdata.append("time",$('#time').val());
    formdata.append("type",$('#type').val());
    var files= document.getElementById('file').files;
    for(var i=files.length-1; i>=0; --i ){
        formdata.append("file",files[i]);
    }
    xhr.send(formdata);
});
$('.getPostButton').click(function(){
	$.post('getpost',{skip: $('#skip').val(), limit: $('#limit').val()},function(data){
		if(data){
			console.log(data);
			$('img').attr('src','/files/postimg/'+data[0].id+'/'+$('#photoNum').val()+'.jpg');
		}else{
			alert('데이터 로드에 실패하였습니다.');
		}
	});
});
