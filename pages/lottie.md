---
layout: new-section
sectionImage: '/lottie.gif'
---

# Lottie
Motion out of the box
---

<MarkerLottie />
# Lottie

Lightweight, scalable animations for your website and apps.

Features:
- JSON File
- After Effects videos & plugins
- Manipulate your animationsPlay (for-back)wards, starting/end frame, speed...
- Vectored animations ➡️ Small size

<div class="mt-2">
  <iframe height="250" style="width: 100%;" scrolling="no" title="Heart animation" src="https://codepen.io/k-ivan/embed/JqXWWr?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/k-ivan/pen/JqXWWr">
    Heart animation</a> by Ivan (<a href="https://codepen.io/k-ivan">@k-ivan</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>
</div>

---

<MarkerLottie />
# Plugins

- After Effects - Bodymovin
- Adobe XD
- Sketch
- Figma
- ... etc.

---
layout: two-cols-header
---

<MarkerLottie />
# How to use

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

<MarkerLottie />
# Animate on scroll

```jsx{all|3-5|17-22|7-15|all}
React.useEffect(() => {
  var animDuration = 10000;
  const anim = lottie.loadAnimation({
    ...
  });

  function animatebodymovin(duration: number) {
    const scrollPosition = window.scrollY;
    const maxFrames = anim.totalFrames;

    const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

    anim.goToAndStop(frame, true);
  }
  const onScroll = () => animatebodymovin(animDuration);

  document.addEventListener("scroll", onScroll);

  return () => {
    anim.destroy();
    document.removeEventListener("scroll", onScroll);
  };

}, []);
```

---

<MarkerLottie />
# Animate on scroll

<iframe src="https://codesandbox.io/embed/lottie-scroll-animation-47xog?fontsize=14&theme=dark&view=preview"
     style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
     title="Lottie Scroll Animation"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

