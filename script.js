let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to('.infoContainer', .25, { y: -50 })
    .to('.foreground', 3, { y: -50 })
    .to('.background', 3, { y: 200 }, "-=3")
    .to('.headText', 2.5, { y: -250 }, "-=3")
    .fromTo('.infoImage', { opacity: 0 }, { opacity: 1, duration: 3 })
    .fromTo('.textDesc', { opacity: 0 }, { opacity: 1, duration: 3 });


let scene = new ScrollMagic.Scene({
    triggerElement: '.parallaxContainer',
    duration: "100%",
    triggerHook: 0
})
    .setTween(timeline)
    .addTo(controller);