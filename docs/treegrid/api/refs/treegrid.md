Treegrid API
=============
	
<div class='h2'>Methods</div>

{{api

- treegrid/api/treegrid_addcellcss_method.md - adds a style to a cell
- treegrid/api/treegrid_addrowcss_method.md - adds a style to a row
- treegrid/api/treegrid_addspan_method.md - adds a rows/cols span
- treegrid/api/treegrid_adjustcolumnwidth_method.md - adjusts the width of a column to make all its content visible
- treegrid/api/treegrid_collapse_method.md - collapses a tree node by id
- treegrid/api/treegrid_collapseall_method.md - collapses all expanded Tree nodes
- treegrid/api/treegrid_destructor_method.md - removes a Grid instance and releases occupied resources
- treegrid/api/treegrid_edit_method.md - enables editing of a Grid cell
- treegrid/api/treegrid_editcell_method.md - enables editing of a TreeGrid cell
- treegrid/api/treegrid_editend_method.md - finishes editing in a cell
- treegrid/api/treegrid_expand_method.md - expands a tree node by id
- treegrid/api/treegrid_expandall_method.md - expands all collapsed tree nodes
- treegrid/api/treegrid_getcellrect_method.md - returns the parameters of a cell
- treegrid/api/treegrid_getcolumn_method.md - returns an object with attributes of a column
- treegrid/api/treegrid_getheaderfilter_method.md - returns an object of the header filter by column id
- treegrid/api/treegrid_getscrollstate_method.md - returns the coordinates of a position a grid has been scrolled to
- treegrid/api/treegrid_getsortingstate_method.md - returns the current state of sorting data in TreeGrid
- treegrid/api/treegrid_getspan_method.md - returns an object with spans
- treegrid/api/treegrid_groupby_method.md - groups grid content either by values of the specified column or by the result of calculation
- treegrid/api/treegrid_hidecolumn_method.md - hides a column of Grid
- treegrid/api/treegrid_hiderow_method.md - hides a row of TreeGrid
- treegrid/api/treegrid_iscolumnhidden_method.md - checks whether a column is hidden
- treegrid/api/treegrid_isrowhidden_method.md - checks whether a row is hidden
- treegrid/api/treegrid_paint_method.md - repaints a grid on a page
- treegrid/api/treegrid_removecellcss_method.md - removes a style from a cell
- treegrid/api/treegrid_removerowcss_method.md - removes a style from a row
- treegrid/api/treegrid_removespan_method.md - removes a cols/rows span
- treegrid/api/treegrid_scroll_method.md - scrolls a grid according to specified coordinates
- treegrid/api/treegrid_scrollto_method.md - scrolls a grid to a specified cell
- treegrid/api/treegrid_setcolumns_method.md - sets configuration for TreeGrid columns
- treegrid/api/treegrid_showcolumn_method.md - makes a specified column visible on a page
- treegrid/api/treegrid_showrow_method.md - makes a specified row visible on a page
- treegrid/api/treegrid_ungroup_method.md - ungroups the grid to return it into the plain view

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
- treegrid/api/selection/selection_disable_method.md - disables selection of cells in TreeGrid
- treegrid/api/selection/selection_enable_method.md - enables selection of cells in TreeGrid
- treegrid/api/selection/selection_getcell_method.md - returns the object of a selected cell
- treegrid/api/selection/selection_removecell_method.md - unselects previously selected cells
- treegrid/api/selection/selection_setcell_method.md - sets selection to a specified cell
}}
{{end}}

<div class='h2'>Events</div>

{{api

- treegrid/api/treegrid_aftercollapse_event.md - fires after collapsing a treegrid
- treegrid/api/treegrid_aftercolumndrag_event.md - fires after dragging of a column is finished
- treegrid/api/treegrid_aftercolumndrop_event.md - fires before the user has finished dragging a column but after the mouse button is released
- treegrid/api/treegrid_aftercolumnhide_event.md - fires after a column is hidden
- treegrid/api/treegrid_aftercolumnshow_event.md - fires after a column is shown
- treegrid/api/treegrid_aftereditend_event.md - fires after editing of a cell is ended
- treegrid/api/treegrid_aftereditstart_event.md - fires after editing of a cell has started
- treegrid/api/treegrid_afterexpand_event.md - fires after expanding a treegrid
- treegrid/api/treegrid_afterresizeend_event.md - fires after resizing of a column is ended
- treegrid/api/treegrid_afterrowdrag_event.md - fires after dragging of a row is finished
- treegrid/api/treegrid_afterrowdrop_event.md - fires before the user has finished dragging a row but after the mouse button is released
- treegrid/api/treegrid_afterrowhide_event.md - fires after a row is hidden
- treegrid/api/treegrid_afterrowshow_event.md - fires after a row is shown on a page
- treegrid/api/treegrid_beforecollapse_event.md - fires before collapsing a treegrid
- treegrid/api/treegrid_beforecolumndrag_event.md - fires before dragging of a column has started
- treegrid/api/treegrid_beforecolumndrop_event.md - fires before the user has finished dragging and released the mouse button over a target column
- treegrid/api/treegrid_beforecolumnhide_event.md - fires before a column is hidden
- treegrid/api/treegrid_beforecolumnshow_event.md - fires before a column is shown on a page
- treegrid/api/treegrid_beforeeditend_event.md - fires before editing of a cell is ended
- treegrid/api/treegrid_beforeeditstart_event.md - fires before editing of a cell has started
- treegrid/api/treegrid_beforeexpand_event.md - fires before expanding a treegrid
- treegrid/api/treegrid_beforeresizestart_event.md - fires before resizing of a column has started
- treegrid/api/treegrid_beforerowdrag_event.md - fires before dragging of a row has started
- treegrid/api/treegrid_beforerowdrop_event.md - fires before the user has finished dragging and released the mouse button over a target row
- treegrid/api/treegrid_beforerowhide_event.md - fires before a row is hidden
- treegrid/api/treegrid_beforerowshow_event.md - fires before a row is shown on a page
- treegrid/api/treegrid_cancolumndrop_event.md - fires when a dragged column is placed over a target column
- treegrid/api/treegrid_canrowdrop_event.md - fires when a dragged row is placed over a target row
- treegrid/api/treegrid_cancelcolumndrop_event.md - fires on moving a mouse pointer out of borders of a column while dragging the column
- treegrid/api/treegrid_cancelrowdrop_event.md - fires on moving a mouse pointer out of borders of a row while dragging the row
- treegrid/api/treegrid_cellclick_event.md - fires on click on a grid cell
- treegrid/api/treegrid_celldblclick_event.md - fires on double-click on a grid cell
- treegrid/api/treegrid_cellmousedown_event.md - fires before releasing the left mouse button when clicking on a grid cell
- treegrid/api/treegrid_cellmouseover_event.md - fires on moving the mouse pointer over a grid cell
- treegrid/api/treegrid_cellrightclick_event.md - fires on right click on a grid cell
- treegrid/api/treegrid_dragcolumnin_event.md - fires when a column is dragged to another potential target
- treegrid/api/treegrid_dragcolumnout_event.md - fires when a column is dragged out of a potential target
- treegrid/api/treegrid_dragcolumnstart_event.md - fires when dragging of a column has started
- treegrid/api/treegrid_dragrowin_event.md - fires when a row is dragged to another potential target
- treegrid/api/treegrid_dragrowout_event.md - fires when a row is dragged out of a potential target
- treegrid/api/treegrid_dragrowstart_event.md - fires when dragging of a row has started
- treegrid/api/treegrid_expand_event.md - fires on expanding a treegrid
- treegrid/api/treegrid_filterchange_event.md - fires on typing text in an input of a column's header
- treegrid/api/treegrid_footercellclick_event.md - fires on click on a grid footer cell
- treegrid/api/treegrid_footercelldblclick_event.md - fires on double-click on a grid footer cell
- treegrid/api/treegrid_footercellmousedown_event.md - fires on moving the mouse pointer over a grid footer cell
- treegrid/api/treegrid_footercellmouseover_event.md - fires on moving the mouse pointer over a grid footer cell
- treegrid/api/treegrid_footercellrightclick_event.md - fires on right click on a grid footer cell
- treegrid/api/treegrid_headercellclick_event.md - fires on click on a grid header cell
- treegrid/api/treegrid_headercelldblclick_event.md - fires on double-click on a grid footer cell
- treegrid/api/treegrid_headercellmousedown_event.md - fires on moving the mouse pointer over a grid header cell
- treegrid/api/treegrid_headercellmouseover_event.md - fires on moving the mouse pointer over a grid header cell
- treegrid/api/treegrid_headercellrightclick_event.md - fires on right click on a grid header cell
- treegrid/api/treegrid_headerinput_event.md - fires on typing text in an input of a column's header
- treegrid/api/treegrid_resize_event.md - fires on resizing a column
- treegrid/api/treegrid_scroll_event.md - fires on scrolling a grid
- treegrid/api/treegrid_sort_event.md - fires on sorting a column by clicking on its header

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
- treegrid/api/selection/selection_afterselect_event.md - fires after selecting a cell
- treegrid/api/selection/selection_afterunselect_event.md - fires after unselecting a cell
- treegrid/api/selection/selection_beforeselect_event.md - fires before selecting a cell
- treegrid/api/selection/selection_beforeunselect_event.md - fires before unselecting a cell
}}
{{end}}

<div class='h2'>Properties</div>

{{api

- treegrid/api/treegrid_adjust_config.md - defines whether the width of columns is automatically adjusted to the width of their content
- treegrid/api/treegrid_autowidth_config.md - makes treegrid's columns to fit the size of a treegrid
- treegrid/api/treegrid_columns_config.md - specifies the configuration of grid columns
- treegrid/api/treegrid_columnsautowidth_config.md - defines whether the width of columns is automatically adjusted to the width of their content
- treegrid/api/treegrid_css_config.md - adds style classes to Grid
- treegrid/api/treegrid_data_config.md - specifies an array of data objects to set into the grid
- treegrid/api/treegrid_dragcopy_config.md - defines that a row is copied to a target during drag-n-drop
- treegrid/api/treegrid_dragitem_config.md - enables the possibility to reorder treegrid columns by drag and drop
- treegrid/api/treegrid_dragmode_config.md - enables drag-n-drop in Grid
- treegrid/api/treegrid_editable_config.md - enables editing in Grid columns
- treegrid/api/treegrid_editing_config.md - enables editing in Grid columns
- treegrid/api/treegrid_eventhandlers_config.md - adds event handlers to HTML elements of a custom template of a TreeGrid cell or to the HTML elements defined in the data set of TreeGrid
- treegrid/api/treegrid_fittocontainer_config.md - makes grid to fit the size of a container
- treegrid/api/treegrid_footerrowheight_config.md - sets the height of rows in the footer
- treegrid/api/treegrid_grouptitletemplate_config.md - sets a template to the title of a group
- treegrid/api/treegrid_headerrowheight_config.md - sets the height of rows in the header
- treegrid/api/treegrid_headersort_config.md - defines whether sorting on clicking headers of columns is enabled
- treegrid/api/treegrid_height_config.md - sets the height of a grid
- treegrid/api/treegrid_htmlenable_config.md - specifies the HTML content (inner HTML) of TreeGrid columns
- treegrid/api/treegrid_leftsplit_config.md - sets the number of frozen columns
- treegrid/api/treegrid_resizable_config.md - defines whether columns can be resized
- treegrid/api/treegrid_rowcss_config.md - sets style for a row
- treegrid/api/treegrid_rowheight_config.md - defines the height of a row in a grid
- treegrid/api/treegrid_selection_config.md - enables selection in a grid
- treegrid/api/treegrid_sortable_config.md - defines whether sorting on clicking headers of columns is enabled
- treegrid/api/treegrid_spans_config.md - describes the configuration of cols/rows spans
- treegrid/api/treegrid_splitat_config.md - sets the number of frozen columns
- treegrid/api/treegrid_tooltip_config.md - enables a tooltip on hovering over the content of a column
- treegrid/api/treegrid_width_config.md - sets the width of a grid

}}

@index:
- treegrid/api/refs/treegrid_methods.md
- treegrid/api/refs/treegrid_events.md
- treegrid/api/refs/treegrid_properties.md
- treegrid/api/refs/selection_methods.md
- treegrid/api/refs/selection_events.md