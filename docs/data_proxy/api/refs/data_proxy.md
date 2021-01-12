DataProxy
==============

DataProxy is a helper that enables communication with external datasources. Using the helper allows creating a custom URL and assigning it to a variable that considerably simplifies work with server-side backend.

~~~js
var proxy = new dhx.DataProxy("someUrl", {
    // config options 
})
~~~

The **dhx.DataProxy** helper takes two parameters:

- **url** - (*string*) ordinary, the external URL
- **params** - (*object*) optional, a set of custom parameters to be sent to the server with a request

For example, you can apply it either to DataCollection:

~~~js
var dataCollection = new dhx.DataCollection();
var proxy = new dhx.DataProxy("https://myCustomUrl.com");
dataCollection.load(proxy);
~~~

or to any component of the dhtmlxSuite library that operate with data:

~~~js
var grid = new dhx.Grid(...);
var proxy = new dhx.DataProxy("https://myCustomUrl.com");
grid.data.load(proxy);
~~~


The list of the available methods of *dhx.DataProxy* is described below.

<div class='h2'>Methods</div>

{{api

- data_proxy/api/load.md - loads data from an external URL
- data_proxy/api/save.md - sends an AJAX request to the server
- data_proxy/api/update_url.md - updates the initial URL and parameters that were specified when initializing proxy

}}


@index:
- data_proxy/api/refs/data_proxy_methods.md