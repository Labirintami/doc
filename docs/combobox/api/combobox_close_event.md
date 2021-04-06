---
sidebar_label: close
title: close
---          

@short: fires when a list with options is closed

```tododeprecated ``` 

@example:
combo.events.on("Close", function(){
    // your logic here
});


@template: api_event
@descr:

@deprecated:instead of it, you can use the [](combo/api/combobox_afterclose_event.md) event:

~~~js
combo.events.on("AfterClose", function(){
    // your logic here
});
~~~

