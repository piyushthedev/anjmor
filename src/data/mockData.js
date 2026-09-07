// Real extracted data from Anjmor App (com.rts.anjmor) and live backend API

export const DELIVERY_PINCODES = [
  { PinId: 5, Pincode: "845102", DisplayName: "845102 - West Champaran, Bihar" },
  { PinId: 6, Pincode: "845106", DisplayName: "845106 - West Champaran, Bihar" },
  { PinId: 4, Pincode: "845451", DisplayName: "845451 - West Champaran, Bihar" },
  { PinId: 7, Pincode: "845455", DisplayName: "845455 - West Champaran, Bihar" }
];

export const CATEGORIES = [
  {
    id: 4,
    name: "Paints & Canvas",
    icon: "/assets/icons/stationery.png",
    subcategories: [
      { id: 25, name: "Water & Gauche Colors", image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/b9e8c5c3-e444-493c-a966-56ce8b1f80b5.png" },
      { id: 26, name: "Versatile Chalk Paint", image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/bf510313-51f1-46e2-bac8-bda9238470e8.png" },
      { id: 28, name: "Lively Acrylic Paint", image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/d03198a2-5fc0-4369-8ca0-2048aa71aa97.png" },
      { id: 30, name: "Oil Pastels Collection", image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/2ee42c6c-3054-411c-8a33-f39013c4225f.png" },
      { id: 31, name: "Mediums & Varnish", image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/81ea3542-8062-4564-8776-b8f2761ce73c.png" }
    ]
  },
  {
    id: 10,
    name: "Drawing Essentials",
    icon: "/assets/icons/sel_stationery.png",
    subcategories: [
      { id: 52, name: "Sketching Pencils", image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/d0963791-f6cc-401e-a6fd-77eb45fb6e9b.png" },
      { id: 53, name: "Charcoal Pencils", image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/edf69762-84d3-40d8-bf21-217a2089c952.png" },
      { id: 55, name: "Paint Brushes Set", image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/99e32719-eaf9-4cf3-a16a-19d682333da1.png" },
      { id: 56, name: "Wooden Easel Stand", image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/83a84476-61d7-4af5-9cf9-e9b79bc8998c.png" },
      { id: 60, name: "Cutting Tools & Mats", image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/77b801a5-1664-4927-a225-9887c2b38158.png" }
    ]
  },
  {
    id: 3,
    name: "Office & Desk Decor",
    icon: "/assets/icons/learning_tools.png",
    subcategories: [
      { id: 39, name: "Executive Pen Stands", image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/908e8ead-75e9-4a24-81f0-166e1c192bc6.png" },
      { id: 40, name: "Table Top Flag Set", image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/289deb26-3edb-47cc-8022-f2d95b078d48.png" },
      { id: 41, name: "Ashoka Chakra Brass", image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/64fac643-e09b-4321-b0a2-2108291884e8.png" },
      { id: 42, name: "Photo Frames", image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/413b3f94-0a95-4881-8375-7e190190255a.png" },
      { id: 43, name: "World Globe Collection", image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/fea1f0ec-022e-48da-9224-ffb7c55e9d4f.png" }
    ]
  },
  {
    id: 11,
    name: "Journaling & Crafts",
    icon: "/assets/icons/all_category.png",
    subcategories: [
      { id: 61, name: "Decorative Planners", image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/ef737e8f-2162-4a35-b7a2-da470654587d.png" },
      { id: 62, name: "Scrapbook Stickers", image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/c8fc34f0-6e96-4949-b23d-e24a5c2dadf8.png" },
      { id: 65, name: "Washi Tape Rolls", image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/81096691-afd5-4a3a-bc9e-7d0b8838dcab.png" },
      { id: 67, name: "Wooden Carved Stamps", image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/2b363df3-5f67-4f47-b325-bb304e46111c.png" }
    ]
  },
  {
    id: 12,
    name: "Notebooks & Paper",
    icon: "/assets/icons/shopping_bag.png",
    subcategories: [
      { id: 70, name: "Spiral Notebooks A4", image: "/assets/images/img1.png" },
      { id: 71, name: "Hardbound Registers", image: "/assets/images/img2.png" },
      { id: 72, name: "Copier Paper Reams", image: "/assets/images/img3.png" },
      { id: 73, name: "Sticky Notes & Flags", image: "/assets/images/img4.png" }
    ]
  }
];

export const PRODUCTS = [
  {
    id: 101,
    name: "Camel Artist Acrylic Color 12 Shades Set",
    category: "Paints & Canvas",
    categoryId: 4,
    subcategoryId: 28,
    price: 325,
    mrp: 390,
    discount: "17% OFF",
    unit: "Set of 12 (20ml tubes)",
    rating: 4.8,
    reviews: 142,
    image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/d03198a2-5fc0-4369-8ca0-2048aa71aa97.png",
    description: "Superior quality pigmented acrylic colors designed for professional artists, students and hobbyists. Vibrant, lightfast and waterproof once dry.",
    inStock: true,
    brand: "Camlin"
  },
  {
    id: 102,
    name: "Staedtler Mars Lumograph Graphite Sketch Pencils",
    category: "Drawing Essentials",
    categoryId: 10,
    subcategoryId: 52,
    price: 499,
    mrp: 650,
    discount: "23% OFF",
    unit: "Tin Box of 12 Grades (8B - 2H)",
    rating: 4.9,
    reviews: 218,
    image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/d0963791-f6cc-401e-a6fd-77eb45fb6e9b.png",
    description: "Premium artist drawing pencils with super-bonded break-resistant lead. Exceptional shading gradation and precision linework.",
    inStock: true,
    brand: "Staedtler"
  },
  {
    id: 103,
    name: "Anjmor Classic Ashoka Chakra Brass Desk Showpiece",
    category: "Office & Desk Decor",
    categoryId: 3,
    subcategoryId: 41,
    price: 699,
    mrp: 999,
    discount: "30% OFF",
    unit: "1 Piece (Solid Brass Gold Polish)",
    rating: 4.7,
    reviews: 89,
    image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/64fac643-e09b-4321-b0a2-2108291884e8.png",
    description: "Elegant 24-spoke National Ashoka Chakra miniature on solid wooden stand. Ideal gift and proud emblem for executive desks and offices.",
    inStock: true,
    brand: "Anjmor Decor"
  },
  {
    id: 104,
    name: "Brustro Professional Artists Fine Paint Brushes Set",
    category: "Drawing Essentials",
    categoryId: 10,
    subcategoryId: 55,
    price: 380,
    mrp: 450,
    discount: "16% OFF",
    unit: "Set of 7 Round & Flat Brushes",
    rating: 4.8,
    reviews: 165,
    image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/99e32719-eaf9-4cf3-a16a-19d682333da1.png",
    description: "Synthetic golden Taklon bristles with rust-proof chrome plated ferrules. Holds maximum liquid paint with smooth spring response.",
    inStock: true,
    brand: "Brustro"
  },
  {
    id: 105,
    name: "Mont Marte Rich Soft Oil Pastels 36 Colors",
    category: "Paints & Canvas",
    categoryId: 4,
    subcategoryId: 30,
    price: 440,
    mrp: 550,
    discount: "20% OFF",
    unit: "Box of 36 Colors",
    rating: 4.6,
    reviews: 94,
    image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/2ee42c6c-3054-411c-8a33-f39013c4225f.png",
    description: "Buttery soft blending texture, rich opaque color coverage, suitable for mixed media and oil pastel landscape art.",
    inStock: true,
    brand: "Mont Marte"
  },
  {
    id: 106,
    name: "Rotating World Educational Globe 8-inch Gold Base",
    category: "Office & Desk Decor",
    categoryId: 3,
    subcategoryId: 43,
    price: 849,
    mrp: 1200,
    discount: "29% OFF",
    unit: "1 Piece (8-inch Diameter)",
    rating: 4.8,
    reviews: 110,
    image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/fea1f0ec-022e-48da-9224-ffb7c55e9d4f.png",
    description: "Detailed cartography with countries, oceans, capitals, and boundaries. Smooth 360-degree rotation on calibrated meridian arc.",
    inStock: true,
    brand: "Anjmor Decor"
  },
  {
    id: 107,
    name: "Aesthetic Vintage Washi Tape 10-Roll Gift Box",
    category: "Journaling & Crafts",
    categoryId: 11,
    subcategoryId: 65,
    price: 249,
    mrp: 350,
    discount: "29% OFF",
    unit: "Box of 10 Rolls (Various widths)",
    rating: 4.9,
    reviews: 184,
    image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/81096691-afd5-4a3a-bc9e-7d0b8838dcab.png",
    description: "Japanese washi paper masking tapes with gold foil floral accents. Peels cleanly without leaving sticky residue.",
    inStock: true,
    brand: "ArtLover"
  },
  {
    id: 108,
    name: "Classmate Pulse 6-Subject Spiral Notebook A4",
    category: "Notebooks & Paper",
    categoryId: 12,
    subcategoryId: 70,
    price: 185,
    mrp: 210,
    discount: "12% OFF",
    unit: "300 Pages (Single Line Ruled)",
    rating: 4.7,
    reviews: 310,
    image: "/assets/images/img1.png",
    description: "Elemental Chlorine Free (ECF) ozone treated bright white paper with colored polypropylene dividers for 6 distinct subjects.",
    inStock: true,
    brand: "Classmate"
  },
  {
    id: 109,
    name: "JK Copier Paper 75 GSM A4 Size 500 Sheets Ream",
    category: "Notebooks & Paper",
    categoryId: 12,
    subcategoryId: 72,
    price: 360,
    mrp: 420,
    discount: "14% OFF",
    unit: "Ream of 500 Sheets",
    rating: 4.8,
    reviews: 420,
    image: "/assets/images/img3.png",
    description: "India's highest selling copier paper for laser, inkjet printers and high-speed photocopying. Ultra-bright high opacity finish.",
    inStock: true,
    brand: "JK Paper"
  },
  {
    id: 110,
    name: "Self-Healing A3 Cutting Mat with Grid Ruler",
    category: "Drawing Essentials",
    categoryId: 10,
    subcategoryId: 60,
    price: 349,
    mrp: 499,
    discount: "30% OFF",
    unit: "A3 Size (45cm x 30cm)",
    rating: 4.8,
    reviews: 77,
    image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/77b801a5-1664-4927-a225-9887c2b38158.png",
    description: "5-layer PVC composite self-healing surface preserves craft knife blades and prevents tabletop damage during paper and leather cutting.",
    inStock: true,
    brand: "Brustro"
  },
  {
    id: 111,
    name: "Executive Multi-Compartment Wooden Desk Organizer",
    category: "Office & Desk Decor",
    categoryId: 3,
    subcategoryId: 39,
    price: 549,
    mrp: 799,
    discount: "31% OFF",
    unit: "1 Piece (Solid Sheesham Wood Finish)",
    rating: 4.6,
    reviews: 95,
    image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/908e8ead-75e9-4a24-81f0-166e1c192bc6.png",
    description: "Dedicated slots for smartphone, pens, visiting cards, notepad, and paper clips. Enhances desk tidiness and professional aesthetics.",
    inStock: true,
    brand: "Anjmor Decor"
  },
  {
    id: 112,
    name: "Faber-Castell Tri-Grip Watercolor Pencils 24 Shades",
    category: "Drawing Essentials",
    categoryId: 10,
    subcategoryId: 52,
    price: 290,
    mrp: 350,
    discount: "17% OFF",
    unit: "Pack of 24 Shades + 1 Paint Brush",
    rating: 4.9,
    reviews: 260,
    image: "https://anjmor.eprofitbooks.com/ChildCategoryImage/d0963791-f6cc-401e-a6fd-77eb45fb6e9b.png",
    description: "Can be used as conventional color pencils or transformed into transparent watercolor paintings with wet brush application.",
    inStock: true,
    brand: "Faber-Castell"
  }
];

export const BRANDS = [
  { id: 1, name: "Classmate", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Classmate_logo.svg/320px-Classmate_logo.svg.png" },
  { id: 2, name: "Camlin / Camel", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Kokuyo_Camlin_logo.svg/320px-Kokuyo_Camlin_logo.svg.png" },
  { id: 3, name: "Faber-Castell", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Faber-Castell_logo.svg/320px-Faber-Castell_logo.svg.png" },
  { id: 4, name: "Doms", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/DOMS_Industries_logo.svg/320px-DOMS_Industries_logo.svg.png" },
  { id: 5, name: "Staedtler", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Staedtler_Logo.svg/320px-Staedtler_Logo.svg.png" },
  { id: 6, name: "Brustro", logo: "/assets/icons/anjmor_logo.png" },
  { id: 7, name: "Anjmor Originals", logo: "/assets/icons/anjmor_logo.png" }
];

export const COUPONS = [
  { code: "ANJMOR50", discount: 50, minOrder: 299, desc: "₹50 Instant OFF on orders above ₹299" },
  { code: "WELCOME20", discount: 100, minOrder: 499, desc: "₹100 OFF for First Time Users (Min ₹499)" },
  { code: "B2BSAVE", discount: 250, minOrder: 1499, desc: "₹250 Bulk Wholesale Saving (Min ₹1499)" }
];
