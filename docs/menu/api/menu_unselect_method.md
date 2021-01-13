---
sidebar_label: unselect
title: unselect
---          

@short: unselects a selected Menu item


@params:
- id	string  optional, the id of a Menu item



@example:
// unselects all previously selected items
menu.unselect();
 
// unselects a specified selected item
menu.unselect("align-left");


@template: api_method
@descr:

@related: menu/work_with_menu.md#selectingunselectinganitem

@relatedapi:
menu/api/menu_select_method.md
menu/api/menu_isselected_method.md
menu/api/menu_getselected_method.md

@relatedsample:
menu/03_usage/04_select_unselect.html

@changelog:
added in v7.0