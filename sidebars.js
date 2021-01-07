module.exports = {
    docs: [{
        type: "doc",
        id: "index",
    }, {
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
    }, ],
}