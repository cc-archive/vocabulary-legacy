# Layouts

![representation](../assets/icons/ds_nomenclature/layout.svg)

Layouts are components that are concerned with positioning and placement. They
are zero-content components whose sole purpose is to define ways for children
to be placed in a sensible fashion.

## Working with layouts

Layouts are nothing but Vue components with a major CSS aspect and consequently
live in eponymous folders containing `Layout.vue`, `Layout.md` and `Layout.styl` 
files.

Layouts need not import any other components, because that would violate the
principle of not having content.
