import { Product, CartItem } from './types';

// Product data with pricing
export const products: Product[] = [
  // Vegetable Powders
  { id: 'ladyfinger', name: 'Lady Finger Powder', category: 'vegetable', pricePerGram: 2, benefits: 'Rich in fiber, aids digestion, supports blood sugar control', nutrition: 'High in Vitamin C, Vitamin K, Folate', uses: 'Smoothies, soups, curries, health drinks' },
  { id: 'lemon', name: 'Lemon Powder', category: 'vegetable', pricePerGram: 2, benefits: 'Boosts immunity, aids detoxification, improves skin health', nutrition: 'High in Vitamin C, Citric acid, Antioxidants', uses: 'Beverages, marinades, baking, skincare' },
  { id: 'bittergourd', name: 'Bitter Gourd Powder', category: 'vegetable', pricePerGram: 2, benefits: 'Controls blood sugar, improves digestion, boosts immunity', nutrition: 'High in Vitamin C, Iron, Potassium', uses: 'Health drinks, capsules, cooking' },
  { id: 'carrot', name: 'Carrot Powder', category: 'vegetable', pricePerGram: 2, benefits: 'Improves vision, promotes skin health, rich in antioxidants', nutrition: 'High in Beta-carotene, Vitamin A, Fiber', uses: 'Smoothies, soups, baby food, baking' },
  { id: 'cabbage', name: 'Cabbage Powder', category: 'vegetable', pricePerGram: 2, benefits: 'Supports gut health, anti-inflammatory, aids weight loss', nutrition: 'High in Vitamin C, Vitamin K, Fiber', uses: 'Soups, salads, health drinks' },
  { id: 'beetroot', name: 'Beetroot Powder', category: 'vegetable', pricePerGram: 2, benefits: 'Boosts stamina, lowers blood pressure, improves blood flow', nutrition: 'High in Iron, Folate, Nitrates', uses: 'Smoothies, pre-workout, natural coloring' },
  { id: 'tomato', name: 'Tomato Powder', category: 'vegetable', pricePerGram: 2, benefits: 'Rich in lycopene, supports heart health, improves skin', nutrition: 'High in Vitamin C, Lycopene, Potassium', uses: 'Sauces, soups, gravies, seasoning' },
  { id: 'peas', name: 'Peas Powder', category: 'vegetable', pricePerGram: 2, benefits: 'High protein content, supports muscle growth, aids digestion', nutrition: 'High in Protein, Fiber, Vitamin K', uses: 'Protein shakes, soups, baby food' },
  { id: 'broccoli', name: 'Broccoli Powder', category: 'vegetable', pricePerGram: 2, benefits: 'Cancer-fighting properties, boosts immunity, detoxifies body', nutrition: 'High in Vitamin C, Vitamin K, Sulforaphane', uses: 'Smoothies, soups, health supplements' },
  { id: 'spinach', name: 'Spinach Powder', category: 'vegetable', pricePerGram: 2, benefits: 'Improves bone health, boosts energy, rich in iron', nutrition: 'High in Iron, Calcium, Vitamin A', uses: 'Smoothies, pasta, soups, baby food' },
  { id: 'potato', name: 'Potato Powder', category: 'vegetable', pricePerGram: 2, benefits: 'Good source of energy, aids digestion, versatile cooking ingredient', nutrition: 'High in Potassium, Vitamin C, Carbohydrates', uses: 'Thickening agent, baking, instant foods' },
  { id: 'capsicum', name: 'Capsicum Powder', category: 'vegetable', pricePerGram: 2, benefits: 'Boosts metabolism, rich in antioxidants, improves eye health', nutrition: 'High in Vitamin C, Vitamin A, Capsaicin', uses: 'Seasoning, cooking, health supplements' },

  // Leafy Powders
  { id: 'palak', name: 'Palak Powder', category: 'leafy', pricePerGram: 2, benefits: 'Strengthens bones, improves eyesight, boosts hemoglobin', nutrition: 'High in Iron, Calcium, Vitamin A, K', uses: 'Rotis, parathas, smoothies, curries' },
  { id: 'moringa', name: 'Moringa Powder', category: 'leafy', pricePerGram: 2, benefits: 'Superfood with 90+ nutrients, anti-inflammatory, boosts energy', nutrition: 'High in Protein, Calcium, Iron, Vitamins', uses: 'Tea, smoothies, health drinks, capsules' },
  { id: 'methi', name: 'Methi Powder', category: 'leafy', pricePerGram: 2, benefits: 'Controls diabetes, aids lactation, improves hair health', nutrition: 'High in Fiber, Iron, Manganese', uses: 'Cooking, hair care, health drinks' },
  { id: 'neem', name: 'Neem Powder', category: 'leafy', pricePerGram: 2, benefits: 'Blood purifier, antibacterial, improves skin health', nutrition: 'High in Antioxidants, Nimbidin, Quercetin', uses: 'Face packs, health supplements, pesticide' },
  { id: 'pudina', name: 'Pudina Powder', category: 'leafy', pricePerGram: 2, benefits: 'Aids digestion, freshens breath, relieves headaches', nutrition: 'High in Vitamin A, Menthol, Antioxidants', uses: 'Chutneys, beverages, cooking, tea' },
  { id: 'kothimeera', name: 'Kothimeera Powder', category: 'leafy', pricePerGram: 2, benefits: 'Detoxifies heavy metals, aids digestion, rich in antioxidants', nutrition: 'High in Vitamin K, Vitamin C, Manganese', uses: 'Seasoning, chutneys, garnishing' },
  { id: 'thotakura', name: 'Thota Kura Powder', category: 'leafy', pricePerGram: 2, benefits: 'Rich in calcium, improves bone health, boosts immunity', nutrition: 'High in Calcium, Iron, Vitamin A', uses: 'Traditional dishes, health drinks' },
  { id: 'gongura', name: 'Gongura Powder', category: 'leafy', pricePerGram: 2, benefits: 'Aids digestion, rich in iron, traditional Andhra superfood', nutrition: 'High in Iron, Vitamin C, Antioxidants', uses: 'Pickles, curries, chutneys' },
  { id: 'chukka', name: 'Chukka Powder', category: 'leafy', pricePerGram: 2, benefits: 'Aids weight loss, improves digestion, reduces inflammation', nutrition: 'High in Vitamin C, Oxalic acid, Fiber', uses: 'Curries, soups, traditional dishes' },

  // Fruit Powders
  { id: 'jackfruit', name: 'Jackfruit Powder', category: 'fruit', pricePerGram: 2, benefits: 'Boosts immunity, aids digestion, rich in antioxidants', nutrition: 'High in Vitamin C, Potassium, Fiber', uses: 'Smoothies, desserts, baking' },
  { id: 'orange', name: 'Orange Powder', category: 'fruit', pricePerGram: 2, benefits: 'Boosts immunity, improves skin health, rich in Vitamin C', nutrition: 'High in Vitamin C, Flavonoids, Fiber', uses: 'Beverages, baking, skincare' },
  { id: 'apple', name: 'Apple Powder', category: 'fruit', pricePerGram: 2, benefits: 'Supports heart health, aids weight loss, improves gut health', nutrition: 'High in Fiber, Vitamin C, Antioxidants', uses: 'Smoothies, baby food, baking' },
  { id: 'prunes', name: 'Prunes Powder', category: 'fruit', pricePerGram: 2, benefits: 'Improves bone health, aids digestion, natural laxative', nutrition: 'High in Fiber, Vitamin K, Potassium', uses: 'Health drinks, baking, baby food' },
  { id: 'mango', name: 'Mango Powder', category: 'fruit', pricePerGram: 2, benefits: 'Boosts immunity, improves digestion, rich in vitamins', nutrition: 'High in Vitamin A, Vitamin C, Fiber', uses: 'Beverages, desserts, marinades' },
  { id: 'kiwi', name: 'Kiwi Powder', category: 'fruit', pricePerGram: 2, benefits: 'Improves digestion, boosts immunity, supports heart health', nutrition: 'High in Vitamin C, Vitamin K, Fiber', uses: 'Smoothies, desserts, skincare' },
  { id: 'pineapple', name: 'Pineapple Powder', category: 'fruit', pricePerGram: 2, benefits: 'Aids digestion, reduces inflammation, boosts immunity', nutrition: 'High in Vitamin C, Bromelain, Manganese', uses: 'Beverages, marinades, desserts' },
  { id: 'strawberry', name: 'Strawberry Powder', category: 'fruit', pricePerGram: 2, benefits: 'Rich in antioxidants, supports heart health, improves skin', nutrition: 'High in Vitamin C, Manganese, Folate', uses: 'Smoothies, baking, desserts' },
  { id: 'banana', name: 'Banana Powder', category: 'fruit', pricePerGram: 2, benefits: 'Instant energy, aids digestion, rich in potassium', nutrition: 'High in Potassium, Vitamin B6, Fiber', uses: 'Baby food, smoothies, baking' },
  { id: 'sapota', name: 'Sapota Powder', category: 'fruit', pricePerGram: 2, benefits: 'Boosts energy, improves digestion, supports bone health', nutrition: 'High in Vitamin A, Vitamin C, Calcium', uses: 'Milkshakes, desserts, baby food' },
  { id: 'badam', name: 'Badam Powder', category: 'fruit', pricePerGram: 2, benefits: 'Brain health, improves memory, rich in healthy fats', nutrition: 'High in Vitamin E, Protein, Healthy Fats', uses: 'Milk, desserts, skincare' },
  { id: 'cranberry', name: 'Cranberry Powder', category: 'fruit', pricePerGram: 2, benefits: 'Prevents UTI, rich in antioxidants, supports heart health', nutrition: 'High in Vitamin C, Proanthocyanidins', uses: 'Smoothies, baking, supplements' },
  { id: 'amla', name: 'Amla Powder', category: 'fruit', pricePerGram: 2, benefits: 'Richest source of Vitamin C, improves hair and skin', nutrition: 'High in Vitamin C, Antioxidants, Fiber', uses: 'Health drinks, hair care, cooking' },
  { id: 'mangoplum', name: 'Mango Plum Powder', category: 'fruit', pricePerGram: 2, benefits: 'Aids digestion, cooling effect, rich in minerals', nutrition: 'High in Vitamin C, Calcium, Iron', uses: 'Beverages, chutneys, pickles' },
  { id: 'pomegranate', name: 'Pomegranate Powder', category: 'fruit', pricePerGram: 2, benefits: 'Powerful antioxidant, supports heart health, anti-inflammatory', nutrition: 'High in Vitamin C, Vitamin K, Punicalagins', uses: 'Smoothies, supplements, skincare' },

  // ABC Powder - Premium pricing
  { id: 'abc', name: 'ABC Powder', category: 'vegetable', pricePerGram: 4, benefits: 'Immunity booster blend of Amla, Beetroot, and Carrot', nutrition: 'High in Vitamin C, Iron, Beta-carotene, Antioxidants', uses: 'Daily health drink, smoothies, supplements' },
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
  { icon: '🌍', title: 'Bulk & Export Orders', description: 'International shipping and custom pricing for exports' },
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
