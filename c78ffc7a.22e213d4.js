(window.webpackJsonp=window.webpackJsonp||[]).push([[1344],{1403:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),l=(a(0),a(1808)),i={sidebar_label:"Dynamic Loading",title:"Dynamic Loading"},o={unversionedId:"helpers/lazydataproxy",id:"helpers/lazydataproxy",isDocsHomePage:!1,title:"Dynamic Loading",description:"{{pronote This functionality requires PRO version of the dhtmlxGrid (or DHTMLX suite) package.}}",source:"@site/docs/helpers/lazydataproxy.md",slug:"/helpers/lazydataproxy",permalink:"/helpers/lazydataproxy",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/helpers/lazydataproxy.md",version:"current",sidebar_label:"Dynamic Loading",sidebar:"docs",previous:{title:"Default icons",permalink:"/helpers/icon"},next:{title:"Resizer",permalink:"/helpers/resize_handler"}},d=[{value:"Initialize LazyDataProxy",id:"initialize-lazydataproxy",children:[{value:"Parameters",id:"parameters",children:[]}]},{value:"Server-side Response",id:"server-side-response",children:[]},{value:"Updating URL",id:"updating-url",children:[]}],c={rightToc:d};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Pro Note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"This functionality requires PRO version of the dhtmlxGrid (or DHTMLX suite) package."))),Object(l.b)("p",null,"To load data dynamically from the server you can make use of the ",Object(l.b)("strong",null,"LazyDataProxy")," helper while loading data into dhtmlxGrid or dhtmlxList.\nThis helper allows getting data partially, on demand, and rendering only those records that are in the visible area."),Object(l.b)("p",null,"Read the related articles for detailed information about how to display large lists and tabular data efficiently:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/grid/data_loading#dynamicloading"},"dynamic loading in Grid")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/list/load_data#dynamicloading"},"dynamic loading in List")," (You need to set the ",Object(l.b)("strong",null,"virtual:true")," property in the configuration object of List) ")),Object(l.b)("h2",{id:"initialize-lazydataproxy"},"Initialize LazyDataProxy"),Object(l.b)("p",null,"Initialize LazyDataProxy with the dhx.LazyDataProxy object constructor. The constructor takes two parameters:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",null,"url")," - (*string*) the URL which the component will use to load data after its initialization"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",null,"config")," - (*object*) a configuration object which contains parameters for loading data from the server")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'new dhx.LazyDataProxy("https://docs.dhtmlx.com/suite/backend/lazyload", {\n    limit: 30,\n    prepare: 5,\n    delay: 150,\n    from: 0\n});\n')),Object(l.b)("h3",{id:"parameters"},"Parameters"),Object(l.b)("p",null,"There is a list of parameters that you can specify in the configuration object. All parameters are optional."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",null,"from")," - (*number*) the index of the first data item to start loading from; default value: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",null,"limit")," - (*number*) the count of records that should be loaded from the server during each dynamic loading request; default value: 50"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",null,"delay")," - (*number*) time interval (in milliseconds) to wait before the next dynamic loading request to the server (allows decreasing the number of server request during quick scrolling); default value: 50"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",null,"prepare")," - (*number*) the count of extra records that should be loaded from the server; default value: 0")),Object(l.b)("h2",{id:"server-side-response"},"Server-side Response"),Object(l.b)("p",null,"Server side will send the following data to the client side:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",null,"data")," - (*array*) - the array of data records"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",null,"from")," - (*number*) - starting position in the data set to add the loaded data to"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",null,"total_count")," - (*number*) - the total number of records available on the server")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'data: [\n    {country: "DR Congo", population: "84004989", yearlyChange: "0.0328"}\n    {country: "Germany", population: "82293457", yearlyChange: "0.0022"}\n    {country: "Iran", population: "82011735", yearlyChange: "0.0105"}\n    {country: "Turkey", population: "81916871", yearlyChange: "0.0145"}\n], \ntotal_count: 233,\nfrom: 15\n')),Object(l.b)("h2",{id:"updating-url"},"Updating URL"),Object(l.b)("p",null,"You can use the ",Object(l.b)("strong",null,"updateURL")," method to update the URL where the data will be loaded or to change parameters for loading data from the backend. The method takes two parameters:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",null,"url")," - (*string*) the URL which the component will use to load data after its initialization. If not specified, the currently existing URL will be used."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",null,"config")," - (*object*) a configuration object with parameters for loading data from the server. If not specified, clears parameters set earlier.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'lazyDataProxy.updateURL("https://docs.dhtmlx.com/suite/backend/lazyload", {\n    limit: 30,\n    prepare: 5,\n    delay: 150,\n    from: 0\n});\n')),Object(l.b)("p",null," pro"))}s.isMDXComponent=!0}}]);