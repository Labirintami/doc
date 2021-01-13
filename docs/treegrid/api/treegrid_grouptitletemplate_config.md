
---
sidebar_label: groupTitleTemplate
title: groupTitleTemplate
---          

@short: 
sets a template to the title of a group



@type:function

@example: 
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    groupTitleTemplate: function(groupName, groupItems){ /*!*/
        return groupName + "count:" + groupItems.length /*!*/
    }
});


@template:	api_config
@descr: 


@related:
treegrid/usage.md#groupingdata

@relatedapi: treegrid/api/treegrid_groupby_method.md

@relatedsample:
treegrid/03_usage/15_group_by.html

@changelog: added in v6.5