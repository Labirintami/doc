(window.webpackJsonp=window.webpackJsonp||[]).push([[1497],{1556:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),l=n(6),i=(n(0),n(1808)),s={sidebar_label:"Event Handling",title:"Event Handling",description:null},o={unversionedId:"layout/events",id:"layout/events",isDocsHomePage:!1,title:"Event Handling",description:"Attaching event listeners",source:"@site/docs/layout/events.md",slug:"/layout/events",permalink:"/layout/events",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/layout/events.md",version:"current",sidebar_label:"Event Handling",sidebar:"docs",previous:{title:"Customization",permalink:"/layout/customization"},next:{title:"List overview",permalink:"/list/index"}},c=[{value:"Attaching event listeners",id:"attaching-event-listeners",children:[]},{value:"Detaching event listeners",id:"detaching-event-listeners",children:[]},{value:"Calling events",id:"calling-events",children:[]},{value:"List of supported events",id:"list-of-supported-events",children:[]}],r={rightToc:c};function d(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"attaching-event-listeners"},"Attaching event listeners"),Object(i.b)("p",null,"The user can add any user-defined handler to any of the available events. To do this, the user can use the ",Object(i.b)("strong",null,"layout.events.on()")," method with the following parameters:"),Object(i.b)("table",{className:"webixdoc_links"},Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",{className:"webixdoc_links0"},Object(i.b)("b",null,"evName")),Object(i.b)("td",null,"name of the event")),Object(i.b)("tr",null,Object(i.b)("td",{className:"webixdoc_links0"},Object(i.b)("b",null,"evHandler")),Object(i.b)("td",null,"user-defined event handler")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'layout.events.on("BeforeHide", function(id){\n    console.log("The id of a cell", id);\n});\n')),Object(i.b)("p",null,"Several handlers can be attached to one and the same event, and all of them will be executed."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The names of the events are case-insensitive."))),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/fyxw0map"},"https://snippet.dhtmlx.com/fyxw0map"),"\tLayout. Events"),Object(i.b)("h2",{id:"detaching-event-listeners"},"Detaching event listeners"),Object(i.b)("p",null,"There is a simple way of removing an event handler via the ",Object(i.b)("strong",null,"layout.events.detach()")," method:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'layout.events.on("BeforeHide", function(id){\n    console.log("The id of a cell", id);\n});\n\nlayout.events.detach("BeforeHide");\n')),Object(i.b)("h2",{id:"calling-events"},"Calling events"),Object(i.b)("p",null,"To call events, use ",Object(i.b)("strong",null,"layout.events.fire()"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'layout.events.fire("BeforeHide",args);\n// where args is an array of arguments\n')),Object(i.b)("h2",{id:"list-of-supported-events"},"List of supported events"),Object(i.b)("p",null,"You can find the full list of Layout events in the ",Object(i.b)("a",{parentName:"p",href:"/layout/api/refs/layout_events"},"API Reference"),"."))}d.isMDXComponent=!0}}]);