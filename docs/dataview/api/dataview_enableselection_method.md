
---
sidebar_label: enableSelection
title: enableSelection
---          

@short: enables selection of items in DataView


@example:
dataview.enableSelection();







@template: api_method
@descr:


@relatedsample: dataview/03_usage/06_disable_selection.html

@related: dataview/manipulating_data.md#disablingandenablingselectionofanitem

@relatedapi: dataview/api/dataview_disableselection_method.md
dataview/api/dataview_selection_config.md

@changelog: 
- added in v6.5
- deprecated in v7.0

@deprecated: instead of it, you can use the dataview/api/selection/selection_enable_method.md method of the selection object:
~~~js
dataview.selection.enable();
~~~