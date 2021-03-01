---
sidebar_label: getFocusIndex
title: getFocusIndex
---          

@short: returns the index of the item in focus

```tododeprecated ```


@returns:
- index		number		the index of the item in focus


@example:
var index = dataview.getFocusIndex(); // -> 1


@template: api_method
@descr:

@deprecated: To get the index of a DataView item in focus you can get the id of an item using the [getFocus()](dataview/api/dataview_getfocus_method.md) method and pass this id as a parameter of the data_collection/api/getindex.md method of Data Collection:
~~~js
var id = dataview.getFocus();
var index = dataview.data.getIndex(id);
~~~

But we recommend you to use the [getFocus()](dataview/api/dataview_getfocus_method.md) method instead:

~~~js
dataview.getFocus();
~~~



@changelog:


