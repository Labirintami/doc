Tree API
=============
	
<div class='h2'>Methods</div>

{{api

- tree/api/tree_checkitem_method.md - checks the checkbox of a tree item and all its sub-items
- tree/api/tree_close_method.md - closes a tree item by id
- tree/api/tree_closeall_method.md - closes all opened Tree items
- tree/api/tree_collapse_method.md - collapses a tree item by id
- tree/api/tree_collapseall_method.md - collapses all expanded Tree items
- tree/api/tree_destructor_method.md - releases the occupied resources
- tree/api/tree_edititem_method.md - edits a Tree item
- tree/api/tree_expand_method.md - expands a tree item by id
- tree/api/tree_expandall_method.md - expands all collapsed tree items
- tree/api/tree_focusitem_method.md - sets focus to a specified tree item
- tree/api/tree_getchecked_method.md - gets all checked tree items
- tree/api/tree_getstate_method.md - gets the state of a tree
- tree/api/tree_open_method.md - opens a tree item by id
- tree/api/tree_openall_method.md - opens all closed tree items
- tree/api/tree_paint_method.md - repaints Tree on a page
- tree/api/tree_setstate_method.md - sets state for a tree
- tree/api/tree_toggle_method.md - opens/closes a tree item by id
- tree/api/tree_uncheckitemnew_method.md - unchecks the checkbox of a tree item and all its sub-items
- tree/api/tree_uncheckitem_method.md - unchecks the checkbox of a tree item and all its sub-items

}}

{{block Tree Collection}}
{{api
- tree_collection/api/add.md - adds an item to a component
- tree_collection/api/cancopy.md - checks whether it is possible to copy a control into some other control
- tree_collection/api/copy.md - adds a copy of an item and places it in the specified position
- tree_collection/api/eachchild.md - iterates through child items of a control
- tree_collection/api/eachparent.md - iterates through all the parent items (the immediate parent and its parent, etc until the parent is the component itself)
- tree_collection/api/exists.md - checks if the control exists
- tree_collection/api/filter.md - filters controls by some criteria
- tree_collection/api/foreach.md - iterates over all items of a tree collection
- tree_collection/api/getid.md - gets the ID of an item
- tree_collection/api/getindex.md - gets the current position of an item
- tree_collection/api/getitem.md - gets an item by its ID
- tree_collection/api/getitems.md - gets the child items of a control
- tree_collection/api/getlength.md - counts child items of a control
- tree_collection/api/getparent.md - gets the ID of the parent of the control
- tree_collection/api/getroot.md - returns the ID of the master component
- tree_collection/api/haveitems.md - checks whether an item has children
- tree_collection/api/issaved.md - checks whether the changes made in a tree collection are saved to the server side
- tree_collection/api/load.md - loads items from a file
- tree_collection/api/loaditems.md - loads child items of a control from a file
- tree_collection/api/move.md - moves items to different positions
- tree_collection/api/parse.md - loads a collection of items from a local source
- tree_collection/api/refreshitems.md - refreshes child items of a control
- tree_collection/api/remove.md - removes an item
- tree_collection/api/removeall.md - clears the component of all controls
- tree_collection/api/restoreorder.md - restores the component to the state previous to sorting / filtering
- tree_collection/api/save.md - saves changes made in a tree collection to the server side
- tree_collection/api/serialize.md - returns a collection of all items
- tree_collection/api/sort.md - sorts controls according to some criteria
- tree_collection/api/update.md - changes an item
}}
{{end}}

{{block Selection}}
{{api
- tree/api/selection/selection_disable_method.md - disables selection of items in Tree
- tree/api/selection/selection_enable_method.md - enables selection of items in Tree
}}
{{end}}

<div class='h2'>Events</div>

{{api

- tree/api/tree_aftercollapse_event.md - fires after collapsing a tree item
- tree/api/tree_afterdrag_event.md - fires after dragging of an item is finished
- tree/api/tree_afterdrop_event.md - fires before the user has finished dragging an item but after the mouse button is released
- tree/api/tree_aftereditend_event.md - fires after editing of a tree item is finished
- tree/api/tree_aftereditstart_event.md - fires after editing of a tree item has started
- tree/api/tree_afterexpand_event.md - fires after expanding a tree item
- tree/api/tree_beforecollapse_event.md - fires before collapsing a tree item
- tree/api/tree_beforedrag_event.md - fires before dragging of an item has started 
- tree/api/tree_beforedrop_event.md - fires before the user has finished dragging an item and released the mouse button
- tree/api/tree_beforeeditend_event.md - fires before editing of a tree item is finished
- tree/api/tree_beforeeditstart_event.md - fires before editing of an item has started
- tree/api/tree_beforeexpand_event.md - fires before expanding a tree item
- tree/api/tree_canceldrop_event.md - fires on moving a mouse pointer out of item's borders while dragging the item
- tree/api/tree_candrop_event.md - fires when a dragged item is over a target item
- tree/api/tree_dragin_event.md - fires when an item is dragged to another potential target
- tree/api/tree_dragout_event.md - fires when an item is dragged out of a potential target
- tree/api/tree_dragstart_event.md - fires when dragging of an item has started
- tree/api/tree_focuschange_event.md - fires on moving focus to a new item
- tree/api/tree_itemclick_event.md - fires on clicking a tree item
- tree/api/tree_itemcontextmenu_event.md - fires on calling a context menu for a tree item on right click
- tree/api/tree_itemdblclick_event.md - fires on double-clicking a tree item
- tree/api/tree_itemrightclick_event.md - fires on right-clicking a tree item

}}

{{block Tree Collection}}
{{api
- tree_collection/api/afteradd_event.md - fires after adding a new item into a tree collection
- tree_collection/api/afterremove_event.md - fires after removing a new item from a tree collection
- tree_collection/api/beforeadd_event.md - fires before adding a new item into a tree collection
- tree_collection/api/beforeremove_event.md - fires before removing an item from a tree collection
- tree_collection/api/change_event.md - fires when a tree collection is modified
- tree_collection/api/load_event.md - fires when items are loaded in a tree collection
- tree_collection/api/loaderror_event.md - fires when loading of data fails
- tree_collection/api/removeall_event.md - fires when all items are removed from a tree collection
}}
{{end}}

{{block Selection}}
{{api
- tree/api/selection/selection_afterselect_event.md - fires after selecting an item
- tree/api/selection/selection_afterunselect_event.md - fires after unselecting an item
- tree/api/selection/selection_beforeselect_event.md - fires on selecting an item, but before the item is really selected
- tree/api/selection/selection_beforeunselect_event.md - fires on unselecting an item, but before the item is really unselected
}}
{{end}}

<div class='h2'>Properties</div>

{{api

- tree/api/tree_autoload_config.md - defines that the structure of a tree is being built while opening items
- tree/api/tree_checkbox_config.md - adds checkboxes to tree items
- tree/api/tree_css_config.md - adds a CSS class(es) to the component
- tree/api/tree_data_config.md - sets a dataset for a tree
- tree/api/tree_dragcopy_config.md - defines that an item is copied to a target during drag-n-drop
- tree/api/tree_dragmode_config.md - enables drag-n-drop in Tree
- tree/api/tree_dropbehaviour_config.md - defines the behaviour of a dragged item
- tree/api/tree_editable_config.md - enables editing of Tree items on a double-click
- tree/api/tree_editing_config.md - enables editing of Tree items on a double-click
- tree/api/tree_icon_config.md - allows adding custom icons for tree items
- tree/api/tree_isfolder_config.md - defines whether an item should be rendered as a folder
- tree/api/tree_keynavigation_config.md - enables key navigation in a tree
- tree/api/tree_rootid_config.md - sets the id for the root element
- tree/api/tree_selection_config.md - enables selection of Tree items

}}

@index:
- tree/api/refs/tree_methods.md
- tree/api/refs/tree_events.md
- tree/api/refs/tree_properties.md
- tree/api/refs/selection_methods.md
- tree/api/refs/selection_events.md