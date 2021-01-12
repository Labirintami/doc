Chart API
---
sidebar_label: 
title: 
---          
	
<div class='h2'>Methods</div>

{{api

- chart/api/chart_eachseries_method.md - iterates over Chart series
- chart/api/chart_getseries_method.md - returns an object with configuration of a specified series
- chart/api/chart_paint_method.md - repaints a chart on a page
- chart/api/chart_setconfig_method.md - sets configuration of a chart
- chart/api/chart_destructor_method.md - removes a calendar instance and releases the occupied resources

}}

{{block Data Collection}}
{{api
- data_collection/api/add.md - adds a new item to the component
- data_collection/api/copy.md - creates a copy of an item at the defined position
- data_collection/api/exists.md - checks whether the specified item exists in the component
- data_collection/api/filter.md - filters items in the component by the specified key
- data_collection/api/find.md - finds an item that corresponds to the specified parameters
- data_collection/api/findall.md - finds all the items that correspond to the specified parameters
- data_collection/api/getid.md - returns the id of the item by its index
- data_collection/api/getindex.md - returns the index of the item by its id
- data_collection/api/getitem.md - returns the object of an item by its id
- data_collection/api/load.md - loads data from an external file
- data_collection/api/map.md - iterates through all items of the component
- data_collection/api/move.md - moves an item to the defined position
- data_collection/api/parse.md - loads data from a local data source
- data_collection/api/remove.md - deletes the specified item from the component
- data_collection/api/removeall.md - deletes all the items from the component
- data_collection/api/serialize.md - serializes data of the component into an array of JSON objects
- data_collection/api/sort.md - sorts data items in a component
- data_collection/api/update.md - updates properties of the item
}}
{{end}}

<div class='h2'>Events</div>

{{api

- chart/api/chart_resize_event.md - fires on changing the size of the chart container
- chart/api/chart_serieclick_event.md - fires on clicking a series
- chart/api/chart_toggleseries_event.md - fires on toggle on/off a series in a legend

}}

{{block Data Collection}}
{{api
- data_collection/api/afteradd_event.md - fires after adding a new item into a data collection
- data_collection/api/afterremove_event.md - fires after removing a new item from a data collection
- data_collection/api/beforeadd_event.md - fires before adding a new item into a data collection
- data_collection/api/beforeremove_event.md - fires before removing an item from a data collection
- data_collection/api/change_event.md - fires when a data collection is modified
- data_collection/api/load_event.md - fires when items are loaded in a data collection
- data_collection/api/loaderror_event.md - fires when loading of data fails
- data_collection/api/removeall_event.md - fires when all items are removed from a data collection
}}
{{end}}


<div class='h2'>Properties</div>

{{api
- chart/api/chart_css_config.md - adds style classes to Chart
- chart/api/chart_legend_config.md - defines the configuration of a chart legend
- chart/api/chart_maxpoints_config.md - displays an average number of values in case a data set is too large to show all the values in the chart
- chart/api/chart_scales_config.md - defines configuration of chart scales
- chart/api/chart_series_config.md - defines configuration of chart series
- chart/api/chart_type_config.md - specifies the type of a chart

}}

@index:
- chart/api/refs/chart_methods.md
- chart/api/refs/chart_events.md
- chart/api/refs/chart_properties.md