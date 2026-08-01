export const MOCK_GADGETS = [
  // ULTRA BUDGET & ENTRY SMARTPHONES
  {
    id: "phone-08",
    name: "Redmi 13C 5G",
    brand: "Xiaomi",
    category: "Smartphones",
    mrp: 13999,
    rating: 4.3,
    reviewCount: 5200,
    badge: "Best Ultra-Budget 5G Phone",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    storePrices: {
      "Amazon.in": 8999,
      Flipkart: 9499,
      Croma: 9999,
      "Vijay Sales": 9199,
      "Reliance Digital": 9299
    },
    discounts: {
      bestStore: "Amazon.in",
      lowestPrice: 8999,
      discountPercent: 35,
      coupon: "REDMISBI1000",
      bankOffer: "Flat ₹1,000 Instant Discount on SBI Cards"
    },
    specs: {
      "Display & Screen": '6.74" HD+ 90Hz Display with Corning Gorilla Glass',
      "Performance & Processor": "MediaTek Dimensity 6100+ 5G (6nm) | 4GB RAM + 128GB Storage",
      "Camera System": "50MP AI Dual Rear Camera (f/1.8) | 8MP Front Selfie Camera",
      "Battery & Charging": "5000mAh Battery | 18W Fast Charging",
      "Build & Security": "Star Trail Design | Side Fingerprint Sensor | Dual 5G SIM + MicroSD",
      "Warranty & In-Box": "1 Year Manufacturer Warranty | 18W Power Adapter & Type-C Cable Included"
    },
    pros: ["Cheapest 5G smartphone in India under ₹9,000", "Smooth 90Hz display", "5000mAh battery"],
    cons: ["HD+ resolution screen", "18W charging takes ~1.5 hours"],
    reviews: [
      { id: "r40", user: "Amit K.", rating: 4.5, comment: "Best 5G phone under ₹10,000 on Amazon! Good battery life and 5G connectivity.", date: "2024-06-01", verified: true, sentimentScore: 92 }
    ]
  },
  {
    id: "phone-06",
    name: "Nothing Phone (2a)",
    brand: "Nothing",
    category: "Smartphones",
    mrp: 27999,
    rating: 4.6,
    reviewCount: 3800,
    badge: "Best Smartphone under ₹25,000",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    storePrices: {
      "Amazon.in": 23999,
      Flipkart: 24999,
      Croma: 25499,
      "Vijay Sales": 24499,
      "Reliance Digital": 24900
    },
    discounts: {
      bestStore: "Amazon.in",
      lowestPrice: 23999,
      discountPercent: 14,
      coupon: "NOTHINGSBI2000",
      bankOffer: "₹2,000 Instant Discount on SBI Credit Cards"
    },
    specs: {
      "Display & Screen": '6.7" Flexible 120Hz Full HD+ AMOLED (1300 nits Peak Brightness)',
      "Performance & Processor": "MediaTek Dimensity 7200 Pro (4nm) | 8GB RAM + 128GB Storage",
      "Camera System": "50MP OIS Main Camera + 50MP UltraWide | 32MP Front Camera",
      "Battery & Charging": "5000mAh Battery | 45W Fast Charging (50% in 20 mins)",
      "Build & Security": "Glyph Interface LED Backlights | In-Display Fingerprint | IP54 Dust & Splash Resistant",
      "Warranty & In-Box": "1 Year Brand Warranty | Type-C to Type-C Cable Included"
    },
    pros: ["Unique transparent back with Glyph LED lights", "Clean bloatware-free Nothing OS 2.5", "Dual 50MP cameras"],
    cons: ["Charger sold separately"],
    reviews: [
      { id: "r32", user: "Rahul M.", rating: 5, comment: "Head turner design with Glyph lights! Super smooth Nothing OS software.", date: "2024-06-14", verified: true, sentimentScore: 97 }
    ]
  },
  {
    id: "phone-05",
    name: "OnePlus 12R",
    brand: "OnePlus",
    category: "Smartphones",
    mrp: 45999,
    rating: 4.7,
    reviewCount: 2400,
    badge: "Best Smartphone under ₹40,000",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    storePrices: {
      "Amazon.in": 39999,
      Flipkart: 41999,
      Croma: 42999,
      "Vijay Sales": 40499,
      "Reliance Digital": 40999
    },
    discounts: {
      bestStore: "Amazon.in",
      lowestPrice: 39999,
      discountPercent: 13,
      coupon: "ONEPLUSICICI3000",
      bankOffer: "Flat ₹3,000 Instant Discount on ICICI Bank Cards"
    },
    specs: {
      "Display & Screen": '6.78" 1.5K 120Hz ProXDR LTPO4.0 AMOLED (4500 nits Peak)',
      "Performance & Processor": "Snapdragon 8 Gen 2 (4nm) | 16GB LPDDR5X RAM + 256GB UFS 3.1 Storage",
      "Camera System": "50MP Sony IMX890 Main (OIS) + 8MP UltraWide + 2MP Macro | 16MP Selfie",
      "Battery & Charging": "5500mAh Battery | 100W SUPERVOOC Fast Charger Included",
      "Build & Security": "Aluminum Frame + Gorilla Glass Victus 2 | Aqua Touch Display | Alert Slider",
      "Warranty & In-Box": "1 Year OnePlus India Warranty | 100W Power Adapter Included in Box"
    },
    pros: ["Monster 5500mAh battery life", "Flagship Snapdragon 8 Gen 2 processor", "1.5K AMOLED 120Hz screen"],
    cons: ["No wireless charging"],
    reviews: [
      { id: "r30", user: "Suresh P.", rating: 5, comment: "Best flagship killer phone under ₹40,000 in India!", date: "2024-06-10", verified: true, sentimentScore: 96 }
    ]
  },
  {
    id: "phone-01",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    mrp: 139999,
    rating: 4.8,
    reviewCount: 3100,
    badge: "Best Overall Flagship",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
    storePrices: {
      "Amazon.in": 129999,
      Flipkart: 131999,
      Croma: 132999,
      "Vijay Sales": 128999,
      "Reliance Digital": 130999
    },
    discounts: {
      bestStore: "Vijay Sales",
      lowestPrice: 128999,
      discountPercent: 8,
      coupon: "SAMSUNGHDFC12000",
      bankOffer: "₹12,000 Instant HDFC Cashback + 12 Months No-Cost EMI"
    },
    specs: {
      "Display & Screen": '6.8" Quad HD+ Dynamic AMOLED 2X 120Hz with Anti-Reflective Gorilla Armor',
      "Performance & Processor": "Snapdragon 8 Gen 3 for Galaxy (4nm) | 12GB RAM + 512GB UFS 4.0",
      "Camera System": "200MP OIS Main + 50MP 5x Periscope Telephoto + 10MP 3x + 12MP UltraWide | 100x Space Zoom",
      "Battery & Charging": "5000mAh Battery | 45W Fast Charging & 15W Wireless PowerShare",
      "Build & Security": "Titanium Frame | IP68 Water Resistant | Built-in S Pen Stylus | Galaxy AI Features",
      "Warranty & In-Box": "1 Year Samsung India Warranty + 7 Years OS Upgrades | S Pen & USB-C Cable Included"
    },
    pros: ["Anti-reflective Gorilla Armor screen", "200MP sensor with 100x zoom", "Built-in S Pen stylus", "7 years of OS updates"],
    cons: ["Large and heavy boxy design"],
    reviews: [
      { id: "r10", user: "Karan B.", rating: 5, comment: "Galaxy AI features like Circle to Search work flawlessly in India!", date: "2024-05-04", verified: true, sentimentScore: 97 }
    ]
  },

  // LAPTOPS (Entry Budget to High End)
  {
    id: "lap-06",
    name: "Lenovo V15 G4 AMD",
    brand: "Lenovo",
    category: "Laptops",
    mrp: 38990,
    rating: 4.3,
    reviewCount: 1800,
    badge: "Best Entry Laptop under ₹30,000",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    storePrices: {
      "Amazon.in": 28990,
      Flipkart: 29990,
      Croma: 30990,
      "Vijay Sales": 29490,
      "Reliance Digital": 29900
    },
    discounts: {
      bestStore: "Amazon.in",
      lowestPrice: 28990,
      discountPercent: 25,
      coupon: "LENOVOSBI2000",
      bankOffer: "Flat ₹2,000 Instant Discount on SBI Cards"
    },
    specs: {
      "Display & Screen": '15.6" Full HD (1920 x 1080) Anti-Glare Display (250 nits)',
      "Performance & Processor": "AMD Ryzen 3 7320U Quad-Core | 8GB LPDDR5 RAM + 512GB NVMe SSD",
      "Graphics & Multimedia": "AMD Radeon 610M Graphics | Dolby Audio Stereo Speakers | 720p HD Webcam with Privacy Shutter",
      "Battery & Charging": "38Wh Battery (Up to 6 hours) | 65W Fast Adapter Included",
      "Operating System & Ports": "Windows 11 Home | USB Type-C, USB 3.2, HDMI 1.4, Ethernet RJ45, Audio Jack",
      "Warranty & In-Box": "1 Year Onsite Warranty | Laptop, 65W Power Charger & User Manual Included"
    },
    pros: ["Cheapest 512GB SSD laptop under ₹30,000", "LPDDR5 fast RAM", "Privacy webcam shutter"],
    cons: ["Basic plastic chassis", "Ryzen 3 suitable for office/study work"],
    reviews: [
      { id: "r41", user: "Pooja K.", rating: 4.5, comment: "Best budget laptop for college students under 30k! 512GB SSD makes it boot fast.", date: "2024-05-15", verified: true, sentimentScore: 93 }
    ]
  },
  {
    id: "lap-05",
    name: "ASUS Vivobook 15 OLED",
    brand: "ASUS",
    category: "Laptops",
    mrp: 54990,
    rating: 4.5,
    reviewCount: 3100,
    badge: "Best Laptop under ₹50,000",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    storePrices: {
      "Amazon.in": 44990,
      Flipkart: 46990,
      Croma: 47990,
      "Vijay Sales": 45990,
      "Reliance Digital": 46490
    },
    discounts: {
      bestStore: "Amazon.in",
      lowestPrice: 44990,
      discountPercent: 18,
      coupon: "ASUSHDFC3000",
      bankOffer: "Flat ₹3,000 Instant Discount on HDFC Cards"
    },
    specs: {
      "Display & Screen": '15.6" Full HD (1920 x 1080) OLED Display (600 nits Peak, 100% DCI-P3)',
      "Performance & Processor": "Intel Core i5 1335U 10-Cores | 16GB LPDDR5 RAM + 512GB NVMe SSD",
      "Graphics & Multimedia": "Intel Iris Xe Graphics | Harman Kardon Audio | 720p HD Webcam",
      "Battery & Charging": "50Wh Battery (Up to 8 hours) | 65W Fast Charger",
      "Operating System & Ports": "Windows 11 Home + MS Office 2021 | Fingerprint Reader | Backlit Keyboard",
      "Warranty & In-Box": "1 Year ASUS Onsite Warranty | 65W Adapter Included"
    },
    pros: ["Gorgeous 600-nit OLED display under ₹45,000", "16GB RAM out of box", "Fingerprint sensor"],
    cons: ["Plastic chassis build"],
    reviews: [
      { id: "r34", user: "Deepak S.", rating: 5, comment: "OLED display under ₹45K is a steal for watching movies and coding!", date: "2024-05-19", verified: true, sentimentScore: 96 }
    ]
  },
  {
    id: "lap-01",
    name: "MacBook Air M3 (15-inch)",
    brand: "Apple",
    category: "Laptops",
    mrp: 134900,
    rating: 4.8,
    reviewCount: 1420,
    badge: "Best Ultraportable",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    storePrices: {
      "Amazon.in": 119900,
      Flipkart: 121900,
      Croma: 124900,
      "Vijay Sales": 120900,
      "Reliance Digital": 122900
    },
    discounts: {
      bestStore: "Amazon.in",
      lowestPrice: 119900,
      discountPercent: 11,
      coupon: "APPLEHDFC5000",
      bankOffer: "Flat ₹5,000 Instant Discount on HDFC Bank Credit Cards"
    },
    specs: {
      "Display & Screen": '15.3" Liquid Retina Display with True Tone (2880 x 1864, 500 nits)',
      "Performance & Processor": "Apple M3 (8-core CPU, 10-core GPU) | 16GB Unified RAM + 512GB SSD",
      "Graphics & Multimedia": "10-Core Apple GPU | 6-Speaker Sound System with Spatial Audio | 1080p FaceTime HD Camera",
      "Battery & Charging": "66.5Wh Battery (Up to 18 hours playback) | MagSafe 3 Charging Port",
      "Operating System & Ports": "macOS Sonoma | 2x Thunderbolt / USB 4 Ports, 3.5mm Headphone Jack | Touch ID",
      "Warranty & In-Box": "1 Year Apple India Warranty | 35W Dual USB-C Adapter & MagSafe Cable Included"
    },
    pros: ["Silent fanless design", "Exceptional battery life", "Vivid Liquid Retina screen"],
    cons: ["Only 2 Thunderbolt ports"],
    reviews: [
      { id: "r1", user: "Alex M.", rating: 5, comment: "Insane battery life! Easily lasts 2 full office days without charging.", date: "2024-05-10", verified: true, sentimentScore: 95 }
    ]
  },

  // AUDIO & HEADPHONES (Entry Budget to Premium)
  {
    id: "aud-05",
    name: "boAt Airdopes 141 ANC",
    brand: "boAt",
    category: "Audio",
    mrp: 4490,
    rating: 4.4,
    reviewCount: 12500,
    badge: "Best Ultra-Budget ANC Earbuds under ₹1,500",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80",
    storePrices: {
      "Amazon.in": 1299,
      Flipkart: 1399,
      Croma: 1499,
      "Vijay Sales": 1349,
      "Reliance Digital": 1399
    },
    discounts: {
      bestStore: "Amazon.in",
      lowestPrice: 1299,
      discountPercent: 71,
      coupon: "BOATSAVE200",
      bankOffer: "Extra 10% Cashback on Amazon Pay UPI"
    },
    specs: {
      "Sound & Drivers": "10mm Dynamic Bass Drivers | Signature boAt Sound Profile",
      "Active Noise Cancellation": "Up to 32dB Active Noise Cancellation (ANC) + ENx Quad Mics for Calls",
      "Battery & Fast Charging": "42 Hours Total Playback | ASAP Charge (10 Mins Charge = 75 Mins Playback)",
      "Connectivity & Water Resistance": "Bluetooth v5.3 | IPX5 Sweat & Splash Resistance | Beast Mode 50ms Low Latency Gaming",
      "Warranty & In-Box": "1 Year boAt India Warranty | Earbuds, Charging Case, Extra Ear Tips & Type-C Cable"
    },
    pros: ["Cheapest ANC TWS earbuds in India under ₹1,500", "42 hour battery backup", "Quad mic clear call quality"],
    cons: ["Basic plastic build quality"],
    reviews: [
      { id: "r42", user: "Manoj T.", rating: 4.5, comment: "Value for money product! ANC works surprisingly well for ₹1,299.", date: "2024-06-11", verified: true, sentimentScore: 94 }
    ]
  },
  {
    id: "aud-04",
    name: "OnePlus Buds Pro 2",
    brand: "OnePlus",
    category: "Audio",
    mrp: 13999,
    rating: 4.6,
    reviewCount: 4100,
    badge: "Best TWS Earbuds under ₹10,000",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80",
    storePrices: {
      "Amazon.in": 8999,
      Flipkart: 9499,
      Croma: 9999,
      "Vijay Sales": 9199,
      "Reliance Digital": 9299
    },
    discounts: {
      bestStore: "Amazon.in",
      lowestPrice: 8999,
      discountPercent: 35,
      coupon: "ONEPLUSBUDS1000",
      bankOffer: "Flat ₹1,000 Instant Discount on ICICI Cards"
    },
    specs: {
      "Sound & Drivers": "Dynaudio Co-created MelodyBoost Dual Drivers (11mm Woofer + 6mm Tweeter)",
      "Active Noise Cancellation": "48dB Smart Adaptive Noise Cancellation + Triple Mic AI Call Noise Reduction",
      "Battery & Fast Charging": "39 Hours Total Playback | 10 Mins Warp Charge = 10 Hours Playback | Qi Wireless Charging Case",
      "Connectivity & Water Resistance": "Bluetooth v5.3 | IP55 Dust & Water Resistant Earbuds | LHDC 4.0 Hi-Res Audio",
      "Warranty & In-Box": "1 Year OnePlus Warranty | Earbuds, Wireless Charging Case & Type-C Cable"
    },
    pros: ["Deep 48dB ANC silences traffic & office noise", "Dynaudio dual driver sound stage", "Spatial audio support"],
    cons: ["Stem touch controls take getting used to"],
    reviews: [
      { id: "r35", user: "Kavita N.", rating: 5, comment: "Unbeatable punchy bass and crystal clear calls under ₹10,000!", date: "2024-06-08", verified: true, sentimentScore: 95 }
    ]
  },
  {
    id: "aud-01",
    name: "Sony WH-1000XM5",
    brand: "Sony",
    category: "Audio",
    mrp: 34990,
    rating: 4.8,
    reviewCount: 5400,
    badge: "Best Noise Canceling Headphones",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
    storePrices: {
      "Amazon.in": 26990,
      Flipkart: 28990,
      Croma: 29990,
      "Vijay Sales": 27990,
      "Reliance Digital": 28500
    },
    discounts: {
      bestStore: "Amazon.in",
      lowestPrice: 26990,
      discountPercent: 23,
      coupon: "SONYICICI3000",
      bankOffer: "Flat ₹3,000 Instant Discount on Amazon Pay ICICI Card"
    },
    specs: {
      "Sound & Drivers": "30mm Precision Carbon Fiber Drivers | High-Resolution Audio Wireless & LDAC",
      "Active Noise Cancellation": "HD Noise Canceling Processor QN1 & V1 Chip | Auto NC Optimizer (8 Microphones)",
      "Battery & Fast Charging": "30 Hours ANC ON (3 Mins USB-PD Fast Charge = 3 Hours Playback)",
      "Connectivity & Build": "Bluetooth v5.2 Multipoint | Soft Fit Synthetic Leather Earcups | 250g Lightweight",
      "Warranty & In-Box": "1 Year Sony India Warranty | Carrying Case, 3.5mm Audio Cable & Charging Cable"
    },
    pros: ["Best ANC on metro trains & flights", "Ultra-lightweight ear cushions"],
    cons: ["Non-folding headband design"],
    reviews: [
      { id: "r18", user: "Brian H.", rating: 5, comment: "Silences Delhi Metro noise completely. Best ANC headphones in India.", date: "2024-05-18", verified: true, sentimentScore: 97 }
    ]
  },

  // SMARTWATCHES (Entry Budget to Premium)
  {
    id: "watch-04",
    name: "Noise ColorFit Pulse 2 Max",
    brand: "Noise",
    category: "Smartwatches",
    mrp: 4999,
    rating: 4.3,
    reviewCount: 18500,
    badge: "Best Ultra-Budget Watch under ₹1,500",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    storePrices: {
      "Amazon.in": 1299,
      Flipkart: 1399,
      Croma: 1499,
      "Vijay Sales": 1349,
      "Reliance Digital": 1399
    },
    discounts: {
      bestStore: "Amazon.in",
      lowestPrice: 1299,
      discountPercent: 74,
      coupon: "NOISESAVE100",
      bankOffer: "Extra 10% Discount on Amazon Pay UPI"
    },
    specs: {
      "Display & Screen": '1.85" TFT LCD Bright Display (550 nits Peak Brightness)',
      "Bluetooth Calling & Audio": "Tru Sync Bluetooth Calling | Dial Pad, Recent Calls & Contact Sync",
      "Health & Fitness Tracking": "Noise Health Suite: 24/7 Heart Rate, SpO2, Sleep Tracking, Female Cycle Tracker | 100+ Sports Modes",
      "Battery & Water Resistance": "10 Days Battery Backup (2 Days with Heavy Bluetooth Calling) | IP68 Water Resistant",
      "Warranty & In-Box": "1 Year Noise India Warranty | Watch, Silicone Strap, Magnetic Charging Cable"
    },
    pros: ["Cheapest Bluetooth calling smartwatch under ₹1,500", "1.85-inch large bright screen", "10-day battery"],
    cons: ["LCD display screen"],
    reviews: [
      { id: "r43", user: "Sunil D.", rating: 4.5, comment: "Bluetooth calling works crystal clear for ₹1,299! Great budget smartwatch.", date: "2024-06-05", verified: true, sentimentScore: 93 }
    ]
  },
  {
    id: "watch-03",
    name: "Amazfit Active Smartwatch",
    brand: "Amazfit",
    category: "Smartwatches",
    mrp: 15999,
    rating: 4.5,
    reviewCount: 1650,
    badge: "Best Smartwatch under ₹15,000",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    storePrices: {
      "Amazon.in": 11999,
      Flipkart: 12999,
      Croma: 13499,
      "Vijay Sales": 12499,
      "Reliance Digital": 12999
    },
    discounts: {
      bestStore: "Amazon.in",
      lowestPrice: 11999,
      discountPercent: 25,
      coupon: "AMAZFIT1000",
      bankOffer: "Flat ₹1,000 Instant Coupon"
    },
    specs: {
      "Display & Screen": '1.75" HD AMOLED Curved Display (341 ppi, Always-on Support)',
      "GPS & Navigation": "5 Satellite Positioning Systems with Route Import & Track Running Mode",
      "Health & Fitness Tracking": "Zepp Coach AI Workout Trainer | Heart Rate, SpO2, Stress, Sleep & Readiness Score",
      "Battery & Water Resistance": "Up to 14 Days Battery Life | 5 ATM Water Resistance (50m Swimproof)",
      "Warranty & In-Box": "1 Year Amazfit India Warranty | Watch, Charging Base & User Manual"
    },
    pros: ["14-day monster battery life", "Built-in GPS with offline map navigation", "Crisp AMOLED display"],
    cons: ["No third-party app store"],
    reviews: [
      { id: "r36", user: "Neha G.", rating: 5, comment: "Only need to charge twice a month! Best fitness tracker watch.", date: "2024-05-20", verified: true, sentimentScore: 94 }
    ]
  },
  {
    id: "watch-01",
    name: "Apple Watch Series 9",
    brand: "Apple",
    category: "Smartwatches",
    mrp: 41900,
    rating: 4.8,
    reviewCount: 2900,
    badge: "Best Smartwatch Overall",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
    storePrices: {
      "Amazon.in": 36900,
      Flipkart: 38900,
      Croma: 39900,
      "Vijay Sales": 37500,
      "Reliance Digital": 38000
    },
    discounts: {
      bestStore: "Amazon.in",
      lowestPrice: 36900,
      discountPercent: 12,
      coupon: "WATCHS9HDFC",
      bankOffer: "₹2,500 Instant Cashback on HDFC Credit Cards"
    },
    specs: {
      "Display & Screen": "Always-On Retina LTPO OLED (2000 nits Peak Brightness)",
      "Chip & Gestures": "Apple S9 SiP 64-bit Dual-Core | Double Tap Gesture Control | 4-Core Neural Engine",
      "Health & Fitness Tracking": "ECG App, Blood Oxygen Sensor, Temperature Sensing, High/Low Heart Rate Alerts | Fall Detection",
      "Battery & Water Resistance": "18 Hours Battery Life (36 Hours Low Power Mode) | 50m Water Resistant",
      "Warranty & In-Box": "1 Year Apple India Warranty | Apple Watch Case, Sport Band & Magnetic Fast Charger Cable"
    },
    pros: ["Double Tap pinch gesture control", "On-device Siri processing"],
    cons: ["Daily charging required"],
    reviews: [
      { id: "r23", user: "Kevin L.", rating: 5, comment: "Double tap gesture to answer calls while driving is super handy!", date: "2024-05-30", verified: true, sentimentScore: 94 }
    ]
  },

  // TABLETS & MONITORS
  {
    id: "tab-02",
    name: "Samsung Galaxy Tab S9 FE",
    brand: "Samsung",
    category: "Tablets",
    mrp: 44999,
    rating: 4.5,
    reviewCount: 1100,
    badge: "Best Value with Pen Included",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80",
    storePrices: {
      "Amazon.in": 33999,
      Flipkart: 35999,
      Croma: 36999,
      "Vijay Sales": 34999,
      "Reliance Digital": 35500
    },
    discounts: {
      bestStore: "Amazon.in",
      lowestPrice: 33999,
      discountPercent: 24,
      coupon: "S9FESAVE6000",
      bankOffer: "S Pen INCLUDED free in retail box (₹7,000 value)"
    },
    specs: {
      "Display & Screen": '10.9" WUXGA+ (2304 x 1440) 90Hz Display with Vision Booster',
      "Performance & Processor": "Exynos 1380 Octa-Core (5nm) | 6GB RAM + 128GB Storage (Expandable 1TB)",
      "S-Pen & Multimedia": "S Pen Included in Box | Dual AKG Tuned Speakers with Dolby Atmos",
      "Battery & IP Rating": "8000mAh Battery (45W Fast Charge) | IP68 Water & Dust Resistance",
      "Warranty & In-Box": "1 Year Samsung Warranty | S Pen Stylus, Type-C Cable & Ejection Pin Included"
    },
    pros: ["IP68 water resistant body & S Pen", "S Pen included free in box"],
    cons: ["LCD display instead of AMOLED"],
    reviews: [
      { id: "r26", user: "Siddharth R.", rating: 4.5, comment: "Great tab for PDF annotation and streaming.", date: "2024-05-16", verified: true, sentimentScore: 90 }
    ]
  },
  {
    id: "mon-01",
    name: "LG Ultragear 27GP850-B",
    brand: "LG",
    category: "Monitors",
    mrp: 44900,
    rating: 4.7,
    reviewCount: 3800,
    badge: "Best 1440p Gaming Monitor",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    storePrices: {
      "Amazon.in": 27999,
      Flipkart: 29999,
      Croma: 30999,
      "Vijay Sales": 28999,
      "Reliance Digital": 29500
    },
    discounts: {
      bestStore: "Amazon.in",
      lowestPrice: 27999,
      discountPercent: 37,
      coupon: "LGMONITOR3000",
      bankOffer: "Flat ₹2,500 Instant Coupon"
    },
    specs: {
      "Display & Panel": '27" QHD (2560 x 1440) Nano IPS Panel (DCI-P3 98%, VESA DisplayHDR 400)',
      "Gaming Speed": "165Hz Refresh Rate (OC 180Hz) | 1ms (GTG) Response Time",
      "Adaptive Sync": "NVIDIA G-Sync Compatible & AMD FreeSync Premium",
      "Ergonomics & Ports": "Tilt, Height, Pivot Adjustable Stand | 2x HDMI, DisplayPort, USB 3.0 Hub",
      "Warranty & In-Box": "3 Years LG Onsite Warranty | DisplayPort Cable & HDMI Cable Included"
    },
    pros: ["Lightning 1ms GTG response rate", "Nano IPS vibrant color accuracy"],
    cons: ["HDR 400 is entry-level HDR"],
    reviews: [
      { id: "r27", user: "Nathan P.", rating: 5, comment: "Zero ghosting in fast-paced Valorant and CS2 matches.", date: "2024-05-24", verified: true, sentimentScore: 96 }
    ]
  }
];

export const CATEGORIES = ["All", "Smartphones", "Laptops", "Audio", "Smartwatches", "Tablets", "Monitors"];
export const STORES = ["Amazon.in", "Flipkart", "Croma", "Vijay Sales", "Reliance Digital"];
