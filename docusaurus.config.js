const path = require('path');

const AT_NOTATION_KEYS = {
    short: 'Short',
    type: 'Type',
    descr: 'Descr'
};

const COMPONENTS_PATH = '@site/src/components';

let components = {};
let metaDescription = '';

const wrapDataWithComponent = (data, componentName) => {
    return componentName ? `\n<${componentName}>\n${data}\n\n</${componentName}>\n\n` : data;
}

const onAtNotationMatch = (data, { key }) => {
    const componentName = AT_NOTATION_KEYS[key];
    if (componentName) {
        components[componentName] = componentName;
    }

    switch(key) {
        case 'default':
            return `<strong>Default value: </strong> ${data}`;
        case 'example':
            return `~~~js\n${data}\n~~~`;
        case 'metadescr':
            metaDescription = data.replace(/^(?:\n*)(.+)(?:\n|.)*/, '$1');
            return '';
        default:
            return componentName 
                ? wrapDataWithComponent(data, componentName)
                : data;
    }
};

const onBraceNotationMatch = (data, { key, fullMatch }) => {
    switch(key) {
        case 'note':
            return `:::note\n${data}1\n:::`;
        case 'pronote':
            return `:::danger Pro Note\n${data}\n:::`;
        case 'editor':
            return data;
        default:
            return fullMatch;
    }
};

const onAfterDataTransformation = (data) => {
    const allAvailableComponents = Object.values(components);
    let transformedData = data;

    if (allAvailableComponents.length !== 0) {
      const imports = `import { ${allAvailableComponents.join(', ')} } from '${COMPONENTS_PATH}';\n\n`
      const isTitles = /---((?:\r?\n|\r)|.)+?---/.test(transformedData);
      transformedData = isTitles ? transformedData.replace(/^(---((?:\r?\n|\r)|.)+?---)/, `$1\n\n${imports}`) : imports + transformedData;
    };

    if (metaDescription) {
        transformedData = transformedData.replace(/^(---\s*\n)((?:\n|.)+?)(---\s*?\n)/, `$1$2description: ${metaDescription}\n$3`);
    }

    components = {};
    metaDescription = '';

    return transformedData;
};

module.exports = {
    title: 'DHTMLX RichText Documentation',
    tagline: 'DHTMLX RichText Documentation',
    url: 'https://richtext-doc.netlify.app/',
    baseUrl: '/',
    onBrokenLinks: 'log',
    favicon: 'img/favicon.ico',
    organizationName: 'labirintami', // Usually your GitHub org/user name.
    projectName: 'doc', // Usually your repo name.
    themeConfig: {
        colorMode: {
            // "light" | "dark"
            defaultMode: 'light',

            // Hides the switch in the navbar
            // Useful if you want to support a single color mode
            disableSwitch: false,

            // Should we use the prefers-color-scheme media-query,
            // using user system preferences, instead of the hardcoded defaultMode
            respectPrefersColorScheme: true,

            // Dark/light switch icon options
            switchConfig: {
                darkIcon: '🌙',
                darkIconStyle: {
                    marginLeft: '0px',
                },
                lightIcon: '☀️',
                lightIconStyle: {
                    marginLeft: '0px',
                },
            },
        },
        algolia: {
            // This is a read-only, search-only key served directly by the front-end, managed by Algolia via their
            // free DocSearch program. The key is not sensitive. See https://docsearch.algolia.com/ for more details.
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
            title: 'RichText Documenation',
            logo: {
                alt: 'DHTMLX RichText Documenation',
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
                    label: 'Download',
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
    plugins: [
        'docusaurus-plugin-sass',
        [
            path.resolve(__dirname, './plugins/dhx-md-data-transformer-plugin'),
            {
                onBraceNotationMatch,
                onAtNotationMatch,
                onAfterDataTransformation
            }
        ]
    ]
};