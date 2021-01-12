Block
---
sidebar_label: 
title: 
---          

``` todo

This control allows combining several Toolbar items in a separate block.

![DHX Block Control](../assets/toolbar/block.png)

Adding blocks
------------------

To add a block with controls into a toolbar, use the **add()** method of DataCollection:

~~~js
myToolbar.data.add({
    type:"block", label:"New block"
});
~~~

Attributes
--------------

You can provide the following attributes in the configuration object of a block:

- **type** - (*string*) required, the type of a control, set it to "block";
- **id** - (*string*) the id of a control, auto-generated if not set;
- **label** - (*string*) optional, a text label for the Block control;
- **direction** - (*string*) optional, the direction of the block: "row" or "col".

Adding controls into block
-------------------------


Operations with a block
-----------------------

You can perform operations over the block control with the help of the available Toolbar and Data Collection API.
The details are provided in the article toolbar/common_methods.md.














@todo: 
won't work for toolbar?<br>
how are items set in the block?<br>
add image and link to sample, check attrs

``` todo