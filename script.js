// Global variables
let currentLanguage = "fa";
let cart = JSON.parse(localStorage.getItem("niaziCart")) || [];
let products = [];
let currentCategory = "all";

// Product data with both Persian and English
const productData = [
  // Fruits
  {
    id: 1,
    category: "fruits",
    name: { fa: "سیب", en: "Apple" },
    description: { fa: "سیب تازه و شیرین", en: "Fresh and sweet apple" },
    price: 50,
    image: "🍎",
    unit: { fa: "کیلوگرم", en: "kg" },
  },
  {
    id: 2,
    category: "fruits",
    name: { fa: "کیله", en: "Banana" },
    description: { fa: "کیله رسیده و خوشمزه", en: "Ripe and delicious banana" },
    price: 100,
    image: "🍌",
    unit: { fa: "کیلوگرم", en: "kg" },
  },
  {
    id: 3,
    category: "fruits",
    name: { fa: "پرتقال", en: "Orange" },
    description: {
      fa: "پرتقال آبدار و ویتامین C",
      en: "Juicy orange rich in Vitamin C",
    },
    price: 60,
    image: "🍊",
    unit: { fa: "کیلوگرم", en: "kg" },
  },
  {
    id: 4,
    category: "fruits",
    name: { fa: "انگور", en: "Grapes" },
    description: { fa: "انگور شیرین و بی دانه", en: "Sweet seedless grapes" },
    price: 120,
    image: "🍇",
    unit: { fa: "کیلوگرم", en: "kg" },
  },

  // Vegetables
  {
    id: 5,
    category: "vegetables",
    name: { fa: "بادنجان رومی", en: "Tomato" },
    description: { fa: "بادنجان رومی تازه و سرخ", en: "Fresh red tomatoes" },
    price: 20,
    image: "🍅",
    unit: { fa: "کیلوگرم", en: "kg" },
  },
  {
    id: 6,
    category: "vegetables",
    name: { fa: "بادرنگ", en: "Cucumber" },
    description: { fa: "بادرنگ تازه و ترد", en: "Fresh crispy cucumber" },
    price: 15,
    image: "🥒",
    unit: { fa: "کیلوگرم", en: "kg" },
  },
  {
    id: 7,
    category: "vegetables",
    name: { fa: "زردک", en: "Carrot" },
    description: { fa: "زردک تازه و شیرین", en: "Fresh sweet carrots" },
    price: 25,
    image: "🥕",
    unit: { fa: "کیلوگرم", en: "kg" },
  },
  {
    id: 8,
    category: "vegetables",
    name: { fa: "پیاز", en: "Onion" },
    description: { fa: "پیاز زرد درشت", en: "Large yellow onions" },
    price: 15,
    image: "🧅",
    unit: { fa: "کیلوگرم", en: "kg" },
  },

  // Dairy
  {
    id: 9,
    category: "dairy",
    name: { fa: "شیر", en: "Milk" },
    description: { fa: "شیر پاستوریزه کم چرب", en: "Low-fat pasteurized milk" },
    price: 50,
    image: "🥛",
    unit: { fa: "لیتر", en: "liter" },
  },
  {
    id: 10,
    category: "dairy",
    name: { fa: "پنیر سفید", en: "White Cheese" },
    description: {
      fa: "پنیر سفید تازه و خوشمزه",
      en: "Fresh and delicious white cheese",
    },
    price: 350,
    image: "🧀",
    unit: { fa: "کیلوگرم", en: "kg" },
  },
  {
    id: 11,
    category: "dairy",
    name: { fa: "ماست", en: "Yogurt" },
    description: { fa: "ماست پروبیوتیک طبیعی", en: "Natural probiotic yogurt" },
    price: 60,
    image: "🥛",
    unit: { fa: "بسته", en: "pack" },
  },

  // Meat & Fish
  {
    id: 12,
    category: "meat",
    name: { fa: "گوشت گوساله", en: "Beef" },
    description: { fa: "گوشت گوساله تازه و مرغوب", en: "Fresh premium beef" },
    price: 400,
    image: "🥩",
    unit: { fa: "کیلوگرم", en: "kg" },
  },
  {
    id: 13,
    category: "meat",
    name: { fa: "مرغ کامل", en: "Whole Chicken" },
    description: {
      fa: "مرغ کامل تازه و بهداشتی",
      en: "Fresh hygienic whole chicken",
    },
    price: 250,
    image: "🐔",
    unit: { fa: "کیلوگرم", en: "kg" },
  },
  {
    id: 14,
    category: "meat",
    name: { fa: "ماهی", en: "Fish" },
    description: { fa: "ماهی تازه", en: "Fresh fish" },
    price: 300,
    image: "🐟",
    unit: { fa: "کیلوگرم", en: "kg" },
  },

  // Grains
  {
    id: 15,
    category: "grains",
    name: { fa: "برنج", en: "Rice" },
    description: { fa: "برنج درجه یک", en: "Premium rice" },
    price: 330,
    image: "🍚",
    unit: { fa: "کیلوگرم", en: "kg" },
  },
  {
    id: 16,
    category: "grains",
    name: { fa: "نان جواری", en: "Bread" },
    description: { fa: "نان جواری تازه و گرم", en: "Fresh warm bread" },
    price: 20,
    image: "🍞",
    unit: { fa: "عدد", en: "piece" },
  },
  {
    id: 17,
    category: "grains",
    name: { fa: "عدس", en: "Lentils" },
    description: { fa: "عدس سرخ درجه یک", en: "Premium red lentils" },
    price: 100,
    image: "🫘",
    unit: { fa: "کیلوگرم", en: "kg" },
  },

  // Beverages
  {
    id: 18,
    category: "beverages",
    name: { fa: "آب معدنی", en: "Mineral Water" },
    description: { fa: "آب معدنی طبیعی", en: "Natural mineral water" },
    price: 10,
    image: "💧",
    unit: { fa: "بطری", en: "bottle" },
  },
  {
    id: 19,
    category: "beverages",
    name: { fa: "چای سبز و سیاه", en: "Green & Black Tea" },
    description: {
      fa: "چای سبز و سیاه درجه یک",
      en: "Premium green and black tea",
    },
    price: 300,
    image: "🍵",
    unit: { fa: "بسته", en: "pack" },
  },
  {
    id: 20,
    category: "beverages",
    name: { fa: "آب پرتقال", en: "Orange Juice" },
    description: { fa: "آب پرتقال طبیعی", en: "Natural orange juice" },
    price: 20,
    image: "🧃",
    unit: { fa: "بطری", en: "bottle" },
  },

  // Snacks
  {
    id: 21,
    category: "snacks",
    name: { fa: "چیپس", en: "Chips" },
    description: { fa: "چیپس کچالو ترد", en: "Crispy potato chips" },
    price: 30,
    image: "🍟",
    unit: { fa: "بسته", en: "pack" },
  },
  {
    id: 22,
    category: "snacks",
    name: { fa: "شکلات", en: "Chocolate" },
    description: { fa: "شکلات شیری خوشمزه", en: "Delicious milk chocolate" },
    price: 120,
    image: "🍫",
    unit: { fa: "عدد", en: "piece" },
  },
  {
    id: 23,
    category: "snacks",
    name: { fa: "ممپلی", en: "Peanuts" },
    description: { fa: "ممپلی نمکی", en: "Salted peanuts" },
    price: 400,
    image: "🥜",
    unit: { fa: "کیلوگرم", en: "kg" },
  },
  {
    id: 24,
    category: "snacks",
    name: { fa: "بیسکویت", en: "Biscuits" },
    description: { fa: "بیسکویت شیرین و ترد", en: "Sweet crispy biscuits" },
    price: 20,
    image: "🍪",
    unit: { fa: "بسته", en: "pack" },
  },
];

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  products = productData;
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  updateLanguage();
  displayProducts();
  updateCartDisplay();
  updateCartUI();
}

function setupEventListeners() {
  // Language toggle
  document
    .getElementById("langToggle")
    .addEventListener("click", toggleLanguage);

  // Search functionality
  document
    .getElementById("searchInput")
    .addEventListener("input", handleSearch);
  document.querySelector(".search-btn").addEventListener("click", handleSearch);

  // Cart toggle
  document.getElementById("cartToggle").addEventListener("click", toggleCart);
  document.getElementById("closeCart").addEventListener("click", closeCart);
  document.getElementById("cartOverlay").addEventListener("click", closeCart);

  // Category navigation
  document.querySelectorAll("[data-category]").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      filterByCategory(this.dataset.category);
      updateActiveCategory(this);
    });
  });

  // Checkout functionality
  document
    .getElementById("checkoutBtn")
    .addEventListener("click", openCheckout);
  document
    .getElementById("closeCheckout")
    .addEventListener("click", closeCheckout);
  document
    .getElementById("modalOverlay")
    .addEventListener("click", closeCheckout);
  document
    .getElementById("checkoutForm")
    .addEventListener("submit", handleCheckout);
}

function toggleLanguage() {
  currentLanguage = currentLanguage === "fa" ? "en" : "fa";
  updateLanguage();
  displayProducts();
}

function updateLanguage() {
  const html = document.documentElement;
  const langBtn = document.getElementById("langToggle");

  if (currentLanguage === "fa") {
    html.setAttribute("lang", "fa");
    html.setAttribute("dir", "rtl");
  } else {
    html.setAttribute("lang", "en");
    html.setAttribute("dir", "ltr");
  }

  // Update all text elements with data attributes
  document.querySelectorAll("[data-fa][data-en]").forEach((element) => {
    const text = element.getAttribute(`data-${currentLanguage}`);
    if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
      element.placeholder = text;
    } else {
      element.textContent = text;
    }
  });

  // Update page title
  document.title = currentLanguage === "fa" ? "فروشگاه نیازی" : "Niazi Store";
}

function displayProducts(productsToShow = products) {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";

  if (productsToShow.length === 0) {
    grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #7f8c8d;">
                <h3>${
                  currentLanguage === "fa"
                    ? "محصولی یافت نشد"
                    : "No products found"
                }</h3>
            </div>
        `;
    return;
  }

  productsToShow.forEach((product) => {
    const productCard = createProductCard(product);
    grid.appendChild(productCard);
  });
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const name = product.name[currentLanguage];
  const description = product.description[currentLanguage];
  const unit = product.unit[currentLanguage];
  const priceText = currentLanguage === "fa" ? "افغانی" : "Afghani";
  const addToCartText =
    currentLanguage === "fa" ? "افزودن به سبد خرید" : "Add to Cart";

  card.innerHTML = `
        <div class="product-image">${product.image}</div>
        <div class="product-info">
            <h3>${name}</h3>
            <p>${description}</p>
            <div class="product-price">${product.price.toLocaleString()} ${priceText} / ${unit}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${
              product.id
            })">${addToCartText}</button>
        </div>
    `;

  return card;
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      unit: product.unit,
      quantity: 1,
    });
  }

  saveCart();
  updateCartDisplay();
  updateCartUI();

  // Visual feedback
  showAddToCartFeedback();
}

function showAddToCartFeedback() {
  const cartBtn = document.getElementById("cartToggle");
  cartBtn.style.transform = "scale(1.1)";
  setTimeout(() => {
    cartBtn.style.transform = "scale(1)";
  }, 200);
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  updateCartDisplay();
  updateCartUI();
}

function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
    updateCartDisplay();
    updateCartUI();
  }
}

function updateCartDisplay() {
  const cartCount = document.getElementById("cartCount");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  if (totalItems > 0) {
    cartCount.style.display = "block";
  } else {
    cartCount.style.display = "none";
  }
}

function updateCartUI() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const checkoutBtn = document.getElementById("checkoutBtn");

  if (cart.length === 0) {
    cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>${
                  currentLanguage === "fa"
                    ? "سبد خرید شما خالی است"
                    : "Your cart is empty"
                }</p>
            </div>
        `;
    cartTotal.textContent = "0";
    checkoutBtn.disabled = true;
    return;
  }

  checkoutBtn.disabled = false;
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    const cartItem = createCartItem(item);
    cartItems.appendChild(cartItem);
    total += item.price * item.quantity;
  });

  cartTotal.textContent = total.toLocaleString();
}

function createCartItem(item) {
  const div = document.createElement("div");
  div.className = "cart-item";

  const name = item.name[currentLanguage];
  const unit = item.unit[currentLanguage];
  const removeText = currentLanguage === "fa" ? "حذف" : "Remove";

  div.innerHTML = `
        <div class="cart-item-image">${item.image}</div>
        <div class="cart-item-info">
            <h4>${name}</h4>
            <div class="cart-item-price">${item.price.toLocaleString()} / ${unit}</div>
        </div>
        <div class="cart-item-controls">
            <button class="quantity-btn" onclick="updateQuantity(${
              item.id
            }, -1)">-</button>
            <span class="quantity-display">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateQuantity(${
              item.id
            }, 1)">+</button>
            <button class="remove-item" onclick="removeFromCart(${
              item.id
            })">${removeText}</button>
        </div>
    `;

  return div;
}

function toggleCart() {
  const sidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("cartOverlay");

  sidebar.classList.add("open");
  overlay.classList.add("active");
}

function closeCart() {
  const sidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("cartOverlay");

  sidebar.classList.remove("open");
  overlay.classList.remove("active");
}

function handleSearch() {
  const searchTerm = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();

  if (!searchTerm) {
    displayProducts();
    return;
  }

  const filteredProducts = products.filter((product) => {
    const nameFA = product.name.fa.toLowerCase();
    const nameEN = product.name.en.toLowerCase();
    const descFA = product.description.fa.toLowerCase();
    const descEN = product.description.en.toLowerCase();

    return (
      nameFA.includes(searchTerm) ||
      nameEN.includes(searchTerm) ||
      descFA.includes(searchTerm) ||
      descEN.includes(searchTerm)
    );
  });

  displayProducts(filteredProducts);
}

function filterByCategory(category) {
  currentCategory = category;

  if (category === "all") {
    displayProducts();
  } else {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    displayProducts(filteredProducts);
  }
}

function updateActiveCategory(activeLink) {
  document.querySelectorAll("[data-category]").forEach((link) => {
    link.classList.remove("active");
  });
  activeLink.classList.add("active");
}

function openCheckout() {
  if (cart.length === 0) return;

  updateOrderSummary();
  const modal = document.getElementById("checkoutModal");
  const overlay = document.getElementById("modalOverlay");

  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeCheckout() {
  const modal = document.getElementById("checkoutModal");
  const overlay = document.getElementById("modalOverlay");

  modal.classList.remove("active");
  overlay.classList.remove("active");
}

function updateOrderSummary() {
  const orderItems = document.getElementById("orderItems");
  const finalTotal = document.getElementById("finalTotal");

  orderItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const name = item.name[currentLanguage];
    const unit = item.unit[currentLanguage];
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const orderItem = document.createElement("div");
    orderItem.className = "order-item";
    orderItem.innerHTML = `
            <span>${name} × ${item.quantity} ${unit}</span>
            <span>${itemTotal.toLocaleString()}</span>
        `;
    orderItems.appendChild(orderItem);
  });

  finalTotal.textContent = total.toLocaleString();
}

function handleCheckout(e) {
  e.preventDefault();

  const customerName = document.getElementById("customerName").value;
  const customerPhone = document.getElementById("customerPhone").value;
  const customerAddress = document.getElementById("customerAddress").value;

  if (!customerName || !customerPhone || !customerAddress) {
    alert(
      currentLanguage === "fa"
        ? "لطفاً تمام فیلدها را پر کنید"
        : "Please fill all fields"
    );
    return;
  }

  // Create order object
  const order = {
    id: Date.now(),
    customer: {
      name: customerName,
      phone: customerPhone,
      address: customerAddress,
    },
    items: [...cart],
    total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    date: new Date().toISOString(),
    status: "pending",
  };

  // Save order to localStorage (in a real app, this would be sent to a server)
  const orders = JSON.parse(localStorage.getItem("niaziOrders")) || [];
  orders.push(order);
  localStorage.setItem("niaziOrders", JSON.stringify(orders));

  // Clear cart
  cart = [];
  saveCart();
  updateCartDisplay();
  updateCartUI();

  // Show success message
  showOrderSuccess(order);

  // Close modal
  closeCheckout();
  closeCart();

  // Reset form
  document.getElementById("checkoutForm").reset();
}

function showOrderSuccess(order) {
  const successMessage =
    currentLanguage === "fa"
      ? `سفارش شما با موفقیت ثبت شد!\nشماره سفارش: ${
          order.id
        }\nمجموع: ${order.total.toLocaleString()} افغانی`
      : `Your order has been placed successfully!\nOrder ID: ${
          order.id
        }\nTotal: ${order.total.toLocaleString()} Afghani`;

  alert(successMessage);
}

function saveCart() {
  localStorage.setItem("niaziCart", JSON.stringify(cart));
}

// Utility function to format numbers in Persian/English
function formatNumber(num) {
  if (currentLanguage === "fa") {
    return num.toLocaleString("fa-IR");
  }
  return num.toLocaleString("en-US");
}

// Handle keyboard events for better UX
document.addEventListener("keydown", function (e) {
  // Close cart with Escape key
  if (e.key === "Escape") {
    closeCart();
    closeCheckout();
  }

  // Search with Enter key
  if (e.key === "Enter" && e.target.id === "searchInput") {
    handleSearch();
  }
});

// Handle window resize for responsive design
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    const sidebar = document.getElementById("cartSidebar");
    if (sidebar.classList.contains("open")) {
      // Adjust sidebar positioning if needed
    }
  }
});

// Initialize cart from localStorage on page load
window.addEventListener("load", function () {
  const savedCart = localStorage.getItem("niaziCart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartDisplay();
    updateCartUI();
  }
});
