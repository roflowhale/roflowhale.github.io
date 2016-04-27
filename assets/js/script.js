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
            $('.text-container').css('top','45%');
            $('.hero').css('width','75%');
        }else if($(".logo").hasClass('logo-center')){
            $(".logo").removeClass('logo-center');   
            $('.text-container').css('width','700px');
            $('.hero').css('width','700px');
            $('.text-container').css('top','50%');
        }else{
            return false;
        }   
    });
    
    $("#left").click(function(){
        if(!$("#p1.partner").hasClass('hide')){
            return false;
        }else if(!$("#p2.partner").hasClass('hide')){
            $("#p2.partner").addClass('hide');
            $("#p1.partner").removeClass('hide');
        }
        else if(!$("#p3.partner").hasClass('hide')){
            $("#p3.partner").addClass('hide');
            $("#p2.partner").removeClass('hide');
        }else if(!$("#p4.partner").hasClass('hide')){
            $("#p4.partner").addClass('hide');
            $("#p3.partner").removeClass('hide');
        }else if(!$("#p5.partner").hasClass('hide')){
            $("#p5.partner").addClass('hide');
            $("#p4.partner").removeClass('hide');
        }
    });
    
    $("#right").click(function(){
        if(!$("#p5.partner").hasClass('hide')){
            return false;
        }else if(!$("#p4.partner").hasClass('hide')){
            $("#p4.partner").addClass('hide');
            $("#p5.partner").removeClass('hide');
        }
        else if(!$("#p3.partner").hasClass('hide')){
            $("#p3.partner").addClass('hide');
            $("#p4.partner").removeClass('hide');
        }
        else if(!$("#p2.partner").hasClass('hide')){
            $("#p2.partner").addClass('hide');
            $("#p3.partner").removeClass('hide');
        }
        else if(!$("#p1.partner").hasClass('hide')){
            $("#p1.partner").addClass('hide');
            $("#p2.partner").removeClass('hide');
        }
        else {
            return false;
        }
    });
    
    
});