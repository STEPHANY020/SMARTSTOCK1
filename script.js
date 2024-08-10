document.getElementById('formProducto').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombreProducto').value;
    const precio = parseFloat(document.getElementById('precioProducto').value);
    const cantidad = parseInt(document.getElementById('cantidadProducto').value);

    const tabla = document.getElementById('tablaProductos').getElementsByTagName('tbody')[0];
    const nuevaFila = tabla.insertRow();

    nuevaFila.insertCell().textContent = nombre;
    nuevaFila.insertCell().textContent = precio.toFixed(2);
    nuevaFila.insertCell().textContent = cantidad;

    document.getElementById('formProducto').reset();
});

document.getElementById('formVenta').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombreVenta').value;
    const cantidad = parseInt(document.getElementById('cantidadVenta').value);
    const precio = parseFloat(document.getElementById('precioVenta').value);
    const fecha = document.getElementById('fechaVenta').value;

    const tabla = document.getElementById('tablaVentas').getElementsByTagName('tbody')[0];
    const nuevaFila = tabla.insertRow();

    nuevaFila.insertCell().textContent = nombre;
    nuevaFila.insertCell().textContent = cantidad;
    nuevaFila.insertCell().textContent = precio.toFixed(2);
    nuevaFila.insertCell().textContent = fecha;

    document.getElementById('formVenta').reset();
});

document.getElementById('formCompra').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombreCompra').value;
    const cantidad = parseInt(document.getElementById('cantidadCompra').value);
    const precio = parseFloat(document.getElementById('precioCompra').value);
    const total = cantidad * precio;

    const tabla = document.getElementById('tablaCompras').getElementsByTagName('tbody')[0];
    const nuevaFila = tabla.insertRow();

    nuevaFila.insertCell().textContent = nombre;
    nuevaFila.insertCell().textContent = cantidad;
    nuevaFila.insertCell().textContent = precio.toFixed(2);
    nuevaFila.insertCell().textContent = total.toFixed(2);

    document.getElementById('formCompra').reset();
});

document.getElementById('formFactura').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombreCliente').value;
    const cedula = document.getElementById('cedulaCliente').value;
    const producto = document.getElementById('productoFactura').value;
    const precio = parseFloat(document.getElementById('precioFactura').value);
    const cantidad = parseInt(document.getElementById('cantidadFactura').value);

    const iva = 0.15;
    const subtotal = precio * cantidad;
    const total = subtotal * (1 + iva);

    const resultado = `
        <h3>Factura</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Cédula/Pasaporte:</strong> ${cedula}</p>
        <p><strong>Producto:</strong> ${producto}</p>
        <p><strong>Precio:</strong> ${precio.toFixed(2)}</p>
        <p><strong>Cantidad:</strong> ${cantidad}</p>
        <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
        <p><strong>IVA (15%):</strong> ${(subtotal * iva).toFixed(2)}</p>
        <p><strong>Total:</strong> ${total.toFixed(2)}</p>
    `;

    document.getElementById('resultadoFactura').innerHTML = resultado;
});