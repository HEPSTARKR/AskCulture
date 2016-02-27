/**
 * Created by Sunrin on 2016. 1. 5..
 */
var CostSlider = document.getElementById("CostSlider");
var fullWidth = $(window).width();
$(document).ready(function() {
    $('#selectDateCalendarPicker').multiDatesPicker();
    $('.searchNav').hide();
    $('.languageFolderButton').click(function(){
        $('.languageCheckboxList').toggleClass('sizeAuto');
        if($('.languageFolderButton').text()==='arrow_drop_down'){
          $('.languageFolderButton').text('arrow_drop_up');
        }else{
          $('.languageFolderButton').text('arrow_drop_down');
        }
    });
    $('.categoryFolderButton').click(function(){
        $('.categoryCheckboxList').toggleClass('sizeAuto');
        if($('.categoryFolderButton').text()==='arrow_drop_down'){
          $('.categoryFolderButton').text('arrow_drop_up');
        }else{
          $('.categoryFolderButton').text('arrow_drop_down');
        }
    });
    $('.filterFlipButton').click(function(){
        $('.flipFilter').slideToggle();
        if($('.filterFlipButton').text()==='필터축소'){
          $('.filterFlipButton').text('필터추가');
        }else{
          $('.filterFlipButton').text('필터축소');
        }
    });
    $('.filterFlipButton').click();
   noUiSlider.create(CostSlider,{
       start : [1, 50],
       connect : true,
       step : 1,
       range : {
           'min' : 1,
           'max' : 50
       },
       format : wNumb({
            decimal : 0,
            postfix : '만'
       })
   })
   if(fullWidth < 1000)
   {
      $('.flipFilter').slideToggle();
   }
});
