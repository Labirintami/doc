---
sidebar_label: thumbLabel
title: thumbLabel
---          

@short: enables prompt messages with ticks values on hovering over the slider thumb

```tododeprecated ```

thumbLabel?: boolean;

@default: true

@type: boolean

@example: 
var slider = new dhx.Slider("slider_container", { 
    thumbLabel:false
});


@template:	api_config
@descr: 


@deprecated: instead of it, you can use the slider/api/slider_tooltip_config.md property:

~~~js
var slider = new dhx.Slider("slider_container", { 
    tooltip:false
});
~~~
