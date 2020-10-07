// module.exports = {
//     someSidebar: {
//         Docusaurus: ["doc1", "doc2", "doc3"],
//         Features: ["mdx"],
//     },
// };


module.exports = {
    docs: [{
            type: "doc",
            id: "how_to_start",
        },
        {
            type: "doc",
            id: "overview",
        },
        {
            type: "doc",
            id: "whats_new",
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
                "guides/react_integration",
                "guides/angular_integration",
                "guides/vuejs_integration",

            ],
        },
    ],
}