---
sidebar_label: Custom HTML
title: Custom HTML
---          

This is an item that contains any custom HTML content (for example, an image, icon or other element).

<img src="sidebar/htmlcontent.png" alt=""/>

{{editor	https://snippet.dhtmlx.com/26ds0gxp	Sidebar. Custom HTML}}

Adding Custom HTML
-----------------

Any custom HTML content can be easily added to a sidebar with the help of the **add()** method of [Tree Collection](tree_collection/api/refs/treecollection.md):

~~~js
sidebar.data.add({
	type: "customHTML",
	id: "userInfo",
	css: "user-info_item",
	html: "<div class='user-info_container'>" +
			"<img class='user-info_avatar' src='../common/ava.png'/>" +
			"<div class='user-info_title'>" +
			"Gloria McKinney"+
			"</div>" +
			"<div class='user-info_contact'>" +
			"@gmckinney" +
			"</div>" +
			"</div>"
});
~~~

###Attributes

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) required, the item type, set it to "customHTML". If not specified - the <a href="https://docs.dhtmlx.com/suite/sidebar__navitem.html">"navItem"</a> type is applied by default.</td>
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
			<td>(<i>boolean</i>) defines whether an item is hidden</td>
		</tr>
    </tbody>
</table>



Working with Custom HTML
-----------------------

You can perform operations over the **Custom HTML** item with the help of the available [Sidebar API](sidebar/api/refs/sidebar.md) and [Tree Collection API](tree_collection/api/refs/treecollection.md).



