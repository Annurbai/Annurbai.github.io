document.addEventListener("DOMContentLoaded", function () {

  new Typed("#typing", {
    strings: [
      "I build systems that save time.",
      "I automate manual processes.",
      "I turn repetitive work into code."
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
  });

  ScrollReveal().reveal('.section', {
    distance: '40px',
    duration: 800,
    origin: 'bottom',
    interval: 200
  });

});