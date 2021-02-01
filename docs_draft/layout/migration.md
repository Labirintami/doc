---
sidebar_label: Migration from 6.2 to 6.3
title: Migration from 6.2 to 6.3
---          

``` todo

In version 6.3 some functionality of Layout has been renamed in order to avoid confusion and misunderstanding due to inconsistency between the name and functionality. 

<style>
	table.my_table {
		width: 100%;
	}
	table.my_table td {
		text-align: left;
		vertical-align: middle;
		width: 50%;
	}
	table.my_table td.version_info {
		text-align: center;
        background-color: #FFDAFF;
	}
</style>
<table class="my_table">

<tr><td class="version_info">Up to version 6.2</td><td class="version_info">From version 6.3</td></tr>

<tr><td>layout.cell(id)</td><td>layout.getCell(id)</td></tr>

</table>

``` todo