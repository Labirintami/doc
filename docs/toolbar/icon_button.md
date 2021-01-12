IconButton
===========

This is a button with an icon. It does not have a caption unlike toolbar/button.md, but can also have a badge with a number and can be _twoState_.

![DHX iconButton](../assets/toolbar/icon_button.png)

## Adding IconButtons

IconButton can be easily added to a toolbar with the help of the **add()** method of DataCollection:

~~~js
myToolbar.data.add({
    type: "iconButton",
    icon: "dxi-bell-outline"
});
~~~

{{sample    dhtmlxToolbar/samples/02_toolbar/01_init.html}}

You can provide the following **attributes** in the configuration object of iconButton:

- **id** - (string | number, optional) the ID of the button;
- **type** - (string) always "iconButton";
- **icon** - (string) the name of the icon (all possible icon types are in toolbar/dhx_icons.md);
- **count** - (number | string, optional) adds a badge with a number or any symbol;
- **tooltip** - (string, optional) adds a tooltip to a button;
- **twoState** - (boolean) defines whether the button has two states (active/inactive);
- **active** - (boolean) for twoState buttons, if true, the button is in the active state;
- **css** (string) - optional, adds a custom CSS class.

## Working with IconButton

Just like toolbar/button.md, iconButton can be hidden, disabled and can have a tooltip. You can also manipulate the states of a twoState iconButton.

@todo:
shall I repeate the text from Button about hide, disable, tooltip and twoState, or a simple link (as it is now) will do?
