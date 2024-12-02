function inicioC() {
  let productos = [
    {
      id: 1,
      nombre: "Campera Viyela Marron",
      talla: "S",
      categoria: "Indumentaria",
      stock: 10,
      precio: 30000,
      rutaImagen: "camperaCuadros.jpg",
    },
    {
      id: 2,
      nombre: "Pretal Rojo",
      talla: "S",
      categoria: "Accesorios",
      stock: 10,
      precio: 12500,
      rutaImagen: "pretalNegro.jpg",
    },
    {
      id: 3,
      nombre: "Pretal Azul",
      talla: "S",
      categoria: "Accesorios",
      stock: 5,
      precio: 12500,
      rutaImagen: "pretalAzul.jpg",
    },
    {
      id: 5,
      nombre: "Pretal Naranja",
      talla: "S",
      categoria: "Accesorios",
      stock: 12,
      precio: 12500,
      rutaImagen: "pretalAzul.jpg",
    },
    {
      id: 6,
      nombre: "Campera Viyela Azul",
      talla: "S",
      categoria: "Indumentaria",
      stock: 6,
      precio: 30000,
      rutaImagen: "camperaCuadros.jpg",
    },
    {
      id: 7,
      nombre: "Campera Rompevientos",
      talla: "M",
      categoria: "Indumentaria",
      stock: 5,
      precio: 32000,
      rutaImagen: "RompevientosCuadros.jpg",
    },
    {
      id: 8,
      nombre: "Pretal Negro",
      talla: "M",
      categoria: "Accesorios",
      stock: 10,
      precio: 16000,
      rutaImagen: "pretalNegroS.jpg",
    },
    {
      id: 9,
      nombre: "Pretal Rosa",
      talla: "S",
      categoria: "Accesorios",
      stock: 13,
      precio: 12500,
      rutaImagen: "pretalNegro.jpg",
    },
    {
      id: 10,
      nombre: "Pretal Comics",
      talla: "M",
      categoria: "Accesorios",
      stock: 15,
      precio: 13000,
      rutaImagen: "pretalComic1.jpg",
    },
    {
      id: 11,
      nombre: "Campera University",
      talla: "S",
      categoria: "Indumentaria",
      stock: 7,
      precio: 38000,
      rutaImagen: "CamperaUniv.jpg",
    },
    {
      id: 12,
      nombre: "Campera University",
      talla: "M",
      categoria: "Indumentaria",
      stock: 11,
      precio: 40000,
      rutaImagen: "CamperaUniv.jpg",
    },
    {
      id: 13,
      nombre: "Camiseta Futbol",
      talla: "S",
      categoria: "Indumentaria",
      stock: 25,
      precio: 12000,
      rutaImagen: "CamisetaFutbol.jpg",
    },
    {
      id: 14,
      nombre: "Camiseta Futbol",
      talla: "M",
      categoria: "Indumentaria",
      stock: 15,
      precio: 12500,
      rutaImagen: "CamisetaFutbol.jpg",
    },
    {
      id: 15,
      nombre: "Camiseta Futbol",
      talla: "L",
      categoria: "Indumentaria",
      stock: 10,
      precio: 14000,
      rutaImagen: "CamisetaFutbol.jpg",
    },
    {
      id: 16,
      nombre: "Camiseta Basquet",
      talla: "S",
      categoria: "Indumentaria",
      stock: 5,
      precio: 12000,
      rutaImagen: "CamisetaBasquet.jpg",
    },
    {
      id: 17,
      nombre: "Camiseta Basquet",
      talla: "M",
      categoria: "Indumentaria",
      stock: 8,
      precio: 12500,
      rutaImagen: "CamisetaBasquet.jpg",
    },
    {
      id: 18,
      nombre: "Juguete Pato",
      talla: "U",
      categoria: "Juguetes",
      stock: 8,
      precio: 14000,
      rutaImagen: "juguetePato.jpg",
    },
    {
      id: 19,
      nombre: "Juguete Interactivo Hueso",
      talla: "U",
      categoria: "Juguetes",
      stock: 10,
      precio: 12000,
      rutaImagen: "jugueteHueso.jpg",
    },
    {
      id: 20,
      nombre: "Juguete Hueso Soga",
      talla: "U",
      categoria: "Juguetes",
      stock: 20,
      precio: 7000,
      rutaImagen: "jugueteSoga.jpg",
    },
    {
      id: 21,
      nombre: "Juguete Pelota",
      talla: "U",
      categoria: "Juguetes",
      stock: 22,
      precio: 2500,
      rutaImagen: "juguetePelota.jpg",
    },
    {
      id: 22,
      nombre: "Pretal Comics",
      talla: "S",
      categoria: "Accesorios",
      stock: 4,
      precio: 8500,
      rutaImagen: "pretalComic2.jpg",
    },
    {
      id: 23,
      nombre: "Pretal Comics",
      talla: "M",
      categoria: "Accesorios",
      stock: 10,
      precio: 9000,
      rutaImagen: "pretalComic3.jpg",
    },
    {
      id: 24,
      nombre: "Campera Dorada",
      talla: "S",
      categoria: "Indumentaria",
      stock: 2,
      precio: 35000,
      rutaImagen: "camperaGold.jpg",
    },
    {
      id: 25,
      nombre: "Campera Dorada",
      talla: "M",
      categoria: "Indumentaria",
      stock: 4,
      precio: 35000,
      rutaImagen: "camperaGold.jpg",
    },
  ];

  let carrito = recuperarCarritoDelStorage("carrito");
  renderizarCarrito(carrito);

  crearTarjetasProductos(productos);

  let inputBuscar = document.getElementById("inputBuscar");
  inputBuscar.addEventListener("keyup", (e) =>
    filtrarYrenderizar(e, productos)
  );

  let botonBuscar = document.getElementById("botonBuscar");
  botonBuscar.addEventListener("click", () =>
    filtrarYrenderizarConBoton(inputBuscar, productos)
  );

  let filtroCategorias = document.getElementById("filtroCategorias");
  filtroCategorias.addEventListener("change", (e) =>
    filtrarPorCategoria(e, productos)
  );

  let filtroTallas = document.getElementById("filtroTallas");
  filtroTallas.addEventListener("change", () => filtrarProductos(productos));

  let botonProductosCarrito = document.getElementById("productosCarrito");
  botonProductosCarrito.addEventListener("click", verOcultarCarrito);

  let botonesAgregarProductos = document.getElementsByClassName(
    "botonAgregarAlCarrito"
  );
  for (const boton of botonesAgregarProductos) {
    boton.addEventListener("click", (e) =>
      agregarProductoAlCarrito(e, productos)
    );
  }

  let botonComprar = document.getElementById("botonComprar");
  botonComprar.addEventListener("click", finalizarCompra);
}

inicioC();

function filtrarProductos(productos) {
  const categoriaSeleccionada =
    document.getElementById("filtroCategorias").value;
  const tallaSeleccionada = document.getElementById("filtroTallas").value;

  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria =
      categoriaSeleccionada === "Todos" ||
      producto.categoria === categoriaSeleccionada;
    const coincideTalla =
      tallaSeleccionada === "Todos" || producto.talla === tallaSeleccionada;

    return coincideCategoria && coincideTalla;
  });

  crearTarjetasProductos(productosFiltrados);
}

function calcularTotal(productos) {
  return productos.reduce((acum, producto) => acum + producto.subtotal, 0);
}

function actualizarTotal(total) {
  let elementoTotal = document.getElementById("total");
  elementoTotal.innerText = "$" + total;
}

function finalizarCompra() {
  renderizarCarrito([]);
  localStorage.removeItem("carrito");
  alert("Gracias por su compra");
}

function filtrarYrenderizarConBoton(input, productos) {
  let productosFiltrados = filtrar(input.value, productos);
  crearTarjetasProductos(productosFiltrados);
}

function filtrarYrenderizar(e, productos) {
  if (e.keyCode === 13) {
    let arrayFiltrado = filtrar(e.target.value, productos);
    crearTarjetasProductos(arrayFiltrado);
  }

  e.target.value === "" && crearTarjetasProductos(productos);
}

function filtrar(valor, productos) {
  return productos.filter(
    ({ nombre, categoria }) =>
      nombre.includes(valor) || categoria.includes(valor)
  );
}

function verOcultarCarrito(e) {
  let carrito = document.getElementById("pantallaCarrito");
  let contenedorProductos = document.getElementById("pantallaProductos");

  carrito.classList.toggle("oculta");
  contenedorProductos.classList.toggle("oculta");

  e.target.innerText =
    e.target.innerText === "Carrito" ? "Productos" : "Carrito";
}

function crearTarjetasProductos(productos) {
  let contenedor = document.getElementById("contenedorProductos");
  contenedor.innerHTML = "";

  productos.forEach(({ stock, id, rutaImagen, nombre, precio, talla }) => {
    let mensaje = stock < 5 ? "Quedan pocas unidades" : "Unidades " + stock;

    let tarjetaProducto = document.createElement("div");
    tarjetaProducto.className = "producto";
    tarjetaProducto.innerHTML = `
      <img src=./images/${rutaImagen} />
      <h3>${nombre}</h3>
      <p>Precio: $${precio}</p>
      <p>Talla: ${talla}</p>
      <p>${mensaje}</p>
      <button class="botonAgregarAlCarrito" id="agc${id}">Agregar al carrito</button>
    `;

    contenedor.appendChild(tarjetaProducto);
  });
}

function agregarProductoAlCarrito(event, productos) {
  let carrito = recuperarCarritoDelStorage();
  let idProducto = Number(event.target.id.substring(3));
  let productoOriginal = productos.find(({ id }) => id === idProducto);
  let { id, nombre, precio } = productoOriginal;
  let indiceProductoEnCarrito = carrito.findIndex(
    ({ id }) => id === idProducto
  );
  if (indiceProductoEnCarrito === -1) {
    carrito.push({
      id,
      nombre,
      precioUnitario: precio,
      unidades: 1,
      subtotal: precio,
    });
  } else {
    carrito[indiceProductoEnCarrito].unidades++;
    carrito[indiceProductoEnCarrito].subtotal =
      carrito[indiceProductoEnCarrito].precioUnitario *
      carrito[indiceProductoEnCarrito].unidades;
  }

  guardarEnStorage(carrito);
  renderizarCarrito(carrito);
}

// recibe un array
function renderizarCarrito(carrito) {
  let contenedorCarrito = document.getElementById("carrito");
  contenedorCarrito.innerHTML = "";

  carrito.forEach(({ id, nombre, precioUnitario, unidades, subtotal }) => {
    let tarjetaCarrito = document.createElement("div");
    tarjetaCarrito.className = "tarjetaCarrito";
    tarjetaCarrito.id = "tca" + id;

    tarjetaCarrito.innerHTML = `
          <p>${nombre}</p>
          <p>${precioUnitario}</p>
          <div class=unidades>
              <button id=run${id}>-</button>
              <p>${unidades}</p>
              <button id=sun${id}>+</button>
          </div>
          <p>${subtotal}</p>
          <button id=eli${id}>Eliminar</button
      `;
    contenedorCarrito.appendChild(tarjetaCarrito);

    let botonEliminar = document.getElementById("eli" + id);
    botonEliminar.addEventListener("click", eliminarProdDelCarrito);

    let botonRestarUnidad = document.getElementById("run" + id);
    botonRestarUnidad.addEventListener("click", restarUnidadProdCarrito);

    let botonSumarUnidad = document.getElementById("sun" + id);
    botonSumarUnidad.addEventListener("click", sumarUnidadProdCarrito);
  });

  let total = calcularTotal(carrito);
  actualizarTotal(total);
  // no retorna nada
}

function sumarUnidadProdCarrito(e) {
  let id = Number(e.target.id.substring(3));
  let carrito = recuperarCarritoDelStorage();
  let indiceProducto = carrito.findIndex((producto) => producto.id === id);

  if (indiceProducto !== -1) {
    carrito[indiceProducto].unidades++;
    carrito[indiceProducto].subtotal =
      carrito[indiceProducto].precioUnitario * carrito[indiceProducto].unidades;
    guardarEnStorage(carrito);

    console.dir(e.target.parentElement);
    // e.target.previousElementSibling.innerText = carrito[indiceProducto].unidades
    e.target.parentElement.children[1].innerText =
      carrito[indiceProducto].unidades;
    e.target.parentElement.nextElementSibling.innerText =
      carrito[indiceProducto].subtotal;
  }

  const total = calcularTotal(carrito);
  actualizarTotal(total);
  // renderizarCarrito(carrito)
}

function restarUnidadProdCarrito(e) {
  let id = Number(e.target.id.substring(3));
  let carrito = recuperarCarritoDelStorage();
  let indiceProducto = carrito.findIndex((producto) => producto.id === id);

  if (indiceProducto !== -1) {
    carrito[indiceProducto].unidades--;
    if (carrito[indiceProducto].unidades === 0) {
      carrito.splice(indiceProducto, 1);
      e.target.parentElement.parentElement.remove();
    } else {
      carrito[indiceProducto].subtotal =
        carrito[indiceProducto].precioUnitario *
        carrito[indiceProducto].unidades;

      // e.target.nextElementSibling.innerText = carrito[indiceProducto].unidades
      e.target.parentElement.children[1].innerText =
        carrito[indiceProducto].unidades;
      e.target.parentElement.nextElementSibling.innerText =
        carrito[indiceProducto].subtotal;
    }
    guardarEnStorage(carrito);
  }

  const total = calcularTotal(carrito);
  actualizarTotal(total);
  // renderizarCarrito(carrito)
}

function eliminarProdDelCarrito(e) {
  let id = Number(e.target.id.substring(3));
  let carrito = recuperarCarritoDelStorage();
  let indiceProducto = carrito.findIndex((producto) => producto.id === id);
  if (indiceProducto !== -1) {
    carrito.splice(indiceProducto, 1);
    /* let tarjetaCarrito = document.getElementById("tca" + id)
      tarjetaCarrito.remove() */
    e.target.parentElement.remove();
  }

  guardarEnStorage(carrito);
  const total = calcularTotal(carrito);
  actualizarTotal(total);
  // renderizarCarrito(carrito)
}

function guardarEnStorage(valor) {
  let valorJson = JSON.stringify(valor);
  localStorage.setItem("carrito", valorJson);
}
function recuperarCarritoDelStorage() {
  const carritoJson = localStorage.getItem("carrito");
  return carritoJson ? JSON.parse(carritoJson) : [];
}

tarjetaCarrito.innerHTML = `
    <p>${nombre}</p>
    <p>${precioUnitario}</p>
    <div class="unidades">
        <button id="run${id}">-</button>
        <p>${unidades}</p>
        <button id="sun${id}">+</button>
    </div>
    <p>${subtotal}</p>
    <button id="eli${id}">Eliminar</button>
`;
