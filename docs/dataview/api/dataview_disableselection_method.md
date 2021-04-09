---
sidebar_label: disableSelection
title: disableSelection
---          

@short: disables selection of items in DataView

@signature: disableSelection(): void;

@example:
dataview.disableSelection();

[Dataview. Disable/Enable selection](https://snippet.dhtmlx.com/kn42gb50)	

@related: dataview/manipulating_data.md#disablingandenablingselectionofanitem

@relatedapi: dataview/api/dataview_enableselection_method.md
dataview/api/dataview_selection_config.md

@changelog: 
- added in v6.5
- deprecated in v7.0

@deprecated: instead of it, you can use the [](dataview/api/selection/selection_disable_method.md) method of the selection object:
~~~js
dataview.selection.disable();
~~~
