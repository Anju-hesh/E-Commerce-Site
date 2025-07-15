// Product data (ඔයාගේ JSON)
const products = [
  {
    "id": 1,
    "name": "Trintec Zulu-07 Aviation Chronograph",
    "price": 520,
    "image": "/Assets/images/watches/1.webp"
  },
  {
    "id": 2,
    "name": "Trintec Altimeter 9065 Tactical Edition",
    "price": 220,
    "image": "/Assets/images/watches/2.webp"
  },
  {
    "id": 3,
    "name": "Trintec Heading Indicator Compass Watch",
    "price": 250,
    "image": "/Assets/images/watches/3.webp"
  },
  {
    "id": 4,
    "name": "Product 4",
    "price": 420,
    "image": "/Assets/images/watches/4.webp"
  },
  {
    "id": 5,
    "name": "Product 5",
    "price": 140,
    "image": "/Assets/images/watches/5.webp"
  },
  {
    "id": 6,
    "name": "Product 6",
    "price": 100,
    "image": "/Assets/images/watches/6.webp"
  },
  {
    "id": 7,
    "name": "Product 7",
    "price": 220,
    "image": "/Assets/images/watches/7.png"
  },
  {
    "id": 8,
    "name": "Product 8",
    "price": 250,
    "image": "/Assets/images/watches/8.png"
  },
  {
    "id": 9,
    "name": "Product 9",
    "price": 280,
    "image": "/Assets/images/watches/9.png"
  },
  {
    "id": 10,
    "name": "Product 10",
    "price": 180,
    "image": "/Assets/images/watches/10.png"
  },
  {
    "id": 11,
    "name": "Product 11",
    "price": 150,
    "image": "/Assets/images/watches/11.png"
  },
  {
    "id": 12,
    "name": "Product 12",
    "price": 130,
    "image": "/Assets/images/watches/12.png"
  },
  {
    "id": 13,
    "name": "Product 13",
    "price": 80,
    "image": "/Assets/images/watches/13.png"
  },
  {
    "id": 14,
    "name": "Product 14",
    "price": 95,
    "image": "/Assets/images/watches/14.png"
  },
  {
    "id": 15,
    "name": "Product 15",
    "price": 105,
    "image": "/Assets/images/watches/15.png"
  },
  {
    "id": 16,
    "name": "Product 16",
    "price": 115,
    "image": "/Assets/images/watches/16.png"
  },
  {
    "id": 17,
    "name": "Product 17",
    "price": 125,
    "image": "/Assets/images/watches/17.png"
  },
  {
    "id": 18,
    "name": "Product 18",
    "price": 107,
    "image": "/Assets/images/watches/18.png"
  },
  {
    "id": 19,
    "name": "Product 19",
    "price": 255,
    "image": "/Assets/images/watches/19.png"
  },
  {
    "id": 20,
    "name": "Product 20",
    "price": 177,
    "image": "/Assets/images/watches/20.png"
  },
  {
    "id": 21,
    "name": "Product 21",
    "price": 285,
    "image": "/Assets/images/watches/21.png"
  },
  {
    "id": 22,
    "name": "Product 22",
    "price": 85,
    "image": "/Assets/images/watches/22.png"
  },
  {
    "id": 23,
    "name": "Product 23",
    "price": 96,
    "image": "/Assets/images/watches/23.png"
  },
  {
    "id": 24,
    "name": "Product 24",
    "price": 99,
    "image": "/Assets/images/watches/24.png"
  }
];

// Cart array
let cart = [];

// Display all products on page
function displayProducts() {
  const listProduct = document.querySelector('.listProduct');
  listProduct.innerHTML = ''; // clear existing

  products.forEach(product => {
    const productEl = document.createElement('div');
    productEl.classList.add('item');
    productEl.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <div class="price">$${product.price}</div>
      <button onclick="addToCart(${product.id})">Add To Cart</button>
    `;
    listProduct.appendChild(productEl);
  });
}

// Add product to cart or increase quantity if already added
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const cartItem = cart.find(item => item.id === productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({...product, quantity: 1});
  }

  updateCartUI();
  showCart(); // Automatically open cart when adding
}

// Update cart UI display
function updateCartUI() {
  const listCart = document.querySelector('.listCart');
  const totalQuantity = document.querySelector('.totalQuantity');
  listCart.innerHTML = '';

  let totalCount = 0;

  cart.forEach(item => {
    totalCount += item.quantity;
    const itemEl = document.createElement('div');
    itemEl.classList.add('item');
    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="content">
        <div class="name">${item.name}</div>
        <div class="price">$${item.price} / ${item.quantity} product(s)</div>
      </div>
      <div class="quantity">
        <button onclick="changeQty(${item.id}, -1)">-</button>
        <span class="value">${item.quantity}</span>
        <button onclick="changeQty(${item.id}, 1)">+</button>
      </div>
    `;
    listCart.appendChild(itemEl);
  });

  totalQuantity.textContent = totalCount;
}

// Change quantity in cart (increase or decrease)
function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += delta;

  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== id);
  }

  updateCartUI();
}

// Show or hide cart overlay
function toggleCart() {
  const cartOverlay = document.getElementById('cartOverlay');
  cartOverlay.classList.toggle('active');
}

// Just open cart (used after adding product)
function showCart() {
  const cartOverlay = document.getElementById('cartOverlay');
  cartOverlay.classList.add('active');
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  displayProducts();
  updateCartUI();
});
