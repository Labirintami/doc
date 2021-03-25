(window.webpackJsonp=window.webpackJsonp||[]).push([[642],{701:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return r})),l.d(t,"metadata",(function(){return s})),l.d(t,"rightToc",(function(){return o})),l.d(t,"default",(function(){return d}));var b=l(2),n=l(6),i=(l(0),l(1808)),c=l(1809),r={sidebar_label:"getProperties",title:"getProperties"},s={unversionedId:"form/api/slider/slider_getproperties_method",id:"form/api/slider/slider_getproperties_method",isDocsHomePage:!1,title:"getProperties",description:"@short: returns an object with the available configuration attributes of the control",source:"@site/docs/form/api/slider/slider_getproperties_method.md",slug:"/form/api/slider/slider_getproperties_method",permalink:"/form/api/slider/slider_getproperties_method",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/form/api/slider/slider_getproperties_method.md",version:"current",sidebar_label:"getProperties",sidebar:"docs",previous:{title:"enable",permalink:"/form/api/slider/slider_enable_method"},next:{title:"getValue",permalink:"/form/api/slider/slider_getvalue_method"}},o=[],a={rightToc:o};function d(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(b.a)({},a,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)(c.c,{mdxType:"Short"},"returns an object with the available configuration attributes of the control"),Object(i.b)("p",null,"param   object      an object with the available attributes of the control and their values"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'var form = new dhx.Form("form_container", {\n    rows: [\n        {\n            type: "slider",\n            name:"slider",\n            label: "slider",\n            labelWidth: "50px",\n            min: 0,\n            max: 100\n        }\n    ]\n});\n\nform.getItem("slider").getProperties();\n\n// -> the returned object\n\n{\n    height: "content",\n    helpMessage: "",\n    hiddenLabel: false,\n    inverse: false,\n    label: "slider",\n    labelPosition: "top",\n    labelWidth: "50px",\n    majorTick: undefined,\n    max: 100,\n    min: 0,\n    mode: "horizontal",\n    padding: 0,\n    range: false,\n    step: 1,\n    tick: undefined,\n    tickTemplate: undefined,\n    tooltip: true,\n    width: "content"\n}\n')),Object(i.b)("p",null," api_method"),Object(i.b)(c.b,{mdxType:"Descr"},Object(i.b)("p",null,"The returned object of the ",Object(i.b)("strong",null,"Slider")," control can contain the following configuration attributes:"),Object(i.b)("table",{className:"webixdoc_links"},Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",{className:"webixdoc_links0"},Object(i.b)("b",null,"width")),Object(i.b)("td",null,"(",Object(i.b)("i",null,'string|number|"content"'),") the width of a control")),Object(i.b)("tr",null,Object(i.b)("td",{className:"webixdoc_links0"},Object(i.b)("b",null,"height")),Object(i.b)("td",null,"(",Object(i.b)("i",null,'string|number|"content"'),") the height of a control")),Object(i.b)("tr",null,Object(i.b)("td",{className:"webixdoc_links0"},Object(i.b)("b",null,"padding")),Object(i.b)("td",null,"(",Object(i.b)("i",null,"string|number"),") sets padding between a cell and a border of the Slider control")),Object(i.b)("tr",null,Object(i.b)("td",{className:"webixdoc_links0"},Object(i.b)("b",null,"label")),Object(i.b)("td",null,"(",Object(i.b)("i",null,"string"),") specifies a label for a control")),Object(i.b)("tr",null,Object(i.b)("td",{className:"webixdoc_links0"},Object(i.b)("b",null,"labelWidth")),Object(i.b)("td",null,"(",Object(i.b)("i",null,"string|number"),") sets the width of the label of a control")),Object(i.b)("tr",null,Object(i.b)("td",{className:"webixdoc_links0"},Object(i.b)("b",null,"hiddenLabel")),Object(i.b)("td",null,"(",Object(i.b)("i",null,"boolean"),") invisible label that will be used to identify the input on the server side")),Object(i.b)("tr",null,Object(i.b)("td",{className:"webixdoc_links0"},Object(i.b)("b",null,"labelPosition")),Object(i.b)("td",null,"(",Object(i.b)("i",null,"string"),') defines the position of a label: "left"|"top"')),Object(i.b)("tr",null,Object(i.b)("td",{className:"webixdoc_links0"},Object(i.b)("b",null,"helpMessage")),Object(i.b)("td",null,"(",Object(i.b)("i",null,"string"),") adds a help message to a control")),Object(i.b)("tr",null,Object(i.b)("td",{className:"webixdoc_links0"},Object(i.b)("b",null,"min")),Object(i.b)("td",null,"(",Object(i.b)("i",null,"number"),") the minimal value of slider, 0 by default")),Object(i.b)("tr",null,Object(i.b)("td",{className:"webixdoc_links0"},Object(i.b)("b",null,"max")),Object(i.b)("td",null,"(",Object(i.b)("i",null,"number"),") the maximal value of slider, 100 by default")),Object(i.b)("tr",null,Object(i.b)("td",{className:"webixdoc_links0"},Object(i.b)("b",null,"step")),Object(i.b)("td",null,"(",Object(i.b)("i",null,"number"),") the step the slider thumb will be moved with, 1 by default")),Object(i.b)("tr",null,Object(i.b)("td",{className:"webixdoc_links0"},Object(i.b)("b",null,"mode")),Object(i.b)("td",null,"(",Object(i.b)("i",null,"string"),') the direction of the Slider scale, "horizontal" by default')),Object(i.b)("tr",null,Object(i.b)("td",{className:"webixdoc_links0"},Object(i.b)("b",null,"tooltip")),Object(i.b)("td",null,"(",Object(i.b)("i",null,"boolean"),") enables prompt messages with ticks values on hovering over the slider thumb, true by default")),Object(i.b)("tr",null,Object(i.b)("td",{className:"webixdoc_links0"},Object(i.b)("b",null,"range")),Object(i.b)("td",null,"(",Object(i.b)("i",null,"boolean"),") enables/disables the possibility to select a range of values on the slider")),Object(i.b)("tr",null,Object(i.b)("td",{className:"webixdoc_links0"},Object(i.b)("b",null,"inverse")),Object(i.b)("td",null,"(",Object(i.b)("i",null,"boolean"),") enables/disables the inverse slider mode")),Object(i.b)("tr",null,Object(i.b)("td",{className:"webixdoc_links0"},Object(i.b)("b",null,"tick")),Object(i.b)("td",null,"(",Object(i.b)("i",null,"number"),") sets the interval of steps for rendering the slider scale")),Object(i.b)("tr",null,Object(i.b)("td",{className:"webixdoc_links0"},Object(i.b)("b",null,"majorTick")),Object(i.b)("td",null,"(",Object(i.b)("i",null,"number"),") sets interval of rendering numeric values on the slider scale")),Object(i.b)("tr",null,Object(i.b)("td",{className:"webixdoc_links0"},Object(i.b)("b",null,"tickTemplate")),Object(i.b)("td",null,"(",Object(i.b)("i",null,"function"),") sets a template for rendering values on the scale"))))),Object(i.b)(c.a,{mdxType:"Changelog"},"added in v7.0"))}d.isMDXComponent=!0}}]);