/**
 * Created by Sunrin on 2016. 1. 5..
 */
var CostSlider = document.getElementById("CostSlider");
$(document).ready(function() {
    $('select').material_select();
    $('#selectDateCalendarPicker').multiDatesPicker();
    $('.searchNav').hide();
   noUiSlider.create(CostSlider,{
       start : [10000, 500000],
       connect : true,
       step : 10000,
       range : {
           'min' : 10000,
           'max' : 500000
       },
       format : wNumb({
            decimal : 0
       })
   })
});
