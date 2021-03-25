---
sidebar_label: viewChange
title: viewChange
---          

@short: fires on changing the view of ColorPicker

```tododeprecated ```

@example:
colorpicker.events.on("ViewChange",function(view){
	// your logic here
});


@template: api_event
@descr:


@deprecated: instead of it, you can use the colorpicker/api/colorpicker_modechange_event.md event:

~~~js
colorpicker.events.on("ModeChange",function(mode){
	// your logic here
});
~~~

