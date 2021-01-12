labelInline
=============

@short: 
defines whether a label will be placed in one line with ComboBox




@type: boolean

@example: 
var combo = new dhx.Combobox("combo_container", {
    labelInline:true
});


@template:	api_config
@descr: 

@related: combo/how_to_start.md#initializecombobox

@deprecated: instead of it, you can use the combo/api/combobox_labelposition_config.md option:

~~~js
var combo = new dhx.Combobox("combo_container", {
    labelPosition:"left"
});
~~~