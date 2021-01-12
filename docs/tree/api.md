dhtmlxTree API
===============

``` todo

Constructor
---------------

~~~js
var tree = new dhx.Tree("tree_container",{
    // config options
});
~~~

Parameters:

- the HTML container of dhtmlxTree
- configuration settings (check below)

Methods
-------------

### paint

- short: repaints Tree on a page
- example:

~~~js
tree.paint();
~~~

### editItem
	
- short: edits a Tree item
- params:
	- id		string		the id of an item
    - config	object		the config object of an editor
    	- item 			any  		the item
        - mode			string		the mode of editor
        - options		array		an array of additional options
- example:

~~~js
tree.editItem(id, {
	item: item,
    mode: "text"|"select",
    options: []
});
~~~

{{note  Improve descr of editItem}}
    
### getState

- short: gets the state of a tree
- returns: 
	- state		object		an object of *key:value* pairs, where *key* is the id of a tree item and *value* is its state 
- example:

~~~js
tree.getState();
/* -> 
{
	books: {open: true, selected: 2}, 
    mystery: {open: true, selected: 1}, 
    fantasy: {open: undefined, selected: 0}
}
*/
~~~

- descr:
Each state object of an item includes two properties:
 - open 		boolean		defines whether the tree item is open
 - selected		number ?	defines whether the tree item is selected

{{note  Improve descr of the returned object}}


### setState

- short: sets the state of a tree
- params:
	- state 	object		an object of *key:value* pairs, where *key* is the id of a tree item and *value* is its state
- example:

~~~js
tree.setState(state);
~~~
- descr:
Each state object of an item includes two properties:
 - open 		boolean		defines whether the tree item is open
 - selected		number ?	defines whether the tree item is selected

{{note  Add state example, improve descr of the state object}}


### close

- short: closes a tree item by id
- params: 
	- id 	string		the id of an item to close
- example:

~~~js
tree.close("history");
~~~

### closeAll

- short: closes all opened tree items
- example:

~~~js
tree.closeAll();
~~~


### open

- short: opens a tree item by id
- params: 
	- id 	string		the id of an item to open
- example:

~~~js
tree.open("history");
~~~

### openAll

- short: opens all closed tree items
- example:

~~~js
tree.openAll();
~~~


### toggle

- short: opens/closes a tree item by id
- example:

~~~js
tree.toggle("history");
~~~

### getChecked

- short: gets all checked tree items
- returns:
	- checked	array		an array of ids of checked items
- example:

~~~js
tree.getChecked(); // -> ["jmf", "rle", "sk", "km", "af", "jw"]
~~~

### checkItem

- short: checks a tree item and all its sub-items
- params:
	 - id 	string		the id of an item to check
- example:

~~~js
tree.checkItem("history");
~~~

### unCheckItem

- short: unchecks a tree item and all its sub-items
- params:
	 - id 	string		the id of an item to uncheck
- example:

~~~js
tree.unCheckItem("history");
~~~

### disableCheckbox

- short: disables the checkbox of a tree item and all its sub-items
- params:
	 - id 	string		the id of an item with checkbox
- example:

~~~js
tree.disableCheckbox("history");
~~~

### enableCheckbox

- short: enables a disabled tree item and all its sub-items
- params:
	 - id 	string		the id of an item with checkbox
- example:

~~~js
tree.enableCheckbox("history");
~~~

### refreshItems

- short: refreshes a tree item ?
- params:
	 - id 	string		the id of an item 
- example:

~~~js
tree.refreshItems(id);
~~~

{{note Check the name and functionality of the method}}



Properties
--------------

- data?: TreeCollection<any>;
- dragMode?: DragMode;
- dragBehaviour?: DragBehaviour;
- keyNavigation?: boolean;
- autoload?: string;
- checkbox?: boolean;
- isFolder?: (obj: any) => boolean;
- dragCopy?: boolean;


Events
------------

- itemClick = "itemclick",
- itemDblClick = "itemdblclick",
- itemContextMenu = "itemcontextmenu"


{{todo don't delete}}

``` todo