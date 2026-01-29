// ESTADO EN MEMORIA
let carrito = [];

// ELEMENTOS DEL DOM
const botonesAgregar = document.querySelectorAll(".btn-agregar");
const btnVaciar = document.getElementById("vaciar-carrito");
const contadorCarrito = document.getElementById("contador-carrito");
const listaCarrito = document.getElementById("lista-carrito");


botonesAgregar.forEach((boton) => {
  boton.addEventListener("click", () => {
    const producto = {
      id: boton.dataset.id,
      nombre: boton.dataset.nombre,
      precio: Number(boton.dataset.precio),
      cantidad: 1
    };
btnVaciar.addEventListener("click", () => {
  vaciarCarrito();
});
function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
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
function actualizarCarrito() {
  // CONTADOR
  const totalProductos = carrito.reduce(
    (acc, item) => acc + item.cantidad,
    0
  );
  contadorCarrito.textContent = totalProductos;

  // LISTA
  listaCarrito.innerHTML = "";

  carrito.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}`;
    listaCarrito.appendChild(li);
  });
}

    agregarAlCarrito(producto);
  });
});


function actualizarCarrito() {
  // contador
  contadorCarrito.textContent = carrito.length;

  // limpiar lista
  listaCarrito.innerHTML = "";

  // renderizar productos
  carrito.forEach(producto => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    listaCarrito.appendChild(li);

    botonVaciar.addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();

  contadorCarrito.classList.add("animar");

setTimeout(() => {
  contadorCarrito.classList.remove("animar");
}, 300);

});

  });
}

console.log('Holi Taller de Arte - Sitio cargado');

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    if (!form) return; // evita errores en otras paginas

    const name = document.getElementByld('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const successMessage = document.getElementById('formSuccess');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;

        clearErrors();

        if (name.value.trim() === '') {
            showError(name, 'El nombre es obligatorio.');
            valid = false;
        }

        if (!email.value.inludes('@')) {
            showError(email, 'El email no es válido.');
            valid = false;
        }

        if (message.value.trim() === '') {
            showError(message, 'El mensaje debe tener al menos 10 caracteres.');
            valid = false;
        }

        if (valid) {
            successMessage.hidden = false;
            form.reset();
        }
    });

    function showError(input, message) {
        const error = input.nextElementSibling;
        error.textContent = message;
    }

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(e => e.textContent = "");
    successMsg.hidden = true;
  }
});

const productList = document.getElementById('productList');

if (productList) {
    const products = [
        {
            name: "Platos XL",
            price: "$25.000",
            descripcion:"Hecho a mano en torno, realizado en gres y esmaltado en tonos pasteles"
        },
        
        {
            name: "Ensaladera XXL",
            price: "$45.000",
            descripcion:"Pintada a mano estilo minimalista"
        },
        {
            name: "Casuelas",
            price: "$25.000",
            descripcion:"Realizadas en gres, esmaltada en verde musgo"
        }
    ];

    products.forEach(product => {
        const card = document.createElement("article");
        card.classList.add("product-card");

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.descripcion}</p>
            <span>${product.price}</span>
        `;

        productList.appendChild(card);
        });
}

const workshopList = document.getElementById('workshopList');

if (workshopList) {
    const workshops = [
        {
            title: "Taller de Ceramica Roja",
            day: "Sábados",
            level: "Principiantes"
        },
        {
            title: "Taller de Torno",
            day: "Domingos",
            level: "Intermedios"
        }
    ];

    workshops.forEach(w => {
    const item = document.createElement("div");
    item.classList.add("workshop-item");

    item.innerHTML = `
      <h3>${w.title}</h3>
      <p>Día: ${w.day}</p>
      <p>Nivel: ${w.level}</p>
    `;

    workshopList.appendChild(item);
  });
}

const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  if (link.getAttribute("href").includes(currentPage)) {
    link.classList.add("active");
  }
});

console.log(botonesAgregar);

botonesAgregar.forEach(boton => {
  boton.addEventListener("click", () => {
    const producto = {
      id: boton.dataset.id,
      nombre: boton.dataset.nombre,
      precio: Number(boton.dataset.precio)
    };

    carrito.push(producto);
    console.log(carrito);
    actualizarCarrito();
  });
});

const existe = carrito.find(item => item.id === producto.id);

if (!existe) {
  carrito.push(producto);
} else {
  console.log("Ya está en el carrito");
}

const formContacto = document.querySelector(".form-contacto");

if (formContacto) {
  formContacto.addEventListener("submit", (e) => {
    e.preventDefault();

    const mensaje = document.createElement("p");
    mensaje.textContent = "✨ Mensaje enviado correctamente. Gracias por escribirnos 💌";
    mensaje.classList.add("mensaje-exito");

    formContacto.reset();
    formContacto.appendChild(mensaje);

    setTimeout(() => {
      mensaje.remove();
    }, 4000);
  });
}
