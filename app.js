//  VIDEOSECTION
const videoSection = document.querySelector('section.video');
const videoVideo = videoSection.querySelector('video');
const videoTitle = videoSection.querySelector('h2');

// END SECTION
const endSection = document.querySelector('section.third');
const endTitle = endSection.querySelector('h2');

// Create a new instance of the ScrollMagic Controller
const controller = new ScrollMagic.Controller();

// SCENE
let scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: videoSection,
    triggerHook: 0
})
    .addIndicators()
    .setPin(videoSection)
    .addTo(controller);

const textAnim = TweenMax.fromTo(videoTitle, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: videoSection,
    triggerHook: 0
})
    .setTween(textAnim)
    .addTo(controller);


// VIDEO ANIMATION
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    videoVideo.currentTime = delay;
}, 33.3);