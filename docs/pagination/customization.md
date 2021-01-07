Customization
=========

Styling
----------------

There is a possibility to make changes in the look and feel of a pagination. 

<img style="margin: 0px 0px 0px 20px; display: block;" src="pagination/styling.png" alt="styling"/>

For this you need to take the following steps:

- add a new CSS class(es) with desired settings in the &lt;style&gt; section of your HTML page or in your file with styles (don't forget to include your file on the page in this case):

~~~js
<style>
	.my_first_class {
		/*some styles*/
	}
    
    .my_second-class {
		/*some styles*/
	}
</style>
~~~

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [css](pagination/api/pagination_css_config.md) property in the Pagination configuration:

~~~js
var pagination = new dhx.Pagination("pagination_container",{
	css:"my_first_class my_second_class"    
});
~~~


For example:

~~~js
<style>
	.custom_class {
		margin: 0;
	}

	.custom_class .dhx_layout-cell,
	.custom_class .dhx_layout {
		background-color: #CECEEF;
	}

	.custom_class button span.dxi {
		color: #5858E2;
	}
</style>

const pagination = new dhx.Pagination("pagination_container", {
    css: "dhx_widget--bordered dhx_widget--no-border_top custom_class",
    data: list.data
});
~~~

{{sample    pagination/04_customization/01_custom_style.html}}
