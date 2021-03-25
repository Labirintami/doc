(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{136:function(t,e,i){"use strict";i.r(e),i.d(e,"frontMatter",(function(){return c})),i.d(e,"metadata",(function(){return r})),i.d(e,"rightToc",(function(){return d})),i.d(e,"default",(function(){return s}));var a=i(2),n=i(6),o=(i(0),i(1808)),l=i(1809),c={sidebar_label:"width",title:"width"},r={unversionedId:"layout/api/layout_width_config",id:"layout/api/layout_width_config",isDocsHomePage:!1,title:"width",description:"@short: sets the width of a cell",source:"@site/docs/layout/api/layout_width_config.md",slug:"/layout/api/layout_width_config",permalink:"/layout/api/layout_width_config",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/layout/api/layout_width_config.md",version:"current",sidebar_label:"width",sidebar:"docs",previous:{title:"views",permalink:"/layout/api/layout_views_config"},next:{title:"Initialization",permalink:"/layout/init"}},d=[],u={rightToc:d};function s(t){var e=t.components,i=Object(n.a)(t,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,i,{components:e,mdxType:"MDXLayout"}),Object(o.b)(l.c,{mdxType:"Short"},"sets the width of a cell"),Object(o.b)(l.d,{mdxType:"Signature"},"width?: number | string;"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},' \nvar layout = new dhx.Layout("layout_container", {\n    cols: [\n      { header: "Cell header", width: "300px" }\n    ]\n});\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"api_config\n")),Object(o.b)(l.b,{mdxType:"Descr"},"Starting from v7.0, the width of a cell can be automatically adjusted to the width of its content. For that, set the ",Object(o.b)("strong",null,"width"),' configuration option to *"content"*:',Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'var layout = new dhx.Layout("layout_container", {\n    cols: [\n      { header: "Cell header", width: "content" } /*!*/\n    ]\n});\n'))),Object(o.b)("p",null," layout/init.md#initializelayout\nlayout/cell_configuration.md#cellsize"),Object(o.b)("a",{href:"https://snippet.dhtmlx.com/miej9gb9",target:"_blank"},"Layout. Sizes"),Object(o.b)("p",null,"layout/api/layout_minwidth_config.md\nlayout/api/layout_maxwidth_config.md"))}s.isMDXComponent=!0}}]);