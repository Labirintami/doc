(window.webpackJsonp=window.webpackJsonp||[]).push([[504],{563:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return r})),l.d(t,"metadata",(function(){return i})),l.d(t,"rightToc",(function(){return a})),l.d(t,"default",(function(){return d}));var b=l(2),n=l(6),c=(l(0),l(1808)),o=l(1809),r={sidebar_label:"getProperties",title:"getProperties"},i={unversionedId:"form/api/colorpicker/colorpicker_getproperties_method",id:"form/api/colorpicker/colorpicker_getproperties_method",isDocsHomePage:!1,title:"getProperties",description:"@short: returns an object with the available configuration attributes of the control",source:"@site/docs/form/api/colorpicker/colorpicker_getproperties_method.md",slug:"/form/api/colorpicker/colorpicker_getproperties_method",permalink:"/form/api/colorpicker/colorpicker_getproperties_method",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/form/api/colorpicker/colorpicker_getproperties_method.md",version:"current",sidebar_label:"getProperties",sidebar:"docs",previous:{title:"focus",permalink:"/form/api/colorpicker/colorpicker_focus_method"},next:{title:"getValue",permalink:"/form/api/colorpicker/colorpicker_getvalue_method"}},a=[],s={rightToc:a};function d(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(b.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(c.b)(o.c,{mdxType:"Short"},"returns an object with the available configuration attributes of the control"),Object(c.b)("p",null,"param   object      an object with the available attributes of the control and their values"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'var form = new dhx.Form("form_container", {\n    rows: [\n        {\n            type: "colorpicker",\n            name: "colorpicker",\n            labelWidth: "200px",\n            label: "Choose your color"\n        }\n    ]\n});\n\nform.getItem("colorpicker").getProperties();\n\n// -> the returned object:\n{\n    customColors: [],\n    editable: false,\n    errorMessage: "",\n    grayShades: true,\n    height: "content",\n    helpMessage: "",\n    hiddenLabel: false,\n    icon: "",\n    label: "Choose your color",\n    labelPosition: "top",\n    labelWidth: "200px",\n    padding: 0,\n    palette: [Array(7), Array(7), ...],\n    placeholder: "",\n    preMessage: "",\n    required: false,\n    successMessage: "",\n    validation: undefined,\n    width: "content"\n}\n')),Object(c.b)("p",null," api_method"),Object(c.b)(o.b,{mdxType:"Descr"},Object(c.b)("p",null,"The returned object of the ",Object(c.b)("strong",null,"ColorPicker")," control can contain the following configuration attributes:"),Object(c.b)("table",{className:"webixdoc_links"},Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"validation")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"function"),") the validation function, takes as a parameter the value to validate and returns ",Object(c.b)("i",null,"true/false")," to indicate the result of validation")),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"width")),Object(c.b)("td",null,"(",Object(c.b)("i",null,'string|number|"content"'),") the width of a control")),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"height")),Object(c.b)("td",null,"(",Object(c.b)("i",null,'string|number|"content"'),") the height of a control")),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"padding")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"string|number"),") sets padding between a cell and a border of the ColorPicker control")),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"icon")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"string"),") the name of an ",Object(c.b)("a",{href:"https://docs.dhtmlx.com/suite/helpers__icon.html"},"icon")," from the used icon font")),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"placeholder")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"string"),") a tip for the input")),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"editable")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"boolean"),") allows a user to enter the value of the control manually")),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"required")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"boolean"),") defines whether a control is required")),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"label")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"string"),") specifies a label for a control")),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"labelWidth")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"string|number"),") sets the width of the label of a control")),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"hiddenLabel")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"boolean"),") invisible label that will be used to identify the input on the server side")),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"labelPosition")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"string"),') defines the position of a label: "left"|"top"')),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"helpMessage")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"string"),") adds a help message to a control")),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"preMessage")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"string"),") a message that contains instructions for interacting with the control")),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"successMessage")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"string"),") a message that appears in case of successful validation of the control value")),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"errorMessage")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"string"),") a message that appears in case of error during validation of the control value")),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"mode")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"string"),') the mode of a control: "palette" (default), "picker"')),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"palette")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"array"),") contains arrays of colors you want to be shown in a colorpicker")),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"customColors")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"array"),") shows a section with custom colors in the bottom part of the ColorPicker")),Object(c.b)("tr",null,Object(c.b)("td",{className:"webixdoc_links0"},Object(c.b)("b",null,"grayShades")),Object(c.b)("td",null,"(",Object(c.b)("i",null,"boolean"),") defines whether the section with gray shades is displayed in the palette"))))),Object(c.b)(o.a,{mdxType:"Changelog"},"added in v7.0"))}d.isMDXComponent=!0}}]);