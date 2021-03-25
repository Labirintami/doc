(window.webpackJsonp=window.webpackJsonp||[]).push([[432],{491:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return s})),n.d(e,"rightToc",(function(){return l})),n.d(e,"default",(function(){return h}));var a=n(2),i=n(6),o=(n(0),n(1808)),r=n(1809),c={sidebar_label:"setConfig",title:"setConfig"},s={unversionedId:"chart/api/chart_setconfig_method",id:"chart/api/chart_setconfig_method",isDocsHomePage:!1,title:"setConfig",description:"@short: sets configuration of a chart",source:"@site/docs/chart/api/chart_setconfig_method.md",slug:"/chart/api/chart_setconfig_method",permalink:"/chart/api/chart_setconfig_method",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/chart/api/chart_setconfig_method.md",version:"current",sidebar_label:"setConfig",sidebar:"docs",previous:{title:"paint",permalink:"/chart/api/chart_paint_method"},next:{title:"toggleSeries",permalink:"/chart/api/chart_toggleseries_event"}},l=[],p={rightToc:l};function h(t){var e=t.components,n=Object(i.a)(t,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)(r.c,{mdxType:"Short"},"sets configuration of a chart",Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-todoapi"},"void setConfig(object config);\nsetConfig(config: IChartConfig): void;\n    export interface IChartConfig {\n    type?: ChartType;\n    css?: string;\n    barWidth?: number;\n    scales?: IScalesConfig;\n    legend?: ILegendConfig;\n    series?: SeriaConfig[];\n    maxPoints?: number;\n    data?: DataCollection<any> | any[];\n}\n"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"config\tobject\t an object with chart configuration")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'var config = {\n    type: "radar",\n    scales: {\n        radial:{\n            value: "month",\n            maxTicks: 7\n        }\n    },\n    series: [\n        {\n            id: "A",\n            value: "company A",\n            fill: "#000000",\n            alpha: 0.3,\n            color: "#000000"\n        },\n        {\n            id: "B",\n            value: "company B",\n            fill: "#FFFF33",\n            alpha: 0.3,\n            color: "#FFFF33"\n        }\n    ]\n}\n \nchart.setConfig(config);\n')),Object(o.b)("p",null," api_method"),Object(o.b)(r.b,{mdxType:"Descr"},Object(o.b)("p",null,"See the list of chart configuration properties in the article chart/configuration_properties.md.")),Object(o.b)("p",null,"chart/usage.md#settingchartconfiguration"),Object(o.b)("a",{href:"https://snippet.dhtmlx.com/7umj531n",target:"_blank"},"Chart. Change Configuration On The Fly"),Object(o.b)(r.a,{mdxType:"Changelog"}))}h.isMDXComponent=!0}}]);