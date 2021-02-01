---
sidebar_label: editCell
title: editCell
---          

@short: enables editing of a Grid cell


@params:
- row 		string				the id of a row
- col 		string 				the id of a column
- editorType    string          optional, the type of an editor used in a cell: "input"|"select"|"datepicker"|"checkbox"|"combobox"



@example:
grid.editCell(grid.data.getId(0),"project");


@template: api_method
@descr:


@rrelated: grid/usage.md#editingdata


@changelog: added in v6.4

@related: grid/usage.md#editingdata

@relatedsample:
https://snippet.dhtmlx.com/pqbax5vs	Grid. Editing Data

@relatedapi: grid/api/grid_editend_method.md
