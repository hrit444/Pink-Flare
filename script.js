var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "top top",
    scrub: 1,
    // markers: true,
    pin: true,
    end: "bottom -250%",
  },
});

//image is coming to left
tl1
  .to(".center-float-img", {
    duration: 2,
    left: "50%",
  })
  // camera lens closing effect
  .to(
    ".circle .bottom img",
    {
      scale: 1,
      rotate: "-180deg",
      duration: 7,
      stagger: 0.1,
      ease: Power1,
    },
    "lens-closing"
  )
  .to(
    ".bg-img",
    {
      scale: 1.6,
      duration: 1,
    },
    "lens-closing"
  )
  .to(
    ".circle .top img",
    {
      scale: 1,
      duration: 7,
      stagger: 0.1,
      ease: Power1,
    },
    "lens-closing"
  )
  // changing text and img colors
  .set(".change-text-color", { color: "white", delay: -7 })
  .set("#c1", { backgroundColor: "#D6C9D7", delay: -7 })
  .set("#c2", { backgroundColor: "#DBCFDC", delay: -7 })
  .set("#c3", { backgroundColor: "#E4DBE5", delay: -7 })
  .set("#c4", { backgroundColor: "#EDE7ED", delay: -7 })
  .set("#c5", { backgroundColor: "#F5F3F6", delay: -7 })
  .set("#c6", { backgroundColor: "#FFFFFF", delay: -7 })
  .set(".b-nav .left img", { attr: { src: "./img/w-iso.webp" }, delay: -7 })
  .set(".b-nav .right img", {
    attr: { src: "./img/w-battery.webp" },
    delay: -7,
  })
  .to(
    ".center-img img",
    {
      scale: 0,
      duration: 1,
      stagger: 0.1,
      ease: Power1,
    },
    "lens-closing"
  )
  .to(
    ".center-float-img h4",
    {
      opacity: "0",
      duration: 0.2,
      ease: Power1,
    },
    "lens-closing"
  )

  .to(
    ".circle",
    {
      scale: 0.3,
      ease: Power1,
    },
    "lens-closing"
  )

  .to(
    ".small-circle",
    {
      scale: 0.4,
      ease: Power1,
    },
    "lens-closing"
  )

  // "gallery" text coming
  .to(
    ".overlay .gallery",
    {
      bottom: "-40%",
      duration: .7,
      ease: Power1,
    },
    "lens-closing"
  )

  //gola coming to upward
  .to(
    ".overlay .gola",
    {
      top: "50%",
      duration: 2,
      delay: -.55,
      ease: Power1,
    },
    "lens-closing"
  )
  //"pink flare" text coming
  .to(
    ".overlay .pink-flare",
    {
      bottom: "-2%",
      rotate: 0,
      duration: 2.5,
      delay: 1.2,
      ease: Power1,
    },
    "lens-closing"
  )
  //2nd phase disappear the gola
  .to(
    ".overlay .gola",
    {
      opacity: 0,
      duration: .5,
      ease: Power1,
    },
    "circle-fading"
  )
  //3rd phase when the final circle is getting smaller
  .to(
    ".small-circle",
    {
      scale: 0,
      duration: 1.5,
      ease: Power1,
    },
    "circle-fading"
  )
  .to(
    ".circle",
    {
      scale: 0,
      duration: 1.5,
      ease: Power1,
    },
    "circle-fading"
  )
  .to(
    ".bg-img",
    {
      scale: 1.3,
      duration: 1,
    },
    "circle-fading"
  )
  .to(
    ".bg-img",
    {
      scale: 1,
      duration: 1,
    },
    "pink"
  )
  .to(
    ".pink-div",
    {
      top: "-70%",
      ease: Power1,
      duration: 5,
    },
    "pink"
  );
  tl1.timeScale(0.75);