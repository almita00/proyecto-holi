// JavaScript básico
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
