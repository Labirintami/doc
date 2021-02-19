---
sidebar_label: Button
title: Button
---          

This is a simple button that can have an icon. Button can have two states and a badge with a number, which can be useful for displaying the number of new messages, etc.

<img src="toolbar/buttons.png" alt=""/>

{{editor	https://snippet.dhtmlx.com/7aysw3gb	Toolbar. Buttons}}

## Adding Button

A button can be easily added to a toolbar with the help of the **add()** method of [Tree Collection](tree_collection/api/refs/treecollection.md):

~~~js
toolbar.data.add({
    type:"button", value:"Best button"
});
~~~

### Attributes

You can provide the following attributes in the configuration object of a button:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "button". If not specified - the <a href="https://docs.dhtmlx.com/suite/toolbar__navitem.html">"navItem"</a> type is applied by default.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of a control, auto-generated if not set</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>parent</b></td>
			<td>(<i>string</i>) the parent of the block</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>value</b></td>
			<td>(<i>string</i>) a value of the button. You need to set either the <b>value</b> or <b>html</b> property to the button</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>html</b></td>
			<td>(<i>string</i>) optional, a string with HTML that should be inserted into the button</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a button</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>icon</b></td>
			<td>(<i>string</i>) an <a href="https://docs.dhtmlx.com/suite/toolbar__button.html#addinganicon">icon</a> of the button</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>items</b></td>
			<td>(<i>array</i>) an array of nested controls.You can find the full list of all available controls <a href="https://docs.dhtmlx.com/suite/menu__configuring_menu_items.html">here</a>. If the type of a nested control is not specified, the <i>menuItem</i> type will be applied by default.</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>group</b></td>
			<td>(<i>string</i>) defines the name of a group of controls a button belongs to. If one of the buttons in the group becomes active, all others automatically become inactive</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>twoState</b></td>
			<td>(<i>boolean</i>) the flag that defines whether a button can be used in two states: active (pressed) and inactive (unpressed)</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>active</b></td>
			<td>(<i>boolean</i>) for <i>twoState</i> buttons, if <i>true</i>, the button is in the active state</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>hotkey</b></td>
			<td>(<i>string</i>) the name of the hot key for the button</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>tooltip</b></td>
			<td>(<i>string</i>) a tooltip for the button</td>
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
			<td class="webixdoc_links0"><b>multiClick</b></td>
			<td>(<i>boolean</i>) defines the behavior of the Undo/Redo buttons:
            <ul><li><i>true</i> - all the actions are reverted/re-applied one by one when the Undo/Redo button is clicked and held</li>
            <li><i>false</i> - one action is reverted/re-applied on each click of the Undo/Redo button</li>
            </ul></td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>view</b></td>
			<td>(<i>string</i>) defines the look of a button: "flat"|"link"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>size</b></td>
			<td>(<i>string</i>) defines the size of a button: "small"|"medium"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>color</b></td>
			<td>(<i>string</i>) defines the color scheme of a button: "danger"|"secondary"|"primary"|"success"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>full</b></td>
			<td>(<i>boolean</i>) extends a button to the full width of a form</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>circle</b></td>
			<td>(<i>boolean</i>) makes the corners of a button round</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>loading</b></td>
			<td>(<i>boolean</i>) adds a spinner into a button</td>
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



## Adding an icon

A button can have an icon which is set through the corresponding option [icon](toolbar__customization.html#icons):

~~~js
{
    type:"button", value:"Done",
    icon:"dxi dxi-check"
}
~~~

## Adding a badge with a number

You can add a number badge to the button to display information like the number of new messages. The badge is set via the **count** property:

~~~js
{
    type:"button", value:"Done",
    icon:"dxi dxi-check",
    count:10
}
~~~

## Adding HTML content

You can add any custom HTML content to a button with the help of the **html** property:

~~~js
{
    type: "button",
    html: "<div class='user-button'><img src='../avatars/Avatar.jpg'/></div>",
}
~~~

{{editor	https://snippet.dhtmlx.com/5n2b8x84	Toolbar. Item HTML Content}}

## Showing/hiding a button 

To hide/show a button, you should pass the ID of the button to the [hide()](toolbar/api/toolbar_hide_method.md) / [show()](toolbar/api/toolbar_show_method.md) Toolbar methods:

~~~js
toolbar.show(id);
toolbar.hide(id);
~~~

{{editor	https://snippet.dhtmlx.com/cldp89u4	Toolbar. Hide/Show}}

## Enabling/disabling a button 

Any button in the toolbar can be [enabled](toolbar/api/toolbar_enable_method.md)/[disabled](toolbar/api/toolbar_disable_method.md):

~~~js
toolbar.enable(id);
toolbar.disable(id);
~~~

{{editor	https://snippet.dhtmlx.com/ovblenaf	Toolbar. Enable/Disable}}

## Setting tooltip

You can add a tooltip to a button:

~~~js
{
    type:"button", 
    value:"Click", 
    tooltip:"Click me and find out why"  /*!*/
}
~~~

{{editor	https://snippet.dhtmlx.com/105levtd	Toolbar. Tooltips}}

## Two state buttons

You can create buttons with two states: active (pressed) and inactive (unpressed). The activity of a two state button is controlled via the **active** attribute of the Button object:

~~~js
{
    type:"button", 
    value:"Select", 
    twoState:true, active:true  /*!*/
}
~~~

{{editor	https://snippet.dhtmlx.com/1pj4eqw0	Toolbar. Two State}}

### Changing state of a two state button on the fly

The state of a two state button can be changed programmatically with the [setState()](toolbar/api/toolbar_setstate_method.md) method of Toolbar as in:

~~~js
{
    type:"button", twoState:true, value:"Check", id:"check"
}
...
toolbar.setState({"check":true});    // active:true  /*!*/
// or
toolbar.setState({"check":false});   // active:false /*!*/
~~~

**setState()** accepts one parameter: a key-value pair with the ID of the button and the new value.

### Accessing current state of a two state button

The current state of a two state button can be checked with the [getState()](toolbar/api/toolbar_getstate_method.md) method:

~~~js
{
    type:"button", value:"Check", twoState:true, id:"check"
}
...
var state = toolbar.getState(); // -> { check:true } or { check:false } /*!*/
~~~

