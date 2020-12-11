// module.exports = {
//     someSidebar: {
//         Docusaurus: ["doc1", "doc2", "doc3"],
//         Features: ["mdx"],
//     },
// };


module.exports = {
    docs: [
        {
            type: "doc",
            id: "overview",
        },
        {
            type: "doc",
            id: "whats_new",
        },
        {
            type: "doc",
            id: "how_to_start",
        },
        {
            type: "category",
            label: "API",
            // collapsed: false,
            items: [
                "api/overview",
                "api/methods",
                "api/events_bus",
                "api/events",
                "api/properties",
                "api/editor_api_methods",

                // {
                //     type: "category",
                //     label: "Methods",
                //     items: [
                //         "api/richtext_destructor",
                //         "api/richtext_exitfullscreen",
                //         "api/richtext_fullscreen",
                //         "api/richtext_geteditorapi",
                //         "api/richtext_getvalue",
                //         "api/richtext_getstats",
                //         "api/richtext_paint",
                //         "api/richtext_setvalue"
                //     ],
                // }

            ],
        },
        {
            type: "category",
            label: "Guides",
            collapsed: false,
            items: [
                "guides/initialization",
                "guides/configuration",
                "guides/localization",
                "guides/loading_data",
                "guides/working_with_richtext",
                "guides/customization",
                "guides/event_handling",
                "guides/angular_integration",
                "guides/react_integration",
                "guides/vuejs_integration",
            ],
        },
    ],
}
