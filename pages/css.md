---
layout: new-section
sectionImage: '/css.png'
---

# CSS
Transitions & Animations
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
@keyframes slide-right {
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

---

# Or go crazy with `box-shadow` <MarkerCss />

<iframe height="400" style="width: 100%;" scrolling="no" title="One-Dollar Bill in CSS (single-element)" src="https://codepen.io/alvaromontoro/embed/xxwqVxa?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/alvaromontoro/pen/xxwqVxa">
  One-Dollar Bill in CSS (single-element)</a> by Alvaro Montoro (<a href="https://codepen.io/alvaromontoro">@alvaromontoro</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>