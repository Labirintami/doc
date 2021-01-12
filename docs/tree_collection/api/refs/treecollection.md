TreeCollection API
---
sidebar_label: 
title: 
---          

A set of API methods that allow you to work with data of a component with tree-like structure.

Methods
-----------

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


Events
-------------

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





@index:
- tree_collection/api/refs/treecollection_methods.md
- tree_collection/api/refs/tree_events.md