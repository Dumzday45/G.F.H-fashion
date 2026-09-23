// BRAND CONFIGURATION
const WA_NUMBER = "2347063402780";
const BANK_NAME = "UNITED BANK OF AFRICA (UBA)";
const ACCOUNT_NUMBER = "2251713166";
const ACCOUNT_NAME = "SUNDAY GOODNESS NGOZI";

// PRODUCTS DATA (20 Items)
const PRODUCTS = [
  { id: 1, name: "Luxury joggers", price: 15000, category: "men", icon: "", image: "images/6.jpg" },
  { id: 2, name: "Thift jeans", price: 3000, category: "women", icon: "hanger", image: "images/1.jpg" },
  { id: 3, name: "size 44", price: 18000, category: "footwear", icon: "footwear", image: "images/10.jpg" },
  { id: 4, name: "Luxury short joggers", price: 14000, category: "men", icon: "hanger", image: "images/11.jpg" },
  { id: 5, name: "", price: 10000, category: "bottle", icon: "bottle", image: "images/3.jpg" },
  { id: 6, name: "Luxury polo", price: 16000, category: "men", icon: "hanger", image: "images/4.jpg" },
  { id: 7, name: "Luxury sweater", price: 16000, category: "men", icon: "hanger", image: "images/5.jpg" },
  { id: 8, name: "Quality Nig made bag", price: 5000, category: "bags", icon: "bag", image: "images/13.jpg" },
  { id: 9, name: "Luxury polo", price: 13000, category: "men", icon: "hanger", image: "images/12.jpg" },
  { id: 10, name: "Luxury short joggers", price: 13500, category: "men", icon: "hanger", image: "images/7.jpg" },
  { id: 11, name: "Size 41 and 45", price: 5500, category: "footwear", icon: "footwear", image: "images/0.jpg"},
  { id: 12, name: "Thift boyfriend jeans", price: 6000, category: "women", icon: "hanger", image: "images/2.jpg" },
  { id: 13, name: "Luxury quality sundress", price: 7500, category: "women", icon: "hanger", image: "images/8.jpg" },
  { id: 14, name: "Luxury jean joggers", price: 22000, category: "men", icon: "hanger", image: "images/9.jpg" },
  { id: 15, name: "Luxury quality bag", price: 9000, category: "bags", icon: "bag", image: "images/14.jpg" },
  { id: 16, name: "1 Luxury polo", price: 13000, category: "men", icon: "hanger", image: "images/15.jpg" },
  { id: 18, name: "1 Luxury two piece", price: 23000, category: "dresses", icon: "dresses", image: "images/16.jpg" },
  { id: 19, name: "1 Luxury joggers", price: 16000, category: "men", icon: "hanger", image: "images/17.jpg" },
  { id: 20, name: "", price: 10000, category: "men", icon: "hanger", image: "images/18.jpg" },
  { id: 21, name: "1 Corporate male trouser", price: 12000, category: "men", icon: "hanger", image: "images/19.jpg" },
  { id: 22, name: "2 Nig made short", price: 4500, category: "men", icon: "hanger", image: "images/20.jpg" },
  { id: 23, name: "1 Luxury polo", price: 13000, category: "men", icon: "hanger", image: "images/21.jpg" },
  { id: 24, name: "1 Luxury pams size 43small", price: 10000, category: "footwear", icon: "footwear", image: "images/22.jpg" },
  { id: 25, name: "1 Luxury boyfriend jeans", price: 24000, category: "women", icon: "hanger", image: "images/23.jpg" },
  { id: 26, name: "Luxury boots size 44", price: 25000, category: "footwear", icon: "footwear", image: "images/24.jpg" },
  { id: 27, name: "1 Nig made short", price: 6500, category: "men", icon: "hanger", image: "images/25.jpg" },
  { id: 28, name: "1 Nig made joggers", price: 9000, category: "men", icon: "hanger", image: "images/26.jpg" },
  { id: 29, name: "1 Nig made short", price: 4000, category: "men", icon: "hanger", image: "images/27.jpg" },
  { id: 30, name: "1 Luxury male hoodie", price: 12000, category: "men", icon: "hanger", image: "images/28.jpg" },
  { id: 31, name: "1 Luxury crocks size 41", price: 11000, category: "footwear", icon: "footwaer", image: "images/29.jpg" },
  { id: 32, name: "1 Luxury jean joggers", price: 22000, category: "men", icon: "hanger", image: "images/30.jpg" },
  { id: 33, name: "1 Luxury Crocks size 44", price: 11000, category: "footwear", icon: "footwear", image: "images/31.jpg" },
  { id: 34, name: "1 Nig made male two piece ", price: 8500, category: "men", icon: "hanger", image: "images/32.jpg" },
  { id: 35, name: "", price: 7000, category: "women", icon: "hanger", image: "images/33.jpg" },
  { id: 36, name: "", price: 5500, category: "women", icon: "hanger", image: "images/34.jpg" },
  { id: 37, name: "Nig made gown ", price: 4000, category: "women", icon: "hanger", image: "images/35.jpg" },
  { id: 38, name: "Luxury quality gown", price: 7500, category: "women", icon: "hanger", image: "images/36.jpg" },
  { id: 39, name: "Luxury coporate", price: 8000, category: "women", icon: "hanger", image: "images/37.jpg" },
  { id: 40, name: "Luxury gown", price: 8000, category: "women", icon: "hanger", image: "images/38.jpg" },
  { id: 41, name: "Luxury two piece", price: 7500, category: "women", icon: "hanger", image: "images/39.jpg" },
  { id: 42, name: "Nig made backless gown", price: 4500, category: "women", icon: "hanger", image: "images/40.jpg" },
  { id: 43, name: "Nig made gown", price: 4500, category: "women", icon: "hanger", image: "images/41.jpg" },
  { id: 44, name: "Nig made long sundress", price: 8500, category: "women", icon: "hanger", image: "images/42.jpg" },
  { id: 45, name: "Luxury quality gown", price: 8500, category: "women", icon: "hanger", image: "images/43.jpg" },
  { id: 46, name: "Quality Thirf gown", price: 3000, category: "women", icon: "hanger", image: "images/44.jpg" },
  { id: 47, name: "Nig made gown", price: 5500, category: "women", icon: "hanger", image: "images/45.jpg" },
  { id: 48, name: "Luxury quality mesh gown", price: 8500, category: "women", icon: "hanger", image: "images/46.jpg" },
  { id: 49, name: "Luxury quality gown", price: 8500, category: "women", icon: "hanger", image: "images/47.jpg" },
  { id: 50, name: "Quality Thrift jacket size 32", price: 5500, category: "dresses", icon: "dresses", image: "images/48.jpg" },
  { id: 51, name: "Nig made backless", price: 5500, category: "women", icon: "hanger", image: "images/49.jpg" },
  { id: 52, name: "Nig made sundress", price: 7000, category: "women", icon: "hanger", image: "images/50.jpg" },
  { id: 53, name: "Luxury gown", price: 8500, category: "women", icon: "hanger", image: "images/51.jpg" },
  { id: 54, name: "Sundress and bag", price: 15000, category: "women", icon: "hanger", image: "images/52.jpg" },
  { id: 55, name: "Nig made sundress", price: 7000, category: "women", icon: "hanger", image: "images/53.jpg" },
  { id: 56, name: "Quality Thrift cooperate", price: 3000, category: "women", icon: "hanger", image: "images/54.jpg" },
  { id: 57, name: "Size 32", price: 4000, category: "women", icon: "hanger", image: "images/55.jpg" },
  { id: 58, name: "Quality Thrift gown", price: 3000, category: "women", icon: "hanger", image: "images/56.jpg" },
  { id: 59, name: "Nig made sundress", price: 7000, category: "women", icon: "hanger", image: "images/57.jpg" },
  { id: 60, name: "Nig made jumpsuit", price: 5500, category: "women", icon: "hanger", image: "images/58.jpg" },
  { id: 61, name: "Luxury gown", price: 8500, category: "women", icon: "hanger", image: "images/59.jpg" },
  { id: 62, name: "Luxury Quality heels size 39", price: 12000, category: "footwear", icon: "footwear", image: "images/60.jpg" },
  { id: 63, name: "Nig made sundress", price: 7000, category: "women", icon: "hanger", image: "images/61.jpg" },
  { id: 64, name: "Luxury quality heels size 37", price: 12000, category: "footwear", icon: "footwear", image: "images/62.jpg" },
  { id: 65, name: "Quality Thrift", price: 3000, category: "women", icon: "hanger", image: "images/63.jpg" },
  { id: 66, name: "Luxury quality gown", price: 8500, category: "women", icon: "hanger", image: "images/64.jpg" },
  { id: 67, name: "Quality Thrift leggings and crop top combo", price: 5500, category: "women", icon: "hanger", image: "images/65.jpg" },
  { id: 68, name: "Cooperate gown", price: 5000, category: "women", icon: "hanger", image: "images/66.jpg" },
  { id: 69, name: "Quality Thrift cooperate gown", price: 4500, category: "women", icon: "hanger", image: "images/67.jpg" },
  { id: 70, name: "Nig made lounge", price: 6000, category: "women", icon: "hanger", image: "images/68.jpg" },
  { id: 71, name: "Quality Thrift cooperate gown", price: 4500, category: "women", icon: "hanger", image: "images/69.jpg" },
  { id: 72, name: "Quality Thrift cooperate trouser", price: 3000, category: "women", icon: "hanger", image: "images/70.jpg" },
  { id: 73, name: "Quality Thrift cooperate gown", price: 4000, category: "women", icon: "hanger", image: "images/71.jpg" },
  { id: 74, name: "Nig made joggers", price: 5500, category: "women", icon: "hanger", image: "images/72.jpg" },
  { id: 75, name: "Quality Thrift cooperate gown", price: 3500, category: "women", icon: "hanger", image: "images/73.jpg" },
  { id: 76, name: "Quality Thrift cooperate gown", price: 4500, category: "women", icon: "hanger", image: "images/74.jpg" },
  { id: 77, name: "Leather pant", price: 6500, category: "women", icon: "hanger", image: "images/75.jpg" },
  { id: 78, name: "Nig made pants", price: 3500, category: "women", icon: "hanger", image: "images/76.jpg" },
  { id: 79, name: "Luxury gown", price: 8500, category: "women", icon: "hanger", image: "images/77.jpg" },
];

// SVG ICONS MAP
const SVG_ICONS = {
  hanger: `<svg class="product-svg-icon" viewBox="0 0 24 24"><path d="M12 4.5C10.62 4.5 9.5 5.62 9.5 7C9.5 7.82 9.9 8.55 10.5 9H4L1.5 15.5C1.19 16.31 1.78 17.2 2.65 17.2H21.35C22.22 17.2 22.81 16.31 22.5 15.5L20 9H13.5C14.1 8.55 14.5 7.82 14.5 7C14.5 5.62 13.38 4.5 12 4.5ZM12 6.5C12.28 6.5 12.5 6.72 12.5 7C12.5 7.28 12.28 7.5 12 7.5C11.72 7.5 11.5 7.28 11.5 7C11.5 6.72 11.72 6.5 12 6.5ZM3.8 15.2L5.5 10.8H18.5L20.2 15.2H3.8Z"/></svg>`,
  shoe: `<svg class="product-svg-icon" viewBox="0 0 24 24"><path d="M21.5 14.5C20.5 14.5 18 13 16 11L12.5 7.5C12.1 7.1 11.5 7 11 7.2L3.5 10C2.6 10.3 2 11.2 2 12.1V16.5C2 17.3 2.7 18 3.5 18H20.5C21.3 18 22 17.3 22 16.5V15C22 14.7 21.8 14.5 21.5 14.5ZM4 16.2V12.3L10.2 10L13.5 13.3C15.8 15.6 18.8 16.2 20 16.2H4Z"/></svg>`,
  bag: `<svg class="product-svg-icon" viewBox="0 0 24 24"><path d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"/></svg>`
};

// STATE MANAGEMENT
let cart = JSON.parse(localStorage.getItem('gfh_cart')) || [];
let activeCategory = 'all';

// DOM ELEMENTS
const relocationBanner = document.getElementById('relocation-banner');
const closeBannerBtn = document.getElementById('close-banner');
const mainHeader = document.getElementById('main-header');
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const cartBtn = document.getElementById('cart-btn');
const cartBadge = document.getElementById('cart-badge');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalAmount = document.getElementById('cart-total-amount');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutOverlay = document.getElementById('checkout-overlay');
const closeCheckoutBtn = document.getElementById('close-checkout-btn');
const checkoutSummary = document.getElementById('checkout-summary');
const copyAccBtn = document.getElementById('copy-acc-btn');
const waSubmitBtn = document.getElementById('wa-submit-btn');
const waInquiryBtn = document.getElementById('whatsapp-inquiry-btn');
const productGrid = document.getElementById('product-grid');
const newInContainer = document.getElementById('new-in-container');
const scrollProgress = document.getElementById('scroll-progress');
const custNameInput = document.getElementById('cust-name');
const custPhoneInput = document.getElementById('cust-phone');

// INIT APPLICATION
document.addEventListener('DOMContentLoaded', () => {
  checkBannerStatus();
  renderProducts();
  renderNewIn();
  updateCartUI();
  setupEventListeners();
  setupObserver();
  populateBankDetails();
});

// BANNER MANAGEMENT
function checkBannerStatus() {
  if (localStorage.getItem('gfh_banner_dismissed') === 'true') {
    relocationBanner.style.display = 'none';
  }
}

// FORMAT CURRENCY
function formatNGN(amount) {
  return '₦' + amount.toLocaleString('en-NG');
}

// RENDER PRODUCTS
function createProductCardHTML(product) {
  let mediaHTML = '';

  if (product.image) {
    // Generate a low-res image name if available, or use the standard image
    mediaHTML = `
      <img 
        src="${product.image}" 
        alt="${product.name}" 
        class="product-img lazy-img" 
        loading="lazy" 
        decoding="async"
        onload="this.classList.add('loaded')"
        onerror="this.onerror=null; this.parentElement.innerHTML='${(SVG_ICONS[product.icon] || SVG_ICONS.hanger).replace(/'/g, "\\'")}';"
      >
    `;
  } else {
    mediaHTML = SVG_ICONS[product.icon] || SVG_ICONS.hanger;
  }

  return `
    <article class="product-card" data-category="${product.category}">
      <div class="product-image-container">
        ${mediaHTML}
        <div class="product-card-overlay">
          <span class="overlay-price">${formatNGN(product.price)}</span>
          <button class="btn btn-primary add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
        </div>
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <span class="product-static-price">${formatNGN(product.price)}</span>
      </div>
    </article>
  `;
}

function renderProducts() {
  const filtered = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory || (activeCategory === 'women' && p.category === 'dresses'));

  productGrid.innerHTML = filtered.map(createProductCardHTML).join('');
}

function renderNewIn() {
  const newArrivals = PRODUCTS.slice(0, 5);
  newInContainer.innerHTML = newArrivals.map(createProductCardHTML).join('');
}

// CART MANAGEMENT
function saveCart() {
  localStorage.setItem('gfh_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  openCart();
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
}

function calculateTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function calculateTotalCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartUI() {
  const totalCount = calculateTotalCount();
  cartBadge.textContent = `(${totalCount})`;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p style="text-align: center; color: var(--text-muted); margin-top: 2rem;">Your cart is currently empty.</p>`;
    cartTotalAmount.textContent = formatNGN(0);
    checkoutBtn.disabled = true;
    checkoutBtn.style.opacity = '0.5';
    return;
  }

  checkoutBtn.disabled = false;
  checkoutBtn.style.opacity = '1';

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">${formatNGN(item.price)} × ${item.quantity}</div>
      </div>
      <div class="cart-qty-controls">
        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
        <span class="cart-item-qty">${item.quantity}</span>
        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
      </div>
      <button class="remove-item-btn" onclick="removeFromCart(${item.id})">✕</button>
    </div>
  `).join('');

  cartTotalAmount.textContent = formatNGN(calculateTotal());
}

// OVERLAYS CONTROL
function openCart() {
  cartOverlay.classList.add('active');
}

function closeCart() {
  cartOverlay.classList.remove('active');
}

function openCheckout() {
  if (cart.length === 0) return;
  closeCart();
  renderCheckoutSummary();
  checkoutOverlay.classList.add('active');
}

function closeCheckout() {
  checkoutOverlay.classList.remove('active');
}

// BANK & CHECKOUT DETAILS
function populateBankDetails() {
  document.getElementById('display-bank-name').textContent = BANK_NAME;
  document.getElementById('display-account-name').textContent = ACCOUNT_NAME;
  document.getElementById('display-account-number').textContent = ACCOUNT_NUMBER;

  waInquiryBtn.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi, I'd like to see your collection.")}`;
}

function renderCheckoutSummary() {
  const total = calculateTotal();
  const itemsHTML = cart.map(item => `
    <div class="summary-line">
      <span>${item.name} (x${item.quantity})</span>
      <span>${formatNGN(item.price * item.quantity)}</span>
    </div>
  `).join('');

  checkoutSummary.innerHTML = `
    ${itemsHTML}
    <div class="summary-line summary-total">
      <span>Total Amount Due</span>
      <span>${formatNGN(total)}</span>
    </div>
  `;
}

// EVENT LISTENERS
function setupEventListeners() {
  // Banner Dismiss
  closeBannerBtn.addEventListener('click', () => {
    relocationBanner.style.display = 'none';
    localStorage.setItem('gfh_banner_dismissed', 'true');
  });

  // Mobile Menu Toggle
  hamburgerBtn.addEventListener('click', () => {
    const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('mobile-active');
  });

  // Close mobile nav on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('mobile-active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });

  

  // Cart Open/Close
  cartBtn.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) closeCart();
  });

  // Checkout Open/Close
  checkoutBtn.addEventListener('click', openCheckout);
  closeCheckoutBtn.addEventListener('click', closeCheckout);
  checkoutOverlay.addEventListener('click', (e) => {
    if (e.target === checkoutOverlay) closeCheckout();
  });

  // Global Keydown for Accessibility (Escape Key)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeCheckout();
      navMenu.classList.remove('mobile-active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Delegated Add-to-Cart Listener
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
      const id = parseInt(e.target.getAttribute('data-id'), 10);
      addToCart(id);
    }
  });

  // Category Filter Pills Listener
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      renderProducts();
    });
  });

  // Copy Account Number
  copyAccBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(ACCOUNT_NUMBER).then(() => {
      const originalText = copyAccBtn.textContent;
      copyAccBtn.textContent = 'Copied!';
      copyAccBtn.style.background = 'var(--gold-accent)';
      copyAccBtn.style.color = '#0d0d0d';
      setTimeout(() => {
        copyAccBtn.textContent = originalText;
        copyAccBtn.style.background = '';
        copyAccBtn.style.color = '';
      }, 2000);
    });
  });

  // WhatsApp Order Submission
  waSubmitBtn.addEventListener('click', () => {
    if (cart.length === 0) return;

    let message = "Hello GFH Fashion, I have completed a bank transfer for my order:\n\n";
    cart.forEach(item => {
      message += `• ${item.name} (Qty: ${item.quantity}) - ${formatNGN(item.price * item.quantity)}\n`;
    });
    message += `\nTotal Paid: ${formatNGN(calculateTotal())}\n`;
    message += `Bank Paid To: ${BANK_NAME}\n\n`;
    message += "Attached is my proof of payment.";

    const waURL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waURL, '_blank');
  });

  // Scroll Behavior Header Shadow & Progress Bar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }

    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + "%";
  });

  // Mobile Tap for Overlay Toggle on Product Cards
  document.addEventListener('touchstart', (e) => {
    const card = e.target.closest('.product-card');
    document.querySelectorAll('.product-card-overlay').forEach(ov => ov.classList.remove('mobile-visible'));
    if (card) {
      const overlay = card.querySelector('.product-card-overlay');
      if (overlay) overlay.classList.add('mobile-visible');
    }
  }, { passive: true });
}

// INTERSECTION OBSERVER FOR ANIMATIONS
function setupObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}