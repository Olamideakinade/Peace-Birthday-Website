gsap.registerPlugin(ScrollTrigger);

// Custom Cursor Movement
document.addEventListener("mousemove", (e) => {
    gsap.to(".cursor", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
});

// Parallax and Text Animations
const slides = document.querySelectorAll(".slide");

slides.forEach((slide, i) => {
    const bg = slide.querySelector(".bg");
    const content = slide.querySelector(".content");

    // Background Zoom/Parallax Effect
    gsap.fromTo(bg, {
        y: "-10%",
        scale: 1.2
    }, {
        y: "10%",
        scale: 1,
        scrollTrigger: {
            trigger: slide,
            scrub: true,
            start: "top bottom",
            end: "bottom top"
        }
    });

    // Content Reveal
    gsap.from(content, {
        opacity: 0,
        y: 100,
        scale: 0.8,
        duration: 1.5,
        scrollTrigger: {
            trigger: slide,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play reverse play reverse"
        }
    });
});

// Final Confetti-like Entrance for her name
gsap.from(".reveal-text", {
    duration: 2,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: "power4.out"
});
