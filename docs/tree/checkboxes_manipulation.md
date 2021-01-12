Manipulating Checkboxes
==========================

dhtmlxTree operates an advanced checkbox system. Besides usual two-state checkboxes (checked/unchecked item), 
there is a possibility to use three-state checkboxes with a "partly checked" value.

Enabling/Disabling Checkboxes  
-----------------------------

###Enabling Standard Checkboxes 

The api/dhtmlxtree_enablecheckboxes.md method allows enabling standard checkboxes in Tree:

~~~js
tree.enableCheckBoxes(mode, hidden);  
~~~

The parameters of the method are as follows:

- *mode* - (boolean) *false* stands for hiding all the checkboxes, while *true* stands for showing them all in the tree;
- *hidden* - (boolean) setting it to *true* means that checkboxes are not rendered, but can be shown by the api/dhtmlxtree_showitemcheckbox.md method.

In the case of creating checkboxes with the help of the above mentioned method, they will possess the usual checkbox states:

- checked;
- unchecked.

{{sample
dhtmlxTree/samples/02_checkboxes/01_pro_list_checked.html
}}

###Enabling Three-State Checkboxes 

The api/dhtmlxtree_enablethreestatecheckboxes.md method is responsible for enabling three-state checkboxes:

~~~js
tree.enableThreeStateCheckboxes(true|false);  
~~~

The following states are available for three-state checkboxes:

-  checked;
-  unchecked;
-  partially checked.

The third state takes place when an item has several child nodes among which there are checked and unchecked ones.

It should be noted that in case when three-state checkboxes are enabled, a click on a parent unchecked checkbox will result 
in checking it together with all its child items, and vice versa.

{{sample
dhtmlxTree/samples/02_checkboxes/03_pro_mixed_checkboxes.html
}}

###Enabling Smart Checkboxes 

The api/dhtmlxtree_enablesmartcheckboxes.md method enables auto-checking of children and parents for *three-state checkboxes*.

~~~js
tree.enableSmartCheckboxes(true|false);
~~~

This functionality is enabled by default.


###Disabling a Checkbox 

A checkbox of a certain item can be disabled. The parameters that are to be specified:

- *itemId* - (string|number) id of the item in question;
- *state* - (boolean) indicates whether the checkbox is disabled (*true*) or enabled (*false*).

~~~js
tree.disableCheckbox(itemId, state);
~~~

###Enabling Checkboxes for Specific Items 

The user can set checkboxes for some specific items. This can be done in the following way:

~~~js
// enable checkboxes in Tree, but not render them
tree.enableCheckBoxes(true, true);
...   
// show a checkbox for the specified item
tree.showItemCheckbox(itemId, state);  
~~~

The parameters of the api/dhtmlxtree_showitemcheckbox.md method are:

- *id* - (string|number) the id of an item, set *null* to change states of all items;
- *state* - (boolean) specifies whether the checkbox will be visible (*true*) or not (*false*).


Manipulating Checkboxes' State 
---------------------------------

###Checking/Unchecking Tree Item 


Any checkbox in the tree can be easily checked/unchecked from script with the help of the api/dhtmlxtree_setcheck.md method:

~~~js
tree.setCheck(id, state);
~~~

The parameters are as follows:

-  *id* - (string|number) the id of the item in question;
-  *state* - (boolean) if set to *true*, the item will be checked, while *false* means unchecking the item.

It should be noted that according to the three-state checkboxes' logic,
if a parent item has been checked with the help of the setCheck() method, all its child items will be checked as well.

{{sample
dhtmlxTree/samples/02_checkboxes/01_pro_list_checked.html
}}

###Checking/Unchecking Tree Branch 

Along with checking a tree item, a tree branch can also be easily checked/unchecked from script by using the api/dhtmlxtree_setsubchecked.md method:

~~~js
tree.setSubChecked(id, state);  
~~~

The parameters are as follows:

- *id* - (string|number) the id of the item in question;
- *state* - (true|false) if set to *true*, the branch of items will be checked, while *false* means unchecking the branch.


###Getting Checkbox's State 

The state of the specified item's checkbox can be got via the api/dhtmlxtree_isitemchecked.md method:

~~~js
var checkState = tree.isItemChecked(itemId);
~~~

The method takes the id	of the item in question and returns *true* for the checked state and *false* for the unchecked state correspondingly.
