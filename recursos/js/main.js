document.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});



document.addEventListener("DOMContentLoaded", function() {
  const header = document.getElementById("encabezado");
  let previousScroll = window.pageYOffset;  // Guarda el scroll anterior

  window.addEventListener("scroll", function() {
    const currentScroll = window.pageYOffset;

    // Comportamiento solo para pantallas móviles (ancho menor a 768px)
    if (window.innerWidth < 768) {
      // Si se está desplazando hacia abajo y ya se pasó cierto umbral (por ejemplo, 50px)
      if (currentScroll > previousScroll && currentScroll > 50) {
        header.style.transform = "translateY(-100%)";  // Oculta el header
      } else {
        header.style.transform = "translateY(0)";         // Lo muestra al hacer scroll hacia arriba
      }
      previousScroll = currentScroll; // Actualiza el scroll anterior
    } else {
      // En pantallas de ordenador, siempre mostramos el header
      header.style.transform = "translateY(0)";
    }
  });
})

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
