---
sidebar_label: isFolder
title: isFolder
---          

@short: defines whether an item should be rendered as a folder

```tododeprecated ``` 

@example: 
var tree = new dhx.Tree("tree", {isFolder: function() {
	return true;
}});


@template:	api_config
@descr: 
The config option can be used to create custom folders in a tree.

@relatedsample: tree/02_configuration/03_custom_folders.html

@related: tree/initialization_of_dhtmlxtree.md#initializetree
tree/configuration.md#customfolders

@deprecated: instead of it, you can set the **icon** property in the [configuration of a tree item](tree/api/tree_data_config.md) to render a tree item as a custom folder:

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
						"folder": "fas fa-book", /*!*/
						"openFolder": "fas fa-book-open", /*!*/
						"file": "fas fa-file" /*!*/
					}
				}
			]
		},
		{
			"value": "Ian Rankin",
			"id": "Ian Rankin"
		}
	]
}
~~~