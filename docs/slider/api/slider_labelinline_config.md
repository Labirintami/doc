labelInline
---
sidebar_label: 
title: 
---          

@short: 
defines whether the label of a slider is rendered on the same level with the trackbar or above it


@default:
false


@type: boolean

@example: 
var slider = new dhx.Slider("slider_container", { 
   labelInline:true 
});


@template:	api_config
@descr: 

@deprecated: instead of it, use the slider/api/slider_labelposition_config.md property:

~~~js
var slider = new dhx.Slider("slider_container", { 
   labelPosition:"left" 
});
~~~

