(function($){
    $.scrollTo = {
        defaults:{
            duration:888,
            ease:'easeInOutExpo',
            complete:function(){}
        }
    };
    $.fn.scrollTo = function(position,duration,ease,complete){
        var defaults = $.scrollTo.defaults;
        duration = duration||defaults['duration'];
        ease = ease||defaults['ease'];
        complete = complete||defaults['complete'];
        $('html').animate({
            scrollTop:position
        },{
            easing:'swing',
            duration:'888',
            progress:function(){
                $().trigger('scroll');
            },
            complete:complete
        })
    }
})(jQuery);