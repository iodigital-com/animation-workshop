# Lottie <MarkerLottie />

Lightweight, scalable animations for your website and apps.

Features:
- After Effects videos & plugins
- Manipulate your animationsPlay (for-back)wards, starting/end frame, speed...
- Vectored animations ➡️ Small size

<div class="mt-2">
<iframe height="300" style="width: 100%;" scrolling="no" title="Heart animation" src="https://codepen.io/k-ivan/embed/JqXWWr?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/k-ivan/pen/JqXWWr">
  Heart animation</a> by Ivan (<a href="https://codepen.io/k-ivan">@k-ivan</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
</div>

---

# Plugins <MarkerLottie />

- After Effects - Bodymovin
- Adobe XD
- Sketch
- Figma
- ... etc.

---
layout: two-cols-header
---

# How to use <MarkerLottie />

::left::

## React

<div class="mx-2">

- Package: react-lottie

```js
<Lottie
    options={defaultOptions}
    height={400}
    width={400}
    isStopped={this.state.isStopped}
    isPaused={this.state.isPaused}
/>
```
</div>

::right::

## Vue

<div class="mx-2">

- Package: vue-lottie

```js
<lottie
    :options="defaultOptions"
    :height="400"
    :width="400"
    v-on:animCreated="handleAnimation"
/>
```
</div>

---

# Animate on scroll <MarkerLottie />

https://codesandbox.io/s/47xog?file=/src/App.tsx:322-417