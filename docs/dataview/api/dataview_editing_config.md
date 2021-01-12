
---
sidebar_label: editing
title: editing
---          

@short: 
enables editing in DataView


@default:
false


@type: boolean

@example: 
var dataview = new dhx.DataView("dataview_container", {editing:true});


@template:	api_config
@descr:

@relatedapi:
dataview/api/dataview_edit_method.md

@related: dataview/configuration.md#editingitems

@relatedsample:
dataview/02_configuration/07_editable.html

@deprecated: instead of it, you can use the dataview/api/dataview_editable_config.md property:
~~~js
var dataview = new dhx.DataView("dataview_container", {editable:true});
~~~