/**
 * Created by Sunrin on 2015. 12. 29..
 */
var date = new Date()
var currentDate = new Date()
$(document).ready(function(){
    $('.year').text(currentDate.getFullYear().toString())
    var month = currentDate.getMonth()+1
    if(month<10) month = '0'+month
    $('.month').text(month)
    SetCalendar()
})
var monthArr = [31,28,31,30,31,30,31,31,30,31,30,31]
var SetCalendar = function(){
    var year =parseInt($('.year').text())
    var month = parseInt($('.month').text())-1
    date.setFullYear(year);
    date.setMonth(month)
    date.setDate(1)
    var premonthIndex = month-1
    if(premonthIndex<0) premonthIndex=11
    var PreMonthEnd = monthArr[premonthIndex]
    var currentMonthEnd = monthArr[month]
    if(premonthIndex==1&&(year%400==0||(year%4==0&&!(year%100==0)))) PreMonthEnd = 29
    if(month==1&&(year%400==0||(year%4==0&&!(year%100==0)))) currentMonthEnd = 29
    var CountDate= PreMonthEnd - (date.getDay()-1)
    for (var i=1;i<=42;CountDate++){
        $('.'+i+' span').removeClass('disableDate')
        if(CountDate>PreMonthEnd){
            PreMonthEnd=99
            CountDate=1
        }else if(PreMonthEnd==99&&CountDate>currentMonthEnd){
            currentMonthEnd=99
            CountDate=1;
        }if(PreMonthEnd!=99||currentMonthEnd==99){
            $('.'+i+' span').addClass('disableDate')
        }
        $('.'+i+' span').text(CountDate)
        i++
    }
}
$('.leftMonth').click(function(){
    var year = parseInt($('.year').text())
    var month= parseInt($('.month').text())-1;
    if(month<1){
        month=12
        year--
    }
    if(month<10) month= '0'+month;
    $('.year').text(year)
    $('.month').text(month)
    $('.dateSelected').removeClass('dateSelected')
    PreSelec=null
    $('#searchDate').val('')
    SetCalendar()
})
$('.rightMonth').click(function(){
    var year = parseInt($('.year').text())
    var month= parseInt($('.month').text())+1
    if(month>12){
        month=1
        year++
    }
    if(month<10) month= '0'+month;
    $('.year').text(year)
    $('.month').text(month)
    $('.dateSelected').removeClass('dateSelected')
    PreSelec=null
    $('#searchDate').val('')
    SetCalendar()
})
var PreSelec=null;
var SelectDate = function(obj){
    if(obj.className.search("disableDate")!=-1) {
        return
    }
    var value=$('.year').text()+'-'+$('.month').text()+'-'+$(obj).text()
    $(obj).toggleClass("dateSelected")
    if(obj==PreSelec){
        $('#searchDate').val('')
        PreSelec=null
        return
    }else{
        $('#searchDate').val(value)
    }
    if(PreSelec!=null) $(PreSelec).toggleClass("dateSelected")
    PreSelec=obj
}