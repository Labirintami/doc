---
sidebar_label: Migration to Newer Versions
title: Migration to Newer Versions
description: 
---          

## 6.3 -> 6.4 

In v6.4 some methods and events of the ColorPicker  API have been renamed. The new names bring more clarity and precisely describe the actual functionality.

| Up to version 6.3                                   | From version 6.4                                    |
| --------------------------------------------------- | --------------------------------------------------- |
| **Method**                                          |                                                     |
| `colorpicker.focusValue()`                          | `colorpicker.setFocus()`                            |
| **Events**                                          |                                                     |
| `colorpicker.events.on("ViewChange",function(){})`  | `colorpicker.events.on("ModeChange", function(){})` |
| `colorpicker.events.on("SelectClick",function(){})` | `colorpicker.events.on("Apply", function(){})`      |


## 6.2 -> 6.3

In version 6.3 some methods and events of ColorPicker has been renamed in order to avoid confusion and misunderstanding due to inconsistency between the name and functionality. 

The list of renamed methods and events:

| Up to version 6.2                                   | From version 6.3                             |
| --------------------------------------------------- | -------------------------------------------- |
| `getView()`                                         | [](api/colorpicker_getcurrentmode_method.md) |
| `colorpicker.events.on("ColorChange",function(){})` | [](api/colorpicker_change_event.md)          |
