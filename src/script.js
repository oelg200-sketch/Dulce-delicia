/* ================================================================
   Dulce Delicia — JavaScript (no frameworks, no libraries)
   ================================================================ */

(function () {
  'use strict';

  /* ---------- Product data ---------- */
  var products = [
    {
      id: 1, name: 'Dresa de Fresa', category: 'dresas', price: 3.00, emoji: '🍓', badge: 'Favorita',
      desc: 'Dresa de fresa con crema chantilly, galleta molida y trozos de fruta fresca.',
      image: 'https://images.pexels.com/photos/15071184/pexels-photo-15071184.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
    },
    {
      id: 2, name: 'Dresa de Chocolate', category: 'dresas', price: 3.50, emoji: '🍫',
      desc: 'Dresa de chocolate con crema, chispas y sirope de caramelo.',
      image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
    },
    {
      id: 3, name: 'Dresa Mixta', category: 'dresas', price: 3.75, emoji: '🍰', badge: 'Nueva',
      desc: 'Dresa con fresa, chocolate y vainilla, topped con crema y frutas variadas.',
      image: 'https://images.pexels.com/photos/96431/pexels-photo-96431.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
    },
    {
      id: 4, name: 'Chocobanano Clásico', category: 'chocobananos', price: 1.50, emoji: '🍌', badge: 'Más vendida',
      desc: 'Plátano cubierto de chocolate, maní y chispas de colores.',
      image: 'https://images.pexels.com/photos/47062/bananas-dessert-ice-cream-fruit-47062.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
    },
    {
      id: 5, name: 'Chocobanano Especial', category: 'chocobananos', price: 2.00, emoji: '🍌',
      desc: 'Plátano con chocolate, galleta molida, sirope y toppings variados.',
      image: 'https://images.pexels.com/photos/16560563/pexels-photo-16560563.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
    },
    {
      id: 6, name: 'Chocobanano con Crema', category: 'chocobananos', price: 2.25, emoji: '🍌',
      desc: 'Plátano cubierto de chocolate con crema chantilly y cereza.',
      image: 'https://images.pexels.com/photos/16560511/pexels-photo-16560511.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
    },
    {
      id: 7, name: 'Churros con Chocolate', category: 'churros', price: 2.50, emoji: '🥐', badge: 'Favorita',
      desc: 'Churros crujientes con azúcar y canela, acompañados de chocolate caliente.',
      image: 'https://images.pexels.com/photos/35093310/pexels-photo-35093310.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
    },
    {
      id: 8, name: 'Churros Preparados', category: 'churros', price: 3.00, emoji: '🥐', badge: 'Nueva',
      desc: 'Churros con dulce de leche, crema, fresa y sirope de chocolate.',
      image: 'https://images.pexels.com/photos/12035620/pexels-photo-12035620.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
    },
    {
      id: 9, name: 'Churros con Caramelo', category: 'churros', price: 2.75, emoji: '🥐',
      desc: 'Churros con azúcar, caramelo y dip de chocolate. ¡Irresistibles!',
      image: 'https://images.pexels.com/photos/9501468/pexels-photo-9501468.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
    },
    {
      id: 10, name: 'Paleta de Fresa', category: 'paletas', price: 1.25, emoji: '🧊',
      desc: 'Paleta helada de fresa natural con trozos de fruta. Refrescante y deliciosa.',
      image: 'https://images.pexels.com/photos/8724096/pexels-photo-8724096.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
    },
    {
      id: 11, name: 'Paleta de Chocolate', category: 'paletas', price: 1.50, emoji: '🧊', badge: 'Popular',
      desc: 'Paleta de chocolate cremoso con chispas de chocolate blanco.',
      image: 'https://images.pexels.com/photos/39490935/pexels-photo-39490935.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
    },
    {
      id: 12, name: 'Paleta Mixta', category: 'paletas', price: 1.75, emoji: '🧊',
      desc: 'Paleta con capas de fresa, vainilla y chocolate. ¡Triple sabor!',
      image: 'https://images.pexels.com/photos/38453274/pexels-photo-38453274.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
    },
  ];

  /* ---------- Reviews data ---------- */
  var reviews = [
    { name: 'María G.', initials: 'MG', stars: 5, text: '¡Las dresas con crema son espectaculares! Súper frescas y deliciosas. Pido cada semana.', meta: 'Cliente frecuente' },
    { name: 'Carlos R.', initials: 'CR', stars: 5, text: 'Los chocobananos son los mejores de la zona. Llegan rapidísimo y bien presentados.', meta: 'Cliente verificado' },
    { name: 'Laura M.', initials: 'LM', stars: 5, text: 'Los churros preparados son una locura. El chocolate caliente que viene con ellos es perfecto.', meta: 'Cliente frecuente' },
    { name: 'José P.', initials: 'JP', stars: 5, text: 'Las paletas preparadas son refrescantes y con sabor natural. ¡Mi familia las ama!', meta: 'Cliente nuevo' },
    { name: 'Ana T.', initials: 'AT', stars: 5, text: 'Todo lo que he probado es delicioso. Los ingredientes se notan frescos. ¡Recomendadísimo!', meta: 'Cliente verificado' },
    { name: 'Roberto S.', initials: 'RS', stars: 5, text: 'Servicio rápido, buena atención y los postres están increíbles. Mi favorito: la dresa mixta.', meta: 'Cliente frecuente' },
  ];

  /* ---------- Cart state ---------- */
  var cart = [];

  /* ---------- DOM helpers ---------- */
  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return document.querySelectorAll(sel); }

  /* ---------- Format price as USD ---------- */
  function fmtPrice(val) {
    return '$' + Number(val).toFixed(2);
  }

  /* ---------- Navbar scroll ---------- */
  var navbar = $('#navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }, { passive: true });

  /* ---------- Mobile menu ---------- */
  var menuToggle = $('#menuToggle');
  var navLinks = $('#navLinks');

  menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('open');
    navLinks.classList.toggle('mobile-open');
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menuToggle.classList.remove('open');
      navLinks.classList.remove('mobile-open');
    });
  });

  /* ---------- Hero floating emojis ---------- */
  var heroFloats = $('#heroFloats');
  var floatEmojis = ['🍓', '🍫', '🍌', '🧊', '🥐', '🍰', '🍒', '🍪'];

  floatEmojis.forEach(function (emoji) {
    var el = document.createElement('span');
    el.className = 'float-emoji';
    el.textContent = emoji;
    el.style.left = (5 + Math.random() * 90) + '%';
    el.style.top = (10 + Math.random() * 80) + '%';
    el.style.fontSize = (28 + Math.random() * 24) + 'px';
    el.style.animationDuration = (3 + Math.random() * 3) + 's';
    el.style.animationDelay = (Math.random() * 2) + 's';
    heroFloats.appendChild(el);
  });

  /* ---------- Render products ---------- */
  var productsGrid = $('#productsGrid');

  function renderProducts(category) {
    var filtered = category === 'all'
      ? products
      : products.filter(function (p) { return p.category === category; });

    productsGrid.innerHTML = filtered.map(function (p) {
      var badgeHtml = p.badge
        ? '<span class="product-badge">' + p.badge + '</span>'
        : '';
      return ''
        + '<div class="product-card scroll-reveal" data-id="' + p.id + '">'
        +   '<div class="product-image">'
        +     badgeHtml
        +     '<span class="product-emoji">' + p.emoji + '</span>'
        +     '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy" />'
        +   '</div>'
        +   '<div class="product-body">'
        +     '<h3 class="product-name">' + p.name + '</h3>'
        +     '<p class="product-desc">' + p.desc + '</p>'
        +     '<div class="product-footer">'
        +       '<span class="product-price">' + fmtPrice(p.price) + '</span>'
        +       '<button class="btn-add-cart" data-add="' + p.id + '">'
        +         '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'
        +         'Agregar'
        +       '</button>'
        +     '</div>'
        +   '</div>'
        + '</div>';
    }).join('');

    // Observe new cards
    var newCards = productsGrid.querySelectorAll('.scroll-reveal');
    newCards.forEach(function (card) { observer.observe(card); });

    // Attach add-to-cart listeners
    productsGrid.querySelectorAll('[data-add]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = parseInt(btn.getAttribute('data-add'), 10);
        addToCart(id);
        // Visual feedback
        btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> ¡Agregado!';
        setTimeout(function () {
          btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Agregar';
        }, 1500);
      });
    });
  }

  /* ---------- Category filters ---------- */
  var filterButtons = $$('.filter-btn');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var cat = btn.getAttribute('data-category');
      renderProducts(cat);
    });
  });

  /* ---------- Render reviews ---------- */
  var reviewsGrid = $('#reviewsGrid');

  reviewsGrid.innerHTML = reviews.map(function (r) {
    var stars = '';
    for (var i = 0; i < r.stars; i++) stars += '★';
    return ''
      + '<div class="review-card scroll-reveal">'
      +   '<span class="review-quote">"</span>'
      +   '<div class="review-stars">' + stars + '</div>'
      +   '<p class="review-text">' + r.text + '</p>'
      +   '<div class="review-author">'
      +     '<div class="review-avatar">' + r.initials + '</div>'
      +     '<div>'
      +       '<p class="review-name">' + r.name + '</p>'
      +       '<p class="review-meta">' + r.meta + '</p>'
      +     '</div>'
      +   '</div>'
      + '</div>';
  }).join('');

  /* ---------- Cart logic ---------- */
  var cartFab = $('#cartFab');
  var cartDrawer = $('#cartDrawer');
  var cartOverlay = $('#cartOverlay');
  var cartClose = $('#cartClose');
  var cartBody = $('#cartBody');
  var cartCount = $('#cartCount');
  var cartFooter = $('#cartFooter');
  var cartTotalEl = $('#cartTotal');
  var cartCheckout = $('#cartCheckout');

  function addToCart(id) {
    var product = products.find(function (p) { return p.id === id; });
    if (!product) return;

    var existing = cart.find(function (item) { return item.id === id; });
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 });
    }
    renderCart();
  }

  function removeFromCart(id) {
    cart = cart.filter(function (item) { return item.id !== id; });
    renderCart();
  }

  function changeQty(id, delta) {
    var item = cart.find(function (it) { return it.id === id; });
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(id);
    } else {
      renderCart();
    }
  }

  function renderCart() {
    var totalItems = cart.reduce(function (sum, item) { return sum + item.qty; }, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
      cartBody.innerHTML = '<p class="cart-empty">Tu carrito está vacío.<br>¡Agrega algo delicioso!</p>';
      cartFooter.style.display = 'none';
      return;
    }

    cartBody.innerHTML = cart.map(function (item) {
      return ''
        + '<div class="cart-item" data-id="' + item.id + '">'
        +   '<div class="cart-item-img"><img src="' + item.image + '" alt="' + item.name + '" /></div>'
        +   '<div class="cart-item-info">'
        +     '<p class="cart-item-name">' + item.name + '</p>'
        +     '<p class="cart-item-price">' + fmtPrice(item.price) + '</p>'
        +     '<div class="cart-item-controls">'
        +       '<button class="cart-qty-btn" data-qty-minus="' + item.id + '">−</button>'
        +       '<span class="cart-qty-value">' + item.qty + '</span>'
        +       '<button class="cart-qty-btn" data-qty-plus="' + item.id + '">+</button>'
        +       '<button class="cart-item-remove" data-remove="' + item.id + '" aria-label="Eliminar">'
        +         '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>'
        +       '</button>'
        +     '</div>'
        +   '</div>'
        + '</div>';
    }).join('');

    var total = cart.reduce(function (sum, item) { return sum + (item.price * item.qty); }, 0);
    cartTotalEl.textContent = fmtPrice(total);
    cartFooter.style.display = 'block';

    // Attach listeners
    cartBody.querySelectorAll('[data-qty-minus]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        changeQty(parseInt(btn.getAttribute('data-qty-minus'), 10), -1);
      });
    });
    cartBody.querySelectorAll('[data-qty-plus]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        changeQty(parseInt(btn.getAttribute('data-qty-plus'), 10), 1);
      });
    });
    cartBody.querySelectorAll('[data-remove]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        removeFromCart(parseInt(btn.getAttribute('data-remove'), 10));
      });
    });
  }

  function openCart() {
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
  }
  function closeCart() {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
  }

  cartFab.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  cartCheckout.addEventListener('click', function () {
    closeCart();
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
  });

  /* ---------- Order form ---------- */
  var orderForm = $('#orderForm');
  var formSuccess = $('#formSuccess');

  orderForm.addEventListener('submit', function (e) {
    e.preventDefault();
    orderForm.style.display = 'none';
    formSuccess.classList.add('show');
    setTimeout(function () {
      orderForm.style.display = '';
      formSuccess.classList.remove('show');
      orderForm.reset();
    }, 4000);
  });

  /* ---------- WhatsApp button ---------- */
  var whatsappBtn = $('#whatsappBtn');
  whatsappBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var msg = '¡Hola! Quiero hacer un pedido de postres 🍦';
    if (cart.length > 0) {
      msg += '\n\nMi pedido:\n';
      cart.forEach(function (item) {
        msg += '• ' + item.name + ' x' + item.qty + ' — ' + fmtPrice(item.price * item.qty) + '\n';
      });
      var total = cart.reduce(function (sum, item) { return sum + (item.price * item.qty); }, 0);
      msg += '\nTotal: ' + fmtPrice(total);
    }
    window.open('https://wa.me/50312345678?text=' + encodeURIComponent(msg), '_blank');
  });

  /* ---------- Scroll reveal ---------- */
  var revealSelectors = '.about-images, .about-content, .about-feature, ' +
    '.section-header, .product-card, .review-card, ' +
    '.contact-info, .contact-form-wrap, .contact-card';

  document.querySelectorAll(revealSelectors).forEach(function (el) {
    el.classList.add('scroll-reveal');
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.scroll-reveal').forEach(function (el) {
    observer.observe(el);
  });

  /* ---------- Init ---------- */
  renderProducts('all');
})();
