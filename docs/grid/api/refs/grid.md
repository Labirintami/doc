Grid API
=============
	
<div class='h2'>Methods</div>

{{api

- grid/api/grid_addcellcss_method.md - adds a style to a cell
- grid/api/grid_addrowcss_method.md - adds a style to a row
- grid/api/grid_addspan_method.md - adds a rows/cols span
- grid/api/grid_adjustcolumnwidth_method.md - adjusts the width of a column to make all its content visible
- grid/api/grid_destructor_method.md - removes a Grid instance and releases occupied resources
- grid/api/grid_edit_method.md - enables editing of a Grid cell
- grid/api/grid_editcell_method.md - enables editing of a Grid cell
- grid/api/grid_editend_method.md - finishes editing in a cell
- grid/api/grid_getcellrect_method.md - returns the parameters of a cell
- grid/api/grid_getcolumn_method.md - returns an object with attributes of a column
- grid/api/grid_getheaderfilter_method.md - returns an object of the header filter by column id
- grid/api/grid_getscrollstate_method.md - returns the coordinates of a position a grid has been scrolled to
- grid/api/grid_getsortingstate_method.md - returns the current state of sorting data in Grid
- grid/api/grid_getspan_method.md - returns an object with spans
- grid/api/grid_hidecolumn_method.md - hides a column of Grid
- grid/api/grid_hiderow_method.md - hides a row of Grid
- grid/api/grid_iscolumnhidden_method.md - checks whether a column is hidden
- grid/api/grid_isrowhidden_method.md - checks whether a row is hidden
- grid/api/grid_paint_method.md - repaints a grid on a page
- grid/api/grid_removecellcss_method.md - removes a style from a cell
- grid/api/grid_removerowcss_method.md - removes a style from a row
- grid/api/grid_removespan_method.md - removes a cols/rows span
- grid/api/grid_scroll_method.md - scrolls a grid according to specified coordinates
- grid/api/grid_scrollto_method.md - scrolls a grid to a specified cell
- grid/api/grid_setcolumns_method.md - sets configuration for Grid columns
- grid/api/grid_showcolumn_method.md - makes a specified column visible on a page
- grid/api/grid_showrow_method.md - makes a specified row visible on a page

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
- grid/api/selection/selection_disable_method.md - disables selection of cells in Grid
- grid/api/selection/selection_enable_method.md - enables selection of cells in Grid
- grid/api/selection/selection_getcell_method.md - returns the object of a selected cell
- grid/api/selection/selection_getcells_method.md - returns an array with config objects of selected cells
- grid/api/selection/selection_removecell_method.md - unselects previously selected cells
- grid/api/selection/selection_setcell_method.md - sets selection to specified cells
}}
{{end}}

<div class='h2'>Events</div>

{{api

- grid/api/grid_aftercolumndrag_event.md - fires after dragging of a column is finished
- grid/api/grid_aftercolumndrop_event.md - fires before the user has finished dragging a column but after the mouse button is released
- grid/api/grid_aftercolumnhide_event.md - fires after a column is hidden
- grid/api/grid_aftercolumnshow_event.md - fires after a column is shown
- grid/api/grid_aftereditend_event.md - fires after editing of a cell is ended
- grid/api/grid_aftereditstart_event.md - fires after editing of a cell has started
- grid/api/grid_afterkeydown_event.md - fires after the user is pressing a shortcut key
- grid/api/grid_afterresizeend_event.md - fires after resizing of a column is ended
- grid/api/grid_afterrowdrag_event.md - fires after dragging of a row is finished
- grid/api/grid_afterrowdrop_event.md - fires before the user has finished dragging a row but after the mouse button is released
- grid/api/grid_afterrowhide_event.md - fires after a row is hidden
- grid/api/grid_afterrowshow_event.md - fires after a row is shown on a page
- grid/api/grid_beforecolumndrag_event.md - fires before dragging of a column has started
- grid/api/grid_beforecolumndrop_event.md - fires before the user has finished dragging and released the mouse button over a target column
- grid/api/grid_beforecolumnhide_event.md - fires before a column is hidden
- grid/api/grid_beforecolumnshow_event.md - fires before a column is shown on a page
- grid/api/grid_beforeeditend_event.md - fires before editing of a cell is completed
- grid/api/grid_beforeeditstart_event.md - fires before editing of a cell has started
- grid/api/grid_beforekeydown_event.md - fires before the user is pressing a shortcut key
- grid/api/grid_beforeresizestart_event.md - fires before resizing of a column has started
- grid/api/grid_beforerowdrag_event.md - fires before dragging of a row has started
- grid/api/grid_beforerowdrop_event.md - fires before the user has finished dragging and released the mouse button over a target row
- grid/api/grid_beforerowhide_event.md - fires before a row is hidden
- grid/api/grid_beforerowshow_event.md - fires before a row is shown on a page
- grid/api/grid_cancolumndrop_event.md - fires when a dragged column is placed over a target column
- grid/api/grid_canrowdrop_event.md - fires when a dragged row is placed over a target row
- grid/api/grid_cancelcolumndrop_event.md - fires on moving a mouse pointer out of borders of a column while dragging the column
- grid/api/grid_cancelrowdrop_event.md - fires on moving a mouse pointer out of borders of a row while dragging the row
- grid/api/grid_cellclick_event.md - fires on click on a grid cell
- grid/api/grid_celldblclick_event.md - fires on double-click on a grid cell
- grid/api/grid_cellmousedown_event.md - fires before releasing the left mouse button when clicking on a grid cell
- grid/api/grid_cellmouseover_event.md - fires on moving the mouse pointer over a grid cell
- grid/api/grid_cellrightclick_event.md - fires on right click on a grid cell
- grid/api/grid_dragcolumnin_event.md - fires when a column is dragged to another potential target
- grid/api/grid_dragcolumnout_event.md - fires when a column is dragged out of a potential target
- grid/api/grid_dragcolumnstart_event.md - fires when dragging of a column has started
- grid/api/grid_dragrowin_event.md - fires when a row is dragged to another potential target
- grid/api/grid_dragrowout_event.md - fires when a row is dragged out of a potential target
- grid/api/grid_dragrowstart_event.md - fires when dragging of a row has started
- grid/api/grid_filterchange_event.md - fires on typing text in an input of a column's header
- grid/api/grid_footercellclick_event.md - fires on click on a grid footer cell
- grid/api/grid_footercelldblclick_event.md - fires on double-click on a grid footer cell
- grid/api/grid_footercellmousedown_event.md - fires on moving the mouse pointer over a grid footer cell
- grid/api/grid_footercellmouseover_event.md - fires on moving the mouse pointer over a grid footer cell
- grid/api/grid_footercellrightclick_event.md - fires on right click on a grid footer cell
- grid/api/grid_headercellclick_event.md - fires on click on a grid header cell
- grid/api/grid_headercelldblclick_event.md - fires on double-click on a grid footer cell
- grid/api/grid_headercellmousedown_event.md - fires on moving the mouse pointer over a grid header cell
- grid/api/grid_headercellmouseover_event.md - fires on moving the mouse pointer over a grid header cell
- grid/api/grid_headercellrightclick_event.md - fires on right click on a grid header cell
- grid/api/grid_headerinput_event.md - fires on typing text in an input of a column's header
- grid/api/grid_resize_event.md - fires on resizing a column
- grid/api/grid_scroll_event.md - fires on scrolling a grid
- grid/api/grid_sort_event.md - fires on sorting a column by clicking on its header

}}

{{block Selection}}
{{api
- grid/api/selection/selection_afterselect_event.md - fires after selecting a cell
- grid/api/selection/selection_afterunselect_event.md - fires after unselecting a cell
- grid/api/selection/selection_beforeselect_event.md - fires before selecting a cell
- grid/api/selection/selection_beforeunselect_event.md - fires before unselecting a cell
}}
{{end}}

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

- grid/api/grid_adjust_config.md - defines whether the width of columns is automatically adjusted to the width of their content
- grid/api/grid_autoemptyrow_config.md - adds an empty row after the last filled row in the Grid
- grid/api/grid_autowidth_config.md - makes grid's columns to fit the size of a grid
- grid/api/grid_columns_config.md - specifies the configuration of grid columns
- grid/api/grid_columnsautowidth_config.md - defines whether the width of columns is automatically adjusted to the width of their content
- grid/api/grid_css_config.md - adds style classes to Grid
- grid/api/grid_data_config.md - specifies an array of data objects to set into the grid
- grid/api/grid_dragcopy_config.md - defines that a row is copied to a target during drag-n-drop
- grid/api/grid_dragitem_config.md - enables the possibility to reorder grid columns by drag and drop
- grid/api/grid_dragmode_config.md - enables drag-n-drop in Grid
- grid/api/grid_editable_config.md - enables editing in Grid columns
- grid/api/grid_editing_config.md - enables editing in Grid columns
- grid/api/grid_eventhandlers_config.md - adds event handlers to HTML elements of a custom template of a Grid cell or to the HTML elements defined in the data set of Grid
- grid/api/grid_fittocontainer_config.md - makes grid to fit the size of a container
- grid/api/grid_footerrowheight_config.md - sets the height of rows in the footer
- grid/api/grid_headerrowheight_config.md - sets the height of rows in the header
- grid/api/grid_headersort_config.md - defines whether sorting on clicking headers of columns is enabled
- grid/api/grid_height_config.md - sets the height of a grid
- grid/api/grid_htmlenable_config.md - specifies the HTML content (inner HTML) of Grid columns
- grid/api/grid_keynavigation_config.md - enables keyboard navigation in Grid
- grid/api/grid_leftsplit_config.md - sets the number of frozen columns
- grid/api/grid_multiselection_config.md - enables multi-row/multi-cell selection in Grid
- grid/api/grid_resizable_config.md - defines whether columns can be resized
- grid/api/grid_rowcss_config.md - sets style for a row
- grid/api/grid_rowheight_config.md - defines the height of a row in a grid
- grid/api/grid_selection_config.md - enables selection in a grid
- grid/api/grid_sortable_config.md - defines whether sorting on clicking headers of columns is enabled
- grid/api/grid_spans_config.md - describes the configuration of cols/rows spans
- grid/api/grid_splitat_config.md - sets the number of frozen columns
- grid/api/grid_tooltip_config.md - enables a tooltip on hovering over the content of a column
- grid/api/grid_width_config.md - sets the width of a grid

}}

@index:
- grid/api/refs/grid_methods.md
- grid/api/refs/grid_events.md
- grid/api/refs/grid_properties.md
- grid/api/refs/selection_methods.md
- grid/api/refs/selection_events.md