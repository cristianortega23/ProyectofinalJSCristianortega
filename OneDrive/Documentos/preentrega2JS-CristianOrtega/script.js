const productos = [
  {
    id: 1,
    nombre: "Campera Viyela Marron",
    talla: "S",
    categoria: "Indumentaria",
    stock: 10,
    precio: 30000,
  },
  {
    id: 2,
    nombre: "Pretal Rojo",
    talla: "S",
    categoria: "Accesorios",
    stock: 10,
    precio: 12500,
  },
  {
    id: 3,
    nombre: "Pretal Azul",
    talla: "S",
    categoria: "Accesorios",
    stock: 5,
    precio: 12500,
  },
  {
    id: 5,
    nombre: "Pretal Naraja",
    talla: "S",
    categoria: "Accesorios",
    stock: 12,
    precio: 12500,
  },
  {
    id: 6,
    nombre: "Campera Viyela Azul",
    talla: "S",
    categoria: "Indumentaria",
    stock: 6,
    precio: 30000,
  },
  {
    id: 7,
    nombre: "Campera Viyela Azul",
    talla: "M",
    categoria: "Indumentaria",
    stock: 5,
    precio: 32000,
  },
  {
    id: 8,
    nombre: "Pretal Negro",
    talla: "M",
    categoria: "Accesorios",
    stock: 10,
    precio: 13000,
  },
  {
    id: 9,
    nombre: "Pretal Rosa",
    talla: "S",
    categoria: "Accesorios",
    stock: 13,
    precio: 12500,
  },
  {
    id: 10,
    nombre: "Pretal Rosa",
    talla: "M",
    categoria: "Accesorios",
    stock: 15,
    precio: 13000,
  },
  {
    id: 11,
    nombre: "Campera University",
    talla: "S",
    categoria: "Indumentaria",
    stock: 7,
    precio: 38000,
  },
  {
    id: 12,
    nombre: "Campera University",
    talla: "M",
    categoria: "Indumentaria",
    stock: 11,
    precio: 40000,
  },
  {
    id: 13,
    nombre: "Camiseta Futbol",
    talla: "S",
    categoria: "Indumentaria",
    stock: 25,
    precio: 12000,
  },
  {
    id: 14,
    nombre: "Camiseta Futbol",
    talla: "M",
    categoria: "Indumentaria",
    stock: 15,
    precio: 12500,
  },
  {
    id: 15,
    nombre: "Camiseta Futbol",
    talla: "L",
    categoria: "Indumentaria",
    stock: 10,
    precio: 14000,
  },
  {
    id: 16,
    nombre: "Camiseta Basquet",
    talla: "S",
    categoria: "Indumentaria",
    stock: 5,
    precio: 12000,
  },
  {
    id: 17,
    nombre: "Camiseta Basquet",
    talla: "M",
    categoria: "Indumentaria",
    stock: 8,
    precio: 12500,
  },
  {
    id: 18,
    nombre: "Juguete Pato",
    talla: "U",
    categoria: "Juguetes",
    stock: 8,
    precio: 14000,
  },
  {
    id: 19,
    nombre: "Juguete Interactivo Hueso",
    talla: "U",
    categoria: "Juguetes",
    stock: 10,
    precio: 12000,
  },
  {
    id: 20,
    nombre: "Juguete Hueso Soga",
    talla: "U",
    categoria: "Juguetes",
    stock: 20,
    precio: 7000,
  },
  {
    id: 21,
    nombre: "Juguete Pelota",
    talla: "U",
    categoria: "Juguetes",
    stock: 22,
    precio: 2500,
  },
  {
    id: 22,
    nombre: "Pretal Comics",
    talla: "S",
    categoria: "Accesorios",
    stock: 4,
    precio: 8500,
  },
  {
    id: 23,
    nombre: "Pretal Comics",
    talla: "M",
    categoria: "Accesorios",
    stock: 10,
    precio: 9000,
  },
  {
    id: 24,
    nombre: "Campera Dorada",
    talla: "S",
    categoria: "Indumentaria",
    stock: 2,
    precio: 35000,
  },
  {
    id: 25,
    nombre: "Campera Dorada",
    talla: "M",
    categoria: "Indumentaria",
    stock: 4,
    precio: 35000,
  },
];

function obtenerCategorias() {
  let categorias = [];
  productos.forEach((producto) => {
    if (!categorias.includes(producto.categoria)) {
      categorias.push(producto.categoria);
    }
  });
  return categorias;
}

function obtenerTalles() {
  let talles = [];
  productos.forEach((producto) => {
    if (!talles.includes(producto.talla)) {
      talles.push(producto.talla);
    }
  });
  return talles;
}
const categorias = obtenerCategorias();
const talles = obtenerTalles();

function pedirNumero(mensaje) {
  return Number(prompt(mensaje));
}

function listaProductos(lista) {
  return lista
    .map(
      (producto) =>
        producto.id +
        " " +
        producto.nombre +
        " " +
        producto.talla +
        " " +
        producto.precio
    )
    .join("\n");
}
function listaCarrito(carrito) {
  return carrito
    .map(
      (producto) =>
        producto.nombre + " " + producto.talla + " " + producto.precio
    )
    .join("\n");
}

function agregarAlCarrito(carrito, idProducto) {
  // verificamos que el producto existe
  const productoSeleccionado = productos.find(
    (producto) => producto.id === idProducto
  );

  // obtenemos la posicion del producto dentro del carrito
  const indiceProductoSeleccionado = carrito.findIndex(
    (producto) => producto.id === idProducto
  );

  if (!productoSeleccionado) {
    alert("Producto no encontrado.");
    return carrito;
  }

  if (indiceProductoSeleccionado < 0) {
    carrito.push({
      id: productoSeleccionado.id,
      nombre: productoSeleccionado.nombre,
      talla: productoSeleccionado.talla,
      precio: productoSeleccionado.precio,
      stock: productoSeleccionado.stock,
      unidades: 1,
    });
  } else {
    // buscamos la posicion de ese producto dentro del carrito
    // buscamos la propiedad unidades y le sumamo uno con el operador '++'
    carrito[indiceProductoSeleccionado].unidades++;
  }
}

function obtenerTallas(productos) {
  let Talla = [];
  productos.forEach((producto) => {
    if (!Talla.includes(producto.talla)) {
      categorias.push(producto.talla);
    }
  });
  return talla;
}

function filtrarProductos(nombrePropiedad, valorPropiedad) {
  return productos.filter(
    // devuelve TODOS los productos que cumplen con esta condicion
    // es decir devuelve un arreglo
    (producto) => producto[nombrePropiedad].toLowerCase() === valorPropiedad
  );
}
function iniciarCompra() {
  let carrito = [];
  let msjCategoria = categorias.join("\n");
  let msjTalla = talles.join("\n");
  let opcionDelUsuario = pedirNumero(
    "Bienvenidos a Valhalla Pets Ingrese:\n1 - Agregar al carrito\n2 - Filtrar por categoría\n3 - Filtrar por talla\n4 - Finalizar compra\n0 - Salir."
  );
  while (opcionDelUsuario !== 0) {
    if (opcionDelUsuario === 1) {
      let idProducto = pedirNumero(
        "Seleccione el producto por su ID:\n" + listaProductos(productos)
      );
      console.log(idProducto);
      agregarAlCarrito(carrito, idProducto);
    } else if (opcionDelUsuario === 2) {
      let categoria = prompt(
        "Ingrese una categoria para ver sus productos:\n" + msjCategoria
      ).toLowerCase();
      let productosFiltrados = filtrarProductos("categoria", categoria);

      if (productosFiltrados.length > 0) {
        let idProducto = pedirNumero(
          "Seleccione un producto:\n" + listaProductos(productosFiltrados)
        );
        agregarAlCarrito(carrito, idProducto);
      } else {
        alert("No se encontraron productos en esta categoría.");
      }
    } else if (opcionDelUsuario === 3) {
      let talla = prompt(
        "Ingrese una talla para ver sus productos:\n" + msjTalla
      ).toLowerCase();
      let productosFiltrados = filtrarProductos("talla", talla);

      if (productosFiltrados.length > 0) {
        let idProducto = pedirNumero(
          "Seleccione un producto:\n" + listaProductos(productosFiltrados)
        );

        agregarAlCarrito(carrito, idProducto);
      } else {
        alert("No se encontraron productos en esta talla.");
      }
    } else if (opcionDelUsuario === 4) {
      let total = carrito.reduce(
        (acumulador, producto) =>
          acumulador + producto.precio * producto.unidades,
        0
      );
      alert(
        listaCarrito(carrito) +
          "\n\n" +
          "----------------------------" +
          "\nTotal de su compra: $" +
          total +
          "\n----------------------------" +
          "\nGracias por elegirnos."
      );
    } else {
      alert("Opción no válida. Por favor, intente de nuevo.");
    }
    opcionDelUsuario = pedirNumero(
      "Ingrese:\n1 - Agregar al carrito\n2 - Filtrar por categoría\n3 - Filtrar por talla\n4 - Finalizar compra\n0 - Salir."
    );
  }
}
iniciarCompra();
