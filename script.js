function scrollTriggerFunction() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    multiplier: 0.4, // < 1 = slower scroll, > 1 = faster (default = 1)
    inertia: 0.9,
    lerp: 0.1,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

scrollTriggerFunction()

function homePageAnimation() {
  let bottomValue = window.innerWidth <= 600 ? "15.3%" : "-2%";

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      scrub: 1,
      scroller: ".main",
      // markers: true,
      pin: true,
      end: "bottom -250%",
    },
  });

  //image is coming to left
  tl.to(".center-float-img", {
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
    .to(
      ".home .change-text-color",
      { color: "white", duration: 1, ease: "power1.inOut" },
      "-=7"
    )
    .to(
      ".home .mini-box",
      { backgroundColor: "#fff", duration: 1, ease: "power1.inOut" },
      "-=7"
    )
    .to(
      ".home .b-nav .left img",
      { opacity: 0, duration: 0.5, ease: "power1.inOut" },
      "-=7"
    )
    .to(
      ".home .b-nav .left img",
      { attr: { src: "./img/w-iso.webp" }, duration: 2, ease: "power1.inOut" },
      "-=6.5"
    )
    .to(
      ".home .b-nav .left img",
      { opacity: 1, duration: 0.5, ease: "power1.inOut" },
      "-=6.5"
    )
    .to(
      ".home .b-nav .right img",
      { opacity: 0, duration: 0.5, ease: "power1.inOut" },
      "-=7"
    )
    .to(
      ".home .b-nav .right img",
      {
        attr: { src: "./img/w-battery.webp" },
        duration: 2,
        ease: "power1.inOut",
      },
      "-=6.5"
    )
    .to(
      ".home .b-nav .right img",
      { opacity: 1, duration: 0.5, ease: "power1.inOut" },
      "-=6.5"
    )
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
        duration: 1.3,
        // delay: .2,
        ease: Power1,
      },
      "lens-closing"
    )

    //gola coming to upward
    .to(
      ".overlay .gola",
      {
        top: "50%",
        duration: 5,
        delay: -1.5,
        ease: Power1,
      },
      "lens-closing"
    )
    //"pink flare" text coming
    .to(
      ".overlay .pink-flare",
      {
        bottom: bottomValue,
        rotate: 0,
        duration: 5,
        delay: -0.8,
        ease: Power1,
      },
      "lens-closing"
    )
    //2nd phase disappear the gola
    .to(
      ".overlay .gola",
      {
        opacity: 0,
        duration: 0.5,
        ease: Power1,
      },
      "circle-fading"
    )
    //3rd phase when the final circle is getting smaller
    .to(
      ".small-circle",
      {
        scale: 0,
        duration: 3,
        ease: Power1,
      },
      "circle-fading"
    )
    .to(
      ".circle",
      {
        scale: 0,
        duration: 3,
        ease: Power1,
      },
      "circle-fading"
    )
    .to(
      ".bg-img",
      {
        scale: 1.3,
        duration: 3,
      },
      "circle-fading"
    )
    .to(
      ".bg-img",
      {
        scale: 1,
        duration: 5,
      },
      "pink"
    )
    .to(
      ".pink-div",
      {
        top: "-70%",
        ease: Power1.ease,
        duration: 7,
        delay: -1.5,
      },
      "pink"
    );
  tl.timeScale(0.5);
}

homePageAnimation()

function secondPageAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".second",
      start: "top top",
      scroller: ".main",
      scrub: 1,
      // markers: true,
      pin: true,
      end: "bottom -250%",
    },
  });

  //circles going up
  
  tl.to(".up-sec .circle", {
      top: "50%",
      scale: 1.5,
      duration: 8,
      stagger: 0.15,
      ease: Power1,
    }, "circle-up")

    //circles merging
    .to(".up-sec .cir1",
      {
        left: "45%",
        ease: Power1,
        duration: 1.5,
      },
      "merge"
    )
    .to(".up-sec .cir2",
      {
        left: "55%",
        ease: Power1,
        duration: 1.5,
      },
      "merge"
    )
    .to(".up-sec .circle",
      {
        duration: 3,
        left: "50%",
        delay: 1.5,
        ease: Power1,
      },
      "merge"
    )
    .to(".up-sec .cir2", {
      scale: 0, opacity: 0 
    })
    //disappearing borders
    .set(".down-sec", {
      borderTop: 0, delay: 3, duration: 1 
    }, "dis-apr-border")
    .set(".up-sec", {
      borderTop: 0, delay: 3, duration: 1 
    }, "dis-apr-border")

    //rotating circle
    .to(".up-sec .cir1", {
      backgroundColor: "#afa3d9ff",
      rotate: "360deg",
      duration: 2,
      ease: Power1,
    })

    //circle sizing
    .to(".up-sec .cir1",
      {
        scale: 20,
        backgroundColor: "#afa3d9ff",
        duration: 8,
        ease: Power1,
      },
      "big-circle"
    )
    .to(".bottom-bar .line-2",{
      left: "4%",
      duration: 12,
      delay: -9,
      ease: Power1.ease
    })

  //changeing color pallete color
    function changeColor(tl){
      let changeColor = window.innerWidth <= 600 ? "black" : "white"
      tl.to(
        ".change-text-color-2",
        {
          color: changeColor,
          duration: 0.5, // fade time in seconds
          ease: "power1.inOut",
        },
        "-=2"
      )
      .to(
        ".second .mini-box",
        { backgroundColor: changeColor, duration: 1, ease: "power1.inOut" },
        "-=2"
      )

      return tl
    }

    changeColor(tl)

    // marquee text
    let t1 = window.innerWidth <= 600 ? "-300%" : "-150%"
    tl.to(
      ".up-sec h1",
      {
        left: t1,
        duration: 15,
        delay: -1,
        ease: Power1.ease,
      },
      "text-marquee"
    )

  //bottom texts
  .to(
    ".down-sec .text1",
    {
      opacity: 0,
      duration: 2.5,
      ease: Power1,
    },
    "text-marquee"
  )
  .to(
    ".down-sec .text2",
    {
      opacity: 1,
      duration: 5,
      delay: 2.8,
      ease: Power1.ease,
    },
    "text-marquee"
  )

  //number counting animation
  .to(".down-sec .no-1",
    {
      top: "-10%",
      duration: 3,
      delay: 1,
      ease: Power1,
    },
    "big-circle"
  )

  //no 2
  .set(".down-sec .no-2", { color: "#000" }, "text-marquee")
  .to(".down-sec .no-2",
    {
      top: "15%",
      duration: 4,
      delay: 1.5,
      ease: Power1,
    },
    "big-circle"
  )
  //no 2 going up to disappear
  .to(".down-sec .no-2",
    {
      top: "-10%",
      duration: 4,
      delay: 17,
      ease: Power1,
    },
    "big-circle"
  )
  //no 3 coming
  .set(".down-sec .no-3", { color: "#000" }, "text-marquee")
  .to(".down-sec .no-3",
    {
      top: "15%",
      duration: 3,
      delay: 9.5,
      ease: Power1,
    },
    "text-marquee"
  )

  //bar coming
  .to(".bar", {
    top: 0,
    stagger: 0.3,
    delay: -1.5,
    duration: 3,
  })
  .to(".bar2", {
    scaleX: 1,
    duration: 4,
    delay: -1.5,
  })
  .to(".bar3", {
    scaleX: 1,
    delay: -2,
    duration: 4,
  })

  .to(".bottom-bar .line-3",{
      left: "4%",
      duration: 13,
      delay: -15.5,
      ease: Power1.ease
    })

  .to(".second .scroll-mobile h2",{
      x: -3230,
      delay: -50,
      duration: 50,
      ease: Power1
    })
  tl.timeScale(0.5);
}

secondPageAnimation()