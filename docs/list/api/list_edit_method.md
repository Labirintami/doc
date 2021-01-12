edit
============

@short: enables editing of an item

@params:
- id		string		the id of an item


@example:
list.edit("1");

@template: api_method
@descr:

@relatedapi: list/api/list_editing_config.md

@related: list/work_with_list.md#editingitems


@relatedsample: list/03_usage/03_edit.html

@deprecated: instead of it, you can use the [editItem()](list/api/list_edititem_method.md) method:
~~~js
list.editItem("1");
~~~