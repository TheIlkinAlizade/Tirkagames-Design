
  const loader = document.getElementById("loader");
  const start = Date.now();

  window.addEventListener("load", () => {
    const elapsed = Date.now() - start;
    const delay = Math.max(0, 2000 - elapsed);

    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.5s ease";

      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, delay);
  });

    const carousel = document.getElementById('carousel');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    let index = 0;

    function showSlide() {
        const itemWidth = carousel.children[0].offsetWidth + 30;
        const offset = -index * itemWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    prev.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : carousel.children.length - 5;
        showSlide();
    });

    next.addEventListener('click', () => {
        index = (index < carousel.children.length - 5) ? index + 1 : 0;
        showSlide();
    });

    window.addEventListener('resize', showSlide);

    showSlide();