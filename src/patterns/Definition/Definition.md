A definition looks like this. Note how 'Source Sans Pro' gives way to the
elegant 'Libre Baskerville' by Impallari Type. Look at the `fi` ligature and
tell me you are not impressed.

```jsx
<Definition
  word="definition"
  pronunciation="dɛfɪˈnɪʃ(ə)n"
  part-of-speech="n.">
  <ul>
    <li>
      a statement of the exact meaning of a word, especially in a dictionary
    </li>
  </ul>
</Definition>
```

Interpuncts at syllable breaks look really awesome.

```jsx { "props": { "className": "dark-background" } }
<Definition
  word="vo·cab·u·lar·y"
  pronunciation="və(ʊ)ˈkabjʊləri"
  part-of-speech="n.">
  <ul>
    <li class="unimportant">
      the body of words used in a particular language
    </li>
    <li>
      a cohesive design system to unite the web facing
      <strong>Creative Commons</strong> 
    </li>
  </ul>
</Definition>
```

### Add-on set

The word being defined can be passed either via the prop `word` or if markup is
involved, via the slot `word`. 

The contents of the dictionary definition are provided using the default slot.
Definitions must be passed as `ul` > `li`. If a particular definition is to be
marked as unimportant, apply the class `unimportant` to the list item.

This might also be an excellent time to point out that 'Libre Baskerville' has
a special italic style that will you weak at the knees.

```jsx { "props": { "className": "dark-background" } }
<Definition
  pronunciation="dɛfɪˈnɪʃ(ə)n"
  part-of-speech="n.">
  <template #word>
    <i>definition</i>
  </template>
  <ul>
    <li>
      a statement of the exact meaning of a word, especially in a dictionary
    </li>
    <li class="unimportant">
      the degree of distinctness in outline of an object, image, or sound
    </li>
  </ul>
</Definition>
```

```jsx
<Definition
  pronunciation="və(ʊ)ˈkabjʊləri"
  part-of-speech="n.">
  <template #word>
    <i>vo·cab·u·lar·y</i>
  </template>
  <ul>
    <li class="unimportant">
      the body of words used in a particular language
    </li>
    <li>
      a cohesive design system to unite the web facing
      <strong>Creative Commons</strong> 
    </li>
  </ul>
</Definition>
```
