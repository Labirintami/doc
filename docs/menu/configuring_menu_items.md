
---
sidebar_label: List of Menu Controls
title: List of Menu Controls
---          

In this article you'll find the controls you can use in dhtmlxMenu. Their descriptions contain lists of attributes and examples of adding the controls into Menu on the fly.

To operate Menu controls, you can use Menu API and [Tree Collection API](tree_collection/api/refs/treecollection.md). Check the [related article](menu/work_with_menu.md).

MenuItem
-----------

MenuItem is a drop-down list of options.

![Menu Item](../assets/menu/menu_item.png)



### Adding menuItem

You can add a MenuItem control into the menu with the help of the **add()** method of Tree Collection:

~~~js
menu.data.add({
	type:"menuItem", value:"Menu", items:[
		{ type:"menuItem", value:"Option 1" },
		{ type:"menuItem", value:"Option 2" },
		{ type:"separator"},
		{ type:"menuItem", value:"Option Infinite" }
	]
});
~~~

{{editor	https://snippet.dhtmlx.com/qkxeer2h	Menu. Menu Item}}

#### Attributes


You can provide the following **attributes** in the configuration object of a MenuItem control:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "menuItem"</td>
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


NavItem
----------

This is a default control for navigation-related components, can contain any other controls as nested items. 


###Adding NavItem


A navItem can be easily added to a menu with the help of the **add()** method of Tree Collection:

~~~js
menu.data.add({
    type:"navItem", value:"My NavItem"
});
~~~

{{editor	https://snippet.dhtmlx.com/uhv64cm7	Menu. Navigation Type}}

####Attributes

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "navItem". If not specified - the <a href="https://docs.dhtmlx.com/suite/menu__configuring_menu_items.html#menuitem">"menuItem"</a> type is applied by default.</td>
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
			<td>(<i>string</i>) a value of the navItem. You need to set either the <b>value</b> or <b>html</b> property to the navItem</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>html</b></td>
			<td>(<i>string</i>) optional, a string with HTML that should be inserted into the navItem</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string|string[]</i>) adds style classes to a navItem</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>icon</b></td>
			<td>(<i>string</i>) an <a href="https://docs.dhtmlx.com/suite/menu__fa_icons.html">icon</a> of the navItem</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>items</b></td>
			<td>(<i>array</i>) an array of nested controls</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>twoState</b></td>
			<td>(<i>boolean</i>) adds two states to the item: active (pressed) and inactive (unpressed)</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>group</b></td>
			<td>(<i>string</i>) defines the name of a group of controls a navItem belongs to. If one of the navItems in the group becomes active, all others automatically become inactive</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>active</b></td>
			<td>(<i>boolean</i>) sets the state of a twoState item</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>hotkey</b></td>
			<td>(<i>string</i>) the name of a keyboard shortcut for a menu item</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>count</b></td>
			<td>(<i>number</i>) a badge with a number</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>countColor</b></td>
			<td>(<i>string</i>) the color of a badge with number: "danger" | "secondary" | "primary" | "success" </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether an item is hidden</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>disabled</b></td>
			<td>(<i>boolean</i>) defines whether an item is disabled</td>
		</tr>
        
    </tbody>
</table>



### Adding an icon

A navItem can have an icon which is set through the corresponding option **icon**:

~~~js
{
    type:"navItem", value:"Some",
    icon:"dxi-check"
}
~~~

### Adding a badge with a number

You can add a number badge to the navItem to display information like the number of new messages. The badge is set via the **count** property:

~~~js
{
    type:"navItem", value:"Some",
    icon:"dxi-check",
    count:10
}
~~~

<h3 id="htmlcontent">Adding HTML content</h3>

You can add a custom image into the navItem with the help of the **html** property:

~~~js
{
    type: "navItem",
    id: "spline",
	html: "<img src='..img/chart-spline.svg'/>"
}
~~~

{{editor	https://snippet.dhtmlx.com/2hr77egx	Menu. Item HTML Content}}

### Showing/hiding a navItem

To hide/show a navItem, you should pass the ID of the navItem to the **hide() / show()** Menu methods:

~~~js
menu.show(id);
menu.hide(id);
~~~

### Enabling/disabling a navItem 

Any navItem in the menu can be enabled/disabled:

~~~js
menu.enable(id);
menu.disable(id);
~~~


##Custom HTML

This is an item that contains any custom HTML content (for example, an image, icon or other element).

<img src="menu/htmlcontent.png" alt=""/>

### Adding Custom HTML

Any custom HTML content can be easily added to a menu with the help of the **add()** method of [Tree Collection](tree_collection/api/refs/treecollection.md):

~~~js
menu.data.add({
    id: "input",
	parent: "edit",
    type: "customHTML",
	html: "<img src='../logo.svg' alt=''/>",
	css: "custom-image"
});
~~~

{{editor	https://snippet.dhtmlx.com/nk65jfmx	Menu. Custom HTML}}

###Attributes

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) required, the item type, set it to "customHTML". If not specified - the <a href="https://docs.dhtmlx.com/suite/menu__configuring_menu_items.html#menuitem">"menuItem"</a> type is applied by default.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of an item, auto-generated if not set</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>parent</b></td>
			<td>(<i>string</i>) the parent of the item</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>html</b></td>
			<td>(<i>string</i>) a string with HTML that should be inserted into the item</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string|string[]</i>) adds style classes</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether a control is hidden</td>
		</tr>
    </tbody>
</table>


Separator
------------

This is a horizontal (between menu options) or vertical (between menu items) line separating items/groups of items from each other.

<img src="menu/separator.png" alt=""/>


### Adding Separator

A new Separator can be created with the help of the **add()** method of Tree Collection:

~~~js
menu.data.add({
	type:"separator"
});
~~~

{{editor	https://snippet.dhtmlx.com/71tybx5j	Menu. Separator}}

#### Attributes

Separator can have two attributes:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the item type, set it to "separator". If not specified - the <a href="https://docs.dhtmlx.com/suite/menu__configuring_menu_items.html#menuitem">"menuItem"</a> type is applied by default.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the ID of a control, auto-generated if not set</td>
		</tr>
    </tbody>
</table>



Spacer
-----------

This item takes space on the toolbar and is used for aligning controls.

![DHX Toolbar spacer](../assets/menu/spacer.png)


### Adding Spacer

A new Spacer can be created with the help of the **add()** method of Tree Collection:

~~~js
toolbar.data.add({
	type:"spacer"
});
~~~

{{editor	https://snippet.dhtmlx.com/fjaolual	Menu. Spacer}}

#### Attributes

Spacer can have two attributes:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the item type, set it to "spacer". If not specified - the <a href="https://docs.dhtmlx.com/suite/menu__configuring_menu_items.html#menuitem">"menuItem"</a> type is applied by default.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the ID of a control, auto-generated if not set</td>
		</tr>
    </tbody>
</table>

@todo:
add links to api and to samples, complete the list of attrs for item

