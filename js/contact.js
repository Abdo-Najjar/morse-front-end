document.getElementById('contact').onclick = function () {
    $("#contact p").css({"border-bottom": "#000000 solid 3px","font-family":"fontm","font-weight":"500","color":"#000000"});
    $("#booking p").css({"border": "none","font-family":"fontr","font-weight":"normal","color":"#8E8E8E"});
    document.getElementById("change-h2").innerHTML = "اتصل بنا";

};
document.getElementById('booking').onclick = function () {
    $("#booking p").css({"border-bottom": "#000000 solid 3px","font-family":"fontm","font-weight":"500","color":"#000000"});
    $("#contact p").css({"border": "none","font-family":"fontr","font-weight":"normal","color":"#8E8E8E"});
    document.getElementById("change-h2").innerHTML = "حجز موعد";

};
$( document ).ready(function() {
    if($(window).width()+17<=992){
 
    $(".address-group").removeClass("d-flex");
}else{
    $(".address-group").addClass("d-flex");
}
});