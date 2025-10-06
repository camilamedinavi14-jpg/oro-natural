document.addEventListener('DOMContentLoaded', function() {
    // 1. Selecciona todos los enlaces del menú con la clase 'nav-item'
    const navLinks = document.querySelectorAll('.nav-item');
    // 2. Selecciona todas las secciones de contenido con la clase 'content-section'
    const contentSections = document.querySelectorAll('.content-section');

    // Función para mostrar una sección y ocultar las demás
    function showSection(sectionId) {
        // Itera sobre todas las secciones
        contentSections.forEach(section => {
            // Remueve la clase 'active-page' de todas las secciones.
            // Esto las oculta gracias a tu CSS.
            section.classList.remove('active-page');
        });

        // Busca la sección que corresponde al ID que se pasó a la función
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            // Si la sección existe, le agrega la clase 'active-page'.
            // Esto la hace visible.
            targetSection.classList.add('active-page');
        }
    }

    // Agrega un evento 'click' a cada enlace del menú
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Previene el comportamiento predeterminado del navegador, que es ir al ancla.
            event.preventDefault(); 
            
            // Obtiene el ID de la sección del atributo href del enlace. 
            // .substring(1) quita el '#' del inicio.
            const sectionId = this.getAttribute('href').substring(1); 
            
            // Llama a la función 'showSection' para mostrar la sección correcta.
            showSection(sectionId);
        });
    });

    // Muestra la sección inicial cuando la página se carga por primera vez
    // Esto asegura que al abrir la página, la sección "Quienes somos" sea visible.
    // Solo se debe hacer con la primera sección, no con todas.
    showSection('Quienes somos'); // Asegúrate de que este ID coincida con tu HTML
});