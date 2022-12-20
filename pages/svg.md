# SVG <MarkerSvg />

I don't know SVG, good luck Mario!


![Mario](https://media.giphy.com/media/atQF1zaSGq8s8/giphy.gif)

---

# Le Structure <MarkerSvg />


---

# Style with CSS <MarkerSvg />

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

---

# Transitions <MarkerSvg />

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

---
layout: two-cols
---

# Animations <MarkerSvg />

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