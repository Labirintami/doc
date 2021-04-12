---
sidebar_label: edit
title: edit
---          

@short: enables editing of a Grid cell

```tododeprecated ``` 

@signature: edit(rowId: string | number, colId: string | number, editorType?: EditorType): void;

@params:
- row 		string				the id of a row
- col 		string 				the id of a column


@example:
grid.edit(grid.data.getId(0),"project");


@template: api_method
@descr:




@changelog:
added in v6.1

@deprecated: instead of it, you can use the [editCell()](treegrid/api/treegrid_editcell_method.md) method:
~~~js
grid.editCell(grid.data.getId(0),"project");
~~~