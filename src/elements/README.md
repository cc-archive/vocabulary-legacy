# Elements

![representation](../assets/icons/ds_nomenclature/element.svg)

Elements are components that cannot be broken down into smaller or simpler 
components. They utilize decisions made on the token level.

## Working with elements

Elements are nothing but extremely simple Vue components and consequently live 
in eponymous folders containing `Element.vue`, `Element.md` and `Element.styl` 
files.

Elements may not import other elements, because that would violate the atomicity
principle.
