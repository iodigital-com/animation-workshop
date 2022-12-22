# CSS <MarkerCss />

ToDo: replace with decent animation?
![CSS](https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.gif)


---

# Transitions <MarkerCss />

```css
#delay {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
}

#delay:hover {
  font-size: 36px;
}
```

---

# Keyframe <MarkerCss />

```css
@keyframes animation-name {
    <percentage> {
        property: value
    }

    <percentage> {
        property: value
    }
}
```

<br />

```css
div {
    animation-name: slide-right;
    animation-duration: 4s;
}
```

---

# Transition vs Animation <MarkerCss />

| **Transition** | **Animation** |
| --- | --- |
| Can't loop | Loop all you want |
| Needs trigger | Just starts |
| Easy to control from JS | Very complex |
| Animate from A to B | Multiple props and timeframes |


---
layout: two-cols-header
---

# Creating art with CSS <MarkerCss />


CSS became so **powerful** you can even create (realistic) images

::left::

- `overflow` for creating big curved shapes
- `border-radius` for creating awkward shapes
- `clip-path` for cutting off bits of elements

<br /><br /><br /><br /><br /><br /><br /><br />

Source: [Advice for complex CSS illustrations](https://css-tricks.com/advice-for-complex-css-illustrations/)

::right::

<div class="ml-8">
    <Tweet id="1255207715137339396" scale="0.55" />
</div>
