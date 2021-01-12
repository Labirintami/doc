Migration to Newer Versions
===========
6.3 -> 6.4 
---------------

``` todo

1) In v6.4 some properties of the Slider API are renamed. The new names bring more clarity and precisely describe the actual functionality.

<style>
	table.my_table {
		width: 100%;
	}
	table.my_table td {
		text-align: left;
		vertical-align: middle;
		width: 50%;
	}
	table.my_table td.type_info {
		text-align: center;
        background-color: #E3F6FF;
	}
	table.my_table td.version_info {
		text-align: center;
        background-color: #FFDAFF;
	}
</style>

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td colspan="2" class="type_info">Properties</td></tr>
<tr><td>help</td><td>helpMessage</td></tr>
<tr><td>thumbLabel</td><td>tooltip</td></tr>
</table>

2) The `labelInline` property is replaced with the `labelPosition` property. The `labelPosition` property defines the position of a label.

``` todo