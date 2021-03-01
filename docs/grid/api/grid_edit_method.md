---
sidebar_label: edit
title: edit
---          

@short: enables editing of a Grid cell

```tododeprecated ```

@params:
- row 		string				the id of a row
- col 		string 				the id of a column

@example:
grid.edit(grid.data.getId(0),"project");


@template: api_method
@descr:


@relatedsample:
grid/03_usage/09_editing.html

@relatedapi: grid/api/grid_editend_method.md

@changelog:
added in v6.1

@deprecated: instead of it, you can use the [editCell()](grid/api/grid_editcell_method.md) method:

~~~js
grid.editCell(grid.data.getId(0),"project");
~~~