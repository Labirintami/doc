---
sidebar_label: Object Constructor
title: Object Constructor
---   

```tododelete не используется?``` 

~~~js
var mySlider = new dhtmlXSlider({
	parent:		"objId",
	size:		150,
	value:		5,
	step:		1,
	min:		-10,
	max:		150,
    vertical:	true,
    linkTo:		"inp",
    inverse:	true
});
~~~

where 

- *parent* - (id) id of an HTML element which will be used as parent (or object itself), mandatory
- *linkTo* - (string|object) links slider to other control ([linkTo()](api/dhtmlxslider_linkto.md))
- *size* - (number) size in pixels (slider adjusts to the container's size by default)
- *skin* - (string) name of the skin, optional
- *vertical* - (boolean) if set to true, slider will be rendered as a vertical one, false by default 
- *min* - (number) min value of slider, 0 by default
- *max* - (number) max value of slider, 99 by default
- *value* - (number) current value of slider, 0 by default
- *step* - (number) step of slider, 1 by default
- *disabled* - (boolean) if set to true, slider is initially inactive, to make it active call the [enable()](api/dhtmlxslider_enable.md) method, false by default
- *tooltip* - (boolean) if true, a tooltip with the current slider's value is displayed on hovering a mouse pointer over the handler, false by default
- *visible* - (boolean) if set to false, slider is initially hidden and will be shown on calling the method [show()](api/dhtmlxslider_show.md), true by default
- *inverse* - (boolean) if set to true, the slider shows values from max to min (added in version 4.1)

~~~html
<div id='my_slider_here'></div>
<script>
	//common init code
	var mySlider = new dhtmlXSlider({parent: "my_slider_here", size: 100});
</script>
~~~

There's also a possibility to initialize slider by passing a set of arguments.

~~~js
var mySlider = new dhtmlXSlider(parent,size,skin,vertical,min,max,value,step);
~~~
