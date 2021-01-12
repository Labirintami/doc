Syntax Templates  
---
sidebar_label: 
title: 
---          

``` todo


XML Format Template  
-----------------------

XML syntax template is the following:

~~~xml
<?xml version='1.0' encoding='iso-8859-1'?>
 <tree id="0"> 
  <item text="My Computer" 
  		id="1" 
        child="1" 
        im0="my_cmp.gif" 
        im1="my_cmp.gif" 
        im2="my_cmp.gif" 
  		call="true" 
        select="yes"> 
      <userdata name="system">true</userdata> 
      <item text="Floppy (A:)" 
      		id="11" 
            child="0" 
            im0="flop.gif" 
            im1="flop.gif" 
            im2="flop.gif"/> 
      <item text="Local Disk (C:)" 
      		id="12" 
            child="0" 
            im0="drv.gif" 
            im1="drv.gif" 
            im2="drv.gif"/> 
  </item> 
  <item text="Recycle Bin" 
  		id="4" 
        child="0" 
        im0="recyc.gif" 
        im1="recyc.gif" 
        im2="recyc.gif"/>
</tree>   
~~~

The used tags are the following:

- &#60;tree&#62; tag is mandatory. It specifies the parent of the loading block of data. According to this, id parameter in the tag specifies the ID of that parent.
To load root level the user needs to specify the ID used for creation of the tree object: new 
myObjTree(boxObject,width,height,0);
- &#60;item&#62; tag can contain sub-items (in order to load more than one level at once) or not. 
It also can contain <&#60;itemtext&#62; tag that can be used to add some HTML to item label (attribute text should be skipped then):

~~~js
<item id="123">
	<itemtext><![CDATA[<font color="red">Label</font>]]></itemtext>
</item>    
~~~

Attributes of &#60;item&#62; tag are the following:


**Mandatory attributes**:

- text - label of the node;
-  id - id of the node.

**Optional attributes**:

-  tooltip - tooltip of the node;
-  im0 - image for a node without child items (tree will get images from the path specified in setImagePath() method);
-  im1 - image for an expanded node with child items;
-  im2 - image for a collapsed node with child items;
-  aCol - colour of an item that is not selected;
-  sCol - colour of a selected item;
-  select - select a node on load (any value);
-  style - text style of a node;
-  open - show a node opened (any value);
-  call - call function on select(any value);
-  checked - check checkbox if exists (in case of three-state checkboxes the values can be: 1 - checked or -1 - unsure);
-  nocheckbox - instruct the component not to render checkbox for the related item, optional 
-  child - specifies whether a node has child items (1) or not (0);
-  imheight - height of the icon;
-  imwidth - width of the icon;
-  topoffset - offset of the item from the node above;
-  radio - if not empty, child items of this node will have radio buttons.

To set userdata directly within XML the user should apply &#60;tree&#62; tag that has only one attribute - name, and value to specify the userdata value.

In PHP script the following code should be used for the page header:

~~~php
<?php
	header("Content-type: text/xml");
	echo('<?xml version="1.0" encoding="iso-8859-1" ?>');
    
~~~

###XML Format with Links Specified 

XML format template for the tree containing links:

~~~xml
<tree..>
	<item ...>
		<userdata name="myurl">http://www.google.com</userdata>
		<item ...>
			<userdata name="myurl">http://groups.google.com</userdata>
		</item>

	</item>    
~~~

{{sample
dhtmlxTree/samples/09_initialization_general_settings/03_tree_init_xml.html
}}

JSON Format Template  
------------------------

The structure of JSON template is the same as the one of XML where tags are transformed to objects and attributes to properties.

The used properties are the following:

-  **id** - (mandatory) specifies the ID of the parent. To load root level the user needs to specify the ID used for creation of the tree object: new myObjTree(boxObject,width,height,0);
-  **item** - (array of objects) specifies an item of the tree.
  
   
   Objects of the **item** property have the following properties:

**Mandatory attributes**:

-  text - label of the node;
-  id - id of the node.

**Optional attributes**:

-  tooltip - tooltip of the node;
-  im0 - image for a node without child items (tree will get images from the path specified in setImagePath() method);
-  im1 - image for an expanded node with child items;
-  im2 - image for a collapsed node with child items;
-  aCol - colour of an item that is not selected;
-  sCol - colour of a selected item;
-  select - select a node on load (any value);
-  style - text style of a node;
-  open - show a node opened (any value);
-  call - call function on select(any value);
-  checked - check checkbox if exists (in case of three-state checkboxes values can be: 1 - checked or -1 - unsure);
-  nocheckbox - instruct the component not to render checkbox for the related item, optional 
-  child - specifies whether a node has child items (1) or not (0);
-  imheight - height of the icon;
-  imwidth - width of the icon;
-  topoffset - offset of the item from the node above;
-  radio - if not empty, child items of this node will have radio buttons;
- userdata - (array of objects) userdata related to the item
	- name - the userdata name
	- content - the userdata value


~~~js
{id:0,
	item:[
		{id:1,text:"first"},
		{id:2, text:"middle",child:"1",im0:"book.gif",
			item:[
				{id:"21", text:"child"}
			]},
		{id:3,text:"last"}
	]
}
~~~

{{sample
dhtmlxTree/samples/11_json_support/05_pro_smart_parsing_json.html
}}


CSV Format Template  
---------------------

A tree item is represented by three values: id, parent_id, text.

For example:

~~~js
1,0,node 1
2,1,node 1.1
3,2,node 1.1.1
4,0,node 2    
~~~

{{sample
dhtmlxTree/samples/11_json_support/02_pro_load_csv.html
}}


JS Array Format Template  
--------------------------

Tree item is represented by three values presented as sub-arrays of the top array: id, parent_id, text.

For example:

~~~js
var treeArray = new Array(
["1","0","node 1"],
["2","1","node 1.1"],
["3","2","node 1.1.1"],
["4","0","node 2"]
)
~~~

{{sample
dhtmlxTree/samples/11_json_support/03_pro_load_jsarray.html
}}

Cold Fusion Tag for dhtmlXTree  
-------------------------------

This section is devoted to a ready-made ColdFusion solution for Tree which, as it is believed by some users, simplifies the usage of dhtmlxTree. For example:

~~~xml
<cf_dhtmlXTree
	name="tree"
    width="250"
    height="250"
    JSPath="../" CSSPath="../"
    iconspath="gfx/"
    xmldoc="tree.xml"
    checkboxes="false"
    dragndrop="true"
    style="background-color:whitesmoke;border:1px solid blue;"
    onSelect="onNodeSelect"
    onDrop="onDropNode">
		...configuration xml...
</cf_dhtmlXTree>    
~~~

The parameters that should be indicated are as follows:

-  name - [optional] name of the tree JS object to use in JavaScript; if omitted, then a name will be generated automatically;
-  width - [optional] width of the tree (it sets the width of the tree box, leaving the width of the tree itself equal to 100%);
-  height - [optional] height of the tree;
-  JSPath - [optional] absolute or relative path to the directory containing the tree's JS files; "js" directory by default;
-  CSSPath - [optional] absolute or relative path to the directory containing the tree's CSS files; "css" directory by default;
-  iconspath - [optional] absolute or relative path to the directory containing the tree's icon files; "img" directory by default;
-  xmldoc - [mandatory for XML loading] URL of the XML file used to load the levels dynamically;
-  checkboxes - [optional] show checkboxes (none, twoState, threeState);
-  dragndrop - [optional] activate the drag-and-drop functionality (true,false);
-  style - [optional] style for the tree box;
-  onSelect - [optional] JavaScript function to be called on a node's selection;
-  oncheck - [optional] JavaScript function to be called on a node's (un)checking;
-  onDrop - [optional] JavaScript function to be called on a node's drop;
-  im1 - [optional] default image used for child nodes;
-  im2 - [optional] default image used for expanded branches;
-  im3 - [optional] default image used for collapsed branches.


<br>

Please, refer to [Data Loading from XML]( tree/initialization_of_dhtmlxtree.md#dataloading) section.


<br>


The minimal possible tag syntax with on-page XML is the following:


~~~xml
<cf_dhtmlXTree>
	<item text="Top node" id="t1" >
		<item text="Child node 1" id="c1" ></item>
		<item text="Child node 2" id="c2" ></item>
	</item>
/cf_dhtmlXTree>   
~~~

<br>

The minimal possible tag syntax with server-side XML is as follows:

~~~xml
<cf_dhtmlXTree xmldoc="tree.xml">
</cf_dhtmlXTree>
    
~~~

<br>

Here is an example of ColdFusion tag for the tree with images specified:

~~~xml
<cf_dhtmlXTree
	im1="book.gif"
    im2="books_open.gif"
    im3="books_close.gif">
    <item text="Mystery " id="mystery" open="yes" >
		<item text="Lawrence Block" id="lb" >
			<item text="All the Flowers Are Dying" id="lb_1" />
            <item text="The Burglar on the Prowl" id="lb_2" />
            <item text="The Plot Thickens" id="lb_3" />
            <item text="Grifters Game" id="lb_4" />
            <item text="The Burglar Who Thought He Was Bogart" id="lb_5" />
		</item>
		<item text="Robert Crais" id="rc" >
        	<item text="The Forgotten Man" id="rc_1" />
            <item text="Stalking the Angel" id="rc_2" />
            <item text="Free Fall" id="rc_3" />
            <item text="Sunset Express" id="rc_4" />
            <item text="Hostage" id="rc_5" />
		</item>
		<item text="Ian Rankin" id="ir" ></item>
		<item text="James Patterson" id="jp" ></item>
		<item text="Nancy Atherton" id="na" ></item>
	</item>
</cf_dhtmlXTree>
~~~

<br>

The following code snippet shows the creation of the tree with Events Handlers, Checkboxes and Drag-n-drop functionality:

~~~xml
<cf_dhtmlXTree
	dragndrop="true"
	checkboxes="twoState"
	onSelect="onClick"
	onCheck="onCheck"
	onDrop="onDrag">
		<item text="Mystery " id="mystery" open="yes" >
			<item text="Lawrence Block" id="lb" >
				<item text="All the Flowers Are Dying" id="lb_1" />
            	<item text="The Burglar on the Prowl" id="lb_2" />
            	<item text="The Plot Thickens" id="lb_3" />
            	<item text="Grifters Game" id="lb_4" />
            	<item text="The Burglar Who Thought He Was Bogart" id="lb_5" />
			</item>
			<item text="Robert Crais" id="rc" >
				<item text="The Forgotten Man" id="rc_1" />
				<item text="Stalking the Angel" id="rc_2" />
				<item text="Free Fall" id="rc_3" />
				<item text="Sunset Express" id="rc_4" />
				<item text="Hostage" id="rc_5" />
			</item>
			<item text="Ian Rankin" id="ir" ></item>
			<item text="James Patterson" id="jp" ><item>
			<item text="Nancy Atherton" id="na" ></item>
		</item>
</cf_dhtmlXTree>    
~~~

``` todo