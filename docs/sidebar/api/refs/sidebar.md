Sidebar API
---
sidebar_label: 
title: 
---          
	
<div class='h2'>Methods</div>

{{api

- sidebar/api/sidebar_collapse_method.md - collapses a sidebar
- sidebar/api/sidebar_destructor_method.md - removes a Sidebar instance and releases occupied resources
- sidebar/api/sidebar_disable_method.md - disables and dims items of Sidebar
- sidebar/api/sidebar_enable_method.md - enables disabled items of Sidebar
- sidebar/api/sidebar_expand_method.md - expands a sidebar
- sidebar/api/sidebar_getselected_method.md - returns an array of IDs of selected items
- sidebar/api/sidebar_hide_method.md - hides items of Sidebar
- sidebar/api/sidebar_iscollapsed_method.md - checks whether Sidebar is collapsed
- sidebar/api/sidebar_isdisabled_method.md - checks whether an item of Sidebar is disabled
- sidebar/api/sidebar_isselected_method.md - checks whether a specified Sidebar item is selected
- sidebar/api/sidebar_paint_method.md - repaints Sidebar on a page
- sidebar/api/sidebar_select_method.md - selects a specified Sidebar item
- sidebar/api/sidebar_show_method.md - shows items of Sidebar
- sidebar/api/sidebar_toggle_method.md - expands/collapses Sidebar
- sidebar/api/sidebar_unselect_method.md - unselects a selected Sidebar item

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

- sidebar/api/sidebar_aftercollapse_event.md - fires after collapsing a sidebar
- sidebar/api/sidebar_afterexpand_event.md - fires after expanding a sidebar
- sidebar/api/sidebar_afterhide_event.md - fires after hiding an item of Sidebar
- sidebar/api/sidebar_beforecollapse_event.md - fires before collapsing a sidebar
- sidebar/api/sidebar_beforeexpand_event.md - fires before expanding a sidebar
- sidebar/api/sidebar_beforehide_event.md - fires before hiding an item of Sidebar
- sidebar/api/sidebar_click_event.md - fires after a click on a control
- sidebar/api/sidebar_inputblur_event.md - fires when a control is blurred
- sidebar/api/sidebar_inputcreated_event.md - fires when a new input is added
- sidebar/api/sidebar_inputfocus_event.md - fires when a control is focused
- sidebar/api/sidebar_openmenu_event.md - fires on expanding a menu control
- sidebar/api/sidebar_toggle_event.md - fires on expanding/collapsing Sidebar

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

- sidebar/api/sidebar_collapsed_config.md - defines that a sidebar is initialized in the collapsed state
- sidebar/api/sidebar_css_config.md - adds style classes to Sidebar
- sidebar/api/sidebar_data_config.md - specifies an array of data objects to set into Sidebar
- sidebar/api/sidebar_menucss_config.md - adds style classes to all containers of Sidebar controls with nested items 
- sidebar/api/sidebar_minwidth_config.md - sets the minimal width of a sidebar in the collapsed state
- sidebar/api/sidebar_width_config.md - sets the width of a sidebar

}}

@index:
- sidebar/api/refs/sidebar_methods.md
- sidebar/api/refs/sidebar_events.md
- sidebar/api/refs/sidebar_properties.md