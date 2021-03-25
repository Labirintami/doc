(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{508:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"metadata",(function(){return b})),a.d(e,"rightToc",(function(){return r})),a.d(e,"default",(function(){return d}));var n=a(2),o=a(6),c=(a(0),a(1808)),l=a(1809),i={sidebar_label:"sort",title:"sort"},b={unversionedId:"data_collection/api/datacollection_sort_method",id:"data_collection/api/datacollection_sort_method",isDocsHomePage:!1,title:"sort",description:"@short:",source:"@site/docs/data_collection/api/datacollection_sort_method.md",slug:"/data_collection/api/datacollection_sort_method",permalink:"/data_collection/api/datacollection_sort_method",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/data_collection/api/datacollection_sort_method.md",version:"current",sidebar_label:"sort",sidebar:"docs",previous:{title:"serialize",permalink:"/data_collection/api/datacollection_serialize_method"},next:{title:"update",permalink:"/data_collection/api/datacollection_update_method"}},r=[{value:"Custom sorting",id:"custom-sorting",children:[]}],s={rightToc:r};function d(t){var e=t.components,a=Object(o.a)(t,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:e,mdxType:"MDXLayout"}),Object(c.b)(l.c,{mdxType:"Short"},Object(c.b)("p",null,"sorts data items in a component")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"rule\t\tobject\t\tan object with parameters for sorting"),Object(c.b)("li",{parentName:"ul"},"config\tobject\t\tdefines the parameter of sorting")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'grid.data.sort({\n    by:"a",\n    dir:"desc",\n    as: function(item){\n        return item.toUpperCase(); \n    }\n});\n\n// cancels applied sorting rules\ngrid.data.sort();\n')),Object(c.b)("p",null," api_method"),Object(c.b)(l.b,{mdxType:"Descr"},Object(c.b)("p",null,"The ",Object(c.b)("strong",null,"rule")," object has the following attributes:"),Object(c.b)("table",{className:"webixdoc_links"},Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"by")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"string"),") the id of a data field (a column of Grid)")),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"dir")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"function"),') the direction of sorting "asc" or "desc"')),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"as")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"function"),") a function that specifies the type to sort data as")),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"rule")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"function"),") optional, a sorting rule; the function must have two parameters and return a number (-1,0,1)")))),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Calling the method without parameters will discard all applied sorting rules."))),Object(c.b)("p",null,"The ",Object(c.b)("strong",null,"config")," parameter may contain one property:"),Object(c.b)("table",{className:"webixdoc_links"},Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"smartSorting")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"boolean"),") specifies whether a sorting rule should be applied each time after changing the data set")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'grid.data.sort({\n    by:"a",\n    dir:"desc",\n    as: function(item){\n        return item.toUpperCase(); \n    },\n    {\n        smartSorting: true /*!*/\n    }\n});\n')),Object(c.b)("h3",{id:"custom-sorting"},"Custom sorting"),Object(c.b)("p",null,"To set a custom function for sorting you need to specify the ",Object(c.b)("strong",null,"rule")," attribute in a passed object. For example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"grid.data.sort({\n    rule: (a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0) \n});\n"))),Object(c.b)("a",{href:"https://snippet.dhtmlx.com/lz351u47",target:"_blank"},"Data. Sort"),Object(c.b)(l.a,{mdxType:"Changelog"},"The ",Object(c.b)("strong",null,"config")," parameter is added in v7.0."))}d.isMDXComponent=!0}}]);