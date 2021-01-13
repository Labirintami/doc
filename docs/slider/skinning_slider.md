
---
sidebar_label: Skinning Slider
title: Skinning Slider
---          

The skin can be set for dhtmlxSlider in one of the following ways:

- Through one of initialization parameters:

~~~js
var mySlider = new dhtmlXSlider("slider", 100, "dhx_web", ...);
// or
var mySlider = new dhtmlXSlider("slider", {                    
	skin: "dhx_web",
	...
});
~~~

- Through the <a href="api/dhtmlxslider_setskin.md">setSkin()</a> method called after slider's initialization:
  
~~~js
mySlider.setSkin(skin);
~~~
	
where:

- skin - (string) the skin name



Available Skins
------------------
The following skins are available for this component:

<table>
<tr><td style="text-align:center;">material (default)</td><td style="text-align:center;"><img src="slider/material.png"/></td></tr>
<tr><td style="text-align:center;">dhx_skyblue</td><td style="text-align:center;"><img src="slider/dhx_skyblue.png"/></td></tr>
<tr><td style="text-align:center;">dhx_web</td><td style="text-align:center;"><img src="slider/dhx_web.png"/></td></tr>
<tr><td style="text-align:center;">dhx_terrace</td><td style="text-align:center;"><img src="slider/dhx_terrace.png"/></td></tr>
</table>

{{sample dhtmlxSlider/samples/01_init/05_skins.html}}