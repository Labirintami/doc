
---
sidebar_label: Work with Pager
title: Work with Pager
---          


Setting/getting the active page
--------------------------

It is possible to set the active page in a widget via Pager API, i.e. with the help of the [setPage()](pager/api/pager_setpage_method.md) method. It takes the index of a page as a parameter:

~~~js
pager.setPage(0);
~~~

You can also identify what page is currently active by using the [getPage()](pager/api/pager_getpage_method.md) method. It will return the index of the active page:

~~~js
const pageIndex = pager.getPage();
// -> 3
~~~

{{sample    pager/03_usage/01_get_set_page.html}}

Setting/getting count of items per page
-----------------------------------------

You can define the size of the widget page, i.e specify the number of items to be displayed on each page of the widget via the [setPageSize()](pager/api/pager_setpagesize_method.md) method. Pass the necessary number of items as a parameter to the method:

~~~js
pager.setPageSize(24);
~~~

Use the [getPageSize()](pager/api/pager_getpagesize_method.md) method to get the count of items displayed per page:

~~~js
pager.getPageSize();
// -> 22
~~~

{{sample    pager/03_usage/02_get_set_page_size.html}}

Getting total number of pages
-------------------------------

You can get the total number of pages by applying the [getPagesCount](pager/api/pager_getpagescount_method.md) method:

~~~js
const totalPages = pager.getPagesCount();
// -> 10
~~~

{{sample    pager/03_usage/03_get_pages_count.html}}