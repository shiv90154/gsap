var tl = gsap.timeline()

tl.from("h2", {
    y: -20,
    opacity: 0,
    delay: 0.2,
    duration:1
});
tl.from("h3", {
    y: -20,
    opacity: 0,
    delay: 0.5,
    duration:0.8,
    stagger:0.3
});
tl.from("h1", {
    y: 20,
    opacity: 0,
    delay: 0.5,
    duration:0.8,
    scale:0.2
});