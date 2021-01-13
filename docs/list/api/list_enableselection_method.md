---
sidebar_label: enableSelection
title: enableSelection
---          

@short: enables selection of items in List





@example:
list.enableSelection();


@template: api_method
@descr:





@changelog: 
- added in v6.5
- deprecated in v7.0


@relatedapi: 
list/api/list_disableselection_method.md
list/api/list_selection_config.md

@related: list/work_with_list.md#disablingandenablingselectionofanitem


@relatedsample: list/03_usage/06_disable_selection.html

@deprecated: instead of it, you can use the list/api/selection/selection_enable_method.md method of the selection object:
~~~js
list.selection.enable();
~~~