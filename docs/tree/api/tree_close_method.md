---
sidebar_label: close
title: close
---          

@short: closes a tree item by id


@params:
- id 	string		the id of an item to close



@example:
tree.close("history");


@template: api_method
@descr:



@relatedapi:
tree/api/tree_open_method.md


@changelog:

@deprecated: instead of it, you can use the tree/api/tree_collapse_method.md method:
~~~js
tree.collapse("history");
~~~
