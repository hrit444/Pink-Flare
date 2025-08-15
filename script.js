var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "top top",
    scrub: 1.5,
    // markers: true,
    pin: true,
    end: "bottom -250%"
  }
})

// camera lens closing effect
tl 
  .to('.center-float-img',{
    duration: 1.2,
    left: '50%'
  })
  .addLabel("lens-closing")
  .to('.circle .bottom img', {
    scale: 1,
    rotate: "-180deg",
    duration: 1.2,
    stagger: .1,
    ease: Power1
  }, "lens-closing")
  .to('.circle .top img', {
    scale: 1,
    duration: 1.2,
    stagger: .1,
    ease: Power1
  }, "lens-closing")
  .to('.center-img img', {
    scale: 0,
    duration: .8,
    stagger: .1,
    ease: Power1
  }, "lens-closing")
  .to('.center-float-img h4', {
    opacity: '0',
    duration: .2,
    ease: Power1
  }, "lens-closing")

  .to('.circle', {
    scale: .3,
    ease: Power1
  }, "lens-closing")

  .to('.small-circle', {
    scale: .4,
    ease: Power1,
  }, "lens-closing")

  // "gallery" text coming
  .to('.overlay .gallery', {
    bottom: "-40%",
    ease: Power1,
  }, "lens-closing")

  //gola coming
  .to('.overlay .gola', {
    top: "50%",
    duration: 1,
    delay: -.35,
    ease: Power1,
  }, "lens-closing")

  //"pink flare" text coming
  .to('.overlay .pink-flare', {
    bottom: "-1%",
    rotate: 0,
    ease: Power1,
  }, "lens-closing")
  //2nd phase disappear the gola
  .to('.overlay .gola', {
    opacity: 0,
    duration: .35,
    ease: Power1,
  }, "circle-fading")
  //3rd phase when the final circle is getting smaller
  .to('.small-circle', {
    scale: 0,
    duration: 1,
    ease: Power1,
  }, "circle-fading")
  .to('.circle', {
    scale: 0,
    duration: 1,
    ease: Power1,
  }, "circle-fading")
  .to('.pink-div', {
    top: 0,
    duration: 5,
    ease: Power1,
  }, "circle-fading")
  .to('.pink-div', {
    top: "-70%",
    ease: Power1,
    duration: 5
  })

  