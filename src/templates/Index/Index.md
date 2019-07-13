## Examples

In normal circumstances, the page looks like this.

```jsx { "props": { "className": "contain-content" } }
<Index/>
```

For the lucky 1% of visits, however, the page takes a green hue and shows a
different, strangely reassuring and comforting message, a not-so-subtle
reference to ['The Good Place'](https://en.wikipedia.org/wiki/The_Good_Place)
by Michael Schur.

```jsx { "props": { "className": "contain-content" } }
<!-- Do not pass this prop in production -->
<Index is-easter/>
```
