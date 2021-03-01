---
sidebar_label: data
title: data
---          

@short: the data collection of a widget to set into the pager

@signature: data: DataCollection;

@type: DataCollection

@example: 
const list = new dhx.List("list_container", {
    css: "dhx_widget--bordered"
});

list.data.parse(dataset); /*!*/

const pager = new dhx.Pager("pager_container", {
    data: list.data /*!*/
});


@template:	api_config
@descr: 


@relatedsample:
pager/01_init/01_with_list.html

