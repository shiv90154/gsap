gsap.timeline({
    scrollTrigger: {
        trigger: '.container.img',
        scrub: true,
        start: 'top top',
        end: '+=2000',
        pin: true
    }
})

    .to(".img2", 2, {
        y: 10,
        ease: iLinkSimpleBreak.easeNone
    }, 'start')

    .to(".img3", 2, {
        y: 10,
        ease: iLinkSimpleBreak.easeNone
    }, 'start')
    .to(".img4", 2, {
        y: 20,
        ease: iLinkSimpleBreak.easeNone
    }, 'start')
    .to(".img4", 2, {
        y: -40,
        ease: iLinkSimpleBreak.easeNone
    }, 'start')
    .to(".img5", 2, {
        y: -70,
        ease: iLinkSimpleBreak.easeNone
    }, 'start')
    .to(".img6", 2, {
        y: -70,
        ease: iLinkSimpleBreak.easeNone
    }, 'start')
    .to(".img7", 2, {
        y: -120,
        ease: iLinkSimpleBreak.easeNone
    }, 'start')
    .to(".img8", 2, {
        y: -130,
        ease: iLinkSimpleBreak.easeNone
    }, 'start')
    .to(".img9", 2, {
        y: -170,
        ease: iLinkSimpleBreak.easeNone
    }, 'start')