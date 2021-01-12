unselect
---
sidebar_label: 
title: 
---          

@short: unselects a selected Ribbon item


@params:
- id	string  optional, the id of a Ribbon item



@example:
// unselects all previously selected items
ribbon.unselect();
 
// unselects a specified selected item
ribbon.unselect("print");


@template: api_method
@descr:

@related: ribbon/operating_ribbon.md#selectingunselectinganitem

@relatedapi:
ribbon/api/ribbon_select_method.md
ribbon/api/ribbon_isselected_method.md
ribbon/api/ribbon_getselected_method.md

@relatedsample:
ribbon/03_usage/06_select_unselect.html

@changelog:
added in v7.0
