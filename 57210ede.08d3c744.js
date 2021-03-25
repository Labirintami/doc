(window.webpackJsonp=window.webpackJsonp||[]).push([[616],{675:function(e,o,t){"use strict";t.r(o),t.d(o,"frontMatter",(function(){return c})),t.d(o,"metadata",(function(){return i})),t.d(o,"rightToc",(function(){return b})),t.d(o,"default",(function(){return r}));var n=t(2),l=t(6),a=(t(0),t(1808)),c={sidebar_label:"Localization",title:"Localization"},i={unversionedId:"combobox/localization",id:"combobox/localization",isDocsHomePage:!1,title:"Localization",description:"You can apply different languages to the interface of dhtmlxCombo. You just need to translate the corresponding strings for Combobox labels and apply a ready locale to the component.",source:"@site/docs/combobox/localization.md",slug:"/combobox/localization",permalink:"/combobox/localization",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/combobox/localization.md",version:"current",sidebar_label:"Localization",sidebar:"docs",previous:{title:"Configuration",permalink:"/combobox/configuration"},next:{title:"Data Loading",permalink:"/combobox/adding_options"}},b=[{value:"Default locale",id:"default-locale",children:[]},{value:"Custom locale",id:"custom-locale",children:[]}],s={rightToc:b};function r(e){var o=e.components,t=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:o,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can apply different languages to the interface of dhtmlxCombo. You just need to translate the corresponding strings for Combobox labels and apply a ready locale to the component."),Object(a.b)("h2",{id:"default-locale"},"Default locale"),Object(a.b)("p",null,"The default locale for Combobox looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'var en = {\n    notFound: "Not Found",\n    selectAll: "Select All",\n    unselectAll: "Unselect All",\n    selectedItems: "selected items"\n};\n')),Object(a.b)("h2",{id:"custom-locale"},"Custom locale"),Object(a.b)("p",null,"To use a different locale, your need to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"define necessary language settings - names of buttons and labels:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'var de = {\n    notFound: "nicht gefunden",\n    selectAll: "alle ausw\xe4hlen",\n    unselectAll: "deaktivieren Sie Alle",\n    selectedItems: "ausgew\xe4hlte Elemente"\n}\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"apply the language settings by calling the ",Object(a.b)("strong",null,"dhx.i18n.setLocale()")," method before Combobox initialization:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'dhx.i18n.setLocale("combo", de);\nvar combo = new dhx.Combobox("combo_container");\n')),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/cnj0j9g0"},"https://snippet.dhtmlx.com/cnj0j9g0"),"\tCombobox. Localization"))}r.isMDXComponent=!0}}]);