---
sidebar_label: showItemsCount
title: showItemsCount
---          

@short: 
shows the total number of selected options

```tododeprecated
showItemsCount?: boolean | ((count: number) => string);
```

@example: 
var combo = new dhx.Combobox("combo_container", {
    multiselection: true,
    showItemsCount: function (num) {
        return num + (num === 1 ? " item" : " items") + " selected";
    }
});


@template:	api_config
@descr: 
As a function takes one parameter:

- **count** - (*number*) the number of options

and should return a template for displaying a result.

Note that to select several options you need to enable the **multiselection** option.

@deprecated: instead of it, you can use the combo/api/combobox_itemscount_config.md property:

~~~js
var combo = new dhx.Combobox("combo_container", {
    multiselection: true,
    itemsCount: function (num) {
        return num + (num === 1 ? " item" : " items") + " selected";
    }
});
~~~
