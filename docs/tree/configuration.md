Configuration
==================

Checkboxes for items
---------------

<img style="margin: 0px 0px 0px 20px; display: block;" src="tree/checkbox.png" alt=""/>

dhtmlxTree provides enhanced system of checkbox manipulations. In addition to standard two-state checkboxes that allow check/uncheck tree items, it also uses three-state checkboxes that include an intermediate state, 
when just some children of a parent item are checked.

In order to enable checkboxes for items, make use of the tree/api/tree_checkbox_config.md configuration option:

~~~js
var tree = new dhx.Tree("tree_container", {checkbox: true});
~~~

{{editor	https://snippet.dhtmlx.com/hgsivvpb	Tree. Checkboxes For Items}}

Editing of items
-------------------

<img style="margin: 0px 0px 0px 20px; display: block;" src="tree/editable.png" alt=""/>

It is possible to enable editing of the text of Tree items before initialization of the component using the tree/api/tree_editable_config.md configuration property:

~~~js
var tree = new dhx.Tree("tree_container", {editable: true});
~~~

{{editor	https://snippet.dhtmlx.com/re4h88w7	Tree. Editable}}



Key navigation
----------------

You can switch on key navigation in a tree with the tree/api/tree_keynavigation_config.md property before initialization of the component: 

~~~js
var tree = new dhx.Tree("tree_container", {keyNavigation: true});
~~~

After that you need to select any item and then apply Arrow keys:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>Up arrow key</b></td>
			<td>to move selection to the item above the currently selected one</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>Down arrow key</b></td>
			<td>to move selection to the item below the currently selected one</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>Right arrow key</b></td>
			<td>to open a selected folder</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>Left arrow key</b></td>
			<td>to close a selected opened folder</td>
		</tr>
    </tbody>
</table>


{{editor	https://snippet.dhtmlx.com/icql8fwq	Tree. Key Navigation}}

Selection of items
---------------------

<img style="margin: 0px 0px 0px 20px; display: block;" src="tree/disable_selection.png" alt=""/>

{{sample tree/02_configuration/09_selection.html}}

The default configuration of Tree provides you with the selection feature that allows highlighting a Tree item. To disable selection in a Tree you need to set the tree/api/tree_selection_config.md configuration property to *false*:

~~~js
const tree = new dhx.Tree("tree_container", {
    selection: false,
});
~~~