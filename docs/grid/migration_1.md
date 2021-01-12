
---
sidebar_label: Migration from 5.1 to 6.0
title: Migration from 5.1 to 6.0
---          

This article will help you to migrate from the [previous version 5.1 of dhtmlxGrid](https://docs.dhtmlx.com/api__refs__dhtmlxgrid.html) to the totally renewed version 6.0. Check the list below to explore all the changes.

5.1 -> 6.0
-------------

{{note  The [API of version 5.1](https://docs.dhtmlx.com/api__refs__dhtmlxgrid.html) is still available, but it is incompatible with the [API of version 6.0](grid/temp_api.md).}}

### Changed API

- grid.adjustColumnSize -> grid.adjustColumnWidth
- grid.setCellTextStyle -> grid.addCellCss
- grid.mark -> var grid = new dhx.Grid("grid", {columns: [mark:object|function]});
- 

### Removed API

All the rest of API methods have been deprecated. Similar functionality will be added in the next versions of renewed dhtmlxGrid.

@todo:
check, add links to new apis