---
sidebar_label: Configuration
title: Configuration
---          

``` todo

In this article you will find the detailed list of properties that you can use inside the constructors of message boxes and tooltip to adjust their configuration.

Message Box
-----------------

<img style="margin: 0px 0px 0px 10px; display: block;" src="message/show_message.png" alt=""/>

{{editor	https://snippet.dhtmlx.com/rsxdlicg	Message. Show Message}}

The constructor of a message box may take the following parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>text</b></td>
			<td>(<i>string</i>) required, the text of a message box</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>icon</b></td>
			<td>(<i>string</i>) optional, an an <a href="https://docs.dhtmlx.com/suite/helpers__icon.html">icon</a> from the used icon font</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) optional, the style of a message box</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>html</b></td>
			<td>(<i>string</i>) optional, the HTML content to be displayed in a message box <br> {{editor	https://snippet.dhtmlx.com/1stqqejp	Message. Message With Html Content}}</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>node</b></td>
			<td>(<i>HTMLELement|string</i>) optional, the container for a message box or its id</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>position</b></td>
			<td>(<i>string</i>) optional, the position of a message box:"top-left"|"top-right"|"bottom-left"|"bottom-right" <br> {{editor	https://snippet.dhtmlx.com/3wxrafmo	Message. Message Container}}</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>expire</b></td>
			<td>(<i>number</i>) optional, the time period of displaying a message box before it disappears, in ms</td>
		</tr>
    </tbody>
</table>
<br>

~~~js
dhx.message({
    text:"Message text", 
    icon:"dxi-clock", 
    css:"expire", 
    expire:1000
});
~~~

{{editor	https://snippet.dhtmlx.com/qfmd877x	Message. Message Configuration}}

Alert Box
-------------

<img style="margin: 0px 0px 0px 10px; display: block;" src="message/show_alert.png" alt=""/>

{{editor	https://snippet.dhtmlx.com/m4xka888	Message. Show Alert}}

The constructor of an alert box may take the following parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>text</b></td>
			<td>(<i>string</i>) required, the text of an alert box</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>header</b></td>
			<td>(<i>string</i>) optional, the text of an alert box header</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) optional, the style of an alert box</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>buttons</b></td>
			<td>(<i>array</i>) optional, an array with the name of the alert button. By default, the button's name is "Apply"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>buttonsAlignment</b></td>
			<td>(<i>string</i>) optional, the position of buttons:"left"|"center"|"right"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>blockerCss</b></td>
			<td>(<i>string</i>) optional, the style of blocking the window when an alert box appears</td>
		</tr>
    </tbody>
</table>
<br>

~~~js
dhx.alert({
    header:"Alert Header",
    text:"Alert text",
    buttonsAlignment:"center"
});
~~~

{{editor	 https://snippet.dhtmlx.com/dk4a7959	Message. Alert And Confirm Configuration}}

Confirm Box
-------------

<img style="margin: 0px 0px 0px 10px; display: block;" src="message/show_confirm.png" alt=""/>

{{editor	https://snippet.dhtmlx.com/iss7twe6	Message. Show Confirm}}

The constructor of a confirm box may take the following parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>text</b></td>
			<td>(<i>string</i>) required, the text of a confirm box</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>header</b></td>
			<td>(<i>string</i>) optional, the text of a confirm box header</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) optional, the style of a confirm box</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>buttons</b></td>
			<td>(<i>array</i>) optional, an array with the names of the confirm buttons. By default, the buttons' names are "Reject" and "Apply"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>buttonsAlignment</b></td>
			<td>(<i>string</i>) optional, the position of the button: "left", "center", or "right" (by default)</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>blockerCss</b></td>
			<td>(<i>string</i>) optional, the style of blocking the window when a confirm box appears</td>
		</tr>
    </tbody>
</table>
<br>

~~~js
dhx.confirm({
    header:"Confirm Header",
    text:"Confirm text",
    buttons:["cancel", "apply"],
    buttonsAlignment:"center"
});
~~~

{{editor	 https://snippet.dhtmlx.com/dk4a7959	Message. Alert And Confirm Configuration}}

### Working with confirm

To find out which button was pressed, use the callback function that returns a Promise:

~~~js
dhx.confirm({
	header: "confirm the action",
	text: "can you apply?",
	buttons: ["cancel", "apply"]
}).then(function(answer){
	if (answer){
		console.log("confirmed")
	}
	else {
		console.log("cancelled")
	}
});
~~~

Tooltip
-----------------

<img style="margin: 0px 0px 0px 10px; display: block;" src="message/show_tooltip.png" alt=""/>

{{editor	https://snippet.dhtmlx.com/c6jm8if6	Message. Show Tooltip}}

The constructor of a tooltip may take the following parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>node</b></td>
			<td>(<i>HTMLELement|string</i>) required, the target of tooltip or its id</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>position</b></td>
			<td>(<i>string</i>) optional, the position of a tooltip:"right", "bottom", "center"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) optional, the style of a tooltip box</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>force</b></td>
			<td>(<i>boolean</i>) optional, forces opening of a tooltip</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>showDelay</b></td>
			<td>(<i>number</i>) optional, the time period that should pass before showing a tooltip, in ms</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>hideDelay</b></td>
			<td>(<i>number</i>) optional, the time period that should pass before hiding a tooltip, in ms</td>
		</tr>
    </tbody>
</table>
<br>

~~~js
dhx.tooltip("Tooltip From Right", {
	node: "fourth", 
    position: "right"
});
~~~

{{editor	https://snippet.dhtmlx.com/4wrrsr67	Message. Tooltip Position}}

{{editor	https://snippet.dhtmlx.com/zts0avym	Message. Tooltip Delay Configuration}}

###Smart positioning

{{note If the target of the tooltip is placed close to some edge of the browser, the tooltip will be shown from the opposite side of the target.}}

In the image below the target is adjacent to the right side of screen. Its tooltip that has the *position:"right"* attribute in the config object appears from the left side of the target.

![Smart positioning](message/smart_tooltip.png)


###Tooltip API

You can control the activity of the Tooltip via the pair of methods.

- to switch the tooltip off, use the **disableTooltip()** method:

~~~js
dhx.disableTooltip();
~~~

- to switch the tooltip on again, apply the **enableTooltip()** method:

~~~js
dhx.enableTooltip();
~~~

``` todo