 
---
sidebar_label: ImageButton
title: ImageButton
---          

This is a button with an image. Unlike sidebar/button.md, it does not have a text label, but cal also have a badge with a number and can be two state.



## Adding ImageButton

ImageButton can be easily added to a sidebar with the help of the **add()** method of Tree Collection:

~~~js
sidebar.data.add({
    type: "imageButton",
    count: 10,
    src: "../img/avatar.png"
});
~~~

###Attributes

You can provide the following **attributes** in the configuration object of an imageButton:

- **type** - (*string*)	the type of a control, set it to "imageButton"
- **src** - (*string*) the path to the image
- **html** - (*string*) optional, a string with HTML that should be inserted into the button
- **value** - (*string*) a value of the button. You need to set either the **html** or **value** property to the button
- **id** - (*string*) the id of a control, auto-generated if not set
- **twoState** - (*boolean*) adds two states to the button: active (pressed) and inactive  (unpressed)
- **active**  - (*boolean*) sets the state of a twoState button
- **group** - (*string*) defines the name of a group of controls a button belongs to. If one of the buttons in the group becomes active, all others automatically become inactive
- **hotkey** - (*string*) the name of the hot key for the button
- **count** - (*number*) a badge with a number
- **countColor** - (*string*) the color of a badge with number: "danger" | "secondary" | "primary" | "success"
- **size** - (*string*) defines the size of a button: "small"|"medium"|"auto"
- **tooltip** - (*string*) a tooltip for the button


## Working with ImageButton

Just like sidebar/button.md, imageButton can be hidden, disabled and can have a tooltip. You can also manipulate the states of a two state imageButton.

Check the full list of available operations in the [Sidebar API](sidebar/api/refs/sidebar.md) and [Tree Collection API](helpers/tree_collection.md).

@todo:
check link to sample, and the image 
