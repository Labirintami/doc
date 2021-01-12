SelectButton
---
sidebar_label: 
title: 
---          

This is a button that contains a drop-down list of options.

![DHX Select Button](../assets/ribbon/select_button.png)


## Adding SelectButton

A new SelectButton can be created with the help of the **add()** method of Tree Collection:

~~~js
ribbon.data.add({
	id:"select",
	type: "selectButton",
    value: "jpeg",
    size: "small",
    count: 20,
    items: [
    	{
        	value: "jpeg",
            hotkey: "alt+1"
        },
        {
            value: "pdf",
            hotkey: "alt+2"
        },
        {
            value: "png",
            hotkey: "alt+3"
        }
	]
});
~~~

{{editor	https://snippet.dhtmlx.com/5acqc24m	Ribbon. Select Button}}

###Attributes

The **selectButton** object has the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "selectButton". If not specified - the <a href="https://docs.dhtmlx.com/suite/ribbon__navitem.html">"navItem"</a> type is applied by default.</td>
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
			<td>(<i>string</i>) the value of the button</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string|string[]</i>) adds style classes to a button</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>icon</b></td>
			<td>(<i>string</i>) the name of an <a href="https://docs.dhtmlx.com/suite/ribbon__fa_icons.html#icons">icon</a> from the used icon font</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>items</b></td>
			<td>(<i>array</i>) an array of nested controls. You can find the full list of all available controls <a href="https://docs.dhtmlx.com/suite/menu__configuring_menu_items.html">here</a>. If the type of a nested control is not specified, the <i>menuItem</i> type will be applied by default.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>size</b></td>
			<td>(<i>string</i>) defines the size of a button: "small"|"medium"|"auto"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>count</b></td>
			<td>(<i>number</i>) a badge with a number</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>countColor</b></td>
			<td>(<i>string</i>) the color of a badge with number: "danger" | "secondary" | "primary" | "success"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>tooltip</b></td>
			<td>(<i>string</i>) a tooltip for the control</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether a button is hidden</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>disabled</b></td>
			<td>(<i>boolean</i>) defines whether a button is disabled</td>
		</tr>
    </tbody>
</table>


Operations with a button
-----------------------

You can perform operations over the SelectButton control with the help of the available [Ribbon API](ribbon/api/refs/ribbon.md) and [Tree Collection API](tree_collection/api/refs/treecollection.md).


@todo:
check attrs