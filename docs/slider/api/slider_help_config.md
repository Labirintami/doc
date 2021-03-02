---
sidebar_label: help
title: help
---          

@short: adds an icon with a question mark next to Slider

```tododeprecated ```

@type: string

@example: 
var slider = new dhx.Slider("slider_container",{
	help:"Some text"
});


@template:	api_config
@descr: 
The property is useful while using Slider in form.

@deprecated: instead of it, you can use the slider/api/slider_helpmessage_config.md property:

~~~js
var slider = new dhx.Slider("slider_container",{
	helpMessage:"Some text"
});
~~~

