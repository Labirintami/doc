---
sidebar_label: addCell
title: addCell
---          

@short: adds a new tab into a tabbar

```tododeprecated ```

@params:
- view 		object		an object of a tab 
- index 	number		the position to add a tab into



@example:
tabbar.addCell({tab: "tab-" + nextTab++, css:"panel flex"}, 0);


@template: api_method
@descr:
The **view** object may include the following properties:

- **tab** - the name of a tab
- **tabCss** - the name of the CSS class used for a tab
- **css** - the name of the CSS class used for a cell
- **header** - the header of a cell

@deprecated: instead of it, you can use the tabbar/api/tabbar_addtab_method.md method:

~~~js
tabbar.addTab({tab: "tab-" + nextTab++, css:"panel flex"}, 0);
~~~


@changelog:


