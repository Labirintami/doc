---
sidebar_label: editing
title: editing
---          

@short: enables editing of Tree items on a double-click  

```tododeprecated ``` 
	
@default:false

@example:
var tree = new dhx.Tree("tree", {editing: true});

@related:tree/configuration.md#editingofitems

@deprecated: instead of it, you can use the [editable](tree/api/tree_editable_config.md) property:
~~~js
var tree = new dhx.Tree("tree", {editable: true});
~~~