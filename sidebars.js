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
    ],
}