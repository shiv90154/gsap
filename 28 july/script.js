const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



// gsap


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "70% 100%",
        end: "200% 50%",
        markers: true,
        delay: -0.4,
        scrub: 1,

    },
});
tl.to(".text-area-hover", {
    width: "100%",
});