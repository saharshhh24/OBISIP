ScrollReveal().reveal('.tribute-badge, h1, .quote, .img-div, .bio, h4, h5, p, .invention, .circle, .inv-title, .description, .pQuote', {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    reset: true
  });

  document.querySelectorAll('a.scroll-down').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
