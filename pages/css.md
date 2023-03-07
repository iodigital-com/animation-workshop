---
layout: new-section
sectionImage: '/css.png'
---

# CSS
Transitions & Animations
---
layout: two-cols-header
---

<MarkerCss />
# Transitions

::left::
```css
#delay {
  font-size: 24px;
  transition-property: font-size;
  transition-duration: 1s;
  transition-delay: 2s;
}

#delay:hover {
  font-size: 48px;
}
```

::right::

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Transition" src="https://codepen.io/marioesuc/embed/OJoxRpO?default-tab=result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/marioesuc/pen/OJoxRpO">
  CSS Transition</a> by Mario (<a href="https://codepen.io/marioesuc">@marioesuc</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---
layout: two-cols-header
---
<MarkerCss />
# Animations
Keyframes

::left::

```css
#changing-bg {
  animation-name: change-color;
  animation-duration: 2s;
  animation-iteration-count: 3;
  animation-direction: alternate;
}
```

```css
@keyframes change-color {
    0% {
        background-color: blue;
    }
  
    20% {
        background-color: green;
    }

    100% {
        background-color: orange;
    }
}
```

::right::
<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Transition" src="https://codepen.io/marioesuc/embed/VwGMKxp?default-tab=result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/marioesuc/pen/VwGMKxp">
  CSS Transition</a> by Mario (<a href="https://codepen.io/marioesuc">@marioesuc</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<br />


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
# 3D Moving grid changing perspective
by Jurgen Beliën

<iframe height="400" style="width: 100%;" scrolling="no" title="Night Ride" src="https://codepen.io/JurgenBelien/embed/QYbzaK?default-tab=result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JurgenBelien/pen/QYbzaK">
  Night Ride</a> by Jurgen Beliën (<a href="https://codepen.io/JurgenBelien">@JurgenBelien</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

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