# jquery.scrollto
animated vertical scrol with trigger "scroll" event
```javascript

$('html').scrollTo(position[, duration [, easeFunction[ ,callback]]]);

$('html').scrollTo(450);
$('html').scrollTo(450,888);
$('html').scrollTo(450,888,'easeInOutExpo');
$('html').scrollTo(450,888,'easeInOutExpo',function(){});


$.scrollTo.defaults = {
  ease:'easeInOut',
  duration:555,
  complete:function(){
  
  }
};
```
