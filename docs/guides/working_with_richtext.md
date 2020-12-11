---
sidebar_label: Working with RichText
title: Working with RichText
---

The API of dhtmlxRichText includes a basic set of methods that let you perform operations on the component. You can serialize edited text into either HTML or Markdown formats, get the number of the typed characters and enter/exit the full screen mode of the editor on the fly.

Getting content from editor
-------------------

After you've entered the necessary text into the editor and formatted it to your taste, you can save the result in any of [supported formats](loading_data.md#formatofcontent).

To save the edited text, make use of the [getValue()](api/methods.md#getvalue) method. The method takes an only parameter:

- `mode` - (*string*) the format the text should be saved in: `"html"`, `"markdown"` or `"text"` (for a plain text); `"html"` is used by default

~~~js
// getting content in the Markdown format
var content = richtext.getValue("markdown");
~~~

**Related sample:** [RichText. Get Value](https://snippet.dhtmlx.com/ujx3c71j)

If you are in two minds about how to add content into the RichText editor, there is the [Setting Content](loading_data.md) article.

Statistics
---------------------

RichText editor allows you to show statistics about the edited text. There is the **Statistics** control in the toolbar that serves for this purpose:

<!-- ![Statistics control](stats_control.png) -->
<img alt="" src={require('./../assets/stats_control.png').default} />

### Getting statistics

You can provide users with information about the number of characters, words and characters excluding spaces with the help of the [getStats()](api/methods.md#getstats) method. 

~~~js
var stats = richtext.getStats();
~~~

The method returns an object with available statistical data about the text edited in the RichText editor. For example:

~~~js
{chars: 467, words: 80, charsExlSpace: 393}
~~~

**Related sample:** [RichText. Get Stats](https://snippet.dhtmlx.com/3qdbktwo)

You can also get each field of statistical data separately, as it described below.

#### Characters

To return the count of characters typed into the editor, use the `chars` property:  

~~~js
var chars = richtext.getStats().chars;
~~~

#### Words

To return the count of words typed into the editor, use the `words` property:  

~~~js
var words = richtext.getStats().words;
~~~

#### Characters without spaces

To return the count of characters typed into the editor excluding the number of spaces, use the `charsExlSpace` property:  

~~~js
var chars = richtext.getStats().charsExlSpace;
~~~

### How to display statistics

Using the [getStats()](api/methods.md#getstats) method you can display info on the number of entered characters in any part of your application. For example, in a separate container by a click on a button:

~~~js
<button onclick="calc()" class="dhx_btn dhx_btn--flat">Characters Count</button>

<div>
	The count of characters: <span id="characters-amount"></span>
</div>
        
function calc() {
   document.getElementById('characters-amount').innerText = richtext.getStats().chars;
}
~~~

**Related sample:** [RichText. Get Stats](https://snippet.dhtmlx.com/3qdbktwo)

### Custom statistics 

Besides the default statistical data, you can display any custom data via the [customStats](api/properties.md#customstats) configuration option. Set an array with necessary statistical parameters as a value of this option. 
Each parameter represents an object with two properties:

- `name` - (*string*) the name of the field that should be displayed
- `callback` - (*function*) a function that implements the logic of counting entries of the specified field

In the example below the editor shows the number of sentences together with the count of characters and words: 

~~~js
var richtext = new dhx.Richtext("richtext_container", {
	customStats: [
    	{
           name: "chars"
        },
        {
           name: "words"
        },
        {
           name: "sentences",
           cb: function(text) {
               var rawSentences = text.split(/[.?!]+/);
               var count = 0;
               for (var i=0; i<rawSentences.length; i++) {
                   if (rawSentences[i].length > 0) {
                       count += 1;
                   }
               }
               return count;
           }
        }
    ],
    toolbarBlocks: ["default", "stats"]
});
~~~

<!-- ![Custom statistics](custom_stats.png) -->
<img alt="" src={require('./../assets/custom_stats.png').default} />

**Related sample:** [RichText. Custom Stats](https://snippet.dhtmlx.com/u1734epz)


Full screen mode
-------------------

You can enter/exit the full screen mode for the Rich text editor with the help of the corresponding API methods: [fullScreen()](../api/methods.md#fullscreen) and [exitFullScreen()](api/methods.md#exitfullscreen):

~~~js
// enter full screen
richtext.fullScreen();

// exit full screen
richtext.exitFullScreen();
~~~

Editor API
-----------

The editor of RichText contains a set of methods that make it easy to work with text on the fly. In order to get access to the API of the editor, call the [getEditorAPI()](api/methods.md#geteditorapi) method.
It returns an object with all available methods.

~~~js
var EditorAPI = richtext.getEditorAPI();
~~~

The list of methods included into the object returned by the `getEditorAPI()` method is the following:

- [add()](api/editor_api_methods.md#add)
- [getModel()](api/editor_api_methods.md#getmodel)
- [getPosition()](api/editor_api_methods.md#getposition)
- [getSelection()](api/editor_api_methods.md#getselection)
- [remove()](api/editor_api_methods.md#remove)
- [setModel()](api/editor_api_methods.md#setmodel)
- [setSelection()](api/editor_api_methods.md#setselection)
- [update()](api/editor_api_methods.md#update)

For example, to add a text into the RichText editor, use the following code:

~~~js
richtext.getEditorAPI().add("text");
~~~

**Related sample:**  [RichText. Add](https://snippet.dhtmlx.com/6dmccf0l)



