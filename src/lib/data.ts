import { Product, CartItem } from './types';

// Product data with pricing
export const products: Product[] = [

  // Vegetable Powders
  { id: 'ladyfinger', name: 'Lady Finger Powder (Bendakaya)', category: 'vegetable', pricePerGram: 2, benefits: 'Rich in fiber, aids digestion, supports blood sugar control', nutrition: 'High in Vitamin C, Vitamin K, Folate', uses: 'Smoothies, soups, curries, health drinks' },

  { id: 'lemon', name: 'Lemon Powder (Nimma Kaya)', category: 'vegetable', pricePerGram: 2, benefits: 'Boosts immunity, aids detoxification, improves skin health', nutrition: 'High in Vitamin C, Citric acid, Antioxidants', uses: 'Beverages, marinades, baking, skincare' },

  { id: 'bittergourd', name: 'Bitter Gourd Powder (Kakara Kaya)', category: 'vegetable', pricePerGram: 2, benefits: 'Controls blood sugar, improves digestion, boosts immunity', nutrition: 'High in Vitamin C, Iron, Potassium', uses: 'Health drinks, capsules, cooking' },

  { id: 'carrot', name: 'Carrot Powder (Gajjara)', category: 'vegetable', pricePerGram: 2, benefits: 'Improves vision, promotes skin health, rich in antioxidants', nutrition: 'High in Beta-carotene, Vitamin A, Fiber', uses: 'Smoothies, soups, baby food, baking' },

  { id: 'cabbage', name: 'Cabbage Powder (Kosu)', category: 'vegetable', pricePerGram: 2, benefits: 'Supports gut health, anti-inflammatory, aids weight loss', nutrition: 'High in Vitamin C, Vitamin K, Fiber', uses: 'Soups, salads, health drinks' },

  { id: 'beetroot', name: 'Beetroot Powder (Beets)', category: 'vegetable', pricePerGram: 2, benefits: 'Boosts stamina, lowers blood pressure, improves blood flow', nutrition: 'High in Iron, Folate, Nitrates', uses: 'Smoothies, pre-workout, natural coloring' },

  { id: 'tomato', name: 'Tomato Powder (Tamata)', category: 'vegetable', pricePerGram: 2, benefits: 'Rich in lycopene, supports heart health, improves skin', nutrition: 'High in Vitamin C, Lycopene, Potassium', uses: 'Sauces, soups, gravies, seasoning' },

  { id: 'peas', name: 'Peas Powder (Batani)', category: 'vegetable', pricePerGram: 2, benefits: 'High protein content, supports muscle growth, aids digestion', nutrition: 'High in Protein, Fiber, Vitamin K', uses: 'Protein shakes, soups, baby food' },

  { id: 'broccoli', name: 'Broccoli Powder', category: 'vegetable', pricePerGram: 2, benefits: 'Cancer-fighting properties, boosts immunity, detoxifies body', nutrition: 'High in Vitamin C, Vitamin K, Sulforaphane', uses: 'Smoothies, soups, health supplements' },

  { id: 'spinach', name: 'Spinach Powder (Palakura)', category: 'vegetable', pricePerGram: 2, benefits: 'Improves bone health, boosts energy, rich in iron', nutrition: 'High in Iron, Calcium, Vitamin A', uses: 'Smoothies, pasta, soups, baby food' },

  { id: 'potato', name: 'Potato Powder (Bangala Dumpa)', category: 'vegetable', pricePerGram: 2, benefits: 'Good source of energy, aids digestion, versatile cooking ingredient', nutrition: 'High in Potassium, Vitamin C, Carbohydrates', uses: 'Thickening agent, baking, instant foods' },

  { id: 'capsicum', name: 'Capsicum Powder (Mirapa Kaya)', category: 'vegetable', pricePerGram: 2, benefits: 'Boosts metabolism, rich in antioxidants, improves eye health', nutrition: 'High in Vitamin C, Vitamin A, Capsaicin', uses: 'Seasoning, cooking, health supplements' },


  // Leafy Powders
  { id: 'palak', name: 'Palak Powder (Palakura)', category: 'leafy', pricePerGram: 2, benefits: 'Strengthens bones, improves eyesight, boosts hemoglobin', nutrition: 'High in Iron, Calcium, Vitamin A, K', uses: 'Rotis, parathas, smoothies, curries' },

  { id: 'moringa', name: 'Moringa Powder (Munaga Aaku)', category: 'leafy', pricePerGram: 2, benefits: 'Superfood with 90+ nutrients, anti-inflammatory, boosts energy', nutrition: 'High in Protein, Calcium, Iron, Vitamins', uses: 'Tea, smoothies, health drinks, capsules' },

  { id: 'methi', name: 'Methi Powder (Menthi Aaku)', category: 'leafy', pricePerGram: 2, benefits: 'Controls diabetes, aids lactation, improves hair health', nutrition: 'High in Fiber, Iron, Manganese', uses: 'Cooking, hair care, health drinks' },

  { id: 'neem', name: 'Neem Powder (Vepa Aaku)', category: 'leafy', pricePerGram: 2, benefits: 'Blood purifier, antibacterial, improves skin health', nutrition: 'High in Antioxidants, Nimbidin, Quercetin', uses: 'Face packs, health supplements, pesticide' },

  { id: 'pudina', name: 'Pudina Powder (Pudina Aaku)', category: 'leafy', pricePerGram: 2, benefits: 'Aids digestion, freshens breath, relieves headaches', nutrition: 'High in Vitamin A, Menthol, Antioxidants', uses: 'Chutneys, beverages, cooking, tea' },

  { id: 'kothimeera', name: 'Kothimeera Powder (Dhaniyalu Aaku)', category: 'leafy', pricePerGram: 2, benefits: 'Detoxifies heavy metals, aids digestion, rich in antioxidants', nutrition: 'High in Vitamin K, Vitamin C, Manganese', uses: 'Seasoning, chutneys, garnishing' },

  { id: 'thotakura', name: 'Thota Kura Powder', category: 'leafy', pricePerGram: 2, benefits: 'Rich in calcium, improves bone health, boosts immunity', nutrition: 'High in Calcium, Iron, Vitamin A', uses: 'Traditional dishes, health drinks' },

  { id: 'gongura', name: 'Gongura Powder', category: 'leafy', pricePerGram: 2, benefits: 'Aids digestion, rich in iron, traditional Andhra superfood', nutrition: 'High in Iron, Vitamin C, Antioxidants', uses: 'Pickles, curries, chutneys' },

  { id: 'chukka', name: 'Chukka Powder (Chukka Kura)', category: 'leafy', pricePerGram: 2, benefits: 'Aids weight loss, improves digestion, reduces inflammation', nutrition: 'High in Vitamin C, Oxalic acid, Fiber', uses: 'Curries, soups, traditional dishes' },


  // Fruit Powders
  { id: 'jackfruit', name: 'Jackfruit Powder (Panasa)', category: 'fruit', pricePerGram: 2, benefits: 'Boosts immunity, aids digestion, rich in antioxidants', nutrition: 'High in Vitamin C, Potassium, Fiber', uses: 'Smoothies, desserts, baking' },

  { id: 'orange', name: 'Orange Powder (Kamala Pandu)', category: 'fruit', pricePerGram: 2, benefits: 'Boosts immunity, improves skin health, rich in Vitamin C', nutrition: 'High in Vitamin C, Flavonoids, Fiber', uses: 'Beverages, baking, skincare' },

  { id: 'apple', name: 'Apple Powder (Sebu)', category: 'fruit', pricePerGram: 2, benefits: 'Supports heart health, aids weight loss, improves gut health', nutrition: 'High in Fiber, Vitamin C, Antioxidants', uses: 'Smoothies, baby food, baking' },

  { id: 'mango', name: 'Mango Powder (Mamidi Pandu)', category: 'fruit', pricePerGram: 2, benefits: 'Boosts immunity, improves digestion, rich in vitamins', nutrition: 'High in Vitamin A, Vitamin C, Fiber', uses: 'Beverages, desserts, marinades' },

  { id: 'banana', name: 'Banana Powder (Arati Pandu)', category: 'fruit', pricePerGram: 2, benefits: 'Instant energy, aids digestion, rich in potassium', nutrition: 'High in Potassium, Vitamin B6, Fiber', uses: 'Baby food, smoothies, baking' },

  { id: 'sapota', name: 'Sapota Powder (Sapota Pandu)', category: 'fruit', pricePerGram: 2, benefits: 'Boosts energy, improves digestion, supports bone health', nutrition: 'High in Vitamin A, Vitamin C, Calcium', uses: 'Milkshakes, desserts, baby food' },

  { id: 'amla', name: 'Amla Powder (Usirikaya)', category: 'fruit', pricePerGram: 2, benefits: 'Richest source of Vitamin C, improves hair and skin', nutrition: 'High in Vitamin C, Antioxidants, Fiber', uses: 'Health drinks, hair care, cooking' },

  { id: 'pomegranate', name: 'Pomegranate Powder (Danima)', category: 'fruit', pricePerGram: 2, benefits: 'Powerful antioxidant, supports heart health, anti-inflammatory', nutrition: 'High in Vitamin C, Vitamin K, Punicalagins', uses: 'Smoothies, supplements, skincare' },


  // Special
  { id: 'abc', name: 'ABC Powder (Amla-Beetroot-Carrot Mix)', category: 'vegetable', pricePerGram: 4, benefits: 'Immunity booster blend of Amla, Beetroot, and Carrot', nutrition: 'High in Vitamin C, Iron, Beta-carotene, Antioxidants', uses: 'Daily health drink, smoothies, supplements' },

  { id: 'papaya-leaf', name: 'Papaya Leaf Powder (Boppayi Aaku)', category: 'leafy', pricePerGram: 2, benefits: 'Supports immunity, improves platelet count, detoxifies body', nutrition: 'High in Vitamin A, C, Antioxidants', uses: 'Health drinks, herbal remedies' },

  { id: 'green-banana', name: 'Green Banana Powder (Pachi Arati Pandu)', category: 'fruit', pricePerGram: 2, benefits: 'Improves gut health, controls sugar levels, boosts energy', nutrition: 'High in Resistant Starch, Fiber, Potassium', uses: 'Health drinks, baby food, porridge' },

  { id: 'ginger', name: 'Ginger Powder (Allam)', category: 'vegetable', pricePerGram: 2, benefits: 'Improves digestion, relieves cold, boosts immunity', nutrition: 'High in Gingerol, Vitamin B6, Magnesium', uses: 'Tea, cooking, health drinks' },

  { id: 'curry-leaf', name: 'Curry Leaf Powder (Karivepaku)', category: 'leafy', pricePerGram: 2, benefits: 'Promotes hair growth, controls diabetes, improves digestion', nutrition: 'High in Iron, Calcium, Vitamin A', uses: 'Curries, chutneys, health drinks' },

  { id: 'betel-leaf', name: 'Betel Leaf Powder (Tamalapaku)', category: 'leafy', pricePerGram: 2, benefits: 'Improves digestion, antibacterial, boosts metabolism', nutrition: 'High in Calcium, Vitamin C, Antioxidants', uses: 'Herbal drinks, traditional remedies' },

  { id: 'amchur', name: 'Amchur Powder (Mamidi Podi)', category: 'fruit', pricePerGram: 2, benefits: 'Improves digestion, enhances taste, rich in Vitamin C', nutrition: 'High in Vitamin C, Antioxidants', uses: 'Cooking, seasoning, chutneys' },
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
    case 'vegetable': return 'Vegetable Powder';
    case 'leafy': return 'Leafy Powder';
    case 'fruit': return 'Fruit Powder';
    default: return category;
  }
};

export const getCategoryEmoji = (category: string): string => {
  switch (category) {
    case 'vegetable': return '🥕';
    case 'leafy': return '🌿';
    case 'fruit': return '🍎';
    default: return '🌱';
  }
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

export const generateWhatsAppMessage = (cartItems: CartItem[], totalWeight: number, totalPrice: number): string => {
  const itemsList = cartItems.map(item => 
    `• ${item.product.name} - ${item.quantity}g - ₹${item.price}`
  ).join('\n');

  return encodeURIComponent(
    `Hello AUM Organic Powders,\n\nI want to order:\n\n${itemsList}\n\n` +
    `Total Weight: ${totalWeight >= 1000 ? `${(totalWeight/1000).toFixed(1)}kg` : `${totalWeight}g`}\n` +
    `Total Price: ₹${totalPrice}\n\n` +
    `Delivery Location: [Please add your address]\n\n` +
    `Thank you!`
  );
};

export const WHATSAPP_NUMBER = '918985350182';
export const BULK_ORDER_THRESHOLD = 25000; // 25kg in grams
