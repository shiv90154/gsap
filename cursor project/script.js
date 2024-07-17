var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv =document.querySelector("#image")
main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duraion:1,
ease:"back.out"

    })

});
