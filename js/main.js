// ================================
// HOLI TALLER DE ARTE - MAIN JS
// ================================

console.log("Sitio cargado correctamente");

// ================================
// CARRITO
// ================================

let carrito = [];

const botonesAgregar = document.querySelectorAll(".btn-agregar");
const btnVaciar = document.getElementById("vaciar-carrito");
const contadorCarrito = document.getElementById("contador-carrito");
const listaCarrito = document.getElementById("lista-carrito");

if (botonesAgregar.length > 0) {

  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", () => {

      const producto = {
        id: boton.dataset.id,
        nombre: boton.dataset.nombre,
        precio: Number(boton.dataset.precio),
        cantidad: 1
      };

      agregarAlCarrito(producto);
    });
  });

  if (btnVaciar) {
    btnVaciar.addEventListener("click", vaciarCarrito);
  }
}

function agregarAlCarrito(producto) {

  const productoExistente = carrito.find(
    (item) => item.id === producto.id
  );

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push(producto);
  }

  actualizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

function actualizarCarrito() {

  if (!contadorCarrito || !listaCarrito) return;

  // contador total (sumando cantidades)
  const total = carrito.reduce(
    (acc, item) => acc + item.cantidad,
    0
  );

  contadorCarrito.textContent = total;

  // limpiar lista
  listaCarrito.innerHTML = "";

  // renderizar
  carrito.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}`;
    listaCarrito.appendChild(li);
  });
}

// ================================
// FORMULARIO CONTACTO
// ================================

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contactForm");
  if (!form) return;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const successMessage = document.getElementById("formSuccess");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;
    clearErrors();

    if (name.value.trim() === "") {
      showError(name, "El nombre es obligatorio.");
      valid = false;
    }

    if (!email.value.includes("@")) {
      showError(email, "El email no es válido.");
      valid = false;
    }

    if (message.value.trim().length < 10) {
      showError(message, "El mensaje debe tener al menos 10 caracteres.");
      valid = false;
    }

    if (valid) {
      successMessage.hidden = false;
      form.reset();
    }
  });

  function showError(input, msg) {
    const error = input.nextElementSibling;
    if (error) error.textContent = msg;
  }

  function clearErrors() {
    document.querySelectorAll(".error-message")
      .forEach(e => e.textContent = "");

    if (successMessage) successMessage.hidden = true;
  }

});