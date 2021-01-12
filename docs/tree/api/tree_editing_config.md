editing
=============

@short: enables editing of Tree items on a double-click  
	
@default:false
@type: boolean
@example:
var tree = new dhx.Tree("tree", {editing: true});


@template:	api_config
@descr:


@related:tree/configuration.md#editingofitems





@deprecated: instead of it, you can use the [editable](tree/api/tree_editable_config.md) property:
~~~js
var tree = new dhx.Tree("tree", {editable: true});
~~~