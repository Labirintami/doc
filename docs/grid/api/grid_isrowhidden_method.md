---
sidebar_label: isRowHidden
title: isRowHidden
---          

@short: checks whether a row is hidden

@signature: isRowHidden(rowId: string | number): boolean;

@params:
- rowId	    string|number   the id of a row   


@returns:
- param	boolean     'true' if the row is hidden, 'false' otherwise


@example:
grid.isRowHidden("1"); //-> true/false


@template: api_method
@descr:

@relatedsample: grid/03_usage/15_show_hide_row.html

@relatedapi: 
grid/api/grid_hiderow_method.md
grid/api/grid_showrow_method.md

@changelog:
added in v7.0

