---
sidebar_label: Owerview
title: Owerview
---          

A set of APIs that allow you to work with data of a component.

Methods
-----------

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
- data_collection/api/getnearid.md - returns the id of an item which is nearest to the specified one
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

Events
-------------

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



@index:
- data_collection/api/refs/data_methods.md
- data_collection/api/refs/data_events.md



