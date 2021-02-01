---
sidebar_label: Migration to Newer Versions
title: Migration to Newer Versions
---          
6.3 -> 6.4 
---------------

``` todo

1) In v6.4 the `editing` property of the Tree API has been renamed to `editable`. The new name brings more clarity and precisely describes the actual functionality.

2) The `isFolder` property is deprecated. Instead of it, you can set the `icon` property in the configuration object of a tree item to render a tree item as a custom folder.

~~~js
var tree = new dhx.Tree("tree", {
    data:[
        {
            "value": "Books",
            "id": "Books",
            "opened": true,
            "items": [
                {
                    "value": "Lawrence Block",
                    "id": "Lawrence Block",
                    "icon": { /*!*/
                        "folder": "fas fa-book", 
                        "openFolder": "fas fa-book-open", 
                        "file": "fas fa-file" 
                    }
                }
            ]
        }
    ]
}
~~~

6.2 -> 6.3
------------

In version 6.3 some methods and events of Tree have been renamed in order to avoid confusion and misunderstanding due to inconsistency between the name and functionality. 

The list of renamed methods and events:

<style>
	table.my_table {
		width: 100%;
	}
	table.my_table td {
		text-align: left;
		vertical-align: middle;
		width: 50%;
	}
	table.my_table td.version_info {
		text-align: center;
        background-color: #FFDAFF;
	}
</style>
<table class="my_table">

<tr><td class="version_info">Up to version 6.2</td><td class="version_info">From version 6.3</td></tr>

<tr><td>tree.close(id)</td><td>tree.collapse(id)</td></tr>
<tr><td>tree.closeAll()</td><td>tree.collapseAll()</td></tr>
<tr><td>tree.open(id)</td><td>tree.expand(id)</td></tr>
<tr><td>tree.openAll()</td><td>tree.expandAll()</td></tr>
<tr><td>tree.unCheckItem(id)</td><td>tree.uncheckItem(id)</td></tr>
<tr><td>tree.events.on("itemContextMenu", function(){})</td><td>tree.events.on("itemRightClick", function(){})</td></tr>

</table>

``` todo