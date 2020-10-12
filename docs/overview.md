---
sidebar_label: RichText Overview
title: RichText Overview
slug: /
---


dhtmlxRichText is a JavaScript client-side tool for fast and handy editing of content. It provides a compact set of formatting controls, two editing modes for comfy work with text and an easily adjustable toolbar.

This component supports parsing and serialization of data in the HTML and JSON formats and allows using any icon fonts and adding custom controls. Besides, there are ready-made solutions for integration with
such popular JavaScript frameworks as Angular, React and Vue.js.

Toolbar structure
--------------------

The toolbar of Richtext is [easily configurable](configuration.md#toolbar). It contains several blocks of controls and their number depends on the chosen type of toolbar:

- default toolbar

The default toolbar includes 6 blocks of controls. They are: "undo", "style", "decoration", "colors", "align" and "link":

<!-- ![Default toolbar](default_toolbar.png) -->

- full toolbar

The full toolbar includes all the default blocks and additional "clear", "stats" and "fullscreen" blocks:

<!-- ![Full toolbar](full_toolbar.png) -->

You can [adjust the look and feel of the toolbar](customization.md) to meet your requirements.


Two working modes 
---------------------

dhtmlxRichText can work with content in [two modes](configuration.md#modesofediting). You can choose the most suitable mode to feel comfortable while editing text. The modes are:

- "classic"

<!-- ![Classic mode](classic_mode.png) -->

- "document"

<!-- ![Document mode](doc_mode.png) -->

[Read more](configuration.md#modesofediting) about setting the mode you like best.

Supported formats
----------------

The RichText editor supports [parsing](loading_data.md#addingcontentintoeditor) and [serialization](working_with_richtext.md#gettingcontentfromeditor) of content in the 
[HTML and Markdown formats](loading_data.md#formatofcontent).

- HTML format

<!-- ![HTML format](html_format.png) -->

- Markdown format

<!-- ![Markdown format](markdown_format.png) -->

Integration
-------------

Rich Text can be integrated with other JavaScript frameworks. There are related guides and demos available for:

- angular_integration.md
- react_integration.md
- vuejs_integration.md


What's Next
-----------

It's high time to embed RichText into your application to enrich it with editing abilities. The how_to_start.md tutorial is ready to help your on your way.

To learn the features of dhtmlxRichText, check other helpful resources:

- api/refs/richtext.md
- guides.md