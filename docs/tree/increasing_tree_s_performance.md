Loading Big Datasets 
====================================


The following ways of increasing performance when working with huge data sets are introduced in dhtmlxTree:

-  [Dynamic Loading](tree/increasing_tree_s_performance.md#dynamicloading);
-  [Smart XML Parsing](tree/increasing_tree_s_performance.md#smartxmlparsing);
-  [Distributed Parsing](tree/increasing_tree_s_performance.md#distributedparsing).


Dynamic Loading  
-----------------------

In case Tree contains large amount of nodes (or the user doesn't want to waste time on loading hidden nodes), 
it would be better to load them on request, not all at once. 

The functionality to load tree's levels dynamically using XML was introduced for this purpose. 
Dynamic loading of items from XML stream gives the possibility to create DHTML trees with unlimited number of nodes.


<h3 id="dynload">Activating Dynamic Loading</h3> 

Firstly, the user should indicate in XML the nodes that will be loaded dynamically in this way: add the parameter child="1" to all nodes that have child items. 
The items containing this parameter will be the objects for dynamic loading.

~~~xml
<?xml version="1.0" encoding="iso-8859-1" ?>
	<tree id="0">
		<item  text="Surveillance" id="a1" im0="book.gif" … child="1"/>
		<item …/>
		…
	</tree>
~~~

The api/dhtmlxtree_setxmlautoloading.md method switches the dynamic loading on in the tree:

~~~js
tree.setXMLAutoLoading(url);
tree.load(file); // load the first level of the tree
~~~

The above mentioned snippet is useful in case of a tree with large amount of data. 

The system will firstly load the data indicated by the *load()* method.

The script specified in the *setXMLAutoLoading()* method will be called when the user clicks the tree to expand any of the parent nodes
(the child nodes of which have not been loaded). The script will get the id of the node to open, and return an XML with the description of child items.

{{note
When dynamic loading is switched on in the tree, script methods work only for those items that are loaded at the moment.
}}

{{sample
dhtmlxTree/samples/12_loading_processing_data/13_tree_dyn_loading.html
}}


<h3 id="loadbehavior">Setting Auto Loading Behavior</h3> 

{{note
This functionality is available in the PRO version only.
}}

The api/dhtmlxtree_setxmlautoloadingbehaviour.md method is responsible for specifying the way according 
to which the server-side URL is constructed during dynamic loading calls:

~~~js
tree.setXMLAutoLoadingBehaviour(mode);    
~~~

The following *mode* options are available here:

-  **id** - (default) some_script?id=[item_id]
-  **function** - used for calling a user-defined handler that should be set as a parameter of the setXMLAutoLoading() method (see example below)
-  **name** - some_script[item_id]
-  **xmlname**  - some_script[item_id].xml

An example of using the *function* mode may look as follows:

~~~js
tree.setXMLAutoLoadingBehavior("function");
tree.setXMLAutoLoading(function(id){
	tree.load("some.php?id="+id)
})
~~~

In this mode the *setXMLAutoLoading()* method receives a function that sends a request to the script to load the content of the clicked item by its id.
The *load()* method called inside of this function returns an XML with the description of child items of the clicked item.

{{sample
dhtmlxTree/samples/12_loading_processing_data/03_pro_dyn_operations.html
}}

###Setting Escaping Mode 

The setEscapingMode() method is responsible for setting the escaping mode (used for escaping id in requests). 
This method sets the mode for transferring the information of tree's item to the server:

~~~js
tree.setEscapingMode(mode);
~~~

The following modes are available:

-  **default** - uses native escape functionality of the browser;
-  **utf8** - is used for UTF escaping;
-  **none** - data is not escaped.



Smart XML Parsing  
---------------------

The idea of Smart XML Parsing is simple: the entire tree structure is loaded on the client side, but only the nodes that should be displayed are rendered. 
It helps to decrease the loading time
and enhance the general performance of large trees greatly. Plus, the entire tree structure is available for most of the script methods 
(for example, searching is performed through all the nodes, not only through the rendered ones).


###Activating Smart XML Parsing 


To activate Smart XML Parsing the user should apply the following method:

~~~js
tree.enableSmartXMLParsing(true); // false is used to disable
~~~

Please, pay attention to the fact that Smart XML Parsing does not work in case of loading a fully expanded tree.

{{sample
dhtmlxTree/samples/12_loading_processing_data/10_pro_smart_parsing.html
}}

###Getting Parsing State 

The parsing state can be got by means of the getItemParsingState() method which takes an item's id as the parameter:

~~~js
var state = tree.getItemParsingState(itemId); 
~~~

The method returns:

-  *1* - the item is already parsed;
-  *0* - the item is not parsed yet;
-  *-1* - the item's parsing is in process.

Distributed Parsing  
----------------------

Another way of increasing the performance of the tree with some levels containing more than 100-200 nodes per level is introduced. This functionality is called Distributed Parsing. 

The main advantage of this functionality lies in making a level visible and ready to use before it is completely parsed. 
Thus, items are loaded portion by portion with some timeouts.


###Activating Distributed Parsing 

To enable this functionality the user should make use of the following JS command:

~~~js
tree.enableDistributedParsing(mode,count,delay);
~~~

Parameters of this method are:

-  **mode** - (true/false) enable/disable Distributed Parsing
-  **count** - number of nodes per portion (optional parameter);
-  **delay** - delay between portions parsing, set in milliseconds (optional parameter).

This functionaity is fully compatible with Smart XML Parsing.

{{sample
dhtmlxTree/samples/12_loading_processing_data/02_pro_dist_load.html
}}

###Getting Parsing State 

The current state of Distributed Parsing can be easily got in the following way:

~~~js
var state = tree.getDistributedParsingState(); // returns true/false 
~~~

This method returns either **true** (meaning that parsing is still in progress) or **false** (meaning that parsing is already finished).

