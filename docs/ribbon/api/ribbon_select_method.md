---
sidebar_label: select
title: select
---          

@short: selects a specified item of Ribbon


@params:
- id	string      the id of a Ribbon item
- unselect	boolean   optional, true - to unselect previously selected items, otherwise - false; true by default



@example:
ribbon.select("print");


@template: api_method
@descr:

@related: ribbon/operating_ribbon.md#selectingunselectinganitem

@relatedapi:
ribbon/api/ribbon_unselect_method.md
ribbon/api/ribbon_isselected_method.md
ribbon/api/ribbon_getselected_method.md

@relatedsample:
ribbon/03_usage/06_select_unselect.html

@changelog:
added in v7.0

