let cusr = document.querySelector("#cursorr");
let cusr_br = document.querySelector("#cursor_br");

document.addEventListener("mousemove", function (ev) {
  cusr.style.left = ev.x + 30 + "px";
  cusr.style.top = ev.y + "px";
  cusr_br.style.left = ev.x - 250 + "px";
  cusr_br.style.top = ev.y - 250 + "px";
});

gsap.to(".nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "to -11%",
    scrub: 1,
  },
});

gsap.to(".main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "main",
    scroller: "body",
    markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

var h4all = document.querySelectorAll("#nav1 h4");

h4all.forEach(function (en) {
  en.addEventListener("mouseenter", function () {
    cusr.style.scale = 3;
    cusr.style.border = "0.5px solid #fff";
    cusr.style.backgroundColor = "transparent";
  });

  en.addEventListener("mouseleave", function () {
    cusr.style.scale = 1;
    cusr.style.border = "0px solid #95C11E";
    cusr.style.backgroundColor = "#95C11E";
  });
});

gsap.from(".abaut-us img,.abaut-us", {
  y: 90,
  opacicy: 0,
  duration: 1,
  // stagger:0.4,
  scrollTrigger: {
    trigger: ".abaut-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacicy: 0,
  duration: 2,
  // stagger: 0.2,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from("#quote-left", {
  y: -80,
  x: -80,
  scrollTrigger: {
    trigger: "#quote-left",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#quote-right", {
  y: 80,
  x: 80,
  scrollTrigger: {
    trigger: "#quote-left",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from(".page4 h1",{
  y:40,
  scrollTrigger: {
    trigger: ".page4 h1",
    scroller: "body",
    // markers: true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  }
})
