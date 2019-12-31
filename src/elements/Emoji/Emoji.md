Here's a sample emoji. The point to note here is that it uses sprites from
Twemoji rather than the browser or the operating system.

```jsx
<div>
  I <Emoji>❤️</Emoji> emoji!
</div>
```

### Input set

The emoji component can parse HTML entities.

```jsx
<div>
  I <Emoji>&#x2764;&#xfe0f;</Emoji> emoji!
</div>
```

It can also parse Unicode codepoints given as surrogate pairs.

```jsx
<div>
  I <Emoji>{{ '\u2764\ufe0f' }}</Emoji> emoji!
</div>
```

### Output set

The default output is in SVG format.

```jsx
<div>
  I <Emoji>&#x2764;&#xfe0f;</Emoji> emoji!
</div>
```

But if PNGs are required, the `ext` prop can toggle the output data type.

```jsx
<div>
  I <Emoji ext=".png">&#x2764;&#xfe0f;</Emoji> emoji!
</div>
```
