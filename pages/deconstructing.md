---
layout: new-section
sectionImage: '/homer-magnifier.gif'
---

# Deconstructing webs
How they work under the hood
---
---

# The iPhone website
https://www.apple.com/nl/iphone-14-pro/

<!--
- iPhone with O becoming notch
- Chipset:

- 1 static image without the chip that gets disabled when the chipset is placed in the position where the video should start
	- 1 static chipset image having some bright effect on scroll (this is made by overlapping another video but could perfectly be done with a CSS layer with a moving white gradient and CSS Masking: https://www.w3schools.com/css/css3_masking.asp)
	- 1 video with the chipset already placed in it, the static image gets disabled and this starts playing right away when the scroll hits a certain point
-->
---
---
# The iPhone website
Font gradient on Scroll

<iframe height="400" style="width: 100%;" scrolling="no" title="Font gradient scroll" src="https://codepen.io/marioesuc/embed/abaBxVj?default-tab=result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/marioesuc/pen/abaBxVj">
  Font gradient scroll</a> by Mario (<a href="https://codepen.io/marioesuc">@marioesuc</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
---
---
# The iPhone website
Magnifier hovers on scroll

<iframe height="400" style="width: 100%;" scrolling="no" title="Magnify image on scroll" src="https://codepen.io/marioesuc/embed/dyqNmVz?default-tab=result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/marioesuc/pen/dyqNmVz">
  Magnify image on scroll</a> by Mario (<a href="https://codepen.io/marioesuc">@marioesuc</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---
layout: two-cols-header
---

# Let's practice <MarkerSvg />

::left::

Try to create animations combining Lottie + GSAP

- Fade-in elements when scrolling down and play Lottie animations once in the viewport
- You can also make the content remain sticky on scroll
- ... (Trash bin opening on hover? 😜)
<br/><br/>
Or check:
- [dribbble.com](https://dribbble.com) for design inspiration
- [lottiefiles.com](https://lottiefiles.com) for free, animated svg's
<br/><br/>
<b>Tips:</b>
- Use the GSAP Codepen Starter Template: https://codepen.io/GreenSock/pen/aYYOdN

::right::

<Countdown class="mt-10"/>
---