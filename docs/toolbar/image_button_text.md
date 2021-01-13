
---
sidebar_label: imageButtonText Control
title: imageButtonText Control
---          

``` todo

A button with an image and a text label. Like toolbar/button.md, it can be TwoState and have a badge with a number.

![DHX imageButtonText](../assets/toolbar/image_button_text.png)

## Adding imageButtonText Controls

You can add the imageButtonText control with the [add()]() method of TreeCollection:

~~~js
myToolbar.data.add({
    type: "imageButtonText",
    value: "User",
    count: 10,
    src: "../img/avatar.png"
})
~~~

You can provide the following **attributes** in the configuration object of imageButtonText:

- **id** - (string | number, optional) the ID of the button;
- **type** - (string) always "imageButton";
- **value** - (string, optional) a text label;
- **src** - (string) the path to the image;
- **count** - (number | string) adds a badge with a number or any symbol (badge is round and doesn't expand);
- **size** - (string) "big", "small" by default;
- **tooltip** - (string, optional) adds a tooltip to a button;
- **twoState** - (boolean) defines whether the button has two states (active/inactive);
- **active** - (boolean) for two-state buttons, if true, the button is in the active state;
- **css** (string) - optional, adds a custom CSS class.

## Working with ImageButtonText

Just like toolbar/button.md, iconButton can be hidden, disabled and can have a tooltip. You can also manipulate the states of a twoState imageButtonText.

@todo:
shall I repeate the text from Button about hide, disable, tooltip and twoState, or a simple link (as it is now) will do?
the button itself doesn't look good yet(( (check out the screenshot)

``` todo