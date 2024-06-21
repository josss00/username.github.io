// Script para manejar interacciones del lado del cliente
document.addEventListener('DOMContentLoaded', function() {
    // Simulación de carga dinámica de productos desde la base de datos
    const listaCafes = document.getElementById('lista-cafes');

    // Aquí deberías obtener los productos de la base de datos usando PHP y MySQL
    // y luego crear elementos HTML dinámicamente para cada producto

    // Ejemplo de producto estático
    const productos = [
        { id: 1, nombre: 'Café Latte', descripcion: 'Delicioso café latte con leche espumosa', precio: 30, imagen: 'latteee.jfif' },
        { id: 2, nombre: 'Café Americano', descripcion: 'Café fuerte y negro, servido caliente', precio: 2.50, imagen: 'latteee.jfif' },
        { id: 3, nombre: 'Cappuccino', descripcion: 'Café italiano con leche y espuma de leche', precio: 4.00, imagen: 'cappuccino.jpg' },
    ];

    productos.forEach(producto => {
        const item = document.createElement('div');
        item.classList.add('menu-item');

        const imagen = document.createElement('img');
        imagen.src = 'images/' + producto.imagen;
        imagen.alt = producto.nombre;

        const titulo = document.createElement('h3');
        titulo.textContent = producto.nombre;

        const descripcion = document.createElement('p');
        descripcion.textContent = producto.descripcion;

        const precio = document.createElement('p');
        precio.classList.add('price');
        precio.textContent = '$' + producto.precio.toFixed(2);

        const botonAgregar = document.createElement('button');
        botonAgregar.textContent = 'Agregar al carrito';
        botonAgregar.addEventListener('click', function() {
            agregarAlCarrito(producto);
        });

        item.appendChild(imagen);
        item.appendChild(titulo);
        item.appendChild(descripcion);
        item.appendChild(precio);
        item.appendChild(botonAgregar);

        listaCafes.appendChild(item);
    });

    // Función para agregar un producto al carrito
    function agregarAlCarrito(producto) {
        const carrito = document.getElementById('carrito');
        const totalPedido = document.getElementById('total-pedido');

        const itemCarrito = document.createElement('li');
        itemCarrito.innerHTML = `<strong>${producto.nombre}</strong> - $${producto.precio.toFixed(2)}`;

        carrito.appendChild(itemCarrito);

        // Actualizar el total del pedido
        let total = parseFloat(totalPedido.textContent.substr(1)); // Eliminar el signo de $
        total += producto.precio;
        totalPedido.textContent = '$' + total.toFixed(2);
    }

    // Funcionalidad para realizar el pedido (simulado)
    const btnRealizarPedido = document.getElementById('btn-realizar-pedido');
    btnRealizarPedido.addEventListener('click', function() {
        alert('Pedido realizado. Gracias por su compra!');
        // Aquí podrías enviar los datos del pedido a través de AJAX a un script PHP para procesarlo en el servidor
        // y actualizar la base de datos, etc.
    });
});