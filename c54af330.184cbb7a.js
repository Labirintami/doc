(window.webpackJsonp=window.webpackJsonp||[]).push([[1328],{1387:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(1808)),c=r(1809),i={sidebar_label:"getProperties",title:"getProperties"},b={unversionedId:"form/api/spacer/spacer_getproperties_method",id:"form/api/spacer/spacer_getproperties_method",isDocsHomePage:!1,title:"getProperties",description:"@short: returns an object with the available configuration attributes of the control",source:"@site/docs/form/api/spacer/spacer_getproperties_method.md",slug:"/form/api/spacer/spacer_getproperties_method",permalink:"/form/api/spacer/spacer_getproperties_method",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/form/api/spacer/spacer_getproperties_method.md",version:"current",sidebar_label:"getProperties",sidebar:"docs",previous:{title:"change",permalink:"/form/api/slider/slider_change_event"},next:{title:"hide",permalink:"/form/api/spacer/spacer_hide_method"}},s=[],l={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c.c,{mdxType:"Short"},"returns an object with the available configuration attributes of the control"),Object(a.b)("p",null,"param   object      an object with the available attributes of the control and their values"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'var form = new dhx.Form("form_container", {\n    rows: [\n        {\n            type: "spacer",\n            name: "spacer"\n        }\n    ]\n});\n\nform.getItem("spacer").getProperties();\n\n// -> the returned object\n{\n    height: "content",\n    padding: 0,\n    width: "content"\n}\n')),Object(a.b)("p",null," api_method"),Object(a.b)(c.b,{mdxType:"Descr"},Object(a.b)("p",null,"The returned object of the ",Object(a.b)("strong",null,"Spacer")," control can contain the following configuration attributes:"),Object(a.b)("table",{className:"webixdoc_links"},Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"width")),Object(a.b)("td",null,"(",Object(a.b)("i",null,'string|number|"content"'),") the width of a control")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"padding")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string|number"),") sets padding between a cell and a border of the Spacer control")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"height")),Object(a.b)("td",null,"(",Object(a.b)("i",null,'string|number|"content"'),") the height of a control"))))),Object(a.b)(c.a,{mdxType:"Changelog"},"added in v7.0"))}p.isMDXComponent=!0}}]);