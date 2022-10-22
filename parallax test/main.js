let m1 = document.querySelector("#m1");
gsap.from("m1",{
    scrollTrigger : {
        scrub: true
    },
    y: 200,
})