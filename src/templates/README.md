## tem·plates

<center>
<img
  src="https://raw.githubusercontent.com/creativecommons/cc-vocabulary/master/src/assets/icons/ds_nomenclature/pattern.svg?sanitize=true"
  width="64px"/>
</center>

&nbsp;

Templates exist to formulate the layout and structure of a page. They utilise 
all other components, namely elements, patterns, layouts and tokens.

Conceptually all web apps and web sites are a collection of web pages. Since
page would imply an end to end canvas on the screen and web apps tend to have
static components such as the side bar or the top nav, 'template' is a more
inclusive, broader definition.


### Working with templates

Templates are nothing but Vue components that take up sections of the screen and 
consequently live in eponymous folders containing `Template.vue`, `Template.md` 
and `Template.styl` files.

Since Vocabulary is a design system and a component library, templates would 
ideally not be a part of it. However, the feature to supply templates is 
provided just in case.


### Examples

Although not much, take a look at the `Index` template (which is kind of what 
we're building to be the home page of CC Vocabulary). It uses the `Footer` 
and `Hello` patterns and styles the vibrant orange background using color 
tokens, illustrating what we're talking about. 

You should probably [isolate](#!/Templates) this view for clarity. In isolated 
mode already? Go [back to normal](#/Templates).

```jsx { "props": { "className": "contain-content" } }
<Index/>
```
