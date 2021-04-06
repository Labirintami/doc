---
sidebar_label: close
title: close
---          

@short: fires on closing the timepicker

```tododeprecated ```

@example:
timepicker.events.on("Close", function(){
	console.log("The Close button has been clicked");
});


@template: api_event
@descr:

@deprecated:instead of it, you can use the [](timepicker/api/timepicker_afterclose_event.md) event:

~~~js
timepicker.events.on("AfterClose", function(){
	console.log("The Close button has been clicked");
});
~~~

