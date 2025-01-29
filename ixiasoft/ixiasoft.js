// Test
// Selecciona todos los elementos con la clase "accordion"
const accordions = document.querySelectorAll('.accordion');

// Añade un evento de clic a cada "accordion"
accordions.forEach(accordion => {
  accordion.addEventListener('click', () => {
    const panel = accordion.nextElementSibling;
    panel.classList.toggle('open'); // Alterna la clase "open" en el panel
  });
});