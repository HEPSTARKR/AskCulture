/**
 * Created by Sunrin on 2016. 1. 18..
 */
$(document).ready(function(){
   $('#AllSet').change(function(){
       if($('#AllSet').is(':checked')){
           $('.TempLinear').slideDown();
           $('.TempLinear .switch input').attr('checked',true);
       }else{
           $('.TempLinear .switch input').attr('checked',true);
           $('.TempLinear').slideUp();
       }
   })
});