---
sidebar_label: Spacer
title: Spacer
---          



This item takes space on the toolbar and is used for aligning controls.

<img src="toolbar/spacer.png" alt=""/>

{{editor	https://snippet.dhtmlx.com/0wt6z7sc	Toolbar. Spacer}}

## Adding Spacer

A new Spacer can be created with the help of the **add()** method of [Tree Collection](tree_collection/api/refs/treecollection.md):

~~~js
toolbar.data.add({
	type:"spacer"
});
~~~

### Attributes

Spacer can have two attributes:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "spacer". If not specified - the <a href="https://docs.dhtmlx.com/suite/toolbar__navitem.html">"navItem"</a> type is applied by default.</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of a control, auto-generated if not set</td>
		</tr>
    </tbody>
</table>


## Showing/hiding spacer

You can hide and show Spacer with the [show()](toolbar/api/toolbar_show_method.md)/[hide()](toolbar/api/toolbar_hide_method.md) methods of Toolbar:

~~~js
toolbar.show(id);
toolbar.hide(id);
~~~

{{editor	https://snippet.dhtmlx.com/cldp89u4	Toolbar. Hide/Show}}

<br/>

Check the full list of available operations in the [Toolbar API](toolbar/api/refs/toolbar.md) and [Tree Collection API](tree_collection/api/refs/treecollection.md).

