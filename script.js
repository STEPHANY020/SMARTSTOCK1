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

    // Implementación básica para agregar productos
    document.getElementById('formProducto').addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombreProducto').value;
        const precio = document.getElementById('precioProducto').value;
        const cantidad = document.getElementById('cantidadProducto').value;

        const tabla = document.getElementById('tablaProductos').getElementsByTagName('tbody')[0];
        const nuevaFila = tabla.insertRow();

        nuevaFila.insertCell().textContent = nombre;
        nuevaFila.insertCell().textContent = precio;
        nuevaFila.insertCell().textContent = cantidad;
        const boton = document.createElement('button');
        boton.textContent = 'Eliminar';
        boton.className = 'btn';
        boton.onclick = function() {
            tabla.removeChild(nuevaFila);
        };
        nuevaFila.insertCell().appendChild(boton);

        document.getElementById('formProducto').reset();
    });

    // Implementación básica para registrar ventas
    document.getElementById('formVenta').addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombreVenta').value;
        const cantidad = document.getElementById('cantidadVenta').value;
        const precio = document.getElementById('precioVenta').value;
        const fecha = document.getElementById('fechaVenta').value;

        const tabla = document.getElementById('tablaVentas').getElementsByTagName('tbody')[0];
        const nuevaFila = tabla.insertRow();

        nuevaFila.insertCell().textContent = nombre;
        nuevaFila.insertCell().textContent = cantidad;
        nuevaFila.insertCell().textContent = precio;
        nuevaFila.insertCell().textContent = fecha;

        document.getElementById('formVenta').reset();
    });

    // Implementación básica para registrar compras
    document.getElementById('formCompra').addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombreCompra').value;
        const cantidad = document.getElementById('cantidadCompra').value;
        const precio = document.getElementById('precioCompra').value;
        const total = (cantidad * precio).toFixed(2);

        const tabla = document.getElementById('tablaCompras').getElementsByTagName('tbody')[0];
        const nuevaFila = tabla.insertRow();

        nuevaFila.insertCell().textContent = nombre;
        nuevaFila.insertCell().textContent = cantidad;
        nuevaFila.insertCell().textContent = precio;
        nuevaFila.insertCell().textContent = total;

        document.getElementById('formCompra').reset();
    });

    // Implementación básica para crear factura
    document.getElementById('formFactura').addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombreCliente').value;
        const cedula = document.getElementById('cedulaCliente').value;
        const producto = document.getElementById('productoFactura').value;
        const precio = document.getElementById('precioFactura').value;
        const cantidad = document.getElementById('cantidadFactura').value;
        const iva = 0.15;
        const subtotal = (precio * cantidad).toFixed(2);
        const total = (subtotal * (1 + iva)).toFixed(2);

        const resultado = `
            <h3>Factura</h3>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Cédula/Pasaporte:</strong> ${cedula}</p>
            <p><strong>Producto:</strong> ${producto}</p>
            <p><strong>Precio:</strong> ${precio}</p>
            <p><strong>Cantidad:</strong> ${cantidad}</p>
            <p><strong>Subtotal:</strong> ${subtotal}</p>
            <p><strong>IVA (15%):</strong> ${(subtotal * iva).toFixed(2)}</p>
            <p><strong>Total:</strong> ${total}</p>
        `;
        document.getElementById('resultadoFactura').innerHTML = resultado;
        document.getElementById('formFactura').reset();
    });
});
