$(document).ready(function(){
	
    $('.logo').fadeIn(1000);
    $('.hero').fadeIn(1150);
    $('.text-container').fadeIn(1150);
    $("#footer").fadeIn(650);
    
    $(window).resize(function(){
        var winWidth = $(window).width();
        if (winWidth < 1050){
            $('.logo').addClass('logo-center');
            $('.text-container').css('width','75%');
            $('.text-container').css('top','30%');
            $('.hero').css('width','75%');
        }else if($(".logo").hasClass('logo-center')){
            $(".logo").removeClass('logo-center');   
            $('.text-container').css('width','960px');
            $('.hero').css('width','960px');
            $('.text-container').css('top','50%');
        }else{
            return false;
        }   
    });
 
    
});