---
layout: new-section
sectionImage: '/css.png'
---

# CSS
Transitions & Animations
---

<MarkerCss />
# Transitions

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
---
<MarkerCss />
# Keyframe

```css
@keyframes slide-right {
    0% {
        property: value
    }

    100% {
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
---
<MarkerCss />
# Useful CSS properties

- `transform`: scale / perspective / translate / skew / rotate / rotate3d
- `clip-path`: clip part of a region to subtract the rest based on paths. inset / ellipse / circle / path
- `mask`: same as clip-path but using images for clipping
- `filter`: Graphical effects. blur / grayscale / hue-rotate

---
---
<MarkerCss />
# Question
## How do you make a triangle in CSS?

---
layout: two-cols-header
---

<MarkerCss />
# Creating art with CSS


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

# Or go crazy with box-shadow
<MarkerCss />

<iframe height="400" style="width: 100%;" scrolling="no" title="One-Dollar Bill in CSS (single-element)" src="https://codepen.io/alvaromontoro/embed/xxwqVxa?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/alvaromontoro/pen/xxwqVxa">
  One-Dollar Bill in CSS (single-element)</a> by Alvaro Montoro (<a href="https://codepen.io/alvaromontoro">@alvaromontoro</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>