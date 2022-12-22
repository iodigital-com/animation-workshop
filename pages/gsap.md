# GSAP <MarkerGsap />
GreenSock Animation Platform

GSAP can animate whatever JavaScript can, in any framework and it's blazing fast!

<img src="https://greensock.com/uploads/pages_media/0_tween.png" class="mx-auto bg-gray-500 h-40 rounded" />

<div class="mt-2">
    <iframe height="250" style="width: 100%;" scrolling="no" title="gsap.to()" src="https://codepen.io/GreenSock/embed/RwQYNNx?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/GreenSock/pen/RwQYNNx">
    gsap.to()</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
    on <a href="https://codepen.io">CodePen</a>.
    </iframe>
</div>

---

## Methods

There are four types of tweens (animations): 

- `gsap.to()` - Start at the element's current state and animate "to" the values defined in the tween

- `gsap.from()` - Like a backwards .to()

- `gsap.fromTo()`  - You define both the starting and ending values

- `gsap.set()` - Immediately sets properties (no animation)

---

## Timeline

We can also apply a sequence of tweens in a timeline:

<div class="mt-2">
    <iframe height="350" style="width: 100%;" scrolling="no" title="Timeline: Basic Sequence - GSAP 3" src="https://codepen.io/GreenSock/embed/WNeOPGz?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/GreenSock/pen/WNeOPGz">
    Timeline: Basic Sequence - GSAP 3</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
    on <a href="https://codepen.io">CodePen</a>.
    </iframe>
</div>

---

## Easing

Easing is one of the things that will make your animations more realistic!

Difference between no-easing/easing:

<div class="mt-2">
    <iframe height="300" style="width: 100%;" scrolling="no" title="Easing" src="https://codepen.io/GreenSock/embed/gOvdzLK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/GreenSock/pen/gOvdzLK">
    Easing</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
    on <a href="https://codepen.io">CodePen</a>.
    </iframe>
</div>

---

## Plugins

GSAP supports a lot of plugins that can help you make amazing effects out of the box. Some of them are:

- Flip Plugin
- Scroll Trigger
- DrawSVG Plugin
- MotionPath Plugin
- Inertia Plugin
- ...

---

### Flip Plugin

<iframe height="500" style="width: 100%;" scrolling="no" title="Grid items view with Flip Plugin" src="https://codepen.io/GreenSock/embed/JjXqMZK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/JjXqMZK">
  Grid items view with Flip Plugin</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

### ScrollTriger Plugin

<iframe height="500" style="width: 100%;" scrolling="no" title="Skew on scroll using scroll velocity - ScrollTrigger" src="https://codepen.io/GreenSock/embed/eYpGLYL?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/eYpGLYL">
  Skew on scroll using scroll velocity - ScrollTrigger</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

### DrawSVG Plugin

<iframe height="500" style="width: 100%;" scrolling="no" title="DrawSVGPlugin (All SVG Shape Types)" src="https://codepen.io/GreenSock/embed/qEdoRE?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/qEdoRE">
  DrawSVGPlugin (All SVG Shape Types)</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

### You can even combine them! ScrollTrigger + DrawSVG

<iframe height="500" style="width: 100%;" scrolling="no" title="Animate path on scroll - ScrollTrigger" src="https://codepen.io/GreenSock/embed/rNOBLBV?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/rNOBLBV">
  Animate path on scroll - ScrollTrigger</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

# Let's practice <MarkerSvg />

Try to create animations combining Lottie + GSAP

- Fade-in elements when scrolling down and play Lottie animations once in the viewport
- You can also make the content remain sticky on scroll
- ... (Trash bin opening on hover? 😜)

