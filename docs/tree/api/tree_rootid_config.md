rootId
---
sidebar_label: 
title: 
---          

@short: sets the id for the root element





@type: string

@example: 
const tree = new dhx.Tree("tree_container", {
    rootId: "root"
});


@template:	api_config
@descr: 
By default, the root element takes the id of a Tree container.

~~~js
const tree = new dhx.Tree("tree_container");
tree.data.getRoot() -> "tree_container"
~~~

@changelog: added in v7.0