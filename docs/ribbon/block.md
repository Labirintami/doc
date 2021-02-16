 ---
sidebar_label: Block
title: Block
---          

The Block control is used for grouping related controls.
 
![DHX Ribbon Block groups controls](../assets/ribbon/ribbon_block.png)

{{editor	https://snippet.dhtmlx.com/yr8oepq8	Ribbon. Blocks}}

## Creating a Block

This is the basic syntax of a block with two buttons in a row:

~~~js
{
   type: "block",
   title: "Action",        
   items: [
     { id: "copy", icon: "mdi mdi-content-copy", value: "Copy" },
     { id: "cut", icon: "mdi mdi-content-cut", value: "Cut" }
   ]
}
~~~

### Attributes

You can provide the following attributes in the configuration object of a block:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "block". If not specified - the <a href="https://docs.dhtmlx.com/suite/ribbon__navitem.html">"navItem"</a> type is applied by default.</td>
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
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) adds a custom CSS class to the block</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>items</b></td>
			<td>(<i>array</i>) an array of nested controls</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>title</b></td>
			<td>(<i>string</i>) sets a text label beneath the block</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>direction</b></td>
			<td>(<i>string</i>) defines the layout of controls within the block: "col" or "row"; controls that do not fit in one row/column are automatically placed in the next row/column</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether a block is hidden</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>disabled</b></td>
			<td>(<i>boolean</i>) defines whether a block is disabled</td>
		</tr>
    </tbody>
</table>



## Adding a Block

A block can be added to a ribbon with the help of the **add()** method of TreeCollection:

~~~js
ribbon.data.add({
    title:"File",
    type:"block",
    id:"files",
    direction:"row"
});
~~~

Controls for this block can be added afterwards with the same method:

~~~js
ribbon.data.add({
    type:"button",
    icon:"dxi dxi-plus",
    value:"New"
},-1,"files");

ribbon.data.add({
    type:"iconButton",
    icon:"dxi dxi-file"
},-1,"files");
~~~

**add()** in this case receives three parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>item</b></td>
			<td>the configuration of the added item</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>index</b></td>
			<td>defines the position of the item in the block (-1 will place it after the last control)</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>blockId</b></td>
			<td>the ID of the block</td>
		</tr>
    </tbody>
</table>


## Adding HTML content

You can add any custom HTML content to an item of the block with the help of the **html** property:

~~~js
{
	type: "block",
	title: "Progress",
	items: [
		{
		    html: "<div id='preloader'><div id='loader'></div></div >",
			size: "auto"
		}
	]
};
~~~

{{editor	https://snippet.dhtmlx.com/3djaib6o	Ribbon. Item HTML Content}}

## Nesting blocks

You can add blocks inside blocks to create complex blocks with several rows and columns, e.g.:

~~~js
{
    title:"File",
    type:"block",
    direction:"col", 
    items:[
        {
            type:"block", direction:"row",
            items:[
                { type:"button", icon:"dxi dxi-plus", value:"New" },
                { type:"button", icon:"dxi dxi-file", value:"File" }
            ]
        },
        {
            type:"block", direction:"row",
            items:[
                {
                    type:"imageButton", count:10,
                    src:"../img/avatar4.png"
                },
                {
                    type:"imageButton", value:"Torch",
                    src:"../img/avatar3.png"
                }
            ]
        }
    ]
}
~~~

## Hiding/showing blocks

To hide/show a block, you should pass its ID to the **hide() / show()** methods:

~~~js
ribbon.show(id);
ribbon.hide(id);
~~~

## Disabling/enabling blocks 

A block can be enabled/disabled:

~~~js
ribbon.enable(id);
ribbon.disable(id);
~~~


