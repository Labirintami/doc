---
sidebar_label: Loading Data
title: Loading Data
---          

``` todo

To load data from some external file you can use the api/link/dhtmlxlist_load.md command:

~~~js
myList.load(url, datatype);
~~~

It takes the path to the file and a necessary data type as parameters. Where a data type can be: "json","xml","jsarray","csv","html". 

Note that:

- JSON and XML are the fastest formats. 

- Loading is asynchronous, which means you need to catch the end of loading before executing any commands against the data. 


~~~js
myList.load(url, function(){
	alert("data is really loaded"); 
	// any operations with data can be placed here
},datatype);
~~~

If the **datatype** parameter is skipped, the operation will try to process the incoming data as XML.

JSON
------

~~~js
myList.load("some.json", "json");
~~~

where **some.json** contains a value similar to the following one:
<br><br>

{{snippet "some.json"}}
~~~js
[{
  "id":"1",
  "Package":"acx100-source",
  "Version":"20080210-1.1",
  "Maintainer":"Stefano Canepa"
},{
  "id":"2",
  "Package":"alien-arena-browser",
  "Version":"7.0-1",
  "Maintainer":"Debian Games Team"
},{
  "id":"3",
  "Package":"alien-arena-server",
  "Version":"7.0-1",
  "Maintainer":"Debian Games Team"
}]
~~~


The object can contain any number of properties and all of them will be available in templates.

The "id" property will be used as the ID of object. If there is no such a property, the component will create random IDs for each object. 

{{sample
dhtmlxList/samples/03_loading/02_load_json.html
}}


XML 
--------

~~~js
myList.load("some.xml", "xml");
~~~

There aren't any requirements for incoming XML (it can be in any format), all the top level tags will be converted into objects. 
<br><br>

{{snippet "some.xml"}}
~~~xml
<data>
	<item id="1">
		<Package><![CDATA[acx100-source]]></Package>
		<Version><![CDATA[20080210-1.1]]></Version>
		<Maintainer><![CDATA[Stefano Canepa]]></Maintainer>
	</item>
	<item id="2">
		<Package><![CDATA[alien-arena-browser]]></Package>
		<Version><![CDATA[7.0-1]]></Version>
		<Maintainer><![CDATA[Debian Games Team]]></Maintainer>
	</item>
</data>
~~~

The names of the top level and the second level tags **don't matter**.

The attributes of the top level tags (item in the snippet above) and values of nested tags will be available as properties in the template and for scripting. 

If you want to process only the tags with specific names you can change the xpath used for data collecting:


~~~js
dhtmlx.dataDriver.xml.records = "/data/item"; //select only item tags
~~~

{{sample
dhtmlxList/samples/03_loading/01_load_xml.html
}}

HTML 
-----

The processing works similar to that of XML, but will react only on &#60;li&#62; tags inside of the data (it makes no practical sense for loading from an url, exists just for consistence) 

~~~js
myList.load("some.html", "html");
~~~
<br>
{{snippet "some.html"}}
~~~html
<ul>
	<li id="1"  version="20080210-1.1" maintainer="Stefano Canepa">acx100-source</li>
    <li id="2"  version="7.0-1" maintainer="Debian Games Team">alien-arena-browser</li>
    <li id="3"  version="7.0-1" maintainer="Debian Games Team">alien-arena-server</li>
</ul>
~~~

The key-tag can be changed by using:

~~~js
dhtmlx.dataDriver.md.tag = "DIV";
~~~

{{sample dhtmlxList/samples/03_loading/05_load_html.html}}

CSV
----

Data in CSV doesn't have names for columns, so they are autonamed: the first column is accessible as "data0", the second one - as "data1", etc. IDs are auto-generated.
<br>

~~~js
myList.load("some.csv", "csv");
~~~

<br>
{{snippet "some.csv"}}
~~~js
"1", "acx100-source", "20080210-1.1", "Stefano Canepa"
"2", "alien-arena-browser", "7.0-1", "Debian Games Team"
"3", "alien-arena-server", "7.0-1", "Debian Games Team"
~~~


You can configure row and line separators as:


~~~js
dhtmlx.dataDriver.csv.row = "\n";
dhtmlx.dataDriver.csv.cell= ",";
~~~

{{sample
dhtmlxList/samples/03_loading/04_load_csv.html
}}


JSArray
-------

Data in JS array doesn't have names for columns, so they are autonamed: the first column is accessible as "data0", the second as "data1" and etc. IDs are auto-generated.


~~~js
myList.load("some.js", "jsarray");
~~~
<br>
{{snippet "some.js"}}
~~~js
[["1", "acx100-source", "20080210-1.1", "Stefano Canepa"],
["2", "alien-arena-browser", "7.0-1", "Debian Games Team"],
["3", "alien-arena-server", "7.0-1", "Debian Games Team"]]
~~~

{{sample
dhtmlxList/samples/03_loading/03_load_js_array.html
}}

Parsing 
-------

When the data is already available on the client side, you can use the code:


~~~js
myList.parse(data, datatype);
~~~


Parsing is executed in a synchronous way, so new items are ready for operations after the command execution.

Parsing can be used with all the above mentioned data types. 


####XML string


~~~js
myList.parse(
"<data>
	<item id="1">
		<Package><![CDATA[acx100-source]]></Package>
		<Version><![CDATA[20080210-1.1]]></Version>
		<Maintainer><![CDATA[Stefano Canepa]]></Maintainer>
	</item>
</data>"
);
~~~

{{sample
dhtmlxList/samples/03_loading/07_parse_xml.html
}}

####JSON object

~~~js
myList.parse([{
  "id":"1",
  "Package":"acx100-source",
  "Version":"20080210-1.1",
  "Maintainer":"Stefano Canepa"
},{
  "id":"2",
  "Package":"alien-arena-browser",
  "Version":"7.0-1",
  "Maintainer":"Debian Games Team"
},{
  "id":"3",
  "Package":"alien-arena-server",
  "Version":"7.0-1",
  "Maintainer":"Debian Games Team"
}],"json");
~~~

{{sample
dhtmlxList/samples/03_loading/06_parse_json.html
}}

####HTML

~~~js
myList.parse("id_of_html_element","html");
~~~

{{sample  dhtmlxList/samples/03_loading/10_parse_html.html}}

####CSV string

~~~js
myList.parse('"1", "acx100-source", "20080210-1.1", "Stefano Canepa"
  \n"2", "alien-arena-browser", "7.0-1", "Debian Games Team"
  \n"3", "alien-arena-server", "7.0-1", "Debian Games Team"',"csv");
~~~

{{sample  dhtmlxList/samples/03_loading/09_parse_csv.html}}

####JavaScript array

~~~js
myList.parse([["1", "acx100-source", "20080210-1.1", "Stefano Canepa"],
["2", "alien-arena-browser", "7.0-1", "Debian Games Team"],
["3", "alien-arena-server", "7.0-1", "Debian Games Team"]],"jsarray");
~~~

{{sample dhtmlxList/samples/03_loading/08_parse_js_array.html}}



Custom Data Types
--------------------

If the above loading types are not enough, you can create a custom one.


~~~js
dhtmlx.dataDriver.mytype=dhtmlx.extend({},dhtmlx.dataDriver.jsarray,{
	getDetails:function(data){
		var result = {};
		result.id = data[0];
		result.Package       = data[1];
		result.Version       = data[2];
		result.Maintainer    = data[3];   
		return result;
	}
})
myList.load(url, "mytype");
~~~

{{sample dhtmlxList/samples/03_loading/11_load_custom_type.html}}

``` todo