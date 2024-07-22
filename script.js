document.addEventListener('DOMContentLoaded', () => {
  // Animação do banner ao carregar a página
  gsap.from('.banner h1', { duration: 1, y: -50, opacity: 0, ease: 'power2.out' });
  gsap.from('.banner p', { duration: 1, y: 50, opacity: 0, delay: 0.5, ease: 'power2.out' });

  // Animações para as seções ao rolar a página
  gsap.utils.toArray('section').forEach(section => {
      gsap.from(section, {
          scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 60%',
              toggleActions: 'play none none none',
          },
          duration: 1,
          y: 100,
          opacity: 0,
          ease: 'power2.out'
      });
  });

  // Animação de destaque ao passar o mouse nos links do menu
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
          gsap.to(link, { duration: 0.3, scale: 1.1, color: '#ffd700', ease: 'power1.out' });
      });
      link.addEventListener('mouseleave', () => {
          gsap.to(link, { duration: 0.3, scale: 1, color: '#fff', ease: 'power1.out' });
      });
  });

  // Animações de destaque ao passar o mouse nos artigos e listas
  const articles = document.querySelectorAll('article, .build-list ul li, .guide-list ul li, .class-list ul li, .event-calendar tbody tr');
  articles.forEach(article => {
      article.addEventListener('mouseenter', () => {
          gsap.to(article, { duration: 0.3, scale: 1.05, boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)', ease: 'power1.out' });
      });
      article.addEventListener('mouseleave', () => {
          gsap.to(article, { duration: 0.3, scale: 1, boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', ease: 'power1.out' });
      });
  });

  // Animação ao clicar nos itens do menu para rolagem suave
  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          if (link.hash !== "") {
              e.preventDefault();
              const hash = link.hash;
              gsap.to(window, { duration: 1, scrollTo: { y: hash, offsetY: 50 }, ease: 'power2.out' });
          }
      });
  });

  // Animações para os botões do formulário
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
          gsap.to(button, { duration: 0.3, scale: 1.1, backgroundColor: '#fff', color: '#333', ease: 'power1.out' });
      });
      button.addEventListener('mouseleave', () => {
          gsap.to(button, { duration: 0.3, scale: 1, backgroundColor: '#ffd700', color: '#333', ease: 'power1.out' });
      });
  });

  // Efeitos de parallax para a imagem do banner
  gsap.to('.banner', {
      scrollTrigger: {
          trigger: '.banner',
          start: 'top top',
          end: 'bottom top',
          scrub: true
      },
      backgroundPosition: '50% 100%',
      ease: 'none'
  });

  // Efeitos de fade in para os elementos do rodapé ao rolar a página
  gsap.from('footer', {
      scrollTrigger: {
          trigger: 'footer',
          start: 'top bottom',
          end: 'bottom bottom',
          toggleActions: 'play none none reverse',
      },
      duration: 1,
      opacity: 0,
      y: 50,
      ease: 'power2.out'
  });
});
