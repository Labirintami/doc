editEnd
---
sidebar_label: 
title: 
---          

@short: finishes editing in a cell


@params:
- withoutSave	boolean    defines whether the edited data will be saved after the editing of a cell is complete. If set to <i>true</i>, the edited data won't be saved. 


@example:
treegrid.editEnd(); // the edited data will be saved

treegrid.editEnd(true); // the edited data won't be saved


@template: api_method
@descr:
The method works with [any type of cell editors](treegrid/configuration.md#columneditors), except for **checkbox**. 


@relatedapi: treegrid/api/treegrid_editcell_method.md

@related: treegrid/usage.md#editingdata, 

@changelog: added in v6.3
