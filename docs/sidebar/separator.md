---
sidebar_label: Separator
title: Separator
---          

``` todo

This is a line separating items/groups of items from each other.

<img style="margin: 0px 0px 0px 20px; display: block;" src="sidebar/separator.png" alt=""/>

## Adding Separator

A new Separator can be created with the help of the **add()** method of Tree Collection:

~~~js
sidebar.data.add({
	type:"separator"
});
~~~

{{editor	https://snippet.dhtmlx.com/aq2l1z5n	Sidebar. Separator}}

###Attributes

Separator can have two attributes:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the item type, set it to "separator". If not specified - the <a href="https://docs.dhtmlx.com/suite/sidebar__navitem.html">"navItem"</a> type is applied by default.</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of a control, auto-generated if not set</td>
		</tr>
    </tbody>
</table>


## Showing/hiding separator

You can hide and show Separator with the methods of Sidebar by passing the control's id to them:

~~~js
sidebar.show(id);
sidebar.hide(id);
~~~

<br/>

Check the full list of available operations in the [Sidebar API](sidebar/api/refs/sidebar.md) and [Tree Collection API](tree_collection/api/refs/treecollection.md).

``` todo