---
layout: new-section
sectionImage: '/svg.png'
---
# SVG
Draw & Animate
---
---
<MarkerSvg />
# SVG

Scalable Vector Graphics, SVG, is a W3C XML dialect to mark up graphics.

Usable as:
- inline
- image
- background-image
- favicon (not all browsers)
- sprite

---
---
<MarkerSvg />
# SVG vs Canvas

| **SVG** | **Canvas** |
| --- | --- |
| Vector based and composed of shapes | Raster based and composed |
| Scalable | Not scalable |
| Better performance with few objects | Better performance with large number of objects |
| Possible to modify through JS and CSS | Only possible to modify through JS |

---
layout: two-cols-header
---
<MarkerSvg />
# Elements


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
layout: two-cols-header
---
<MarkerSvg />
# Positioning
Grid system based on x,y coordinates and viewBox

::left::

```html
<svg width="200" height="200" viewBox="0 0 100 100">
  <rect x="10" y="10" width="80" height="80" />
</svg>
```


![SVG grid system](/canvas_default_grid.png)

::right::

<iframe height="400" style="width: 100%;" scrolling="no" title="SVG viewBox" src="https://codepen.io/sanderdejong/embed/NWBqqgV?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/sanderdejong/pen/NWBqqgV">
  SVG viewBox</a> by Sander de Jong (<a href="https://codepen.io/sanderdejong">@sanderdejong</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---
---
<MarkerSvg />
# viewport & viewBox difference?
---
layout: two-cols-header
---

<MarkerSvg />
# viewport & viewBox difference
## viewport

It's the window we can look through

::left::
<img class="w-100" src="/viewport.jpg"/>


::right::

<iframe height="300" style="width: 100%;" scrolling="no" title="SVG Viewport Example" src="https://codepen.io/tutsplus/embed/aYqEpe?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tutsplus/pen/aYqEpe">
  SVG Viewport Example</a> by Envato Tuts+ (<a href="https://codepen.io/tutsplus">@tutsplus</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
---
layout: two-cols-header
---
<MarkerSvg />
# viewport & viewBox difference
## viewBox

::left::

- Same as viewport + pan/zoom
- It's the telescope we can look through
- Need to set viewport too, otherwise => oversized image

<img class="w-90" src="/telescope.jpg"/>


::right::
<div class="mt-10">
<iframe height="300" style="width: 100%;" scrolling="no" title="SVG viewBox - zooming and panning" src="https://codepen.io/tutsplus/embed/rdJJje?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tutsplus/pen/rdJJje">
  SVG viewBox - zooming and panning</a> by Envato Tuts+ (<a href="https://codepen.io/tutsplus">@tutsplus</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
</div>
---
---
<MarkerSvg />
# Style with CSS
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
<MarkerSvg />

# Transitions

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

<MarkerSvg />
# Animations

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
---

# Let's practice

Try to create some simple animations using Transitions & Animations

- Beating heart
- Fly-in elements
- Rain / Falling leaves / Snowflakes
- Traffic Light
- Emoji's in movement
- ...


Useful links:
- Online SVG Resources: https://freesvg.org/ -  https://seeklogo.com/ (filter by .svg)
- SVG Optimizer: https://jakearchibald.github.io/svgomg/

<br/>
<b>Tips:</b>
- Use Codepen so that you can easily share your work!
