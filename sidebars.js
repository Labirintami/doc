module.exports = {
    docs: [{
            type: "doc",
            id: "index",
        },
        //Calendar
        {
            type: "category",
            label: "Calendar",
            collapsed: true,
            items: [
                "calendar/how_to_start",
                "calendar/operating_calendar",
                "calendar/datepicker",
                "calendar/api",
                "calendar/handling_events",
                "calendar/customization",
                "calendar/localizing_calendar",
                "calendar/migration",
                "calendar/index",
                "calendar/migration_1",
                "calendar/configuring",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview",

                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_link_method",
                                "calendar/api/calendar_clear_method",
                                "calendar/api/calendar_paint_method",
                                "calendar/api/calendar_getcurrentmode_method",
                                "calendar/api/calendar_getvalue_method",
                                "calendar/api/calendar_setvalue_method",
                                "calendar/api/calendar_showdate_method",
                                "calendar/api/calendar_destructor_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_change_event",
                                "calendar/api/calendar_datehover_event",
                                "calendar/api/calendar_cancelclick_event",
                                "calendar/api/calendar_modechange_event",
                                "calendar/api/calendar_yearselected_event",
                                "calendar/api/calendar_monthselected_event",
                                "calendar/api/calendar_datemouseover_event",
                                "calendar/api/calendar_beforechange_event",
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_date_config",
                                "calendar/api/calendar_thismonthonly_config",
                                "calendar/api/calendar_disableddates_config",
                                "calendar/api/calendar_weeknumbers_config",
                                "calendar/api/calendar_dateformat_config",
                                "calendar/api/calendar_timepicker_config",
                                "calendar/api/calendar_timeformat_config",
                                "calendar/api/calendar_block_config",
                                "calendar/api/calendar_value_config",
                                "calendar/api/calendar_view_config",
                                "calendar/api/calendar_weekstart_config",
                                "calendar/api/calendar_css_config",
                                "calendar/api/calendar_mode_config",
                                "calendar/api/calendar_mark_config",
                                "calendar/api/calendar_range_config",
                                "calendar/api/calendar_width_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end Calendar 












        //Chart
        {
            type: "category",
            label: "Chart",
            collapsed: true,
            items: [
                "chart/configuration_properties",
                "chart/events",
                "chart/charts_overview",
                "chart/initialization",
                "chart/api",
                "chart/chart_initialization",
                "chart/customization",
                "chart/usage",
                "chart/migration",
                "chart/data_loading",
                "chart/index",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview", //todo //todo
                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [
                                "chart/api/chart_getseries_method",
                                "chart/api/chart_eachseries_method",
                                "chart/api/chart_destructor_method",
                                "chart/api/chart_paint_method",
                                "chart/api/chart_setconfig_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "chart/api/chart_toggleseries_event",
                                "chart/api/chart_serieclick_event",
                                "chart/api/chart_resize_event",
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "chart/api/chart_css_config",
                                "chart/api/chart_series_config",
                                "chart/api/chart_type_config",
                                "chart/api/chart_maxpoints_config",
                                "chart/api/chart_scales_config",
                                "chart/api/chart_legend_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end Chart 







        //Colorpicker
        {
            type: "category",
            label: "Colorpicker",
            collapsed: true,
            items: [
                "colorpicker/how_to_start",
                "colorpicker/manipulating_colorpicker",
                "colorpicker/handling_events",
                "colorpicker/customization",
                "colorpicker/localizing_colorpicker",
                "colorpicker/migration",
                "colorpicker/temp_api",
                "colorpicker/index",
                "colorpicker/configuration",
                "colorpicker/migration_1",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview", //todo 
                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [
                                "colorpicker/api/colorpicker_clear_method",
                                "colorpicker/api/colorpicker_getview_method",
                                "colorpicker/api/colorpicker_setview_method",
                                "colorpicker/api/colorpicker_getcurrentmode_method",
                                "colorpicker/api/colorpicker_setcustomcolors_method",
                                "colorpicker/api/colorpicker_setvalue_method",
                                "colorpicker/api/colorpicker_getvalue_method",
                                "colorpicker/api/colorpicker_destructor_method",
                                "colorpicker/api/colorpicker_focusvalue_method",
                                "colorpicker/api/colorpicker_setfocus_method",
                                "colorpicker/api/colorpicker_getcustomcolors_method",
                                "colorpicker/api/colorpicker_paint_method",
                                "colorpicker/api/colorpicker_setcurrentmode_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "colorpicker/api/colorpicker_apply_event",
                                "colorpicker/api/colorpicker_viewchange_event",
                                "colorpicker/api/colorpicker_modechange_event",
                                "colorpicker/api/colorpicker_colorchange_event",
                                "colorpicker/api/colorpicker_cancelclick_event",
                                "colorpicker/api/colorpicker_change_event",
                                "colorpicker/api/colorpicker_selectclick_event",
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "colorpicker/api/colorpicker_customcolors_config",
                                "colorpicker/api/colorpicker_css_config",
                                "colorpicker/api/colorpicker_width_config",
                                "colorpicker/api/colorpicker_pickeronly_config",
                                "colorpicker/api/colorpicker_mode_config",
                                "colorpicker/api/colorpicker_paletteonly_config",
                                "colorpicker/api/colorpicker_grayshades_config",
                                "colorpicker/api/colorpicker_palette_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end ColorPicker 


        //Combobox
        {
            type: "category",
            label: "Combobox",
            collapsed: true,
            items: [
                "combobox/temp_api_combo",
                "combobox/adding_options",
                "combobox/how_to_start",
                "combobox/localization",
                "combobox/handling_events",
                "combobox/customization",
                "combobox/migration",
                "combobox/work_with_combo",
                "combobox/index",
                "combobox/configuration",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview", //todo 
                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [

                                "combobox/api/combobox_getvalue_method",
                                "combobox/api/combobox_setvalue_method",
                                "combobox/api/combobox_isdisabled_method",
                                "combobox/api/combobox_paint_method",
                                "combobox/api/combobox_clear_method",
                                "combobox/api/combobox_disable_method",
                                "combobox/api/combobox_setstate_method",
                                "combobox/api/combobox_enable_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "combobox/api/combobox_close_event",
                                "combobox/api/combobox_beforeclose_event",
                                "combobox/api/combobox_input_event",
                                "combobox/api/combobox_afterclose_event",
                                "combobox/api/combobox_destructor_method",
                                "combobox/api/combobox_open_event",
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "combobox/api/combobox_multiselection_config",
                                "combobox/api/combobox_readonly_config",
                                "combobox/api/combobox_hiddenlabel_config",
                                "combobox/api/combobox_value_config",
                                "combobox/api/combobox_data_config",
                                "combobox/api/combobox_label_config",
                                "combobox/api/combobox_labelinline_config",
                                "combobox/api/combobox_required_config",
                                "combobox/api/combobox_disabled_config",
                                "combobox/api/combobox_labelwidth_config",
                                "combobox/api/combobox_cellheight_config",
                                "combobox/api/combobox_selectallbutton_config",
                                "combobox/api/combobox_itemscount_config",
                                "combobox/api/combobox_itemheight_config",
                                "combobox/api/combobox_virtual_config",
                                "combobox/api/combobox_listheight_config",
                                "combobox/api/combobox_helpmessage_config",
                                "combobox/api/combobox_css_config",
                                "combobox/api/combobox_filter_config",
                                "combobox/api/combobox_help_config",
                                "combobox/api/combobox_template_config",
                                "combobox/api/combobox_showitemscount_config",
                                "combobox/api/combobox_labelposition_config",
                                "combobox/api/combobox_placeholder_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end Combobox 

        // | | | | | | |--->dataview

        // | | | | | | | |--->api
        // | | | | | | | | |--->dataview_setfocusindex_method.md
        // | | | | | | | | |--->dataview_keynavigation_config.md
        // | | | | | | | | |--->dataview_dragmode_config.md
        // | | | | | | | | |--->dataview_afterdrag_event.md
        // | | | | | | | | |--->dataview_getfocusitem_method.md
        // | | | | | | | | |--->dataview_click_event.md
        // | | | | | | | | |--->dataview_dragstart_event.md
        // | | | | | | | | |--->dataview_dragin_event.md
        // | | | | | | | | |--->dataview_editing_config.md
        // | | | | | | | | |--->dataview_destructor_method.md
        // | | | | | | | | |--->dataview_itemmouseover_event.md
        // | | | | | | | | |--->dataview_height_config.md
        // | | | | | | | | |--->dataview_dragcopy_config.md
        // | | | | | | | | |--->dataview_paint_method.md
        // | | | | | | | | |--->dataview_beforeeditstart_event.md
        // | | | | | | | | |--->dataview_multiselectionmode_config.md
        // | | | | | | | | |--->dataview_itemheight_config.md
        // | | | | | | | | |--->dataview_afterdrop_event.md
        // | | | | | | | | |--->dataview_css_config.md
        // | | | | | | | | |--->dataview_template_config.md
        // | | | | | | | | |--->dataview_dragout_event.md
        // | | | | | | | | |--->dataview_selection_config.md
        // | | | | | | | | |--->dataview_edit_method.md
        // | | | | | | | | |--->dataview_beforedrag_event.md
        // | | | | | | | | |--->dataview_beforeeditend_event.md
        // | | | | | | | | |--->dataview_doubleclick_event.md
        // | | | | | | | | |--->dataview_edititem_method.md
        // | | | | | | | | |--->dataview_gap_config.md
        // | | | | | | | | |--->dataview_aftereditstart_event.md
        // | | | | | | | | |--->dataview_selection_object.md
        // | | | | | | | | |--->refs
        // | | | | | | | | | |--->dataview_properties.md
        // | | | | | | | | | |--->selection_events.md
        // | | | | | | | | | |--->dataview_events.md
        // | | | | | | | | | |--->selection_methods.md          //структура отличается
        // | | | | | | | | | |--->dataview.md
        // | | | | | | | | | |--->dataview_methods.md
        // | | | | | | | | |--->dataview_focuschange_event.md
        // | | | | | | | | |--->dataview_contextmenu_event.md
        // | | | | | | | | |--->dataview_eventhandlers_config.md
        // | | | | | | | | |--->dataview_aftereditend_event.md
        // | | | | | | | | |--->dataview_itemrightclick_event.md
        // | | | | | | | | |--->dataview_disableselection_method.md
        // | | | | | | | | |--->selection
        // | | | | | | | | | |--->selection_afterunselect_event.md
        // | | | | | | | | | |--->selection_beforeselect_event.md
        // | | | | | | | | | |--->selection_beforeunselect_event.md
        // | | | | | | | | | |--->selection_afterselect_event.md
        // | | | | | | | | | |--->selection_enable_method.md
        // | | | | | | | | | |--->selection_disable_method.md
        // | | | | | | | | |--->dataview_itemsinrow_config.md
        // | | | | | | | | |--->dataview_multiselection_config.md
        // | | | | | | | | |--->dataview_beforedrop_event.md
        // | | | | | | | | |--->dataview_enableselection_method.md
        // | | | | | | | | |--->dataview_getfocusindex_method.md
        // | | | | | | | | |--->dataview_canceldrop_event.md
        // | | | | | | | | |--->dataview_setfocus_method.md
        // | | | | | | | | |--->dataview_getfocus_method.md
        // | | | | | | | | |--->dataview_candrop_event.md
        // | | | | | | | | |--->dataview_editable_config.md
        // | | | | | | | | |--->dataview_data_config.md
        // | | | | | | | | |--->dataview_data_object.md
        // | | | | | | | |--->events.md
        // | | | | | | | |--->initialization.md
        // | | | | | | | |--->api.md
        // | | | | | | | |--->customization.md
        // | | | | | | | |--->usage_selection.md
        // | | | | | | | |--->migration.md
        // | | | | | | | |--->manipulating_data.md
        // | | | | | | | |--->data_loading.md
        // | | | | | | | |--->index.md
        // | | | | | | | |--->configuration.md





        //Dataview
        {
            type: "category",
            label: "Dataview",
            collapsed: true,
            items: [
                "calendar/how_to_start",
                "calendar/operating_calendar",
                "calendar/datepicker",
                "calendar/api",
                "calendar/handling_events",
                "calendar/customization",
                "calendar/localizing_calendar",
                "calendar/migration",
                "calendar/index",
                "calendar/migration_1",
                "calendar/configuring",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview", //todo 
                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_link_method",
                                "calendar/api/calendar_clear_method",
                                "calendar/api/calendar_paint_method",
                                "calendar/api/calendar_getcurrentmode_method",
                                "calendar/api/calendar_getvalue_method",
                                "calendar/api/calendar_setvalue_method",
                                "calendar/api/calendar_showdate_method",
                                "calendar/api/calendar_destructor_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_change_event",
                                "calendar/api/calendar_datehover_event",
                                "calendar/api/calendar_cancelclick_event",
                                "calendar/api/calendar_modechange_event",
                                "calendar/api/calendar_yearselected_event",
                                "calendar/api/calendar_monthselected_event",
                                "calendar/api/calendar_datemouseover_event",
                                "calendar/api/calendar_beforechange_event",
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_date_config",
                                "calendar/api/calendar_thismonthonly_config",
                                "calendar/api/calendar_disableddates_config",
                                "calendar/api/calendar_weeknumbers_config",
                                "calendar/api/calendar_dateformat_config",
                                "calendar/api/calendar_timepicker_config",
                                "calendar/api/calendar_timeformat_config",
                                "calendar/api/calendar_block_config",
                                "calendar/api/calendar_value_config",
                                "calendar/api/calendar_view_config",
                                "calendar/api/calendar_weekstart_config",
                                "calendar/api/calendar_css_config",
                                "calendar/api/calendar_mode_config",
                                "calendar/api/calendar_mark_config",
                                "calendar/api/calendar_range_config",
                                "calendar/api/calendar_width_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end Dataview 


        // аццки большое количество файлов в форме


        //Form
        {
            type: "category",
            label: "Form",
            collapsed: true,
            items: [
                "calendar/how_to_start",
                "calendar/operating_calendar",
                "calendar/datepicker",
                "calendar/api",
                "calendar/handling_events",
                "calendar/customization",
                "calendar/localizing_calendar",
                "calendar/migration",
                "calendar/index",
                "calendar/migration_1",
                "calendar/configuring",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview", //todo
                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_link_method",
                                "calendar/api/calendar_clear_method",
                                "calendar/api/calendar_paint_method",
                                "calendar/api/calendar_getcurrentmode_method",
                                "calendar/api/calendar_getvalue_method",
                                "calendar/api/calendar_setvalue_method",
                                "calendar/api/calendar_showdate_method",
                                "calendar/api/calendar_destructor_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_change_event",
                                "calendar/api/calendar_datehover_event",
                                "calendar/api/calendar_cancelclick_event",
                                "calendar/api/calendar_modechange_event",
                                "calendar/api/calendar_yearselected_event",
                                "calendar/api/calendar_monthselected_event",
                                "calendar/api/calendar_datemouseover_event",
                                "calendar/api/calendar_beforechange_event",
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_date_config",
                                "calendar/api/calendar_thismonthonly_config",
                                "calendar/api/calendar_disableddates_config",
                                "calendar/api/calendar_weeknumbers_config",
                                "calendar/api/calendar_dateformat_config",
                                "calendar/api/calendar_timepicker_config",
                                "calendar/api/calendar_timeformat_config",
                                "calendar/api/calendar_block_config",
                                "calendar/api/calendar_value_config",
                                "calendar/api/calendar_view_config",
                                "calendar/api/calendar_weekstart_config",
                                "calendar/api/calendar_css_config",
                                "calendar/api/calendar_mode_config",
                                "calendar/api/calendar_mark_config",
                                "calendar/api/calendar_range_config",
                                "calendar/api/calendar_width_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end Form 

        // | | | | | | |--->grid

        // | | | | | | | |--->api
        // | | | | | | | | |--->grid_cancelrowdrop_event.md
        // | | | | | | | | |--->grid_footercellrightclick_event.md
        // | | | | | | | | |--->grid_resizable_config.md
        // | | | | | | | | |--->grid_beforerowdrag_event.md
        // | | | | | | | | |--->grid_rowheight_config.md
        // | | | | | | | | |--->grid_editend_method.md
        // | | | | | | | | |--->grid_beforeeditstart_event.md
        // | | | | | | | | |--->grid_getspan_method.md
        // | | | | | | | | |--->grid_getsortingstate_method.md
        // | | | | | | | | |--->grid_dragrowin_event.md
        // | | | | | | | | |--->grid_showcolumn_method.md
        // | | | | | | | | |--->grid_headersort_config.md
        // | | | | | | | | |--->grid_cellrightclick_event.md
        // | | | | | | | | |--->grid_keynavigation_config.md
        // | | | | | | | | |--->grid_beforerowshow_event.md
        // | | | | | | | | |--->grid_height_config.md
        // | | | | | | | | |--->grid_headercellmouseover_event.md
        // | | | | | | | | |--->grid_setcolumns_method.md
        // | | | | | | | | |--->grid_canrowdrop_event.md
        // | | | | | | | | |--->grid_afterrowdrag_event.md
        // | | | | | | | | |--->grid_fittocontainer_config.md
        // | | | | | | | | |--->grid_headercellclick_event.md
        // | | | | | | | | |--->grid_getcellrect_method.md
        // | | | | | | | | |--->grid_beforecolumndrop_event.md
        // | | | | | | | | |--->grid_addcellcss_method.md
        // | | | | | | | | |--->grid_sort_event.md
        // | | | | | | | | |--->grid_beforecolumnhide_event.md
        // | | | | | | | | |--->grid_afterrowshow_event.md
        // | | | | | | | | |--->grid_getcolumn_method.md
        // | | | | | | | | |--->grid_htmlenable_config.md
        // | | | | | | | | |--->grid_adjustcolumnwidth_method.md
        // | | | | | | | | |--->grid_beforerowdrop_event.md
        // | | | | | | | | |--->grid_beforeresizestart_event.md
        // | | | | | | | | |--->grid_scroll_method.md
        // | | | | | | | | |--->grid_selection_config.md
        // | | | | | | | | |--->grid_beforerowhide_event.md
        // | | | | | | | | |--->grid_headerrowheight_config.md
        // | | | | | | | | |--->grid_iscolumnhidden_method.md
        // | | | | | | | | |--->grid_rowcss_config.md
        // | | | | | | | | |--->grid_headercellmousedown_event.md
        // | | | | | | | | |--->grid_headerinput_event.md
        // | | | | | | | | |--->grid_removecellcss_method.md
        // | | | | | | | | |--->grid_leftsplit_config.md
        // | | | | | | | | |--->grid_paint_method.md
        // | | | | | | | | |--->grid_addrowcss_method.md
        // | | | | | | | | |--->grid_filterchange_event.md
        // | | | | | | | | |--->grid_tooltip_config.md
        // | | | | | | | | |--->grid_removespan_method.md
        // | | | | | | | | |--->grid_editcell_method.md
        // | | | | | | | | |--->grid_afterrowdrop_event.md
        // | | | | | | | | |--->grid_columns_config.md
        // | | | | | | | | |--->grid_editable_config.md
        // | | | | | | | | |--->grid_dragcolumnout_event.md
        // | | | | | | | | |--->grid_beforecolumnshow_event.md
        // | | | | | | | | |--->grid_afterrowhide_event.md
        // | | | | | | | | |--->grid_dragrowout_event.md
        // | | | | | | | | |--->grid_dragrowstart_event.md
        // | | | | | | | | |--->grid_css_config.md
        // | | | | | | | | |--->grid_editing_config.md
        // | | | | | | | | |--->grid_beforecolumndrag_event.md
        // | | | | | | | | |--->grid_scroll_event.md
        // | | | | | | | | |--->grid_columnsautowidth_config.md
        // | | | | | | | | |--->grid_hiderow_method.md
        // | | | | | | | | |--->grid_destructor_method.md
        // | | | | | | | | |--->grid_footercellclick_event.md
        // | | | | | | | | |--->grid_aftercolumndrag_event.md
        // | | | | | | | | |--->grid_data_object.md
        // | | | | | | | | |--->grid_splitat_config.md
        // | | | | | | | | |--->grid_spans_config.md
        // | | | | | | | | |--->grid_multiselection_config.md
        // | | | | | | | | |--->grid_data_config.md
        // | | | | | | | | |--->grid_dragcolumnin_event.md
        // | | | | | | | | |--->grid_addspan_method.md
        // | | | | | | | | |--->grid_expand_event.md
        // | | | | | | | | |--->grid_aftereditstart_event.md
        // | | | | | | | | |--->grid_sortable_config.md
        // | | | | | | | | |--->grid_autoemptyrow_config.md
        // | | | | | | | | |--->grid_aftercolumnshow_event.md
        // | | | | | | | | |--->grid_adjust_config.md
        // | | | | | | | | |--->grid_dragmode_config.md
        // | | | | | | | | |--->grid_cancolumndrop_event.md
        // | | | | | | | | |--->refs
        // | | | | | | | | | |--->grid_methods.md
        // | | | | | | | | | |--->grid_properties.md
        // | | | | | | | | | |--->selection_events.md
        // | | | | | | | | | |--->selection_methods.md
        // | | | | | | | | | |--->grid.md
        // | | | | | | | | | |--->grid_events.md
        // | | | | | | | | |--->grid_resize_event.md
        // | | | | | | | | |--->grid_eventhandlers_config.md
        // | | | | | | | | |--->grid_cellmouseover_event.md
        // | | | | | | | | |--->grid_autowidth_config.md
        // | | | | | | | | |--->grid_footercellmousedown_event.md
        // | | | | | | | | |--->grid_cellclick_event.md
        // | | | | | | | | |--->grid_dragitem_config.md
        // | | | | | | | | |--->grid_aftereditend_event.md
        // | | | | | | | | |--->grid_aftercolumndrop_event.md
        // | | | | | | | | |--->grid_dragcolumnstart_event.md
        // | | | | | | | | |--->selection
        // | | | | | | | | | |--->selection_afterunselect_event.md
        // | | | | | | | | | |--->selection_beforeselect_event.md
        // | | | | | | | | | |--->selection_beforeunselect_event.md
        // | | | | | | | | | |--->selection_getcell_method.md
        // | | | | | | | | | |--->selection_getcells_method.md
        // | | | | | | | | | |--->selection_afterselect_event.md
        // | | | | | | | | | |--->selection_removecell_method.md
        // | | | | | | | | | |--->selection_enable_method.md
        // | | | | | | | | | |--->selection_disable_method.md
        // | | | | | | | | | |--->selection_setcell_method.md
        // | | | | | | | | |--->grid_afterresizeend_event.md
        // | | | | | | | | |--->grid_aftercolumnhide_event.md
        // | | | | | | | | |--->grid_getheaderfilter_method.md
        // | | | | | | | | |--->grid_showrow_method.md
        // | | | | | | | | |--->grid_cancelcolumndrop_event.md
        // | | | | | | | | |--->grid_dragcopy_config.md
        // | | | | | | | | |--->grid_beforekeydown_event.md
        // | | | | | | | | |--->grid_export_object.md
        // | | | | | | | | |--->grid_width_config.md
        // | | | | | | | | |--->grid_headercellrightclick_event.md
        // | | | | | | | | |--->grid_footercelldblclick_event.md
        // | | | | | | | | |--->grid_removerowcss_method.md
        // | | | | | | | | |--->grid_beforeeditend_event.md
        // | | | | | | | | |--->grid_footerrowheight_config.md
        // | | | | | | | | |--->grid_scrollto_method.md
        // | | | | | | | | |--->grid_celldblclick_event.md
        // | | | | | | | | |--->grid_getscrollstate_method.md
        // | | | | | | | | |--->grid_footercellmouseover_event.md
        // | | | | | | | | |--->grid_afterkeydown_event.md
        // | | | | | | | | |--->grid_headercelldblclick_event.md
        // | | | | | | | | |--->grid_isrowhidden_method.md
        // | | | | | | | | |--->grid_edit_method.md
        // | | | | | | | | |--->grid_hidecolumn_method.md
        // | | | | | | | | |--->grid_cellmousedown_event.md


        //Grid
        {
            type: "category",
            label: "Grid",
            collapsed: true,
            items: [
                "grid/events",
                "grid/initialization",
                "grid/customization",
                "grid/usage",
                "grid/usage_selection",
                "grid/migration",
                "grid/temp_api",
                "grid/data_loading",
                "grid/index",
                "grid/configuration",
                "grid/migration_1",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview", //todo 
                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_link_method",
                                "calendar/api/calendar_clear_method",
                                "calendar/api/calendar_paint_method",
                                "calendar/api/calendar_getcurrentmode_method",
                                "calendar/api/calendar_getvalue_method",
                                "calendar/api/calendar_setvalue_method",
                                "calendar/api/calendar_showdate_method",
                                "calendar/api/calendar_destructor_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_change_event",
                                "calendar/api/calendar_datehover_event",
                                "calendar/api/calendar_cancelclick_event",
                                "calendar/api/calendar_modechange_event",
                                "calendar/api/calendar_yearselected_event",
                                "calendar/api/calendar_monthselected_event",
                                "calendar/api/calendar_datemouseover_event",
                                "calendar/api/calendar_beforechange_event",
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_date_config",
                                "calendar/api/calendar_thismonthonly_config",
                                "calendar/api/calendar_disableddates_config",
                                "calendar/api/calendar_weeknumbers_config",
                                "calendar/api/calendar_dateformat_config",
                                "calendar/api/calendar_timepicker_config",
                                "calendar/api/calendar_timeformat_config",
                                "calendar/api/calendar_block_config",
                                "calendar/api/calendar_value_config",
                                "calendar/api/calendar_view_config",
                                "calendar/api/calendar_weekstart_config",
                                "calendar/api/calendar_css_config",
                                "calendar/api/calendar_mode_config",
                                "calendar/api/calendar_mark_config",
                                "calendar/api/calendar_range_config",
                                "calendar/api/calendar_width_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end Grid 










        //Layout
        {
            type: "category",
            label: "Layout",
            collapsed: true,
            items: [
                "layout/layout_patterns",
                "layout/events",
                "layout/work_with_layout",
                "layout/api",
                "layout/customization",
                "layout/layout_structure",
                "layout/cell_configuration",
                "layout/migration",
                "layout/init",
                "layout/index",
                "layout/configuration",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview", //todo
                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [

                                "layout/api/layout_hide_method",
                                "layout/api/layout_toggle_method",
                                "layout/api/layout_addcell_method",
                                "layout/api/layout_foreach_method",
                                "layout/api/layout_getwidget_method",
                                "layout/api/layout_getparent_method",
                                "layout/api/layout_collapse_method",
                                "layout/api/layout_destructor_method",
                                "layout/api/layout_attachhtml_method",
                                "layout/api/layout_expand_method",
                                "layout/api/layout_removecell_method",
                                "layout/api/layout_cell_method",
                                "layout/api/layout_attach_method",
                                "layout/api/layout_isvisible_method",
                                "layout/api/layout_paint_method",
                                "layout/api/layout_show_method",
                                "layout/api/layout_getcell_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "layout/api/layout_resize_event",
                                "layout/api/layout_beforeadd_event",
                                "layout/api/layout_beforeexpand_event",
                                "layout/api/layout_aftershow_event",
                                "layout/api/layout_beforeremove_event",
                                "layout/api/layout_afterexpand_event",
                                "layout/api/layout_afterremove_event",
                                "layout/api/layout_aftercollapse_event",
                                "layout/api/layout_afterhide_event",
                                "layout/api/layout_beforeresizestart_event",
                                "layout/api/layout_afterresizeend_event",
                                "layout/api/layout_beforeshow_event",
                                "layout/api/layout_afteradd_event",
                                "layout/api/layout_beforecollapse_event",
                                "layout/api/layout_beforehide_event",
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "layout/api/layout_id_config",
                                "layout/api/layout_padding_config",
                                "layout/api/layout_maxwidth_config",
                                "layout/api/layout_header_config",
                                "layout/api/layout_headerimage_config",
                                "layout/api/layout_gravity_config",
                                "layout/api/layout_cols_config",
                                "layout/api/layout_type_config",
                                "layout/api/layout_headericon_config",
                                "layout/api/layout_width_config",
                                "layout/api/layout_collapsed_config",
                                "layout/api/layout_html_config",
                                "layout/api/layout_collapsable_config",
                                "layout/api/layout_activeview_config",
                                "layout/api/layout_id_object",
                                "layout/api/layout_hidden_config",
                                "layout/api/layout_css_config",
                                "layout/api/layout_headerheight_config",
                                "layout/api/layout_maxheight_config",
                                "layout/api/layout_height_config",
                                "layout/api/layout_on_config",
                                "layout/api/layout_minwidth_config",
                                "layout/api/layout_rows_config",
                                "layout/api/layout_minheight_config",
                                "layout/api/layout_views_config",
                                "layout/api/layout_align_config",
                                "layout/api/layout_resizable_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end Layout 





        // | | | | | | |--->list

        // | | | | | | | |--->api
        // | | | | | | | | |--->list_setfocus_method.md
        // | | | | | | | | |--->list_getfocus_method.md
        // | | | | | | | | |--->list_candrop_event.md
        // | | | | | | | | |--->list_css_config.md
        // | | | | | | | | |--->list_beforedrop_event.md
        // | | | | | | | | |--->list_editable_config.md
        // | | | | | | | | |--->list_canceldrop_event.md
        // | | | | | | | | |--->list_multiselection_config.md
        // | | | | | | | | |--->list_edititem_method.md
        // | | | | | | | | |--->list_disableselection_method.md
        // | | | | | | | | |--->list_dropbehaviour_config.md
        // | | | | | | | | |--->list_selection_config.md
        // | | | | | | | | |--->list_beforedrag_event.md
        // | | | | | | | | |--->list_setfocusindex_method.md
        // | | | | | | | | |--->list_destructor_method.md
        // | | | | | | | | |--->list_itemheight_config.md
        // | | | | | | | | |--->list_selection_object.md
        // | | | | | | | | |--->list_keynavigation_config.md
        // | | | | | | | | |--->list_beforeeditend_event.md
        // | | | | | | | | |--->list_click_event.md
        // | | | | | | | | |--->list_dragcopy_config.md
        // | | | | | | | | |--->list_dragout_event.md
        // | | | | | | | | |--->list_contextmenu_event.md
        // | | | | | | | | |--->list_virtual_config.md
        // | | | | | | | | |--->list_focuschange_event.md
        // | | | | | | | | |--->list_afterdrop_event.md
        // | | | | | | | | |--->list_doubleclick_event.md
        // | | | | | | | | |--->list_data_object.md
        // | | | | | | | | |--->list_beforeeditstart_event.md
        // | | | | | | | | |--->list_multiselectionmode_config.md
        // | | | | | | | | |--->list_getfocusindex_method.md

        // | | | | | | | | |--->list_paint_method.md
        // | | | | | | | | |--->list_height_config.md
        // | | | | | | | | |--->list_itemmouseover_event.md
        // | | | | | | | | |--->list_data_config.md
        // | | | | | | | | |--->list_template_config.md
        // | | | | | | | | |--->list_dragin_event.md
        // | | | | | | | | |--->selection
        // | | | | | | | | | |--->selection_afterunselect_event.md
        // | | | | | | | | | |--->selection_beforeselect_event.md
        // | | | | | | | | | |--->selection_beforeunselect_event.md
        // | | | | | | | | | |--->selection_afterselect_event.md
        // | | | | | | | | | |--->selection_enable_method.md
        // | | | | | | | | | |--->selection_disable_method.md
        // | | | | | | | | |--->list_enableselection_method.md
        // | | | | | | | | |--->list_getfocusitem_method.md
        // | | | | | | | | |--->list_itemrightclick_event.md
        // | | | | | | | | |--->list_edit_method.md
        // | | | | | | | | |--->list_editing_config.md
        // | | | | | | | | |--->list_eventhandlers_config.md
        // | | | | | | | | |--->list_afterdrag_event.md
        // | | | | | | | | |--->list_dragstart_event.md
        // | | | | | | | | |--->list_aftereditend_event.md
        // | | | | | | | | |--->list_dragmode_config.md
        // | | | | | | | | |--->list_aftereditstart_event.md



        //List
        {
            type: "category",
            label: "List",
            collapsed: true,
            items: [
                "list/temp_api_list",
                "list/events",
                "list/work_with_list",
                "list/initialization",
                "list/customization",
                "list/usage_selection",
                "list/load_data",
                "list/migration",
                "list/data_loading",
                "list/index",
                "list/configuration",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview", //todo 
                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_link_method",
                                "calendar/api/calendar_clear_method",
                                "calendar/api/calendar_paint_method",
                                "calendar/api/calendar_getcurrentmode_method",
                                "calendar/api/calendar_getvalue_method",
                                "calendar/api/calendar_setvalue_method",
                                "calendar/api/calendar_showdate_method",
                                "calendar/api/calendar_destructor_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_change_event",
                                "calendar/api/calendar_datehover_event",
                                "calendar/api/calendar_cancelclick_event",
                                "calendar/api/calendar_modechange_event",
                                "calendar/api/calendar_yearselected_event",
                                "calendar/api/calendar_monthselected_event",
                                "calendar/api/calendar_datemouseover_event",
                                "calendar/api/calendar_beforechange_event",
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_date_config",
                                "calendar/api/calendar_thismonthonly_config",
                                "calendar/api/calendar_disableddates_config",
                                "calendar/api/calendar_weeknumbers_config",
                                "calendar/api/calendar_dateformat_config",
                                "calendar/api/calendar_timepicker_config",
                                "calendar/api/calendar_timeformat_config",
                                "calendar/api/calendar_block_config",
                                "calendar/api/calendar_value_config",
                                "calendar/api/calendar_view_config",
                                "calendar/api/calendar_weekstart_config",
                                "calendar/api/calendar_css_config",
                                "calendar/api/calendar_mode_config",
                                "calendar/api/calendar_mark_config",
                                "calendar/api/calendar_range_config",
                                "calendar/api/calendar_width_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end List 



        //Menu
        {
            type: "category",
            label: "Menu",
            collapsed: true,
            items: [
                "menu/configuring_menu_items",
                "menu/creating_context_menu",
                "menu/how_to_start",
                "menu/whats_new",
                "menu/api",
                "menu/from_script",
                "menu/configuring_menu",
                "menu/work_with_menu",
                "menu/handling_events",
                "menu/context_menu_old",
                "menu/migration",
                "menu/fa_icons",
                "menu/index",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview", //todo //todo
                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [
                                "menu/api/menu_getselected_method",
                                "menu/api/menu_disable_method",
                                "menu/api/menu_isdisabled_method",
                                "menu/api/menu_unselect_method",
                                "menu/api/menu_isselected_method",
                                "menu/api/menu_hide_method",
                                "menu/api/menu_paint_method",
                                "menu/api/menu_show_method",
                                "menu/api/menu_enable_method",
                                "menu/api/menu_destructor_method",
                                "menu/api/menu_showat_method",
                                "menu/api/menu_select_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "menu/api/menu_afterhide_event",
                                "menu/api/menu_inputblur_event",
                                "menu/api/menu_click_event",
                                "menu/api/menu_inputfocus_event",
                                "menu/api/menu_beforehide_event",
                                "menu/api/menu_openmenu_event",
                                "menu/api/menu_inputcreated_event",
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "menu/api/menu_data_config",
                                "menu/api/menu_menucss_config",
                                "menu/api/menu_navigationtype_config",
                                "menu/api/menu_css_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end Menu 







        //Message //???? todo где API????
        {
            type: "category",
            label: "Message",
            collapsed: true,
            items: [
                "message/overview",
                "message/customization",
                "message/temp_api_message",
                "message/creating_message",
                "message/migration",
                "message/index",
                "message/configuration",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview", //todo //todo
                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_link_method",
                                "calendar/api/calendar_clear_method",
                                "calendar/api/calendar_paint_method",
                                "calendar/api/calendar_getcurrentmode_method",
                                "calendar/api/calendar_getvalue_method",
                                "calendar/api/calendar_setvalue_method",
                                "calendar/api/calendar_showdate_method",
                                "calendar/api/calendar_destructor_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_change_event",
                                "calendar/api/calendar_datehover_event",
                                "calendar/api/calendar_cancelclick_event",
                                "calendar/api/calendar_modechange_event",
                                "calendar/api/calendar_yearselected_event",
                                "calendar/api/calendar_monthselected_event",
                                "calendar/api/calendar_datemouseover_event",
                                "calendar/api/calendar_beforechange_event",
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_date_config",
                                "calendar/api/calendar_thismonthonly_config",
                                "calendar/api/calendar_disableddates_config",
                                "calendar/api/calendar_weeknumbers_config",
                                "calendar/api/calendar_dateformat_config",
                                "calendar/api/calendar_timepicker_config",
                                "calendar/api/calendar_timeformat_config",
                                "calendar/api/calendar_block_config",
                                "calendar/api/calendar_value_config",
                                "calendar/api/calendar_view_config",
                                "calendar/api/calendar_weekstart_config",
                                "calendar/api/calendar_css_config",
                                "calendar/api/calendar_mode_config",
                                "calendar/api/calendar_mark_config",
                                "calendar/api/calendar_range_config",
                                "calendar/api/calendar_width_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end Message 
        //Pagination
        {
            type: "category",
            label: "Pagination",
            collapsed: true,
            items: [
                "pagination/handling_events",
                "pagination/customization",
                "pagination/usage",
                "pagination/init",
                "pagination/index",
                "pagination/configuration",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "pagination/api/api_overview",

                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [
                                "pagination/api/pagination_destructor_method",
                                "pagination/api/pagination_getpage_method",
                                "pagination/api/pagination_getpagesize_method",
                                "pagination/api/pagination_getpagescount_method",
                                "pagination/api/pagination_setpage_method",
                                "pagination/api/pagination_setpagesize_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "pagination/api/pagination_change_event",
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "pagination/api/pagination_data_config",
                                "pagination/api/pagination_css_config",
                                "pagination/api/pagination_pagesize_config",
                                "pagination/api/pagination_inputwidth_config",
                                "pagination/api/pagination_page_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end Pagination














        //Popup
        {
            type: "category",
            label: "Popup",
            collapsed: true,
            items: [
                "popup/work_with_popup",
                "popup/event_handling",
                "popup/object_constructor",
                "popup/attaching_content",
                "popup/visibility",
                "popup/initialization",
                "popup/customization",
                "popup/skin",
                "popup/index",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview", //todo //todo

                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [
                                "popup/api/popup_paint_method",
                                "popup/api/popup_getwidget_method",
                                "popup/api/popup_destructor_method",
                                "popup/api/popup_attachhtml_method",
                                "popup/api/popup_isvisible_method",
                                "popup/api/popup_hide_method",
                                "popup/api/popup_show_method",
                                "popup/api/popup_attach_method",
                                "popup/api/popup_getcontainer_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "popup/api/popup_afterhide_event",
                                "popup/api/popup_aftershow_event",
                                "popup/api/popup_beforehide_event",
                                "popup/api/popup_click_event",
                                "popup/api/popup_beforeshow_event",
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "popup/api/popup_css_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end Popup 




        //Ribbon
        {
            type: "category",
            label: "Ribbon",
            collapsed: true,
            items: [
                "ribbon/controls",
                "ribbon/selectbutton",
                "ribbon/regular_button",
                "ribbon/loading_json",
                "ribbon/icon_button",
                "ribbon/spacer",
                "ribbon/image_button_text",
                "ribbon/how_to_start",
                "ribbon/text",
                "ribbon/image_button",
                "ribbon/input",
                "ribbon/api",
                "ribbon/button",
                "ribbon/handling_events",
                "ribbon/title",
                "ribbon/block",
                "ribbon/migration",
                "ribbon/operating_ribbon",
                "ribbon/fa_icons",
                "ribbon/navitem",
                "ribbon/index",
                "ribbon/menu_item",
                "ribbon/separator",
                "ribbon/customhtmlbutton",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview", //todo //todo

                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [
                                "ribbon/api/ribbon_enable_method",
                                "ribbon/api/ribbon_isdisabled_method",
                                "ribbon/api/ribbon_isselected_method",
                                "ribbon/api/ribbon_setstate_method",
                                "ribbon/api/ribbon_getstate_method",
                                "ribbon/api/ribbon_disable_method",
                                "ribbon/api/ribbon_hide_method",
                                "ribbon/api/ribbon_select_method",
                                "ribbon/api/ribbon_getselected_method",
                                "ribbon/api/ribbon_unselect_method",
                                "ribbon/api/ribbon_show_method",
                                "ribbon/api/ribbon_destructor_method",
                                "ribbon/api/ribbon_paint_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "ribbon/api/ribbon_inputfocus_event",
                                "ribbon/api/ribbon_inputcreated_event",
                                "ribbon/api/ribbon_click_event",
                                "ribbon/api/ribbon_openmenu_event",
                                "ribbon/api/ribbon_inputblur_event",
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "ribbon/api/ribbon_css_config",
                                "ribbon/api/ribbon_data_config",
                                "ribbon/api/ribbon_menucss_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end Ribbon 















        //Sidebar
        {
            type: "category",
            label: "Sidebar",
            collapsed: true,
            items: [
                "sidebar/controls",
                "sidebar/selectbutton",
                "sidebar/attach_urls",
                "sidebar/events",
                "sidebar/spacer",
                "sidebar/attach_components",
                "sidebar/image_button",
                "sidebar/input",
                "sidebar/sidebar_config",
                "sidebar/api",
                "sidebar/menuitem",
                "sidebar/button",
                "sidebar/customization",
                "sidebar/single_cell",
                "sidebar/title",
                "sidebar/attach_html",
                "sidebar/views",
                "sidebar/progress",
                "sidebar/migration",
                "sidebar/init",
                "sidebar/coloring_text_selection",
                "sidebar/work_with_sidebar",
                "sidebar/data_loading",
                "sidebar/attach_mtb",
                "sidebar/navitem",
                "sidebar/index",
                "sidebar/items_config",
                "sidebar/attach_google_map",
                "sidebar/separator",
                "sidebar/customhtmlbutton",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview", //todo //todo

                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [
                                "sidebar/api/sidebar_expand_method",
                                "sidebar/api/sidebar_destructor_method",
                                "sidebar/api/sidebar_iscollapsed_method",
                                "sidebar/api/sidebar_hide_method",
                                "sidebar/api/sidebar_getselected_method",
                                "sidebar/api/sidebar_paint_method",
                                "sidebar/api/sidebar_disable_method",
                                "sidebar/api/sidebar_select_method",
                                "sidebar/api/sidebar_unselect_method",
                                "sidebar/api/sidebar_isselected_method",
                                "sidebar/api/sidebar_toggle_method",
                                "sidebar/api/sidebar_isdisabled_method",
                                "sidebar/api/sidebar_collapse_method",
                                "sidebar/api/sidebar_show_method",
                                "sidebar/api/sidebar_enable_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "sidebar/api/sidebar_aftercollapse_event",
                                "sidebar/api/sidebar_openmenu_event",
                                "sidebar/api/sidebar_beforeexpand_event",
                                "sidebar/api/sidebar_beforecollapse_event",
                                "sidebar/api/sidebar_inputfocus_event",
                                "sidebar/api/sidebar_inputcreated_event",
                                "sidebar/api/sidebar_toggle_event",
                                "sidebar/api/sidebar_afterexpand_event",
                                "sidebar/api/sidebar_inputblur_event",
                                "sidebar/api/sidebar_afterhide_event",
                                "sidebar/api/sidebar_click_event",
                                "sidebar/api/sidebar_beforehide_event",
                                "sidebar/api/sidebar_data_object", //todo что это?
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "sidebar/api/sidebar_width_config",
                                "sidebar/api/sidebar_minwidth_config",
                                "sidebar/api/sidebar_collapsed_config",
                                "sidebar/api/sidebar_css_config",
                                "sidebar/api/sidebar_menucss_config",
                                "sidebar/api/sidebar_data_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end Sidebar 













        //Slider
        {
            type: "category",
            label: "Slider",
            collapsed: true,
            items: [
                "slider/skinning_slider",
                "slider/temp_api_slider",
                "slider/configuring_slider",
                "slider/initializing_slider",
                "slider/handling_events",
                "slider/customization",
                "slider/usage",
                "slider/migration",
                "slider/range_slider",
                "slider/constructor",
                "slider/index",
                "slider/migration_1",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview", //todo //todo

                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [
                                "slider/api/slider_setvalue_method",
                                "slider/api/slider_getvalue_method",
                                "slider/api/slider_disable_method",
                                "slider/api/slider_paint_method",
                                "slider/api/slider_destructor_method",
                                "slider/api/slider_enable_method",
                                "slider/api/slider_isdisabled_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "slider/api/slider_change_event",
                                "slider/api/slider_mousedown_event",
                                "slider/api/slider_mouseup_event",
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "slider/api/slider_ticktemplate_config",
                                "slider/api/slider_helpmessage_config",
                                "slider/api/slider_thumblabel_config",
                                "slider/api/slider_help_config",
                                "slider/api/slider_max_config",
                                "slider/api/slider_majortick_config",
                                "slider/api/slider_tick_config",
                                "slider/api/slider_css_config",
                                "slider/api/slider_min_config",
                                "slider/api/slider_value_config",
                                "slider/api/slider_labelwidth_config",
                                "slider/api/slider_range_config",
                                "slider/api/slider_tooltip_config",
                                "slider/api/slider_labelinline_config",
                                "slider/api/slider_hiddenlabel_config",
                                "slider/api/slider_labelposition_config",
                                "slider/api/slider_label_config",
                                "slider/api/slider_step_config",
                                "slider/api/slider_mode_config",
                                "slider/api/slider_inverse_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end Slider 












        //Tabbar
        {
            type: "category",
            label: "Tabbar",
            collapsed: true,
            items: [
                "tabbar/work_with_tabbar",
                "tabbar/configuring_tabbar",
                "tabbar/events",
                "tabbar/api",
                "tabbar/customization",
                "tabbar/migration",
                "tabbar/init",
                "tabbar/index",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview", //todo //todo

                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [
                                "tabbar/api/tabbar_isdisabled_method",
                                "tabbar/api/tabbar_getcell_method",
                                "tabbar/api/tabbar_addtab_method",
                                "tabbar/api/tabbar_getid_method",
                                "tabbar/api/tabbar_disabletab_method",
                                "tabbar/api/tabbar_getwidget_method",
                                "tabbar/api/tabbar_paint_method",
                                "tabbar/api/tabbar_enabletab_method",
                                "tabbar/api/tabbar_getactive_method",
                                "tabbar/api/tabbar_addcell_method",
                                "tabbar/api/tabbar_destructor_method",
                                "tabbar/api/tabbar_padding_config",
                                "tabbar/api/tabbar_activetab_config",
                                "tabbar/api/tabbar_nocontent_config",
                                "tabbar/api/tabbar_removecell_method",
                                "tabbar/api/tabbar_removetab_method",
                                "tabbar/api/tabbar_setactive_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "tabbar/api/tabbar_close_event",
                                "tabbar/api/tabbar_change_event",
                                "tabbar/api/tabbar_beforeclose_event",
                                "tabbar/api/tabbar_afterclose_event",
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "tabbar/api/tabbar_mode_config",
                                "tabbar/api/tabbar_id_config",
                                "tabbar/api/tabbar_tabheight_config",
                                "tabbar/api/tabbar_views_config",
                                "tabbar/api/tabbar_css_config",
                                "tabbar/api/tabbar_disabled_config",
                                "tabbar/api/tabbar_activeview_config",
                                "tabbar/api/tabbar_tabautowidth_config",
                                "tabbar/api/tabbar_closebuttons_config",
                                "tabbar/api/tabbar_tabwidth_config",
                                "tabbar/api/tabbar_closable_config",
                                "tabbar/api/tabbar_tabautoheight_config",
                                "tabbar/api/tabbar_tabalign_config",
                                "tabbar/api/tabbar_html_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end Tabbar 












        //Timepicker
        {
            type: "category",
            label: "Timepicker",
            collapsed: true,
            items: [
                "timepicker/initialization",
                "timepicker/temp_api_timepicker",
                "timepicker/handling_events",
                "timepicker/customization",
                "timepicker/usage",
                "timepicker/migration",
                "timepicker/index",
                "timepicker/configuration",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview", //todo //todo
                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [
                                "timepicker/api/timepicker_clear_method",
                                "timepicker/api/timepicker_getvalue_method",
                                "timepicker/api/timepicker_setvalue_method",
                                "timepicker/api/timepicker_paint_method",
                                "timepicker/api/timepicker_destructor_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "timepicker/api/timepicker_apply_event",
                                "timepicker/api/timepicker_change_event",
                                "timepicker/api/timepicker_afterapply_event",
                                "timepicker/api/timepicker_beforeapply_event",
                                "timepicker/api/timepicker_beforeclose_event",
                                "timepicker/api/timepicker_save_event",
                                "timepicker/api/timepicker_close_event",
                                "timepicker/api/timepicker_afterclose_event",
                                "timepicker/api/timepicker_config_object", //todo
                                "timepicker/api/timepicker_events_object", //todo
                                "timepicker/api/timepicker_layout_object", //todo
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "timepicker/api/timepicker_controls_config",
                                "timepicker/api/timepicker_valueformat_config",
                                "timepicker/api/timepicker_actions_config",
                                "timepicker/api/timepicker_timeformat_config",
                                "timepicker/api/timepicker_css_config",
                                "timepicker/api/timepicker_value_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end Timepicker 

        //Toolbar
        {
            type: "category",
            label: "Toolbar",
            collapsed: true,
            items: [
                "toolbar/selectbutton",
                "toolbar/regular_button",
                "toolbar/icon_button",
                "toolbar/object_constructor",
                "toolbar/spacer",
                "toolbar/controls_list",
                "toolbar/dhxbutton",
                "toolbar/common_methods",
                "toolbar/image_button_text",
                "toolbar/how_to_start",
                "toolbar/text",
                "toolbar/image_button",
                "toolbar/input",
                "toolbar/api",
                "toolbar/menuitem",
                "toolbar/button",
                "toolbar/handling_events",
                "toolbar/customization",
                "toolbar/block",
                "toolbar/load_data",
                "toolbar/migration",
                "toolbar/navitem",
                "toolbar/index",
                "toolbar/menu_item",
                "toolbar/separator",
                "toolbar/customhtmlbutton",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview", //todo //todo
                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [
                                "toolbar/api/toolbar_hide_method",
                                "toolbar/api/toolbar_isselected_method",
                                "toolbar/api/toolbar_isdisabled_method",
                                "toolbar/api/toolbar_unselect_method",
                                "toolbar/api/toolbar_destructor_method",
                                "toolbar/api/toolbar_show_method",
                                "toolbar/api/toolbar_select_method",
                                "toolbar/api/toolbar_disable_method",
                                "toolbar/api/toolbar_getselected_method",
                                "toolbar/api/toolbar_paint_method",
                                "toolbar/api/toolbar_getstate_method",
                                "toolbar/api/toolbar_setstate_method",
                                "toolbar/api/toolbar_enable_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "toolbar/api/toolbar_beforehide_event",
                                "toolbar/api/toolbar_openmenu_event",
                                "toolbar/api/toolbar_afterhide_event",
                                "toolbar/api/toolbar_inputblur_event",
                                "toolbar/api/toolbar_inputfocus_event",
                                "toolbar/api/toolbar_inputcreated_event",
                                "toolbar/api/toolbar_click_event",
                                "toolbar/api/toolbar_data_object", //todo
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "toolbar/api/toolbar_data_config",
                                "toolbar/api/toolbar_menucss_config",
                                "toolbar/api/toolbar_css_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end Toolbar 



        // |
        // | | | | | | | -- - > api |
        // | | | | | | | | -- - > tree_candrop_event.md |
        // | | | | | | | | -- - > tree_itemdblclick_event.md |
        // | | | | | | | | -- - > tree_beforedrag_event.md |
        // | | | | | | | | -- - > tree_selection_config.md |
        // | | | | | | | | -- - > tree_dragstart_event.md |
        // | | | | | | | | -- - > tree_afterdrag_event.md |
        // | | | | | | | | -- - > tree_dragmode_config.md |
        // | | | | | | | | -- - > tree_itemclick_event.md |
        // | | | | | | | | -- - > tree_dropbehaviour_config.md |
        // | | | | | | | | -- - > tree_getchecked_method.md |
        // | | | | | | | | -- - > tree_editing_config.md |
        // | | | | | | | | -- - > tree_keynavigation_config.md |
        // | | | | | | | | -- - > tree_openall_method.md |
        // | | | | | | | | -- - > tree_checkbox_config.md |
        // | | | | | | | | -- - > tree_open_method.md |
        // | | | | | | | | -- - > tree_css_config.md |
        // | | | | | | | | -- - > tree_toggle_method.md |
        // | | | | | | | | -- - > tree_focuschange_event.md |
        // | | | | | | | | -- - > tree_rootid_config.md |
        // | | | | | | | | -- - > tree_beforedrop_event.md |
        // | | | | | | | | -- - > tree_uncheckitemnew_method.md |
        // | | | | | | | | -- - > tree_canceldrop_event.md |
        // | | | | | | | | -- - > tree_afterdrop_event.md |
        // | | | | | | | | -- - > tree_uncheckitem_method.md |
        // | | | | | | | | -- - > tree_paint_method.md |
        // | | | | | | | | -- - > tree_afterexpand_event.md |
        // | | | | | | | | -- - > tree_autoload_config.md |
        // | | | | | | | | -- - > tree_collapse_method.md |
        // | | | | | | | | -- - > tree_beforeexpand_event.md |
        // | | | | | | | | -- - > tree_dragcopy_config.md |
        // | | | | | | | | -- - > tree_dragin_event.md |
        // | | | | | | | | -- - > tree_setstate_method.md |
        // | | | | | | | | -- - > tree_getstate_method.md |
        // | | | | | | | | -- - > tree_itemrightclick_event.md |
        // | | | | | | | | -- - > tree_dragout_event.md |
        // | | | | | | | | -- - > tree_expand_method.md |
        // | | | | | | | | -- - > tree_isfolder_config.md |
        // | | | | | | | | -- - > tree_focusitem_method.md |
        // | | | | | | | | -- - > tree_beforecollapse_event.md |
        // | | | | | | | | -- - > tree_aftereditend_event.md |
        // | | | | | | | | -- - > refs |
        // | | | | | | | | | -- - > tree_properties.md |
        // | | | | | | | | | -- - > tree_events.md |
        // | | | | | | | | | -- - > selection_events.md |
        // | | | | | | | | | -- - > selection_methods.md |
        // | | | | | | | | | -- - > tree_methods.md |
        // | | | | | | | | | -- - > tree.md |
        // | | | | | | | | -- - > tree_edititem_method.md |
        // | | | | | | | | -- - > tree_destructor_method.md |
        // | | | | | | | | -- - > tree_itemcontextmenu_event.md |
        // | | | | | | | | -- - > tree_beforeeditstart_event.md |
        // | | | | | | | | -- - > tree_aftereditstart_event.md |
        // | | | | | | | | -- - > selection |
        // | | | | | | | | | -- - > selection_afterunselect_event.md |
        // | | | | | | | | | -- - > selection_beforeselect_event.md |
        // | | | | | | | | | -- - > selection_beforeunselect_event.md |
        // | | | | | | | | | -- - > selection_afterselect_event.md |
        // | | | | | | | | | -- - > selection_enable_method.md |
        // | | | | | | | | | -- - > selection_disable_method.md |
        // | | | | | | | | -- - > tree_data_object.md |
        // | | | | | | | | -- - > tree_icon_config.md |
        // | | | | | | | | -- - > tree_expandall_method.md |
        // | | | | | | | | -- - > tree_closeall_method.md |
        // | | | | | | | | -- - > tree_close_method.md |
        // | | | | | | | | -- - > tree_data_config.md |
        // | | | | | | | | -- - > tree_editable_config.md |
        // | | | | | | | | -- - > tree_checkitem_method.md |
        // | | | | | | | | -- - > tree_collapseall_method.md |
        // | | | | | | | | -- - > tree_beforeeditend_event.md |
        // | | | | | | | | -- - > tree_aftercollapse_event.md




        //Tree
        {
            type: "category",
            label: "Tree",
            collapsed: true,
            items: [
                "tree/compatibility_with_other_dhtmlx_components",
                "tree/loading_data",
                "tree/serialization_caching_and_removing_tree",
                "tree/searching_and_sorting_in_tree",
                "tree/work_with_tree",
                "tree/navigation_and_selection_in_tree",
                "tree/increasing_tree_s_performance",
                "tree/api",
                "tree/syntax_templates",
                "tree/usage_selection",
                "tree/setting_tree_appearance",
                "tree/simultaneous_server_update",
                "tree/initialization_of_dhtmlxtree",
                "tree/events_handling",
                "tree/migration",
                "tree/checkboxes_manipulation",
                "tree/drag_and_drop_handling",
                "tree/nodes_manipulation",
                "tree/index",
                "tree/configuration",
                "tree/radio_buttons_manipulation",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview", //todo //todo
                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_link_method",
                                "calendar/api/calendar_clear_method",
                                "calendar/api/calendar_paint_method",
                                "calendar/api/calendar_getcurrentmode_method",
                                "calendar/api/calendar_getvalue_method",
                                "calendar/api/calendar_setvalue_method",
                                "calendar/api/calendar_showdate_method",
                                "calendar/api/calendar_destructor_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_change_event",
                                "calendar/api/calendar_datehover_event",
                                "calendar/api/calendar_cancelclick_event",
                                "calendar/api/calendar_modechange_event",
                                "calendar/api/calendar_yearselected_event",
                                "calendar/api/calendar_monthselected_event",
                                "calendar/api/calendar_datemouseover_event",
                                "calendar/api/calendar_beforechange_event",
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_date_config",
                                "calendar/api/calendar_thismonthonly_config",
                                "calendar/api/calendar_disableddates_config",
                                "calendar/api/calendar_weeknumbers_config",
                                "calendar/api/calendar_dateformat_config",
                                "calendar/api/calendar_timepicker_config",
                                "calendar/api/calendar_timeformat_config",
                                "calendar/api/calendar_block_config",
                                "calendar/api/calendar_value_config",
                                "calendar/api/calendar_view_config",
                                "calendar/api/calendar_weekstart_config",
                                "calendar/api/calendar_css_config",
                                "calendar/api/calendar_mode_config",
                                "calendar/api/calendar_mark_config",
                                "calendar/api/calendar_range_config",
                                "calendar/api/calendar_width_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end Tree 


        //         | | | | | | |--->treegrid
        // | | | | | | | |--->api
        // | | | | | | | | |--->treegrid_footercellrightclick_event.md
        // | | | | | | | | |--->treegrid_beforecolumndrag_event.md
        // | | | | | | | | |--->treegrid_autowidth_config.md
        // | | | | | | | | |--->treegrid_scroll_event.md
        // | | | | | | | | |--->treegrid_editable_config.md
        // | | | | | | | | |--->treegrid_destructor_method.md
        // | | | | | | | | |--->treegrid_afterresizeend_event.md
        // | | | | | | | | |--->treegrid_beforeeditstart_event.md
        // | | | | | | | | |--->treegrid_beforecolumnshow_event.md
        // | | | | | | | | |--->treegrid_headerinput_event.md
        // | | | | | | | | |--->treegrid_footercellmousedown_event.md
        // | | | | | | | | |--->treegrid_adjustcolumnwidth_method.md
        // | | | | | | | | |--->treegrid_paint_method.md
        // | | | | | | | | |--->treegrid_dragcolumnin_event.md
        // | | | | | | | | |--->treegrid_expandall_method.md
        // | | | | | | | | |--->treegrid_removespan_method.md
        // | | | | | | | | |--->treegrid_beforerowshow_event.md
        // | | | | | | | | |--->treegrid_beforerowdrag_event.md
        // | | | | | | | | |--->treegrid_collapseall_method.md
        // | | | | | | | | |--->treegrid_headercellclick_event.md
        // | | | | | | | | |--->treegrid_htmlenable_config.md
        // | | | | | | | | |--->treegrid_fittocontainer_config.md
        // | | | | | | | | |--->treegrid_cancelrowdrop_event.md
        // | | | | | | | | |--->treegrid_editcell_method.md
        // | | | | | | | | |--->treegrid_getspan_method.md
        // | | | | | | | | |--->treegrid_export_object.md
        // | | | | | | | | |--->treegrid_headerrowheight_config.md
        // | | | | | | | | |--->treegrid_editend_method.md
        // | | | | | | | | |--->treegrid_beforecollapse_event.md
        // | | | | | | | | |--->treegrid_isrowhidden_method.md
        // | | | | | | | | |--->treegrid_beforecolumndrop_event.md
        // | | | | | | | | |--->treegrid_hiderow_method.md
        // | | | | | | | | |--->treegrid_addcellcss_method.md
        // | | | | | | | | |--->treegrid_iscolumnhidden_method.md
        // | | | | | | | | |--->treegrid_editing_config.md
        // | | | | | | | | |--->treegrid_beforecolumnhide_event.md
        // | | | | | | | | |--->treegrid_adjust_config.md
        // | | | | | | | | |--->treegrid_dragcolumnout_event.md
        // | | | | | | | | |--->treegrid_setcolumns_method.md
        // | | | | | | | | |--->treegrid_aftereditstart_event.md
        // | | | | | | | | |--->treegrid_beforeresizestart_event.md
        // | | | | | | | | |--->treegrid_celldblclick_event.md
        // | | | | | | | | |--->treegrid_columns_config.md
        // | | | | | | | | |--->treegrid_getsortingstate_method.md
        // | | | | | | | | |--->treegrid_headersort_config.md
        // | | | | | | | | |--->treegrid_tooltip_config.md
        // | | | | | | | | |--->treegrid_showcolumn_method.md
        // | | | | | | | | |--->treegrid_footercellclick_event.md
        // | | | | | | | | |--->treegrid_footercellmouseover_event.md
        // | | | | | | | | |--->treegrid_columnsautowidth_config.md
        // | | | | | | | | |--->treegrid_beforerowdrop_event.md
        // | | | | | | | | |--->treegrid_aftereditend_event.md
        // | | | | | | | | |--->treegrid_beforerowhide_event.md
        // | | | | | | | | |--->treegrid_dragrowin_event.md
        // | | | | | | | | |--->treegrid_eventhandlers_config.md
        // | | | | | | | | |--->treegrid_scrollto_method.md
        // | | | | | | | | |--->treegrid_headercellmouseover_event.md
        // | | | | | | | | |--->treegrid_cellmouseover_event.md
        // | | | | | | | | |--->treegrid_grouptitletemplate_config.md
        // | | | | | | | | |--->treegrid_aftercolumnshow_event.md
        // | | | | | | | | |--->treegrid_getcolumn_method.md
        // | | | | | | | | |--->treegrid_sort_event.md
        // | | | | | | | | |--->treegrid_afterrowshow_event.md
        // | | | | | | | | |--->treegrid_hidecolumn_method.md
        // | | | | | | | | |--->treegrid_canrowdrop_event.md
        // | | | | | | | | |--->treegrid_afterrowdrag_event.md
        // | | | | | | | | |--->treegrid_headercelldblclick_event.md
        // | | | | | | | | |--->treegrid_footerrowheight_config.md
        // | | | | | | | | |--->treegrid_aftercolumndrag_event.md
        // | | | | | | | | |--->treegrid_getcellrect_method.md
        // | | | | | | | | |--->treegrid_removecellcss_method.md
        // | | | | | | | | |--->treegrid_cancolumndrop_event.md
        // | | | | | | | | |--->treegrid_groupby_method.md
        // | | | | | | | | |--->treegrid_dragcopy_config.md
        // | | | | | | | | |--->treegrid_width_config.md
        // | | | | | | | | |--->treegrid_addspan_method.md
        // | | | | | | | | |--->treegrid_autoemptyrow_config.md
        // | | | | | | | | |--->treegrid_scroll_method.md
        // | | | | | | | | |--->refs
        // | | | | | | | | | |--->treegrid.md
        // | | | | | | | | | |--->treegrid_events.md
        // | | | | | | | | | |--->selection_events.md
        // | | | | | | | | | |--->selection_methods.md
        // | | | | | | | | | |--->treegrid_methods.md
        // | | | | | | | | | |--->treegrid_properties.md
        // | | | | | | | | |--->treegrid_data_config.md
        // | | | | | | | | |--->treegrid_rowheight_config.md
        // | | | | | | | | |--->treegrid_resizable_config.md
        // | | | | | | | | |--->treegrid_beforeexpand_event.md
        // | | | | | | | | |--->treegrid_getheaderfilter_method.md
        // | | | | | | | | |--->treegrid_cancelcolumndrop_event.md
        // | | | | | | | | |--->treegrid_footercelldblclick_event.md
        // | | | | | | | | |--->treegrid_collapse_method.md
        // | | | | | | | | |--->treegrid_splitat_config.md
        // | | | | | | | | |--->treegrid_rowcss_config.md
        // | | | | | | | | |--->treegrid_data_object.md
        // | | | | | | | | |--->selection
        // | | | | | | | | | |--->selection_afterunselect_event.md
        // | | | | | | | | | |--->selection_beforeselect_event.md
        // | | | | | | | | | |--->selection_beforeunselect_event.md
        // | | | | | | | | | |--->selection_getcell_method.md
        // | | | | | | | | | |--->selection_afterselect_event.md
        // | | | | | | | | | |--->selection_removecell_method.md
        // | | | | | | | | | |--->selection_enable_method.md
        // | | | | | | | | | |--->selection_disable_method.md
        // | | | | | | | | | |--->selection_setcell_method.md
        // | | | | | | | | |--->treegrid_edit_method.md
        // | | | | | | | | |--->treegrid_headercellmousedown_event.md
        // | | | | | | | | |--->treegrid_cellmousedown_event.md
        // | | | | | | | | |--->treegrid_dragmode_config.md
        // | | | | | | | | |--->treegrid_resize_event.md
        // | | | | | | | | |--->treegrid_afterrowdrop_event.md
        // | | | | | | | | |--->treegrid_aftercolumnhide_event.md
        // | | | | | | | | |--->treegrid_aftercollapse_event.md
        // | | | | | | | | |--->treegrid_beforeeditend_event.md
        // | | | | | | | | |--->treegrid_cellclick_event.md
        // | | | | | | | | |--->treegrid_dragitem_config.md
        // | | | | | | | | |--->treegrid_dragcolumnstart_event.md
        // | | | | | | | | |--->treegrid_afterrowhide_event.md
        // | | | | | | | | |--->treegrid_aftercolumndrop_event.md
        // | | | | | | | | |--->treegrid_dragrowout_event.md
        // | | | | | | | | |--->treegrid_css_config.md
        // | | | | | | | | |--->treegrid_dragrowstart_event.md
        // | | | | | | | | |--->treegrid_headercellrightclick_event.md
        // | | | | | | | | |--->treegrid_afterexpand_event.md
        // | | | | | | | | |--->treegrid_cellrightclick_event.md
        // | | | | | | | | |--->treegrid_leftsplit_config.md
        // | | | | | | | | |--->treegrid_filterchange_event.md
        // | | | | | | | | |--->treegrid_removerowcss_method.md
        // | | | | | | | | |--->treegrid_expand_event.md
        // | | | | | | | | |--->treegrid_addrowcss_method.md
        // | | | | | | | | |--->treegrid_spans_config.md
        // | | | | | | | | |--->treegrid_sortable_config.md
        // | | | | | | | | |--->treegrid_showrow_method.md
        // | | | | | | | | |--->treegrid_getscrollstate_method.md
        // | | | | | | | | |--->treegrid_height_config.md
        // | | | | | | | | |--->treegrid_selection_config.md
        // | | | | | | | | |--->treegrid_ungroup_method.md
        // | | | | | | | | |--->treegrid_expand_method.md





        //TreeGrid
        {
            type: "category",
            label: "TreeGrid",
            collapsed: true,
            items: [
                "treegrid/events",
                "treegrid/initialization",
                "treegrid/customization",
                "treegrid/usage",
                "treegrid/usage_selection",
                "treegrid/migration",
                "treegrid/temp_api",
                "treegrid/data_loading",
                "treegrid/index",
                "treegrid/configuration",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview", //todo //todo
                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_link_method",
                                "calendar/api/calendar_clear_method",
                                "calendar/api/calendar_paint_method",
                                "calendar/api/calendar_getcurrentmode_method",
                                "calendar/api/calendar_getvalue_method",
                                "calendar/api/calendar_setvalue_method",
                                "calendar/api/calendar_showdate_method",
                                "calendar/api/calendar_destructor_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_change_event",
                                "calendar/api/calendar_datehover_event",
                                "calendar/api/calendar_cancelclick_event",
                                "calendar/api/calendar_modechange_event",
                                "calendar/api/calendar_yearselected_event",
                                "calendar/api/calendar_monthselected_event",
                                "calendar/api/calendar_datemouseover_event",
                                "calendar/api/calendar_beforechange_event",
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "calendar/api/calendar_date_config",
                                "calendar/api/calendar_thismonthonly_config",
                                "calendar/api/calendar_disableddates_config",
                                "calendar/api/calendar_weeknumbers_config",
                                "calendar/api/calendar_dateformat_config",
                                "calendar/api/calendar_timepicker_config",
                                "calendar/api/calendar_timeformat_config",
                                "calendar/api/calendar_block_config",
                                "calendar/api/calendar_value_config",
                                "calendar/api/calendar_view_config",
                                "calendar/api/calendar_weekstart_config",
                                "calendar/api/calendar_css_config",
                                "calendar/api/calendar_mode_config",
                                "calendar/api/calendar_mark_config",
                                "calendar/api/calendar_range_config",
                                "calendar/api/calendar_width_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end TreeGrid 













        //Window
        {
            type: "category",
            label: "Window",
            collapsed: true,
            items: [
                "window/temp_api_windows",
                "window/how_to_start",
                "window/handling_events",
                "window/customization",
                "window/usage",
                "window/migration",
                "window/index",
                "window/configuration",
                "window/migration_1",
                {
                    type: "category",
                    label: "API",
                    collapsed: true,
                    items: [
                        "calendar/api/api_overview", //todo //todo
                        {
                            type: "category",
                            label: "Methods",
                            collapsed: true,
                            items: [
                                "window/api/window_setfullscreen_method",
                                "window/api/window_getcontainer_method",
                                "window/api/window_destructor_method",
                                "window/api/window_show_method",
                                "window/api/window_isvisible_method",
                                "window/api/window_attachhtml_method",
                                "window/api/window_setposition_method",
                                "window/api/window_fullscreen_method",
                                "window/api/window_setsize_method",
                                "window/api/window_hide_method",
                                "window/api/window_getposition_method",
                                "window/api/window_getwidget_method",
                                "window/api/window_paint_method",
                                "window/api/window_attach_method",
                                "window/api/window_getsize_method",
                            ],
                        },
                        {
                            type: "category",
                            label: "Events",
                            collapsed: true,
                            items: [
                                "window/api/window_headerdoubleclick_event",
                                "window/api/window_resize_event",
                                "window/api/window_beforeshow_event",
                                "window/api/window_aftershow_event",
                                "window/api/window_beforehide_event",
                                "window/api/window_move_event",
                                "window/api/window_afterhide_event",
                            ],
                        },
                        {
                            type: "category",
                            label: "Properties",
                            collapsed: true,
                            items: [
                                "window/api/window_footer_config",
                                "window/api/window_title_config",
                                "window/api/window_left_config",
                                "window/api/window_css_config",
                                "window/api/window_top_config",
                                "window/api/window_header_config",
                                "window/api/window_width_config",
                                "window/api/window_minwidth_config",
                                "window/api/window_minheight_config",
                                "window/api/window_node_config",
                                "window/api/window_resizable_config",
                                "window/api/window_modal_config",
                                "window/api/window_height_config",
                                "window/api/window_movable_config",
                                "window/api/window_viewportoverflow_config",
                                "window/api/window_closable_config",
                                "window/api/window_html_config",
                            ],
                        },
                    ],
                },
            ],
        },
        // end Window 
    ],
}