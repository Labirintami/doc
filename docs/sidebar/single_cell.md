---
sidebar_label: Single Cell Mode
title: Single Cell Mode
---          

``` todo

By default, each item on a sidebar (on the left side) has a cell linked to it (on the right).

Single cell mode implies that all items on the left are linked to a common cell on the right. 
It means, no matter what item is selected on the left, only one existing cell is always visible on the right.

<img src="sidebar/sidebar_singlecell_web.png">

To activate this mode, use the *single_cell* property with the *true* value.

~~~js
var mySidebar = new dhtmlXSideBar({
	single_cell: true
    // and other config here
});
~~~

To access cell's content you can optionally omit the cell id. But if you're working
with the items on the left side, you still need to specify the id.

~~~js
var mySidebar = new dhtmlXSideBar({
	single_cell: true,
	...
});
mySidebar.cells().attachComponent();
mySidebar.cells("someId").setActive();
~~~

{{sample dhtmlxSidebar/samples/02_config/08_single_cell_mode.html}}

``` todo