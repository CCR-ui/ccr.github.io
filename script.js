

const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');
    
    burgerMenu.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });


    document.getElementById('up-arrow').addEventListener('click', function() {
      const targetSection = document.getElementById('hero-section');
      const offsetTop = targetSection.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });