
---
sidebar_label: MenuItem
title: MenuItem
---          

MenuItem is a drop-down list of options, can contain its own sub-menu. 

<img style="margin: 0px 0px 0px 20px; display: block;" src="toolbar/menuitem.png" alt=""/>

Adding MenuItem
----------------

A menuItem can be easily added to a sidebar with the help of the **add()** method of Tree Collection:

~~~js
toolbar.data.add({
    type:"menuItem", value:"Toolbar menuItem", tooltip: "Press me",  items:[
        { type:"menuItem", value:"Option 1" },
        { type:"menuItem", value:"Option 2" },
        { type:"separator"},
        { type:"menuItem", value:"Option Infinite" }
    ]
});
~~~

###Attributes

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "menuItem". If not specified - the <a href="https://docs.dhtmlx.com/suite/toolbar__navitem.html">"navItem"</a> type is applied by default.</td>
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
			<td>(<i>string</i>)  a value for the menu item. You need to set either the <b>value</b> or <b>html</b> property to the item</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>html</b></td>
			<td>(<i>string</i>) optional, a string with HTML that should be inserted into the menu item</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string|string[]</i>) adds style classes</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>icon</b></td>
			<td>(<i>string</i>) the name of an <a href="https://docs.dhtmlx.com/suite/menu__fa_icons.html">icon</a> from the used icon font</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>items</b></td>
			<td>(<i>array</i>) an array of children controls (note that all the children should have the type <i>menuItem</i>)</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>hotkey</b></td>
			<td>(<i>string</i>) the name of a keyboard shortcut for a menu item</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>tooltip</b></td>
			<td>(<i>string</i>) a tooltip for the menuItem</td>
		</tr>
         <tr>
			<td class="webixdoc_links0"><b>count</b></td>
			<td>(<i>number|string</i>) a badge with a number</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>countColor</b></td>
			<td>(<i>string</i>) the color of a badge with number: "danger" | "secondary" | "primary" | "success" </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether a control is hidden</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>disabled</b></td>
			<td>(<i>boolean</i>) defines whether an item is disabled</td>
		</tr>
    </tbody>
</table>


## Adding an icon

A menuItem can have an icon which is set through the corresponding option **icon**:

~~~js
{
    type:"menuItem", value:"Some",
    icon:"dxi dxi-menu-right"
}
~~~

## Adding a badge with a number

You can add a number badge to the menuItem to display information like the number of new messages. The badge is set via the **count** property:

~~~js
{
    type:"menuItem", value:"Some",
    icon:"dxi dxi-check",
    count:10
}
~~~

## Adding HTML content

You can add any custom HTML content to a menuItem with the help of the **html** property:

~~~js
{
    type: "menuItem",
    html: "<img class='item-avatar' src='../avatars/Avatar_07.jpg'/>"
}
~~~

## Showing/hiding a menuItem

To hide/show a menuItem, you should pass the ID of the menuItem to the **hide() / show()** Sidebar methods:

~~~js
toolbar.show(id);
toolbar.hide(id);
~~~

## Enabling/disabling a navItem 

Any menuItem in the toolbar can be enabled/disabled:

~~~js
toolbar.enable(id);
toolbar.disable(id);
~~~

## Setting tooltip

You can add a tooltip to a menuItem:

~~~js
{
    type:"menuItem", 
    value:"Click", 
    tooltip:"Click me and find out why"  /*!*/
}
~~~


@todo:
improve descr
