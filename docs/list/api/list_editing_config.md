---
sidebar_label: editing
title: editing
---          

@short:  enables editing in List

```tododeprecated ```
	
@default:false
@type: 
@example:
var list = new dhx.List("list_container", {editing:true});


@template:	api_config
@descr:

@relatedapi:
list/api/list_edit_method.md

@related: list/configuration.md#editingitems


[List. Editable List](https://snippet.dhtmlx.com/f26lfcai)

@deprecated: instead of it, you can use the [editable](list/api/list_editable_config.md) property:
~~~js
var list = new dhx.List("list_container", {editable:true});
~~~