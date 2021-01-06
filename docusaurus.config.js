module.exports = {
    title: 'DHTMLX RichText Documentation',
    tagline: 'DHTMLX RichText Documentation',
    url: 'https://richtext-doc.netlify.app/',
    baseUrl: '/',
    onBrokenLinks: 'ignore',
    favicon: 'img/favicon.ico',
    organizationName: 'labirintami', // Usually your GitHub org/user name.
    projectName: 'doc', // Usually your repo name.
    themeConfig: {
        algolia: {
            apiKey: '421aa9b07cc441097c4db7f264b63a6b',
            indexName: 'richtext',

            // Optional: see doc section bellow
            contextualSearch: true,

            // Optional: Algolia search parameters
            searchParameters: {},

            //... other Algolia params
        },
        prism: {
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/dracula'),
        },
        navbar: {
            title: 'RichText Documenattion',
            logo: {
                alt: 'DHTMLX RichText Documenattion',
                src: 'img/dhtmlx_logo.svg',
            },
            items: [
                // {
                //     to: 'docs/',
                //     activeBasePath: 'docs',
                //     label: 'Docs',
                //     position: 'left',
                // },
                // { to: 'blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/Labirintami/doc',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            // links: [{
            //         title: 'Docs',
            //         items: [{
            //                 label: 'Style Guide',
            //                 to: 'docs/',
            //             },
            //             {
            //                 label: 'Second Doc',
            //                 to: 'docs/doc2/',
            //             },
            //         ],
            //     },
            //     {
            //         title: 'Community',
            //         items: [{
            //                 label: 'Stack Overflow',
            //                 href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //             },
            //             {
            //                 label: 'Discord',
            //                 href: 'https://discordapp.com/invite/docusaurus',
            //             },
            //             {
            //                 label: 'Twitter',
            //                 href: 'https://twitter.com/docusaurus',
            //             },
            //         ],
            //     },
            //     {
            //         title: 'More',
            //         items: [{
            //                 label: 'Blog',
            //                 to: 'blog',
            //             },
            //             {
            //                 label: 'GitHub',
            //                 href: 'https://github.com/facebook/docusaurus',
            //             },
            //         ],
            //     },
            // ],
            copyright: `Copyright © ${new Date().getFullYear()} DHTMLX, Inc. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/Labirintami/doc/edit/master/',
                    routeBasePath: '/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};