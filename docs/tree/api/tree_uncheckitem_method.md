---
sidebar_label: unCheckItem
title: unCheckItem
---          

@short: unchecks the checkbox of a tree item and all its sub-items

```tododeprecated ``` 

@params:
- id 	string		the id of an item to uncheck


@example:
// checking an item
tree.checkItem("history");

// unchecking an item 
tree.unCheckItem("history");


@template: api_method
@descr:



@relatedapi:
tree/api/tree_checkitem_method.md


@changelog:

@deprecated: instead of it, you can use the tree/api/tree_uncheckitemnew_method.md method:
~~~js
tree.uncheckItem("history");
~~~

