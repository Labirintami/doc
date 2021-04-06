---
sidebar_label: multiselectionMode
title: multiselectionMode
---          

@short: sets the mode of multiselection

```tododeprecated ```

@default:
"ctrlClick"
@values:"click","ctrlClick"

@type: string

@example: 
var dataview = new dhx.DataView("dataview", {
	multiselection:true,
	multiselectionMode:"click"   
});


@template:	api_config
@descr: 
{{note This configuration option requires the [](dataview/api/dataview_multiselection_config.md) property to be enabled.}}

@relatedsample:
dataview/02_configuration/06_multiselection.html

@relatedapi:dataview/api/dataview_multiselection_config.md

@deprecated: use the [](dataview/api/dataview_multiselection_config.md) property instead:

~~~js
var dataview = new dhx.DataView("dataview", {
	multiselection:"ctrlClick"  
});
~~~