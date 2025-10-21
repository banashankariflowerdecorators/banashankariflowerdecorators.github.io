// Product data structure
const products = [
  // =================================================================
  // Wedding Stage Decorations
  // =================================================================
  {
    id: 1,
    title: "Stage Decoration 01",
    price: "₹55,000",
    description: "An elegant arch of white roses and soft draping, perfect for a classic wedding.",
    category: "Wedding, Stage",
    moreInfo: "This package includes a full floral arch, backdrop curtains, and stage-front arrangements. Ideal for creating a timeless and romantic atmosphere.",
    images: ["images/stage/stage-decoration-01.jpeg"]
  },
  {
    id: 2,
    title: "Stage Decoration 02",
    price: "₹40,000",
    description: "A vibrant mix of marigolds and red roses for a traditional Haldi look.",
    category: "Wedding, Stage",
    moreInfo: "Features a dense floral backdrop with traditional color palettes, perfect for Haldi ceremonies and classic weddings.",
    images: ["images/stage/stage-decoration-02.jpeg"]
  },
  {
    id: 3,
    title: "Stage Decoration 03",
    price: "₹35,000",
    description: "A grand and luxurious setup with chandeliers and premium white florals.",
    category: "Wedding, Stage",
    moreInfo: "Our most premium package, featuring crystal chandeliers, lush white flower arrangements, and a mirrored stage floor for a breathtaking effect.",
    images: ["images/stage/stage-decoration-03.jpeg"]
  },
  {
    id: 4,
    title: "Stage Decoration 04",
    price: "₹50,000",
    description: "A modern and chic design with geometric frames and pampas grass.",
    category: "Wedding, Stage",
    moreInfo: "Perfect for the modern couple, this design uses gold geometric arches, pampas grass, and subtle floral accents for a minimalist yet stunning look.",
    images: ["images/stage/stage-decoration-04.jpeg"]
  },
  {
    id: 5,
    title: "Stage Decoration 05",
    price: "₹60,000",
    description: "A fairytale theme with pastel flowers, perfect for birthdays or naming ceremonies.",
    category: "Wedding, Stage",
    moreInfo: "Create a magical atmosphere with a backdrop of pastel-colored flowers, fairy lights, and elegant, flowing drapes for any celebration.",
    images: ["images/stage/stage-decoration-05.jpeg"]
  },
  {
    id: 6,
    title: "Stage Decoration 06",
    price: "₹45,000",
    description: "A rustic and earthy design featuring wood elements and wildflowers.",
    category: "Wedding, Stage",
    moreInfo: "For a bohemian or rustic-themed wedding, this design incorporates a wooden backdrop, wildflowers, and green foliage.",
    images: ["images/stage/stage-decoration-06.jpeg"]
  },
  {
    id: 7,
    title: "Stage Decoration 07",
    price: "₹40,000",
    description: "A royal theme with deep reds, golds, and intricate floral patterns.",
    category: "Wedding, Stage",
    moreInfo: "Feel like royalty with this opulent design, featuring rich red and gold fabrics, intricate floral work, and traditional motifs.",
    images: ["images/stage/stage-decoration-07.jpeg"]
  },
  {
    id: 8,
    title: "Stage Decoration 08",
    price: "₹45,000",
    description: "A simple, beautiful design with a focus on lighting, ideal for naming ceremonies.",
    category: "Wedding, Stage",
    moreInfo: "This elegant design uses accent lighting and high-quality drapes with focused floral pieces to create a sophisticated look for your function.",
    images: ["images/stage/stage-decoration-08.jpeg"]
  },
    {
    id: 9,
    title: "Stage Decoration 09",
    price: "₹35,000",
    description: "A lush green backdrop creating a 'secret garden' feel.",
    category: "Wedding, Stage",
    moreInfo: "A full green foliage wall, accented with white or pastel flowers, to bring the beauty of a garden indoors.",
    images: ["images/stage/stage-decoration-09.jpeg"]
  },
  {
    id: 10,
    title: "Stage Decoration 10",
    price: "₹45,000",
    description: "Symmetrical floral pillars with a clean, white backdrop.",
    category: "Wedding, Stage",
    moreInfo: "This design features two prominent floral pillars framing the central seating area, offering a balanced and photogenic setup.",
    images: ["images/stage/stage-decoration-10.jpeg"]
  },
  {
    id: 11,
    title: "Stage Decoration 11",
    price: "₹45,000",
    description: "A stunning floral canopy over the main stage area.",
    category: "Wedding, Stage",
    moreInfo: "A ceiling of flowers and hanging floral elements creates an immersive and unforgettable canopy for your main event.",
    images: ["images/stage/stage-decoration-11.jpeg"]
  },
  {
    id: 12,
    title: "Stage Decoration 12",
    price: "₹450500",
    description: "A bright and cheerful theme perfect for daytime functions.",
    category: "Wedding, Stage",
    moreInfo: "Utilizes bright yellow and white flowers with light-colored drapes to create a fresh and airy atmosphere.",
    images: ["images/stage/stage-decoration-12.jpeg"]
  },
  {
    id: 13,
    title: "Stage Decoration 13",
    price: "₹50,000",
    description: "An Ombre floral wall transitioning from light to dark shades.",
    category: "Wedding, Stage",
    moreInfo: "A visually stunning backdrop made of flowers arranged in a gradient pattern, creating a unique and artistic photo opportunity.",
    images: ["images/stage/stage-decoration-13.jpeg"]
  },
  {
    id: 14,
    title: "Stage Decoration 14",
    price: "₹35,000",
    description: "A minimalist design with a single, statement floral piece.",
    category: "Wedding, Stage",
    moreInfo: "Focuses on a single, large, and intricate floral arrangement against a simple backdrop, perfect for a sophisticated event.",
    images: ["images/stage/stage-decoration-14.jpeg"]
  },
  {
    id: 16,
    title: "Stage Decoration 15",
    price: "₹40,000",
    description: "A minimalist design with a single, statement floral piece.",
    category: "Wedding, Stage",
    moreInfo: "Focuses on a single, large, and intricate floral arrangement against a simple backdrop, perfect for a sophisticated event.",
    images: ["images/stage/stage-decoration-15.jpeg"]
  },

  // =================================================================
  // Wedding Mandap Decorations
  // =================================================================
  {
    id: 17,
    title: "Traditional Mandap 01",
    price: "₹40,000",
    description: "A classic mandap adorned with fresh flowers and traditional pillars.",
    category: "Wedding, Mandap",
    moreInfo: "This beautiful mandap setup is perfect for wedding ceremonies, featuring intricate floral work and a divine atmosphere.",
    images: ["images/mandapam/mandapam-decoration-01.jpg"]
  },
  {
    id: 18,
    title: "Colorful Mandap 02",
    price: "₹50,000",
    description: "A contemporary mandap design with elegant draping and minimalist florals.",
    category: "Wedding, Mandap",
    moreInfo: "A chic and sophisticated mantapam for the modern couple, combining fabric and flowers for a stunning look.",
    images: ["images/mandapam/mandapam-decoration-02.webp"]
  },
  {
    id: 19,
    title: "Sacred Mandap 03",
    price: "₹50,000",
    description: "A divine and traditional mandap setup for sacred wedding rituals.",
    category: "Wedding, Mandap",
    moreInfo: "This setup features rich floral garlands, traditional banana leaves, and a sacred space for wedding rituals, creating a truly blessed atmosphere.",
    images: ["images/mandapam/mandapam-decoration-03.jpg"]
  },

  // =================================================================
  // Wedding Entrance Decorations
  // =================================================================
  {
    id: 20,
    title: "Grand Entrance Arch 01",
    price: "₹10,000",
    description: "A lush and welcoming floral arch to greet your guests.",
    category: "Wedding, Entrance",
    moreInfo: "Make a grand first impression with this beautiful entrance arch, customizable with your choice of flowers and colors.",
    images: ["images/maindoor-entrance/entrance-decoration-01.jpeg"]
  },
  {
    id: 21,
    title: "Elegant Doorway Decor 02",
    price: "₹9,000",
    description: "Traditional floral garlands framing the main entrance for a classic welcome.",
    category: "Wedding, Entrance",
    moreInfo: "Adorn your main doorway with traditional flower arrangements, perfect for creating a festive and welcoming atmosphere.",
    images: ["images/maindoor-entrance/entrance-decoration-02.jpeg"]
  },
  {
    id: 22,
    title: "Festive Entrance Decor 03",
    price: "₹12,000",
    description: "A vibrant and festive entrance setup with colorful flowers and drapes.",
    category: "Wedding, Entrance",
    moreInfo: "Create a joyful welcome for your guests with this bright and colorful entrance decoration, perfect for weddings and Haldi functions.",
    images: ["images/maindoor-entrance/entrance-decoration-03.jpeg"]
  },
  {
    id: 23,
    title: "Modern Entrance Arch 04",
    price: "₹8,000",
    description: "A chic and modern archway with minimalist florals and elegant lighting.",
    category: "Wedding, Entrance",
    moreInfo: "This contemporary design features a sleek arch with carefully placed floral accents and lighting, ideal for a sophisticated event.",
    images: ["images/maindoor-entrance/entrance-decoration-04.jpeg"]
  },

  // =================================================================
  // Wedding Nameboards Decorations 
  // =================================================================
  {
    id: 24,
    title: "Custom Floral Nameboard 01",
    price: "₹28,000",
    description: "A personalized nameboard decorated with beautiful fresh flowers.",
    category: "Wedding, Nameboard",
    moreInfo: "A perfect photo opportunity and a beautiful way to welcome guests, customized with the names for the special day.",
    images: ["images/nameboard/nameboard-decoration-01.jpeg"]
  },
  {
    id: 25,
    title: "Elegant Nameboard 02",
    price: "₹35,000",
    description: "A chic nameboard with modern calligraphy and floral accents for weddings.",
    category: "Wedding, Nameboard",
    moreInfo: "Perfect for engagements and weddings, this design features stylish lettering surrounded by a delicate floral arrangement.",
    images: ["images/nameboard/nameboard-decoration-02.jpeg"]
  },
  {
    id: 26,
    title: "Traditional Nameboard 03",
    price: "₹30,000",
    description: "A classic design featuring marigolds and traditional flowers.",
    category: "Wedding, Nameboard",
    moreInfo: "This nameboard uses traditional flowers and colors, making it a perfect addition to Haldi ceremonies and classic weddings.",
    images: ["images/nameboard/nameboard-decoration-03.jpeg"]
  },
  {
    id: 27,
    title: "Traditional Nameboard 04",
    price: "₹28,000",
    description: "A classic design featuring marigolds and traditional flowers.",
    category: "Wedding, Nameboard",
    moreInfo: "This nameboard uses traditional flowers and colors, making it a perfect addition to Haldi ceremonies and classic weddings.",
    images: ["images/nameboard/nameboard-decoration-04.jpeg"]
  },
  {
    id: 28,
    title: "Lush Greenery Nameboard 05",
    price: "₹10,000",
    description: "A rustic nameboard framed with lush green foliage and white flowers.",
    category: "Wedding, Nameboard",
    moreInfo: "Ideal for a rustic or garden-themed event, this design brings a touch of nature's elegance to your entrance.",
    images: ["images/nameboard/nameboard-decoration-05.jpeg"]
  },

  // =================================================================
  // Birthday Stage Decorations
  // =================================================================
  {
    id: 28,
    title: "Birthday Stage 01",
    price: "₹25,000",
    description: "A fun and colorful stage setup featuring your child's favorite cartoon characters.",
    category: "Birthday, Stage",
    moreInfo: "This package includes a themed backdrop, character cutouts, balloon arrangements, and a decorated cake table.",
    images: ["images/birthday/stage/birthday-stage-01.jpeg"]
  },
  {
    id: 29,
    title: "Birthday Stage 02",
    price: "₹15,000",
    description: "An elegant stage with soft pastel colors, perfect for a first birthday or naming ceremony.",
    category: "Birthday, Stage",
    moreInfo: "Features beautiful draping in pastel shades, delicate floral accents, and personalized lighting to create a dreamy atmosphere.",
    images: ["images/birthday/stage/birthday-stage-02.jpeg"]
  },
  {
    id: 30,
    title: "Birthday Stage 03",
    price: "₹20,000",
    description: "A magical princess castle stage for a royal birthday celebration.",
    category: "Birthday, Stage",
    moreInfo: "Includes a castle backdrop, throne-style seating, and pink and gold balloon decorations.",
    images: ["images/birthday/stage/birthday-stage-03.jpeg"]
  },
  {
    id: 31,
    title: "Birthday Stage 04",
    price: "₹25,000",
    description: "An action-packed stage with your child's favorite superhero theme.",
    category: "Birthday, Stage",
    moreInfo: "Features city skyline backdrop, superhero logos, and bold primary color balloon arrangements.",
    images: ["images/birthday/stage/birthday-stage-04.jpeg"]
  },

  // =================================================================
  // Birthday & Naming Ceremony Nameboards
  // =================================================================
  {
    id: 32,
    title: "Birthday Nameboard 01",
    price: "₹2,500",
    description: "A playful nameboard with a jungle or animal theme for a child's birthday.",
    category: "Birthday, Nameboard",
    moreInfo: "Welcome your guests with a fun, jungle-themed nameboard complete with animal illustrations and balloon accents.",
    images: ["images/birthday/nameboard/birthday-nameboard-01.jpeg"]
  },
  {
    id: 33,
    title: "Birthday Nameboard 02",
    price: "₹3,500",
    description: "A sophisticated nameboard with white florals and gold lettering for a naming ceremony.",
    category: "Birthday, Nameboard",
    moreInfo: "A beautiful and classic design to celebrate the naming of a new baby, adorned with fresh white flowers.",
    images: ["images/birthday/nameboard/birthday-nameboard-02.jpeg"]
  },
  {
    id: 34,
    title: "Birthday Nameboard 03",
    price: "₹6,000",
    description: "A simple and chic nameboard for a modern birthday or function.",
    category: "Birthday, Nameboard",
    moreInfo: "Features clean typography on a clear acrylic board with a single, elegant floral accent.",
    images: ["images/birthday/nameboard/birthday-nameboard-03.jpeg"]
  },
  {
    id: 35,
    title: "Birthday Nameboard 04",
    price: "₹6,000",
    description: "A large, impressive nameboard fully decorated with a frame of flowers.",
    category: "Birthday, Nameboard",
    moreInfo: "Make a statement with this luxurious nameboard, completely framed with lush, colorful flowers for a grand entrance.",
    images: ["images/birthday/nameboard/birthday-nameboard-04.jpeg"]
  },

  // =================================================================
  // Haldi Stage Decorations
  // =================================================================
  {
    id: 36,
    title: "Haldi Stage 01",
    price: "₹20,000",
    description: "A traditional Haldi setup with a focus on marigold flowers and yellow drapes.",
    category: "Haldi, Stage",
    moreInfo: "This package includes a beautiful marigold backdrop, seating for the ceremony, and decorative pots for a complete look.",
    images: ["images/haldi/stage/haldi-stage-01.jpeg"]
  },
  {
    id: 37,
    title: "Haldi Stage 02",
    price: "₹30,000",
    description: "A fun and interactive Haldi stage featuring a beautifully decorated floral swing.",
    category: "Haldi, Stage",
    moreInfo: "A perfect photo opportunity, this stage includes a flower-adorned swing set against a vibrant backdrop.",
    images: ["images/haldi/stage/haldi-stage-02.jpeg"]
  },
  {
    id: 38,
    title: "Haldi Stage 03",
    price: "₹20,000",
    description: "A chic and minimalist Haldi stage with clean lines and elegant floral accents.",
    category: "Haldi, Stage",
    moreInfo: "This design uses a simple backdrop with pops of yellow and white flowers for a sophisticated and modern Haldi event.",
    images: ["images/haldi/stage/haldi-stage-03.jpeg"]
  },
  {
    id: 39,
    title: "Haldi Stage 04",
    price: "₹15,000",
    description: "A beautiful outdoor setup that blends with nature for a garden Haldi ceremony.",
    category: "Haldi, Stage",
    moreInfo: "Set in a garden, this decoration uses natural elements and bright flowers to create a fresh and open-air atmosphere.",
    images: ["images/haldi/stage/haldi-stage-04.jpeg"]
  },
  {
    id: 40,
    title: "Haldi Stage 05",
    price: "₹25,000",
    description: "A compact and beautiful stage setup perfect for an at-home Haldi function.",
    category: "Haldi, Stage",
    moreInfo: "Designed to fit smaller spaces, this package provides a gorgeous backdrop for an intimate family ceremony.",
    images: ["images/haldi/stage/haldi-stage-05.jpeg"]
  },

  // =================================================================
  // Haldi Nameboard Decorations
  // =================================================================
  {
    id: 41,
    title: "Haldi Nameboard 01",
    price: "₹2,500",
    description: "A bright and welcoming nameboard decorated with marigolds and festive colors.",
    category: "Haldi, Nameboard",
    moreInfo: "Welcome your guests to the Haldi ceremony with this vibrant nameboard, customized with names and event details.",
    images: ["images/haldi/nameboard/haldi-nameboard-01.jpeg"]
  },
  {
    id: 42,
    title: "Haldi Nameboard 02",
    price: "₹2,500",
    description: "A stylish nameboard combining traditional motifs with modern design.",
    category: "Haldi, Nameboard",
    moreInfo: "This board features elegant calligraphy and is framed with a mix of traditional and exotic flowers for a unique look.",
    images: ["images/haldi/nameboard/haldi-nameboard-02.jpeg"]
  },
  {
    id: 43,
    title: "Haldi Nameboard 03",
    price: "₹3,500",
    description: "A minimalist nameboard with a touch of floral charm for your Haldi event.",
    category: "Haldi, Nameboard",
    moreInfo: "A clean and simple design that clearly welcomes guests, accented with a small, beautiful floral arrangement.",
    images: ["images/haldi/nameboard/haldi-nameboard-03.jpeg"]
  },
];

const subCategoryMap = {
  'Wedding': ['Stage', 'Mandap', 'Entrance', 'Nameboard'],
  'Birthday': ['Stage', 'Nameboard'],
  'Haldi': ['Stage', 'Nameboard']
};

let activePrimaryFilter = 'all';
let activeSubFilter = 'all';





// Lightbox state
let lightboxProduct = null;
let lightboxIndex = 0;

// Utility to create product card HTML
function createProductCard(product) {
  return `
    <article class="card" data-category="${product.category}" data-product-id="${product.id}">
      <div class="card-media">
        <img src="${product.images[0]}" alt="${product.title}" loading="lazy">
      </div>
      <div class="card-body">
        <h3>${product.title}</h3>
        <div class="price">${product.price}</div>
        <p class="short">${product.description}</p>
        <div class="card-actions">
          <button class="btn btn-sm images-btn" data-product-id="${product.id}">View Images</button>
          <button class="btn btn-sm details-btn" data-product-id="${product.id}">View Details</button>
        </div>
      </div>
    </article>
  `;
}

// Render all product cards
function renderProductGrid() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  grid.innerHTML = products.map(createProductCard).join('');
}

// Lightbox functions
function openProductGallery(product, startIndex = 0) {
  lightboxProduct = product;
  lightboxIndex = startIndex;
  showLightboxImage();
  document.getElementById('lb-image').classList.remove('zoomed'); // Ensure zoom is reset
  const lb = document.getElementById('lightbox');
  lb.classList.add('active');
}

function showLightboxImage() {
  if (!lightboxProduct) return;
  const imgEl = document.getElementById('lb-image');
  const captionEl = document.getElementById('lb-caption');
  const images = lightboxProduct.images || [];
  imgEl.src = images[lightboxIndex];
  imgEl.alt = lightboxProduct.title;
  captionEl.innerHTML = `
    <h3 class="lb-title">${lightboxProduct.title}</h3>
    <div class="lb-price">${lightboxProduct.price}</div>
    ${
      document.getElementById('lightbox').classList.contains('details-mode')
        ? `<div class="lb-more-info">${lightboxProduct.moreInfo || ''}</div>`
        : ''
    }
    <div class="lb-counter">Image ${lightboxIndex + 1} of ${images.length}</div>
  `;

  // Populate thumbnails
  const thumbnailsEl = document.getElementById('lb-thumbnails');
  thumbnailsEl.innerHTML = images.map((imgSrc, index) => `
    <button class="lb-thumb ${index === lightboxIndex ? 'active' : ''}" data-index="${index}">
      <img src="${imgSrc}" alt="Thumbnail ${index + 1}" />
    </button>
  `).join('');
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('active');
  lb.classList.remove('details-mode'); // Always remove details-mode on close
  lightboxProduct = null;
  lightboxIndex = 0;
  document.getElementById('lb-image').classList.remove('zoomed'); // Reset zoom on close
}

function showPrevImage() {
  if (!lightboxProduct) return;
  lightboxIndex = (lightboxIndex - 1 + lightboxProduct.images.length) % lightboxProduct.images.length;
  showLightboxImage();
}

function showNextImage() {
  if (!lightboxProduct) return;
  lightboxIndex = (lightboxIndex + 1) % lightboxProduct.images.length;
  showLightboxImage();
}


// Single DOMContentLoaded block for all setup
document.addEventListener('DOMContentLoaded', function () {
  renderProductGrid();

  // Menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  function setMenuOpen(isOpen) {
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (isOpen) mainNav.classList.add('open');
    else mainNav.classList.remove('open');
  }
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      setMenuOpen(!isOpen);
    });
  }
  document.querySelectorAll('.main-nav a').forEach(a => {
    a.addEventListener('click', function () {
      setMenuOpen(false);
    });
  });

  // Filters
  const primaryFiltersContainer = document.querySelector('#primary-filters');
  const subCategoryContainer = document.getElementById('sub-category-container');

  function setActiveChip(button, groupSelector) {
    document.querySelectorAll(groupSelector).forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-selected', 'true');
  }

  function renderSubCategories(primaryCategory) {
    if (primaryCategory === 'all' || !subCategoryMap[primaryCategory]) {
      subCategoryContainer.innerHTML = '';
      return;
    }

    const subCategories = subCategoryMap[primaryCategory];
    const subCategoryHTML = `
      <p class="section-sub" style="margin-top:0; margin-bottom:1rem;">Filter by decoration type:</p>
      <div class="filter-chips" role="tablist" aria-label="Sub-category filters">
        <button class="chip active" data-filter="all" role="tab" aria-selected="true">All ${primaryCategory}</button>
        ${subCategories.map(sub => `<button class="chip" data-filter="${sub}" role="tab">${sub}</button>`).join('')}
      </div>
    `;
    subCategoryContainer.innerHTML = subCategoryHTML;
  }

  function filterCards() {
    document.querySelectorAll('#product-grid .card').forEach(card => {
      const cardCategories = (card.getAttribute('data-category') || '').split(',').map(c => c.trim());
      
      // Standardize to lowercase for robust matching
      const lowerCaseCardCategories = cardCategories.map(c => c.toLowerCase());
      const primaryMatch = activePrimaryFilter === 'all' || lowerCaseCardCategories.includes(activePrimaryFilter.toLowerCase());
      const subMatch = activeSubFilter === 'all' || lowerCaseCardCategories.includes(activeSubFilter.toLowerCase());
      if (primaryMatch && subMatch) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  function setupFilters() {
    if (primaryFiltersContainer) {
      primaryFiltersContainer.addEventListener('click', function(e) {
        const chip = e.target.closest('.chip');
        if (!chip) return;

        activePrimaryFilter = chip.dataset.filter;
        activeSubFilter = 'all'; // Reset sub-filter
        renderSubCategories(activePrimaryFilter); // Render sub-categories first
        setActiveChip(chip, '#primary-filters .chip');
        filterCards();
      });
    }

    if (subCategoryContainer) {
      subCategoryContainer.addEventListener('click', function(e) {
        const chip = e.target.closest('.chip');
        if (!chip) return;

        activeSubFilter = chip.dataset.filter;
        setActiveChip(chip, '#sub-category-container .chip');
        filterCards();
      });
    }
  }
  setupFilters();

  // Delegate thumbnail clicks from the info panel
  document.querySelector('.lb-info-panel').addEventListener('click', function(e) {
    const thumb = e.target.closest('.lb-thumb');
    if (thumb) {
      e.preventDefault(); // Prevent any unwanted default behavior
      lightboxIndex = parseInt(thumb.dataset.index, 10);
      showLightboxImage();
    }
  });

  // Delegate View Details button click
  document.getElementById('product-grid').addEventListener('click', function (e) {
    const target = e.target;
    const card = target.closest('.card');
    if (!card) return;

    const productId = parseInt(card.dataset.productId, 10);
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (target.classList.contains('images-btn') || target.closest('.card-media')) {
      const lb = document.getElementById('lightbox');
      lb.classList.remove('details-mode'); // Ensure details mode is off
      openProductGallery(product, 0);
    } else if (target.classList.contains('details-btn')) {
      const lb = document.getElementById('lightbox');
      lb.classList.add('details-mode'); // Set details mode
      openProductGallery(product, 0);
    }
  });

  // Add zoom on double-click
  document.getElementById('lb-image').addEventListener('dblclick', function() {
    this.classList.toggle('zoomed');
  });

  // Lightbox navigation and close
  const lbCloseBtn = document.querySelector('#lightbox .lb-close');
  const lbPrevBtn = document.querySelector('#lightbox .lb-prev');
  const lbNextBtn = document.querySelector('#lightbox .lb-next');
  const lbBackdrop = document.querySelector('#lightbox .lb-backdrop');
  if (lbCloseBtn) {
    lbCloseBtn.addEventListener('click', function() {
      closeLightbox();
      this.blur();
    });
  }
  if (lbPrevBtn) lbPrevBtn.addEventListener('click', showPrevImage);
  if (lbNextBtn) lbNextBtn.addEventListener('click', showNextImage);
  if (lbBackdrop) lbBackdrop.addEventListener('click', closeLightbox);

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', function (e) {
    const lb = document.getElementById('lightbox');
    if (!lb.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'ArrowRight') showNextImage();
  });

  // Ensure default filter shows all
  filterCards();
});
