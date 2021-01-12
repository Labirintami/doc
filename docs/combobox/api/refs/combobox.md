Combobox API
=============
	
<div class='h2'>Methods</div>

{{api

- combo/api/combobox_clear_method.md - clears the value set in the Combo Box
- combo/api/combobox_destructor_method.md - removes a ComboBox instance and releases occupied resources
- combo/api/combobox_disable_method.md - disables ComboBox on a page
- combo/api/combobox_enable_method.md - enables a disabled ComboBox
- combo/api/combobox_focus_method.md - sets focus in the input without opening a popup with options
- combo/api/combobox_getvalue_method.md - gets id(s) of items from data collection selected in ComboBox
- combo/api/combobox_isdisabled_method.md - checks whether a combobox is disabled
- combo/api/combobox_paint_method.md - repaints a Combo Box
- combo/api/combobox_setvalue_method.md - selects option(s) in ComboBox

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

- combo/api/combobox_afterclose_event.md - fires after closing a list with options
- combo/api/combobox_beforeclose_event.md - fires before closing a list with options
- combo/api/combobox_change_event.md - fires when a new option is selected
- combo/api/combobox_close_event.md - fires when a list with options is closed
- combo/api/combobox_input_event.md - fires on typing text in an input of Combobox
- combo/api/combobox_open_event.md - fires when a list with options is opened

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

- combo/api/combobox_cellheight_config.md - sets the height of a cell in the list of options
- combo/api/combobox_css_config.md - adds style classes to ComboBox
- combo/api/combobox_data_config.md - specifies an array of data objects to set into the combobox
- combo/api/combobox_disabled_config.md - makes Combo Box disabled
- combo/api/combobox_filter_config.md - sets a custom function for filtering Combo Box options
- combo/api/combobox_help_config.md - adds an icon with a question mark next to the Combo input
- combo/api/combobox_helpmessage_config.md - adds an icon with a question mark next to the Combo input
- combo/api/combobox_hiddenlabel_config.md - adds a hidden label for a Combo box input that will be used while sending a form to the server
- combo/api/combobox_itemheight_config.md - sets the height of an item in the list of options
- combo/api/combobox_itemscount_config.md - shows the total number of selected options
- combo/api/combobox_label_config.md - adds a label for ComboBox
- combo/api/combobox_labelinline_config.md - defines whether a label will be placed in one line with ComboBox
- combo/api/combobox_labelposition_config.md - defines the position of a label of a combobox
- combo/api/combobox_labelwidth_config.md - sets the width of a label
- combo/api/combobox_listheight_config.md - sets the height of the list of options
- combo/api/combobox_multiselection_config.md - enables selection of multiple options in ComboBox
- combo/api/combobox_placeholder_config.md - sets a placeholder in the input of Combo
- combo/api/combobox_readonly_config.md - makes Combo Box readonly
- combo/api/combobox_selectallbutton_config.md - defines whether the Select All button should be shown
- combo/api/combobox_showitemscount_config.md - shows the total number of selected options
- combo/api/combobox_template_config.md - sets a template of displaying options in the popup list
- combo/api/combobox_value_config.md - specifies the values that will appear in the input on initialization of the combobox
- combo/api/combobox_virtual_config.md - enables dynamic loading of data on scrolling the list of options

}}

@index:
- combo/api/refs/combobox_methods.md
- combo/api/refs/combobox_events.md
- combo/api/refs/combobox_properties.md