
---
sidebar_label: close
title: close
---          

@short:
fires on closing a tab

@params:
- id 		string		the id of a closed tab


@example:
tabbar.events.on("Close", function(id){
    console.log(id);
});


@template: api_event
@descr:

@deprecated:instead of it, you can use the tabbar/api/tabbar_afterclose_event.md event:

~~~js
tabbar.events.on("AfterClose", function(id){
    console.log(id);
});
~~~

