Menu API
=============
	
<div class='h2'>Methods</div>

{{api

- menu/api/menu_destructor_method.md - removes a Menu instance and releases occupied resources
- menu/api/menu_disable_method.md - disables and dims an item(s) of Menu
- menu/api/menu_enable_method.md - enables a disabled item(s) of Menu
- menu/api/menu_getselected_method.md - returns an array of IDs of selected items
- menu/api/menu_hide_method.md - hides an item of Menu
- menu/api/menu_isdisabled_method.md - checks whether an item of Menu is disabled
- menu/api/menu_isselected_method.md - checks whether a specified Menu item is selected
- menu/api/menu_paint_method.md - repaints Menu on a page
- menu/api/menu_select_method.md - selects a specified item of Menu
- menu/api/menu_show_method.md - shows an item of Menu
- menu/api/menu_showat_method.md - shows a context menu
- menu/api/menu_unselect_method.md - unselects a selected Menu item
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

<div class='h2'>Events</div>

{{api

- menu/api/menu_afterhide_event.md - fires after hiding an item of Menu
- menu/api/menu_beforehide_event.md - fires before hiding an item of Menu
- menu/api/menu_click_event.md - fires after a click on a control
- menu/api/menu_inputblur_event.md - fires when a control is blurred
- menu/api/menu_inputcreated_event.md - fires when a new input is added
- menu/api/menu_inputfocus_event.md - fires when a control is focused
- menu/api/menu_openmenu_event.md - fires on expanding a menu control

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

<div class='h2'>Properties</div>

{{api

- menu/api/menu_css_config.md - adds style classes to menu
- menu/api/menu_data_config.md - specifies an array of data objects to set into Menu
- menu/api/menu_menucss_config.md - adds style classes to all containers of Menu controls with nested items 
- menu/api/menu_navigationtype_config.md - defines the action that opens menu options

}}

@index:
- menu/api/refs/menu_methods.md
- menu/api/refs/menu_events.md
- menu/api/refs/menu_properties.md

@todo:
Do not re-generate!