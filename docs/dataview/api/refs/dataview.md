Dataview API
=============
	
<div class='h2'>Methods</div>

{{api

- dataview/api/dataview_destructor_method.md - removes Dataview instance and releases occupied resources
- dataview/api/dataview_disableselection_method.md - disables selection of items in DataView
- dataview/api/dataview_edit_method.md - enables editing of an item
- dataview/api/dataview_edititem_method.md - enables editing of an item
- dataview/api/dataview_enableselection_method.md - enables selection of items in DataView
- dataview/api/dataview_getfocus_method.md - returns the id of an item in focus
- dataview/api/dataview_getfocusindex_method.md - returns the index of the item in focus
- dataview/api/dataview_getfocusitem_method.md - returns the object of an item in focus
- dataview/api/dataview_paint_method.md - repaints a dataview on a page
- dataview/api/dataview_setfocus_method.md - sets focus to an item by its id
- dataview/api/dataview_setfocusindex_method.md - sets focus to an item according to its index

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

{{block Selection}}
{{api
- dataview/api/selection/selection_disable_method.md - disables selection of items in DataView
- dataview/api/selection/selection_enable_method.md - enables selection of items in DataView
}}
{{end}}

<div class='h2'>Events</div>

{{api
- dataview/api/dataview_afterdrag_event.md - fires after dragging of an item is finished
- dataview/api/dataview_afterdrop_event.md - fires before the user has finished dragging an item but after the mouse button is released 
- dataview/api/dataview_aftereditend_event.md - fires after editing of an item is ended
- dataview/api/dataview_aftereditstart_event.md - fires after editing of an item has started
- dataview/api/dataview_beforedrag_event.md - fires before dragging of an item has started
- dataview/api/dataview_beforedrop_event.md - fires before the user has finished dragging and released the mouse button over a target item
- dataview/api/dataview_beforeeditend_event.md - fires before editing of an item is completed
- dataview/api/dataview_beforeeditstart_event.md - fires before editing of an item has started
- dataview/api/dataview_canceldrop_event.md - fires on moving a mouse pointer out of item's borders while dragging the item
- dataview/api/dataview_candrop_event.md - fires when a dragged item is over a target item
- dataview/api/dataview_click_event.md - fires on clicking an item
- dataview/api/dataview_contextmenu_event.md - fires on calling a context menu for an item
- dataview/api/dataview_doubleclick_event.md - fires on double clicking an item
- dataview/api/dataview_dragin_event.md - fires when an item is dragged to another potential target
- dataview/api/dataview_dragout_event.md - fires when an item is dragged out of a potential target
- dataview/api/dataview_dragstart_event.md - fires when dragging of an item has started
- dataview/api/dataview_focuschange_event.md - fires on moving focus to a new item
- dataview/api/dataview_itemmouseover_event.md - fires on moving the mouse pointer over an item
- dataview/api/dataview_itemrightclick_event.md - fires on right clicking an item

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

{{block Selection}}
{{api
- dataview/api/selection/selection_afterselect_event.md - fires after selecting an item
- dataview/api/selection/selection_afterunselect_event.md - fires after unselecting an item
- dataview/api/selection/selection_beforeselect_event.md - fires on selecting an item, but before the item is really selected
- dataview/api/selection/selection_beforeunselect_event.md - fires on unselecting an item, but before the item is really unselected
}}
{{end}}

<div class='h2'>Properties</div>

{{api

- dataview/api/dataview_css_config.md - adds a CSS class(es) to the component
- dataview/api/dataview_data_config.md - specifies an array of data objects to set into the dataview
- dataview/api/dataview_dragcopy_config.md - defines that an item is copied to a target during drag-n-drop
- dataview/api/dataview_dragmode_config.md - enables drag-n-drop in DataView
- dataview/api/dataview_editable_config.md - enables editing in DataView
- dataview/api/dataview_editing_config.md - enables editing in DataView
- dataview/api/dataview_eventhandlers_config.md - adds event handlers to HTML elements of a custom template of DataView items
- dataview/api/dataview_gap_config.md - sets margins for DataView items
- dataview/api/dataview_height_config.md - sets the height of Dataview
- dataview/api/dataview_itemheight_config.md - sets the height of an item
- dataview/api/dataview_itemsinrow_config.md - specifies the number of data items in a row
- dataview/api/dataview_keynavigation_config.md - enables/disables navigation in DataView by arrow keys
- dataview/api/dataview_multiselection_config.md - enables selection of multiple DataView items, sets the mode of multiselection
- dataview/api/dataview_multiselectionmode_config.md - sets the mode of multiselection
- dataview/api/dataview_selection_config.md - enables selection of DataView items
- dataview/api/dataview_template_config.md - specifies a template for DataView items

}}

@index:
- dataview/api/refs/dataview_methods.md
- dataview/api/refs/dataview_events.md
- dataview/api/refs/dataview_properties.md
- dataview/api/refs/selection_methods.md
- dataview/api/refs/selection_events.md