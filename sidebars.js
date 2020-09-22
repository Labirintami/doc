// module.exports = {
//     someSidebar: {
//         Docusaurus: ['doc1', 'doc2', 'doc3'],
//         Features: ['mdx'],
//     },
// };


module.exports = {
    docs: [{
            type: 'category',
            label: 'Overview',
            items: ['overview'],
            collapsed: false,
        },
        {
            type: 'category',
            label: 'Common guides',
            collapsed: false,
            items: [
                'common_guides/сreating_dhtmlxdiagram',
                'common_guides/configuration',
                'common_guides/loading_data',
                'common_guides/manipulating_shapes',
                'common_guides/working_with_diagram',
                'common_guides/data_export',

            ],
        },
        {
            type: 'category',
            label: 'Diagram guides',
            collapsed: false,
            items: [
                'diagram_guides/data_format',
                // 'diagram_guides/shapes_arrows_list',
                // 'diagram_guides/customization',
                // 'diagram_guides/editor_mode',

            ],
        },

    ],
}