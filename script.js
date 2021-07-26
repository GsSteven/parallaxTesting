let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to('.foreground', 3, { y: -35 })
    .to('.background', 3, { y: 130 }, "-=3")
    .to('.headText', 5, { y: -400 }, "-=3")
    .to('.infoContainer', 3, { top: "0%" }, "-=3")
    .fromTo('.infoImage', { opacity: 0 }, { opacity: 1, duration: 3 })
    .fromTo('.textDesc', { opacity: 0 }, { opacity: 1, duration: 3 });


let scene = new ScrollMagic.Scene({
    triggerElement: '.parallaxContainer',
    duration: "100%",
    triggerHook: 0
})
    .setTween(timeline)
    .addTo(controller);