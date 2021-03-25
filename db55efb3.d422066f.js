(window.webpackJsonp=window.webpackJsonp||[]).push([[1487],{1546:function(n,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return s})),i.d(t,"metadata",(function(){return r})),i.d(t,"rightToc",(function(){return d})),i.d(t,"default",(function(){return l}));var o=i(2),e=i(6),a=(i(0),i(1808)),s=(i(1809),{sidebar_label:"spans",title:"spans",description:null}),r={unversionedId:"grid/api/grid_spans_config",id:"grid/api/grid_spans_config",isDocsHomePage:!1,title:"spans",description:"` todo",source:"@site/docs/grid/api/grid_spans_config.md",slug:"/grid/api/grid_spans_config",permalink:"/grid/api/grid_spans_config",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/grid/api/grid_spans_config.md",version:"current",sidebar_label:"spans",sidebar:"docs",previous:{title:"sortable",permalink:"/grid/api/grid_sortable_config"},next:{title:"splitAt",permalink:"/grid/api/grid_splitat_config"}},d=[],c={rightToc:d};function l(n){var t=n.components,i=Object(e.a)(n,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-todo"},'\n<Short>\n describes the configuration of cols/rows spans\n\n\n</Short>\n\n\n\n<Signature>\n spans?: [];\n\n\n</Signature>\n\n\n~~~js\n \nvar grid = new dhx.Grid("grid_container", {\n    columns: [// columns config],\n    spans: [\n        {row:"0", column:"a", rowspan:5 },\n        {row:"0", column:"b", rowspan:9, text:"<h2>Some content here</h2>"},\n        {row:"0", column:"c", colspan:2, text:"Some content"},\n        {row:"10", column:"a", colspan:4, text:"Some header", css:"myCustomColspan"}\n    ],\n    data: dataset\n});\n~~~\n    api_config\n\n<Descr>\n \nEach object in the spans array contains the following properties:\n\n<table className="webixdoc_links">\n    <tbody>\n        <tr>\n            <td className="webixdoc_links0"><b>row</b></td>\n            <td>(<i>string|number</i>) obligatory, the id of a row</td>\n        </tr>\n        <tr>\n            <td className="webixdoc_links0"><b>column</b></td>\n            <td>(<i>string|number</i>) obligatory, the id of a column</td>\n        </tr>\n        <tr>\n            <td className="webixdoc_links0"><b>rowspan</b></td>\n            <td>(<i>number</i>) optional, the number of rows in a span</td>\n        </tr>\n        <tr>\n            <td className="webixdoc_links0"><b>colspan</b></td>\n            <td>(<i>number</i>) optional, the number of columns in a span</td>\n        </tr>\n        <tr>\n            <td className="webixdoc_links0"><b>text</b></td>\n            <td>(<i>string|number</i>) optional, the content of a span</td>\n        </tr>\n        <tr>\n            <td className="webixdoc_links0"><b>css</b></td>\n            <td>(<i>string</i>) optional, the name of a CSS class applied to a span</td>\n        </tr>\n        <tr>\n            <td className="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/grid__configuration.html#tooltip"><b>tooltip</b></td>\n            <td>(<i>boolean</i>) enables a tooltip on hovering over the content of a span, <i>true</i> by default</td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n</Descr>\n\n\n grid/initialization.md#initializegrid\ngrid/configuration.md#spans\n\n <a href=\'https://snippet.dhtmlx.com/eol76o68\' target=\'_blank\'>Grid. Header Spans</a>\n\n\n<Changelog>\n The <strong>tooltip</strong> property is added in v6.5.\n\n``` todo\n\n</Changelog>\n\n\n')))}l.isMDXComponent=!0}}]);