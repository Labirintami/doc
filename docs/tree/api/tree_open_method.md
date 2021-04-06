---
sidebar_label: open
title: open
---          

@short: opens a tree item by id

```tododeprecated ``` 

@params:
- id 	string		the id of an item to open



@example:
tree.open("history");


@template: api_method
@descr:



@relatedapi:
tree/api/tree_close_method.md


@changelog:

@deprecated: instead of it, you can use the [](tree/api/tree_expand_method.md) method:
~~~js
tree.expand("history");
~~~

