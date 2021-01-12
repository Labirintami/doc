Customization
---
sidebar_label: 
title: 
---          
Styling 
-----------

There is a possibility to make changes in the look and feel of a popup. 

<img style="margin: 0px 0px 0px 20px; display: block;" src="popup/custom_css.png" alt=""/>

For this you need to take the following steps:

- add a new CSS class(es) with desired settings in the &lt;style&gt; section of your HTML page or in your file with styles (don't forget to include your file on the page in this case)

~~~js
<style>
	.my-first-class {
		/*some styles*/
	}
    
    .my-second-class {
		/*some styles*/
	}
</style>
~~~

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [css](popup/api/popup_css_config.md) property in the Popup configuration:

~~~js
var dhxPopup = new dhx.Popup({ 
    css:"my-first-class my-second-class"
});

popup.show();
~~~

{{editor	https://snippet.dhtmlx.com/rd8zfw5h	Popup. Custom Css}}