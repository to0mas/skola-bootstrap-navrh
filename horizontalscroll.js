gsap.registerPlugin(ScrollTrigger);//registrace pluginu ScrollTrigger pro animace při posouvání stránky

const contents = gsap.utils.toArray("#horizontal .content");//

gsap.to(contents, {

    xPercent: -100 * (contents.length - 1),
    scrollTrigger: {
        trigger: "#horizontal",
        pin: true,
        scrub: 1,
    }
});