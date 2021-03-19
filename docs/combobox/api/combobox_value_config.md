---
sidebar_label: value
title: value
description: 
---          

``` todo

@short: specifies the values that will appear in the input on initialization of the combobox

@signature: value?: string | string[];

@example: 
var combobox = new dhx.Combobox("combobox", {
    multiselection: true,
    value: ["austria", "estonia"] /*!*/
});

// or
var combobox = new dhx.Combobox("combobox", {
    value: "austria" /*!*/
});


@template:	api_config
@descr: 

- If *multiselection:true* is set for a combo, the property takes an array of string values as:<br/> *value: ["1","2","3"]*,
- If *multiselection:false* is set or the *multiselection* config is not defined, the property gets either of the two values: *value:"1"* or *value: ["1"]*
@related: combo/configuration.md#initialvalue

@relatedsample: combobox/02_configuration/09_initial_value.html

@changelog: added in v7.0

``` todo
