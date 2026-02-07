import { Product, CartItem } from './types';

// Product data with pricing - ORDERED AS SPECIFIED
export const products: Product[] = [

  // ========== RAW VEG POWDERS ==========
  { 
    id: 'beetroot', 
    name: 'Beetroot Powder (Beetroot)', 
    category: 'vegetable', 
    pricePerGram: 2, 
    benefits: 'Boosts stamina, lowers blood pressure, improves blood flow', 
    nutrition: 'High in Iron, Folate, Nitrates', 
    uses: 'Smoothies, pre-workout, natural coloring',
    ingredients: 'Beetroot'
  },
  { 
    id: 'carrot', 
    name: 'Carrot Powder (Gajjara)', 
    category: 'vegetable', 
    pricePerGram: 2, 
    benefits: 'Improves vision, promotes skin health, rich in antioxidants', 
    nutrition: 'High in Beta-carotene, Vitamin A, Fiber', 
    uses: 'Smoothies, soups, baby food, baking',
    ingredients: 'Carrot'
  },
  { 
    id: 'tomato', 
    name: 'Tomato Powder (Tamata)', 
    category: 'vegetable', 
    pricePerGram: 2, 
    benefits: 'Rich in lycopene, supports heart health, improves skin', 
    nutrition: 'High in Vitamin C, Lycopene, Potassium', 
    uses: 'Sauces, soups, gravies, seasoning',
    ingredients: 'Tomato'
  },
  { 
    id: 'ginger', 
    name: 'Ginger Powder (Allam)', 
    category: 'vegetable', 
    pricePerGram: 2, 
    benefits: 'Improves digestion, relieves cold, boosts immunity', 
    nutrition: 'High in Gingerol, Vitamin B6, Magnesium', 
    uses: 'Tea, cooking, health drinks',
    ingredients: 'Ginger'
  },
  { 
    id: 'lemon', 
    name: 'Lemon Powder (Nimma Kaya)', 
    category: 'vegetable', 
    pricePerGram: 2, 
    benefits: 'Boosts immunity, aids detoxification, improves skin health', 
    nutrition: 'High in Vitamin C, Citric acid, Antioxidants', 
    uses: 'Beverages, marinades, baking, skincare',
    ingredients: 'Lemon'
  },
  { 
    id: 'green-banana', 
    name: 'Green Banana Powder (Pachi Arati Pandu)', 
    category: 'vegetable', 
    pricePerGram: 2, 
    benefits: 'Improves gut health, controls sugar levels, boosts energy', 
    nutrition: 'High in Resistant Starch, Fiber, Potassium', 
    uses: 'Health drinks, baby food, porridge',
    ingredients: 'Green Banana'
  },
  { 
    id: 'bittergourd', 
    name: 'Bitter Gourd Powder (Kakara Kaya)', 
    category: 'vegetable', 
    pricePerGram: 2, 
    benefits: 'Controls blood sugar, improves digestion, boosts immunity', 
    nutrition: 'High in Vitamin C, Iron, Potassium', 
    uses: 'Health drinks, capsules, cooking',
    ingredients: 'Bitter Gourd'
  },

  // ========== LEAFY POWDERS ==========
  { 
    id: 'moringa', 
    name: 'Moringa Powder (Munaga Aaku)', 
    category: 'leafy', 
    pricePerGram: 2, 
    benefits: 'Superfood with 90+ nutrients, anti-inflammatory, boosts energy', 
    nutrition: 'High in Protein, Calcium, Iron, Vitamins', 
    uses: 'Tea, smoothies, health drinks, capsules',
    ingredients: 'Moringa Leaves'
  },
  { 
    id: 'spinach', 
    name: 'Spinach Powder (Palakura)', 
    category: 'leafy', 
    pricePerGram: 2, 
    benefits: 'Improves bone health, boosts energy, rich in iron', 
    nutrition: 'High in Iron, Calcium, Vitamin A', 
    uses: 'Smoothies, pasta, soups, baby food',
    ingredients: 'Spinach'
  },
  { 
    id: 'curry-leaf', 
    name: 'Curry Leaf Powder (Karivepaku)', 
    category: 'leafy', 
    pricePerGram: 2, 
    benefits: 'Promotes hair growth, controls diabetes, improves digestion', 
    nutrition: 'High in Iron, Calcium, Vitamin A', 
    uses: 'Curries, chutneys, health drinks',
    ingredients: 'Curry Leaves'
  },
  { 
    id: 'pudina', 
    name: 'Mint Leaves Powder (Pudina Aaku)', 
    category: 'leafy', 
    pricePerGram: 2, 
    benefits: 'Aids digestion, freshens breath, relieves headaches', 
    nutrition: 'High in Vitamin A, Menthol, Antioxidants', 
    uses: 'Chutneys, beverages, cooking, tea',
    ingredients: 'Mint Leaves'
  },
  { 
    id: 'kothimeera', 
    name: 'Kothimeera Powder (Kothimeera Aaku)', 
    category: 'leafy', 
    pricePerGram: 2, 
    benefits: 'Detoxifies heavy metals, aids digestion, rich in antioxidants', 
    nutrition: 'High in Vitamin K, Vitamin C, Manganese', 
    uses: 'Seasoning, chutneys, garnishing',
    ingredients: 'Coriander Leaves'
  },
  { 
    id: 'gongura', 
    name: 'Gongura Powder (Gongura Aaku)', 
    category: 'leafy', 
    pricePerGram: 2, 
    benefits: 'Aids digestion, rich in iron, traditional Andhra superfood', 
    nutrition: 'High in Iron, Vitamin C, Antioxidants', 
    uses: 'Pickles, curries, chutneys',
    ingredients: 'Gongura Leaves'
  },
  { 
    id: 'thotakura', 
    name: 'Thotakura Powder (Thotakura Aaku)', 
    category: 'leafy', 
    pricePerGram: 2, 
    benefits: 'Rich in calcium, improves bone health, boosts immunity', 
    nutrition: 'High in Calcium, Iron, Vitamin A', 
    uses: 'Traditional dishes, health drinks',
    ingredients: 'Amaranth Leaves'
  },
  { 
    id: 'neem', 
    name: 'Neem Powder (Vepa Aaku)', 
    category: 'leafy', 
    pricePerGram: 2, 
    benefits: 'Blood purifier, antibacterial, improves skin health', 
    nutrition: 'High in Antioxidants, Nimbidin, Quercetin', 
    uses: 'Face packs, health supplements, pesticide',
    ingredients: 'Neem Leaves'
  },
  { 
    id: 'betel-leaf', 
    name: 'Betel Leaf Powder (Tamalapaku)', 
    category: 'leafy', 
    pricePerGram: 2, 
    benefits: 'Improves digestion, antibacterial, boosts metabolism', 
    nutrition: 'High in Calcium, Vitamin C, Antioxidants', 
    uses: 'Herbal drinks, traditional remedies',
    ingredients: 'Betel Leaves'
  },
  { 
    id: 'papaya-leaf', 
    name: 'Papaya Leaf Powder (Boppayi Aaku)', 
    category: 'leafy', 
    pricePerGram: 2, 
    benefits: 'Supports immunity, improves platelet count, detoxifies body', 
    nutrition: 'High in Vitamin A, C, Antioxidants', 
    uses: 'Health drinks, herbal remedies',
    ingredients: 'Papaya Leaves'
  },

  // ========== FRUIT POWDERS ==========
  { 
    id: 'apple', 
    name: 'Apple Powder (Sebu)', 
    category: 'fruit', 
    pricePerGram: 2, 
    benefits: 'Supports heart health, aids weight loss, improves gut health', 
    nutrition: 'High in Fiber, Vitamin C, Antioxidants', 
    uses: 'Smoothies, baby food, baking',
    ingredients: 'Apple'
  },
  { 
    id: 'banana', 
    name: 'Banana Powder (Arati Pandu)', 
    category: 'fruit', 
    pricePerGram: 2, 
    benefits: 'Instant energy, aids digestion, rich in potassium', 
    nutrition: 'High in Potassium, Vitamin B6, Fiber', 
    uses: 'Baby food, smoothies, baking',
    ingredients: 'Banana'
  },
  { 
    id: 'amla', 
    name: 'Amla Powder (Usirikaya)', 
    category: 'fruit', 
    pricePerGram: 2, 
    benefits: 'Richest source of Vitamin C, improves hair and skin', 
    nutrition: 'High in Vitamin C, Antioxidants, Fiber', 
    uses: 'Health drinks, hair care, cooking',
    ingredients: 'Amla'
  },
  { 
    id: 'amchur', 
    name: 'Amchur Powder (Mamidi Podi)', 
    category: 'fruit', 
    pricePerGram: 2, 
    benefits: 'Improves digestion, enhances taste, rich in Vitamin C', 
    nutrition: 'High in Vitamin C, Antioxidants', 
    uses: 'Cooking, seasoning, chutneys',
    ingredients: 'Raw Mango'
  },

  // ========== AUM PREMIX ==========
  { 
    id: 'abc', 
    name: 'ABC Powder (Amla-Beetroot-Carrot Mix)', 
    category: 'premix', 
    pricePerGram: 4, 
    benefits: 'Immunity booster blend of Amla, Beetroot, and Carrot', 
    nutrition: 'High in Vitamin C, Iron, Beta-carotene, Antioxidants', 
    uses: 'Daily health drink, smoothies, supplements',
    ingredients: 'Amla, Beetroot, Carrot'
  },
];


export const quantityOptions = [
  { grams: 100, label: '100g' },
  { grams: 200, label: '200g' },
  { grams: 500, label: '500g' },
  { grams: 1000, label: '1kg' },
];

export const calculatePrice = (pricePerGram: number, grams: number): number => {
  return pricePerGram * grams;
};

export const getCategoryLabel = (category: string): string => {
  switch (category) {
    case 'vegetable': return 'Raw Veg Powder';
    case 'leafy': return 'Leafy Powder';
    case 'fruit': return 'Fruit Powder';
    case 'premix': return 'AUM Premix';
    default: return category;
  }
};

export const getCategoryEmoji = (category: string): string => {
  switch (category) {
    case 'vegetable': return '🥕';
    case 'leafy': return '🌿';
    case 'fruit': return '🍎';
    case 'premix': return '⚡';
    default: return '🌱';
  }
};

// GST and Shipping constants
export const GST_RATE = 0.05; // 5% GST
export const FREE_SHIPPING_THRESHOLD = 999;
export const SHIPPING_CHARGE = 150;

// Calculate billing with GST and shipping
export const calculateBilling = (subtotal: number) => {
  const gstAmount = Math.round(subtotal * GST_RATE);
  const shippingCharge = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_CHARGE;
  const total = subtotal + gstAmount + shippingCharge;
  
  return {
    subtotal,
    gstAmount,
    shippingCharge,
    total,
    isFreeShipping: subtotal >= FREE_SHIPPING_THRESHOLD
  };
};

export const services = [
  { icon: '🌱', title: 'Solar Drying', description: 'Natural solar dehydration preserves maximum nutrition and flavor' },
  { icon: '🥬', title: 'Dehydration Processing', description: 'Advanced processing techniques for premium quality powders' },
  { icon: '📦', title: 'Bulk Supply', description: 'Large quantity orders for businesses and institutions' },
  { icon: '🌍', title: 'Bulk Orders & Customized Requirements', description: 'Custom pricing and tailored solutions for your needs' },
  { icon: '🧪', title: 'Quality Testing', description: 'Rigorous quality control and lab testing for purity' },
  { icon: '🚚', title: 'Distribution', description: 'Reliable delivery network across India and worldwide' },
  { icon: '🏭', title: 'Custom Orders', description: 'Tailored solutions for specific product requirements' },
];

export const generateWhatsAppMessage = (
  items,
  totalWeight,
  totalPrice,
  name,
  phone,
  address
) => {

  let message = `New Order - AUM Organic Powders\n\n`;

  // Customer Details (Each on New Line)
  message += `Name: ${name}\n`;
  message += `Phone: ${phone}\n`;
  message += `Address: ${address}\n\n`;

  message += `Order Details:\n\n`;

  // Product List
  items.forEach((item, index) => {
    message += `${index + 1}. ${item.product.name}\n`;
    message += `   ${item.packSize}g × ${item.packCount}\n`;
    message += `   Price: ₹${item.price}\n\n`;
  });

  // Summary
  message += `Total Weight: ${totalWeight}g\n`;
  message += `Subtotal: ₹${totalPrice}\n\n`;

  message += `Thank you for ordering from AUM Organic Powders`;

  return encodeURIComponent(message);
};

export const WHATSAPP_NUMBER = '918985350182';
export const BULK_ORDER_THRESHOLD = 25000; // 25kg in grams
