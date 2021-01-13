
---
sidebar_label: Custom HTML
title: Custom HTML
---          

This is an item that contains any custom HTML content (for example, an image, icon or other element).

<img style="margin: 0px 0px 0px 20px; display: block;" src="ribbon/custom_html.png" alt="Ribbon Custom HTML"/>

{{editor	https://snippet.dhtmlx.com/c0i0q3cu	Ribbon. Custom HTML}}

Adding Custom HTML
-----------------

Any custom HTML content can be easily added to a ribbon with the help of the **add()** method of [Tree Collection](tree_collection/api/refs/treecollection.md):

~~~js
ribbon.data.add({
	type: "customHTML",
	html: "<div id='preloader'><div id='loader'></div></div >"
});
~~~

{{editor	https://snippet.dhtmlx.com/c0i0q3cu	Ribbon. Custom HTML}}

###Attributes

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) required, the item type, set it to "customHTML". If not specified - the <a href="https://docs.dhtmlx.com/suite/ribbon__navitem.html">"navItem"</a> type is applied by default.</td>
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

You can perform operations over the **Custom HTML** item with the help of the available [Ribbon API](ribbon/api/refs/ribbon.md) and [Tree Collection API](tree_collection/api/refs/treecollection.md).




