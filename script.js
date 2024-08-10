document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content');

    // Inicialmente, ocultar todas las secciones excepto la de inicio
    sections.forEach(section => {
        if (section.id !== 'inicio') {
            section.style.display = 'none';
        }
    });

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // Ocultar todas las secciones
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Mostrar la sección seleccionada
            targetSection.style.display = 'block';
        });
    });
});
