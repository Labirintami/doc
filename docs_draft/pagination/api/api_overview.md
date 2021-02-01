---
sidebar_label: API Overview
title: Pagination API Overview
---

## Methods

- [destructor](pagination_destructor_method) - removes a pagination instance and releases occupied resources
- [getPage](pagination_getpage_method) - returns the index of the active page
- [getPageSize](pagination_getpagesize_method) - returns the number of items displayed per page of the related widget
- [getPagesCount](pagination_getpagescount_method) - gets the total number of pages in the pagination
- [setPage](pagination_setpage_method) - sets an active page in the related widget
- [setPageSize](pagination_setpagesize_method) - sets the number of items displayed on a page of the re

## Events

- [change](pagination_change_event) - fires on changing the active page

## Properties

- [css](pagination_css_config) - adds style classes to the pagination
- [data](pagination_data_config) - the data collection of a widget to set into the pagination
- [inputWidth](pagination_inputwidth_config) - optional, sets the width for the input of the pagination
- [page](pagination_page_config) - optional, the index of the initial page set in the pagination
- [pageSize](pagination_pagesize_config) - optional, the number of items displayed per page of the related widget