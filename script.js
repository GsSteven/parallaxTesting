let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to('.foreground', 3, { y: -75 })
    .to('.background', 3, { y: 200 }, "-=3")
    .to('.headText', 5, { y: -400 }, "-=3")
    .to('.infoContainer', 3, { top: "0%" }, "-=3");


let scene = new ScrollMagic.Scene({
    triggerElement: '.parallaxContainer',
    duration: "100%",
    triggerHook: 0
})
    .setTween(timeline)
    .addTo(controller);