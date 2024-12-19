pedirProductos()

function pedirProductos() {
    fetch("./productos.json")
        .then(response => response.json())
        .then(productos => principal(productos))
        .catch(error => lanzarAlerta(error, "Hubo una falla al intentar obtener los productos", "error"))
}

async function pedirProductosAsincronica() {
    const response = await fetch("./productos.json")
    const productos = await response.json()
    principal(productos)
}

function principal(productos) {
    let carrito = recuperarCarritoDelStorage("carrito")
    renderizarCarrito(carrito)

    crearTarjetasProductos(productos)

    let inputBuscar = document.getElementById("inputBuscar")
    inputBuscar.addEventListener("keyup", (e) => filtrarYrenderizar(e, productos))

    let botonBuscar = document.getElementById("botonBuscar")
    botonBuscar.addEventListener("click", () => filtrarYrenderizarConBoton(inputBuscar, productos))

    let filtroCategorias = document.getElementById("filtroCategorias")
    filtroCategorias.addEventListener("change", (e) => filtrarPorCategoria(e, productos))

    let selectOrdenar = document.getElementById("ordenar")
    selectOrdenar.addEventListener("change", (e) => ordenar(e, productos))

    let botonesCategorias = document.getElementsByClassName("botonCategoria")
    for (const botonCategoria of botonesCategorias) {
        botonCategoria.addEventListener("click", (e) => filtrarPorCategoria(e, productos))
    }

    let botonProductosCarrito = document.getElementById("productosCarrito")
    botonProductosCarrito.addEventListener("click", verOcultarCarrito)

    let botonesAgregarProductos = document.getElementsByClassName("botonAgregarAlCarrito")
    for (const boton of botonesAgregarProductos) {
        boton.addEventListener("click", (e) => agregarProductoAlCarrito(e, productos))
    }

    let botonComprar = document.getElementById("botonComprar")
    botonComprar.addEventListener("click", finalizarCompra)
}

function ordenar(e, productos) {
    const tipoOrden = e.target.value.substring(0, 3)
    const propiedad = e.target.value.substring(3)

    productos.sort((prodA, prodB) => {
        if (prodA[propiedad] > prodB[propiedad]) {
            return 1
        } else if (prodA[propiedad] < prodB[propiedad]) {
            return -1
        } else {
            return 0
        }
    })
    if (tipoOrden === "des") {
        productos.reverse()
    }

    crearTarjetasProductos(productos)
}

function filtrarPorCategoria(e, productos) {
    const categoria = e.target.value
    const productosFiltrados = productos.filter(producto => producto.categoria.includes(categoria))
    crearTarjetasProductos(productosFiltrados)
}
const botonesCategorias = document.getElementsByClassName("botonCategoria");
  for (const boton of botonesCategorias) {
    boton.addEventListener("click", (e) => filtrarPorCategoria(e, productos));
  }
function calcularTotal(productos) {
    return productos.reduce((acum, producto) => acum + producto.subtotal, 0)
}

function actualizarTotal(total) {
    let elementoTotal = document.getElementById("total")
    elementoTotal.innerText = "$" + total
}

function finalizarCompra() {
    lanzarAlertaConPromesa()
}

function filtrarYrenderizarConBoton(input, productos) {
    let valorPrecioMinimo = Number(document.getElementById("precioMinimo").value) || undefined
    let valorPrecioMaximo = Number(document.getElementById("precioMaximo").value) || undefined

    let productosFiltrados = filtrar(input.value, productos, valorPrecioMinimo, valorPrecioMaximo)
    crearTarjetasProductos(productosFiltrados)
}

function filtrarYrenderizar(e, productos) {
    if (e.keyCode === 13) {
        let arrayFiltrado = filtrar(e.target.value, productos)
        crearTarjetasProductos(arrayFiltrado)
    }

    e.target.value === "" && crearTarjetasProductos(productos)
}

function filtrar(valor, productos, precioMinimo = -Infinity, precioMaximo = Infinity) {
    return productos.filter(({ nombre, categoria, precio }) => (nombre.includes(valor) || categoria.includes(valor)) && (precio > precioMinimo && precio < precioMaximo))
}

function verOcultarCarrito(e) {
    let carrito = document.getElementById("pantallaCarrito")
    let contenedorProductos = document.getElementById("pantallaProductos")

    carrito.classList.toggle("oculta")
    contenedorProductos.classList.toggle("oculta")

    e.target.innerText = e.target.innerText === "Carrito" ? "Productos" : "Carrito"
}

function crearTarjetasProductos(productos) {
    let contenedor = document.getElementById("contenedorProductos")
    contenedor.innerHTML = ""
    productos.forEach(({ stock, id, rutaImagen, nombre, precio }) => {
        let mensaje = stock < 5 ? "Quedan pocas unidades" : "Unidades " + stock
        let tarjetaProducto = document.createElement("div")
        tarjetaProducto.className = "producto"
        tarjetaProducto.innerHTML = `
            <img src=./images/${rutaImagen} />
            <h3>${nombre}</h3>
            <p>$${precio}</p>
            <p>${mensaje}</p>
            <button class=botonAgregarAlCarrito id=agc${id}>Agregar al carrito</button>
        `

        contenedor.appendChild(tarjetaProducto)
    })
}

function agregarProductoAlCarrito(event, productos) {
    const carrito = recuperarCarritoDelStorage();
    const idProducto = Number(event.target.id.substring(3));
    const producto = productos.find((prod) => prod.id === idProducto);
  
    if (!producto) return;
  
    const productoEnCarrito = carrito.find((prod) => prod.id === idProducto);
    if (productoEnCarrito) {
      productoEnCarrito.unidades++;
      productoEnCarrito.subtotal =
        productoEnCarrito.unidades * productoEnCarrito.precioUnitario;
    } else {
      carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precioUnitario: producto.precio,
        unidades: 1,
        subtotal: producto.precio,
      });
    }
  
    guardarEnStorage(carrito);
    renderizarCarrito(carrito);
  
    Toastify({
      text: "Producto agregado al carrito",
      duration: 3000,
      close: true,
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
      style: { background: "linear-gradient(to right,rgb(176, 141, 0),rgb(122, 95, 39))" },
    }).showToast();
  }

  function renderizarCarrito(carrito) {
    const contenedorCarrito = document.getElementById("carrito");
    contenedorCarrito.innerHTML = "";
  
    carrito.forEach(({ id, nombre, precioUnitario, unidades, subtotal }) => {
      const tarjetaCarrito = document.createElement("div");
      tarjetaCarrito.className = "tarjetaCarrito";
      tarjetaCarrito.id = `tca${id}`;
      tarjetaCarrito.innerHTML = `
        <p>${nombre}</p>
        <p>Precio Unitario: $${precioUnitario}</p>
        <div class="unidades">
          <button id="run${id}" aria-label="Restar unidad">-</button>
          <p>${unidades}</p>
          <button id="sun${id}" aria-label="Sumar unidad">+</button>
        </div>
        <p>Subtotal: $${subtotal}</p>
        <button id="eli${id}" aria-label="Eliminar del carrito">Eliminar</button>
      `;
      contenedorCarrito.appendChild(tarjetaCarrito);
  
      document
        .getElementById(`run${id}`)
        .addEventListener("click", (e) => restarUnidadProdCarrito(e));
      document
        .getElementById(`sun${id}`)
        .addEventListener("click", (e) => sumarUnidadProdCarrito(e));
      document
        .getElementById(`eli${id}`)
        .addEventListener("click", (e) => eliminarProdDelCarrito(e));
    });
  
    actualizarTotal(calcularTotal(carrito));
  }

function sumarUnidadProdCarrito(e) {
    let id = Number(e.target.id.substring(3))
    let carrito = recuperarCarritoDelStorage()
    let indiceProducto = carrito.findIndex(producto => producto.id === id)

    if (indiceProducto !== -1) {
        carrito[indiceProducto].unidades++
        carrito[indiceProducto].subtotal = carrito[indiceProducto].precioUnitario * carrito[indiceProducto].unidades
        guardarEnStorage(carrito)

        e.target.parentElement.children[1].innerText = carrito[indiceProducto].unidades
        e.target.parentElement.nextElementSibling.innerText = carrito[indiceProducto].subtotal
    }

    const total = calcularTotal(carrito)
    actualizarTotal(total)
}

function restarUnidadProdCarrito(e) {
    let id = Number(e.target.id.substring(3))
    let carrito = recuperarCarritoDelStorage()
    let indiceProducto = carrito.findIndex(producto => producto.id === id)

    if (indiceProducto !== -1) {
        carrito[indiceProducto].unidades--
        if (carrito[indiceProducto].unidades === 0) {
            carrito.splice(indiceProducto, 1)
            e.target.parentElement.parentElement.remove()
        } else {
            carrito[indiceProducto].subtotal = carrito[indiceProducto].precioUnitario * carrito[indiceProducto].unidades

            e.target.parentElement.children[1].innerText = carrito[indiceProducto].unidades
            e.target.parentElement.nextElementSibling.innerText = carrito[indiceProducto].subtotal
        }
        guardarEnStorage(carrito)
    }

    const total = calcularTotal(carrito)
    actualizarTotal(total)
}

function eliminarProdDelCarrito(e) {
    let id = Number(e.target.id.substring(3))
    let carrito = recuperarCarritoDelStorage()
    let indiceProducto = carrito.findIndex(producto => producto.id === id)
    if (indiceProducto !== -1) {
        carrito.splice(indiceProducto, 1)
        e.target.parentElement.remove()
    }

    guardarEnStorage(carrito)
    const total = calcularTotal(carrito)
    actualizarTotal(total)

}

function guardarEnStorage(valor) {
    let valorJson = JSON.stringify(valor)
    localStorage.setItem("carrito", valorJson)
}

function recuperarCarritoDelStorage() {
    return JSON.parse(localStorage.getItem("carrito")) ?? []
}

function lanzarAlerta(title, text, icon, showConfirmButton, timer, position, confirmButtonText) {
    Swal.fire({
        title, // es lo mismo que title: title
        text,
        icon,
        showConfirmButton,
        timer,
        position,
        confirmButtonText,
        timerProgressBar: true,
        showDenyButton: true
    })
}

function lanzarAlertaConPromesa() {
    Swal.fire({
        title: "Está seguro que desea finalizar la compra?",
        icon: "question",
        showDenyButton: true,
        showCancelButton: true
    }).then(resultado => {
        if (resultado.isConfirmed) {
            renderizarCarrito([])
            localStorage.removeItem("carrito")
            lanzarAlerta(
                'Gracias por su compra!!',
                `El pago se efectuó correctamente, en breve le llegará un email a su casilla`,
                "success",
                false,
                5000,
                "top-start"
            )
        }
    })
}
