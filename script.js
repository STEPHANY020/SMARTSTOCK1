document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content');

    // Inicialmente, mostrar solo la sección de inicio
    sections.forEach(section => {
        if (section.id === 'inicio') {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // Ocultar todas las secciones
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Mostrar la sección seleccionada
            targetSection.classList.add('active');

            // Resaltar el enlace activo
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
