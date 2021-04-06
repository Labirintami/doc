---
sidebar_label: multiselectionMode
title: multiselectionMode
---          

@short: sets the mode of multiselection

@signature: multiselectionMode?: "click" | "ctrlClick";

@default: "ctrlClick"

@example: 
var list = new dhx.List("list", {
	multiselection:true,
	multiselectionMode:"click"   
});

@template:	api_config
@descr: 
{{note This configuration option requires the [](list/api/list_multiselection_config.md) property to be enabled.}}

@relatedsample:
list/02_configuration/04_multiselection.html

@related: list/configuration.md#multipleselectionofitems

@deprecated: use the [](list/api/list_multiselection_config.md) property instead:

~~~js
var list = new dhx.List("list", {
	multiselection:"ctrlClick"   
});
~~~