# Tokens

![representation](../assets/icons/ds_nomenclature/token.svg)

Design tokens are the atoms of the system. They are used instead of hardcoded 
values to ensure a better consistency across platforms.

## Working with design tokens

To add a design token, either add it to the relevant `.yml` file, or make a new 
one and add it to the `imports` key in `tokens.yml`.

To change design tokens, find the token and update the `value` prop.

After the updates, run `npm run theo` to build the compiled files again with the
new raw data.
