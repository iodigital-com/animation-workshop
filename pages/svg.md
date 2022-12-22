# SVG <MarkerSvg />

Scalable Vector Graphics, SVG, is a W3C XML dialect to mark up graphics.

Usable as:
- inline
- image
- background-image
- favicon (not all browsers)
- sprite

---
layout: two-cols-header
---
# Positioning <MarkerSvg />
Grid system based on x,y coordinates and viewBox

::left::

```html
<svg width="200" height="200" viewBox="0 0 100 100">
  <rect x="10" y="10" width="80" height="80" />
</svg>
```


![SVG grid system](canvas_default_grid.png)

::right::

<iframe height="400" style="width: 100%;" scrolling="no" title="SVG viewBox" src="https://codepen.io/sanderdejong/embed/NWBqqgV?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/sanderdejong/pen/NWBqqgV">
  SVG viewBox</a> by Sander de Jong (<a href="https://codepen.io/sanderdejong">@sanderdejong</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---
layout: two-cols-header
---

# Elements <MarkerSvg />


::left::
## Basic shapes

- `<rect />`
- `<circle />`
- `<ellipse />`
- `<line />`
- `<polyline />`
- `<polygon />`
- `<path />`

::right::

## Other elements

- `<linearGradient />`
- `<radialGradient />`
- `<pattern />`
- `<text />`, `<tspan />`, `<textPath />`
- `<g>`
- `<svg />`
- `<mask />`
- `<filter />`
- `<font />`
- `<image />`
- `<defs />`
- `<use />`

---

# Style with CSS <MarkerSvg />
The simplest way of styling is by targeting CSS classes

```html
<svg ...>
  <path class="heart" .../>
</svg>
```

<br />

```css
.heart {
    fill: red;
}
```

<div class="abs-bl ml-14 mb-4 text-sm text-gray-500">

You can also target ID's or elements or even embedded the styling inside the SVG. But just don't... please...

</div>

---
layout: two-cols-header
---

# Transitions <MarkerSvg />

::left::

```html
<svg ...>
  <path class="heart" .../>
</svg>
```

<br />

```css{all|3|6}
.heart {
    fill: red;
    transition: fill 1s;
}
.heart:hover {
    fill: darkred;
}
```

::right::

<iframe height="358.5322265625" style="width: 100%;" scrolling="no" title="SVG heart" src="https://codepen.io/sanderdejong/embed/gOjppBE?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/sanderdejong/pen/gOjppBE">
  SVG heart</a> by Sander de Jong (<a href="https://codepen.io/sanderdejong">@sanderdejong</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---
layout: two-cols-header
---

# Animations <MarkerSvg />

::left::

```css
.heart {
  animation: 1.5s ease 0s infinite beat;
}

@keyframes beat {
  0%, 50%, 100% { transform: scale(1, 1); }
  30%, 80% { transform: scale(0.92, 0.95); }
}
```

::right::

<div class="ml-8 mt-14">
    <iframe height="300" style="width: 100%;" scrolling="no" title="Beating Heart CSS Animation" src="https://codepen.io/CTNieves/embed/LZmLox?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/CTNieves/pen/LZmLox">
    Beating Heart CSS Animation</a> by Christian (<a href="https://codepen.io/CTNieves">@CTNieves</a>)
    on <a href="https://codepen.io">CodePen</a>.
    </iframe>
</div>

---

# Let's practice <MarkerSvg />

Try to create some simple animations using Transitions & Animations

- Beating heart
- Fly-in elements
- ...

---

<Countdown :minutes="30" />