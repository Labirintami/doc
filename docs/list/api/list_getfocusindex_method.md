---
sidebar_label: getFocusIndex
title: getFocusIndex
---          

@short: returns the index of an item in focus

```todoapi ```

@returns:
- index		number		the index of an item in focus


@example:
var index = list.getFocusIndex(); // -> 6


@template: api_method
@descr:

@deprecated: To get the index of a List item in focus you can get the id of an item using the [getFocus()](list/api/list_getfocus_method.md) method and pass this id as a parameter of the data_collection/api/getindex.md method of Data Collection:
~~~js
var id = list.getFocus();
var index = list.data.getIndex(id);
~~~

But we recommend you to use the [getFocus()](list/api/list_getfocus_method.md) method instead:

~~~js
list.getFocus();
~~~
@changelog:


