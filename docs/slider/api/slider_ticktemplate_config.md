tickTemplate
---
sidebar_label: 
title: 
---          

@short: 
sets a template for rendering values on the scale




@type: function

@example: 
var slider = new dhx.Slider("slider_container", { 
	// v is the value of majorTick
    tickTemplate: function(v){
        return v + "°";
    } 
});


@template:	api_config
@descr: 


@related: slider/initializing_slider.md#configurationproperties
slider/configuring_slider.md#scalesettings

@relatedsample: https://snippet.dhtmlx.com/jsfxnplp	Slider. Custom Scale