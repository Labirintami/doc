Input 
---
sidebar_label: 
title: 
---          

A text input field with an icon.

<img src="ribbon/input.png" alt="Input"/>

## Adding Input

The following syntax shows how an Input control can be easily added to a ribbon:

~~~js
ribbon.data.add({
	type:"input",
	value:"",
	placeholder:"Type to search"
});
~~~

{{editor	https://snippet.dhtmlx.com/jjnzc3ng	Ribbon. Input}}

## Attributes

You can provide the following **attributes** in the configuration object of an input field:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "input". If not specified - the <a href="https://docs.dhtmlx.com/suite/ribbon__navitem.html">"navItem"</a> type is applied by default.</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of a control, auto-generated if not set</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>parent</b></td>
			<td>(<i>string</i>) the parent of the item</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>value</b></td>
			<td>(<i>string</i>) the initial value of the field</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>icon</b></td>
			<td>(<i>string</i>) the name of an <a href="https://docs.dhtmlx.com/suite/ribbon__fa_icons.html#icons">icon</a> from the used icon font</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string|string[]</i>) adds style classes to an input</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>placeholder</b></td>
			<td>(<i>string</i>) a tip for the input</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>width</b></td>
			<td>(<i>number</i>) the width of the input field</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>label</b></td>
			<td>(<i>string</i>) a text label for the Input control</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>tooltip</b></td>
			<td>(<i>string</i>) a tooltip for an input</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether an input is hidden</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>disabled</b></td>
			<td>(<i>boolean</i>) defines whether an input is disabled</td>
		</tr>
    </tbody>
</table>


## Showing/hiding Input 

You can show or hide Input with the methods of Ribbon:

~~~js
ribbon.show(id);
ribbon.hide(id);
~~~

## Enabling/disabling Input

You can also disable and enable inputs:

~~~js
ribbon.enable(id);
ribbon.disable(id);
~~~

## Setting/getting Input value

You can use the **setState()** and **getState()** methods of Ribbon to change and access the value of Input.

To fill in Input with text, call **setState()** with a key-value pair as a parameter, where the key is the ID of the input and the value is the text:

~~~js
{
	type: "input",
	id:"search",
	value: ""
}
...
ribbon.setState({search:"Summer"});
~~~

To get the text that is currently inside the Input control, call **getState()**:

~~~js
ribbon.getState();
// {search:"Summer"}
~~~
