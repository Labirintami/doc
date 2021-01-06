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
                href: 'https://docs.dhtmlx.com/',

            },
            items: [{
                    label: 'Examples',
                    href: 'https://docs.dhtmlx.com/richtext/samples/',
                    position: 'right',
                },
                {
                    label: 'Forum',
                    href: 'https://forum.dhtmlx.com/c/widgets/richtext',
                    position: 'right'
                },
                {
                    label: 'Support',
                    href: 'https://dhtmlx.com/docs/technical-support.shtml',
                    position: 'right',
                },
                {
                    label: 'Download RichText',
                    href: 'https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Development center',
                    items: [{
                            label: 'Download RichText',
                            href: 'https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml',
                            position: 'right',
                        },
                        {
                            label: 'Examples',
                            href: 'https://docs.dhtmlx.com/richtext/samples/',
                            position: 'right',
                        },
                        {
                            label: 'Blog',
                            href: 'https://dhtmlx.com/blog/tag/richtext/',
                        },
                        {
                            label: 'Forum',
                            href: 'https://forum.dhtmlx.com/c/widgets/richtext',
                            position: 'right'
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'GitHub',
                            href: 'https://github.com/DHTMLX',
                        },

                        {
                            label: 'Youtube',
                            href: 'https://www.youtube.com/user/dhtmlx',
                        },
                        {
                            label: 'Facebook',
                            href: 'https://www.facebook.com/dhtmlx',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/dhtmlx',
                        },
                        {
                            label: 'Linkedin',
                            href: 'https://www.linkedin.com/groups/3345009/',
                        },

                    ],
                },
                {
                    title: 'Company',
                    items: [{
                            label: 'About us',
                            href: 'https://dhtmlx.com/docs/company.shtml',
                        },
                        {
                            label: 'Contact us',
                            href: 'https://dhtmlx.com/docs/contact.shtml',
                        },
                        {
                            label: 'Licensing',
                            href: 'https://dhtmlx.com/docs/products/dhtmlxRichText/#editions-licenses',
                        },
                    ],
                },
            ],
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
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                // },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};