// Recipe images - existing
import moringaPowerBowl from '@/assets/recipes/moringa-power-bowl.jpg';
import beetrootSmoothie from '@/assets/recipes/beetroot-smoothie.jpg';
import spinachParatha from '@/assets/recipes/spinach-paratha.jpg';
import mangoLassi from '@/assets/recipes/mango-lassi.jpg';
import carrotHalwa from '@/assets/recipes/carrot-halwa.jpg';
import amlaImmunityShot from '@/assets/recipes/amla-immunity-shot.jpg';
import abcHealthDrink from '@/assets/recipes/abc-health-drink.jpg';
import bananaPorridge from '@/assets/recipes/banana-porridge.jpg';
import tomatoRasam from '@/assets/recipes/tomato-rasam.jpg';
import mintChutney from '@/assets/recipes/mint-chutney.jpg';
import gingerLemonTea from '@/assets/recipes/ginger-lemon-tea.jpg';
import appleOatmeal from '@/assets/recipes/apple-oatmeal.jpg';
import moringaIdli from '@/assets/recipes/moringa-idli.jpg';
import curryLeafRice from '@/assets/recipes/curry-leaf-rice.jpg';

// New recipe images
import beetrootCarrotPakodi from '@/assets/recipes/beetroot-carrot-pakodi.jpg';
import tomatoPappu from '@/assets/recipes/tomato-pappu.jpg';
import gingerPulusu from '@/assets/recipes/ginger-pulusu.jpg';
import lemonPulihora from '@/assets/recipes/lemon-pulihora.jpg';
import bananaBajji from '@/assets/recipes/banana-bajji.jpg';
import bittergourdPodi from '@/assets/recipes/bittergourd-podi.jpg';
import rainbowIdli from '@/assets/recipes/rainbow-idli.jpg';
import tomatoMasalaDosa from '@/assets/recipes/tomato-masala-dosa.jpg';
import tricolorChapati from '@/assets/recipes/tricolor-chapati.jpg';
import tomatoCarrotUpma from '@/assets/recipes/tomato-carrot-upma.jpg';
import gonguraRice from '@/assets/recipes/gongura-rice.jpg';
import greenProteinDosa from '@/assets/recipes/green-protein-dosa.jpg';
import curryMintPodi from '@/assets/recipes/curry-mint-podi.jpg';
import kothimeeraCharu from '@/assets/recipes/kothimeera-charu.jpg';
import neemHealingShot from '@/assets/recipes/neem-healing-shot.jpg';
import fruitHalwa from '@/assets/recipes/fruit-halwa.jpg';
import appleGingerPanakam from '@/assets/recipes/apple-ginger-panakam.jpg';
import amchurPachadi from '@/assets/recipes/amchur-pachadi.jpg';

// Skin care images
import antiAcneMask from '@/assets/recipes/anti-acne-mask.jpg';
import glassSkinMask from '@/assets/recipes/glass-skin-mask.jpg';
import scalpOilMask from '@/assets/recipes/scalp-oil-mask.jpg';
import detoxFacePack from '@/assets/recipes/detox-face-pack.jpg';
import vitaminCMask from '@/assets/recipes/vitamin-c-mask.jpg';
import hydratingBananaMask from '@/assets/recipes/hydrating-banana-mask.jpg';
import antiTanScrub from '@/assets/recipes/anti-tan-scrub.jpg';
import aumPowerMix from '@/assets/recipes/aum-power-mix.jpg';

export interface Recipe {
  id: number;
  name: string;
  category: string;
  time: string;
  image: string;
  powder: string;
  powderId: string;
  description: string;
  ingredients: string[];
  steps: string[];
  nutrition: {
    calories: string;
    protein: string;
    fiber: string;
    vitamins: string[];
  };
  tips: string[];
}

export const recipes: Recipe[] = [
  // ========== EXISTING RECIPES ==========
  {
    id: 1,
    name: 'Moringa Power Bowl',
    category: 'Breakfast',
    time: '10 min',
    image: moringaPowerBowl,
    powder: 'Moringa Powder',
    powderId: 'moringa',
    description: 'Nutrient-packed smoothie bowl with moringa, topped with fresh fruits, chia seeds and nuts for a powerful start to your day.',
    ingredients: [
      '1 frozen banana',
      '1 cup almond milk',
      '1 tsp AUM Moringa Powder',
      '1 tbsp honey or jaggery',
      'Fresh berries for topping',
      'Chia seeds',
      'Sliced almonds'
    ],
    steps: [
      'Add frozen banana and almond milk to a blender',
      'Add 1 teaspoon of AUM Moringa Powder',
      'Blend until smooth and creamy',
      'Pour into a bowl',
      'Top with fresh berries, banana slices, chia seeds and almonds',
      'Drizzle with honey and serve immediately'
    ],
    nutrition: {
      calories: '280 kcal',
      protein: '8g',
      fiber: '6g',
      vitamins: ['Vitamin A', 'Vitamin C', 'Iron', 'Calcium']
    },
    tips: [
      'Use frozen fruits for a thicker consistency',
      'Add more milk if you prefer a thinner texture',
      'Can substitute with any plant-based milk'
    ]
  },
  {
    id: 2,
    name: 'Beetroot Bliss Smoothie',
    category: 'Beverages',
    time: '5 min',
    image: beetrootSmoothie,
    powder: 'Beetroot Powder',
    powderId: 'beetroot',
    description: 'Vibrant pink smoothie loaded with antioxidants and natural sweetness. Perfect for pre-workout energy boost.',
    ingredients: [
      '1 cup yogurt or milk',
      '1 tsp AUM Beetroot Powder',
      '1/2 cup mixed berries',
      '1 tbsp honey',
      'Ice cubes',
      'Mint leaves for garnish'
    ],
    steps: [
      'Add yogurt or milk to blender',
      'Add AUM Beetroot Powder and mixed berries',
      'Add honey and a few ice cubes',
      'Blend until smooth',
      'Pour into a tall glass',
      'Garnish with mint leaves and serve cold'
    ],
    nutrition: {
      calories: '180 kcal',
      protein: '6g',
      fiber: '3g',
      vitamins: ['Iron', 'Folate', 'Nitrates', 'Vitamin C']
    },
    tips: [
      'Best consumed 30 minutes before workout',
      'Add a pinch of black pepper to enhance absorption',
      'Can be made into popsicles for kids'
    ]
  },
  {
    id: 3,
    name: 'Spinach Paratha',
    category: 'Main Course',
    time: '25 min',
    image: spinachParatha,
    powder: 'Spinach Powder',
    powderId: 'spinach',
    description: 'Healthy green flatbread packed with iron and vitamins. A nutritious twist to traditional Indian bread.',
    ingredients: [
      '2 cups whole wheat flour',
      '2 tbsp AUM Spinach Powder',
      'Salt to taste',
      'Water for kneading',
      'Ghee or oil for cooking',
      'Butter for serving'
    ],
    steps: [
      'Mix wheat flour and AUM Spinach Powder in a bowl',
      'Add salt and knead with water to form soft dough',
      'Rest the dough for 15 minutes',
      'Divide into small balls and roll into circles',
      'Cook on hot tawa with ghee until golden spots appear',
      'Serve hot with butter, yogurt or pickle'
    ],
    nutrition: {
      calories: '220 kcal',
      protein: '7g',
      fiber: '4g',
      vitamins: ['Iron', 'Calcium', 'Vitamin A', 'Vitamin K']
    },
    tips: [
      'Knead dough until smooth for soft parathas',
      'Can add other vegetables or spices for variation',
      'Store in airtight container for up to 8 hours'
    ]
  },
  {
    id: 4,
    name: 'Mango Lassi',
    category: 'Beverages',
    time: '5 min',
    image: mangoLassi,
    powder: 'Mango Powder',
    powderId: 'mango',
    description: 'Classic Indian yogurt drink with tropical mango flavor. Refreshing and probiotic-rich.',
    ingredients: [
      '1 cup thick yogurt',
      '2 tsp AUM Mango Powder',
      '2 tbsp sugar or honey',
      '1/2 cup cold milk',
      'Ice cubes',
      'Cardamom powder (optional)',
      'Saffron strands for garnish'
    ],
    steps: [
      'Add yogurt and cold milk to blender',
      'Add AUM Mango Powder and sugar',
      'Add cardamom powder if using',
      'Blend until frothy and smooth',
      'Add ice cubes and blend briefly',
      'Pour into glasses and garnish with saffron strands'
    ],
    nutrition: {
      calories: '200 kcal',
      protein: '8g',
      fiber: '1g',
      vitamins: ['Vitamin A', 'Vitamin C', 'Probiotics', 'Calcium']
    },
    tips: [
      'Use hung curd for thicker lassi',
      'Adjust sweetness to taste',
      'Can add fresh mango pieces for texture'
    ]
  },
  {
    id: 5,
    name: 'Carrot Halwa',
    category: 'Desserts',
    time: '30 min',
    image: carrotHalwa,
    powder: 'Carrot Powder',
    powderId: 'carrot',
    description: 'Traditional Indian sweet made easy with carrot powder. Rich, aromatic and festive dessert.',
    ingredients: [
      '1/4 cup AUM Carrot Powder',
      '2 cups milk',
      '1/4 cup ghee',
      '1/2 cup sugar or jaggery',
      '1/4 tsp cardamom powder',
      'Cashews and almonds for garnish',
      'Raisins'
    ],
    steps: [
      'Heat milk in a pan and add AUM Carrot Powder',
      'Mix well to avoid lumps and cook on medium heat',
      'Stir continuously until milk reduces by half',
      'Add ghee and continue cooking',
      'Add sugar and mix until well combined',
      'Add cardamom powder and dry fruits',
      'Garnish with more nuts and serve warm'
    ],
    nutrition: {
      calories: '320 kcal',
      protein: '6g',
      fiber: '2g',
      vitamins: ['Beta-carotene', 'Vitamin A', 'Calcium']
    },
    tips: [
      'Slow cooking gives better taste',
      'Can be refrigerated for up to 5 days',
      'Reduce sugar for healthier version'
    ]
  },
  {
    id: 6,
    name: 'Amla Immunity Shot',
    category: 'Health Drinks',
    time: '3 min',
    image: amlaImmunityShot,
    powder: 'Amla Powder',
    powderId: 'amla',
    description: 'Powerful immunity booster with highest Vitamin C content. Daily wellness ritual.',
    ingredients: [
      '1/2 tsp AUM Amla Powder',
      '1 glass warm water',
      '1 tsp honey',
      'Pinch of black pepper',
      'Squeeze of lemon (optional)'
    ],
    steps: [
      'Warm a glass of water (not boiling)',
      'Add AUM Amla Powder and stir well',
      'Add honey and black pepper',
      'Add a squeeze of lemon if desired',
      'Stir and drink immediately',
      'Best consumed on empty stomach'
    ],
    nutrition: {
      calories: '30 kcal',
      protein: '0g',
      fiber: '1g',
      vitamins: ['Vitamin C', 'Antioxidants', 'Iron']
    },
    tips: [
      'Take daily for best immunity benefits',
      'Do not use hot water as it destroys Vitamin C',
      'Can add to juices for taste variation'
    ]
  },
  {
    id: 7,
    name: 'ABC Immunity Booster',
    category: 'Health Drinks',
    time: '5 min',
    image: abcHealthDrink,
    powder: 'ABC Powder',
    powderId: 'abc',
    description: 'Premium blend of Apple, Beetroot and Carrot for complete immunity support and daily wellness.',
    ingredients: [
      '1 tsp AUM ABC Powder',
      '1 cup water or milk',
      '1 tbsp honey',
      'Pinch of cinnamon',
      'Ice cubes (optional)'
    ],
    steps: [
      'Add water or milk to a glass',
      'Add AUM ABC Powder and stir well',
      'Add honey and cinnamon',
      'Mix until completely dissolved',
      'Add ice cubes if preferred',
      'Drink fresh for maximum benefits'
    ],
    nutrition: {
      calories: '80 kcal',
      protein: '1g',
      fiber: '2g',
      vitamins: ['Vitamin C', 'Iron', 'Beta-carotene', 'Antioxidants']
    },
    tips: [
      'Best consumed in morning',
      'Can be mixed with smoothies',
      'Suitable for all age groups'
    ]
  },
  {
    id: 8,
    name: 'Banana Baby Porridge',
    category: 'Baby Food',
    time: '10 min',
    image: bananaPorridge,
    powder: 'Banana Powder',
    powderId: 'banana',
    description: 'Smooth and nutritious baby food made with natural banana powder. Perfect for weaning babies 6+ months.',
    ingredients: [
      '2 tbsp AUM Banana Powder',
      '1/2 cup warm water or milk',
      '1 tsp ghee (optional)',
      'Mashed banana for topping'
    ],
    steps: [
      'Take warm water or milk in a bowl',
      'Add AUM Banana Powder gradually',
      'Stir continuously to avoid lumps',
      'Cook for 2-3 minutes if using milk',
      'Add ghee for richness',
      'Cool to safe temperature and serve',
      'Top with mashed banana pieces'
    ],
    nutrition: {
      calories: '120 kcal',
      protein: '2g',
      fiber: '2g',
      vitamins: ['Potassium', 'Vitamin B6', 'Fiber', 'Energy']
    },
    tips: [
      'Always check temperature before feeding',
      'Start with thin consistency for new babies',
      'Can mix with other fruit powders'
    ]
  },
  {
    id: 9,
    name: 'Tomato Rasam',
    category: 'Soups',
    time: '20 min',
    image: tomatoRasam,
    powder: 'Tomato Powder',
    powderId: 'tomato',
    description: 'Traditional South Indian soup with tangy tomato flavor. Perfect comfort food for cold days.',
    ingredients: [
      '2 tbsp AUM Tomato Powder',
      '3 cups water',
      '1 tsp rasam powder',
      'Salt to taste',
      'Curry leaves',
      'Mustard seeds',
      'Ghee for tempering',
      'Coriander for garnish'
    ],
    steps: [
      'Mix AUM Tomato Powder with 3 cups water',
      'Add rasam powder and salt, bring to boil',
      'Simmer for 10 minutes',
      'In a small pan, heat ghee',
      'Add mustard seeds and curry leaves',
      'Pour tempering over rasam',
      'Garnish with fresh coriander and serve hot'
    ],
    nutrition: {
      calories: '60 kcal',
      protein: '2g',
      fiber: '2g',
      vitamins: ['Lycopene', 'Vitamin C', 'Potassium']
    },
    tips: [
      'Add tamarind water for more tang',
      'Serve with hot rice',
      'Great remedy for cold and flu'
    ]
  },
  {
    id: 10,
    name: 'Fresh Mint Chutney',
    category: 'Condiments',
    time: '10 min',
    image: mintChutney,
    powder: 'Mint Powder',
    powderId: 'pudina',
    description: 'Refreshing green chutney that goes perfectly with samosas, pakoras and sandwiches.',
    ingredients: [
      '2 tbsp AUM Mint Powder',
      '1/4 cup water',
      '1 green chili',
      '2 tbsp lemon juice',
      'Salt to taste',
      '1/2 tsp cumin powder',
      'Fresh coriander (optional)'
    ],
    steps: [
      'Add AUM Mint Powder to a bowl',
      'Add water and mix to paste consistency',
      'Add green chili (adjust to taste)',
      'Add lemon juice and salt',
      'Mix in cumin powder',
      'Blend in coriander if using',
      'Adjust consistency with water and serve'
    ],
    nutrition: {
      calories: '20 kcal',
      protein: '1g',
      fiber: '1g',
      vitamins: ['Vitamin A', 'Menthol', 'Antioxidants']
    },
    tips: [
      'Store in refrigerator for up to 1 week',
      'Add yogurt for creamy variation',
      'Great as sandwich spread'
    ]
  },
  {
    id: 11,
    name: 'Ginger Lemon Tea',
    category: 'Beverages',
    time: '8 min',
    image: gingerLemonTea,
    powder: 'Ginger Powder',
    powderId: 'ginger',
    description: 'Soothing herbal tea with ginger and lemon. Perfect for digestion and immunity.',
    ingredients: [
      '1/2 tsp AUM Ginger Powder',
      '1 cup hot water',
      '1 tsp honey',
      '1 tbsp lemon juice',
      'Tulsi leaves (optional)'
    ],
    steps: [
      'Boil water in a pan',
      'Add AUM Ginger Powder and simmer for 3 minutes',
      'Add tulsi leaves if using',
      'Strain into a cup',
      'Add honey and lemon juice',
      'Stir well and drink warm'
    ],
    nutrition: {
      calories: '35 kcal',
      protein: '0g',
      fiber: '0g',
      vitamins: ['Gingerol', 'Vitamin C', 'Antioxidants']
    },
    tips: [
      'Perfect remedy for sore throat',
      'Drink before meals for better digestion',
      'Can add turmeric for golden milk variation'
    ]
  },
  {
    id: 12,
    name: 'Apple Cinnamon Oatmeal',
    category: 'Breakfast',
    time: '15 min',
    image: appleOatmeal,
    powder: 'Apple Powder',
    powderId: 'apple',
    description: 'Warm and comforting breakfast bowl with natural apple sweetness and fiber.',
    ingredients: [
      '1/2 cup oats',
      '1 cup milk',
      '1 tbsp AUM Apple Powder',
      '1/2 tsp cinnamon',
      '1 tbsp honey',
      'Chopped walnuts',
      'Fresh apple slices'
    ],
    steps: [
      'Cook oats with milk on medium heat',
      'Add AUM Apple Powder and cinnamon',
      'Stir until creamy consistency',
      'Transfer to serving bowl',
      'Drizzle honey on top',
      'Garnish with walnuts and fresh apple slices'
    ],
    nutrition: {
      calories: '290 kcal',
      protein: '8g',
      fiber: '5g',
      vitamins: ['Fiber', 'Vitamin C', 'Antioxidants', 'Beta Glucan']
    },
    tips: [
      'Use rolled oats for creamier texture',
      'Can be made overnight for quick breakfast',
      'Add chia seeds for extra nutrition'
    ]
  },
  {
    id: 13,
    name: 'Moringa Idli',
    category: 'Breakfast',
    time: '25 min',
    image: moringaIdli,
    powder: 'Moringa Powder',
    powderId: 'moringa',
    description: 'Nutritious South Indian steamed rice cakes infused with superfood moringa.',
    ingredients: [
      '2 cups idli batter',
      '2 tbsp AUM Moringa Powder',
      'Salt to taste',
      'Coconut chutney for serving',
      'Sambar for serving'
    ],
    steps: [
      'Take fermented idli batter in a bowl',
      'Add AUM Moringa Powder and salt',
      'Mix well until evenly distributed',
      'Grease idli moulds with oil',
      'Pour batter and steam for 10-12 minutes',
      'Serve hot with coconut chutney and sambar'
    ],
    nutrition: {
      calories: '180 kcal',
      protein: '6g',
      fiber: '3g',
      vitamins: ['Protein', 'Calcium', 'Iron', 'Vitamin A']
    },
    tips: [
      'Fermented batter makes softer idlis',
      'Can add grated vegetables for variation',
      'Great for kids lunch boxes'
    ]
  },
  {
    id: 14,
    name: 'Curry Leaf Rice',
    category: 'Main Course',
    time: '20 min',
    image: curryLeafRice,
    powder: 'Curry Leaf Powder',
    powderId: 'curry-leaf',
    description: 'Aromatic South Indian rice dish with the goodness of curry leaves. Quick and flavorful.',
    ingredients: [
      '2 cups cooked rice',
      '2 tbsp AUM Curry Leaf Powder',
      '1 tbsp oil',
      'Mustard seeds',
      'Urad dal',
      'Peanuts',
      'Cashews',
      'Salt to taste'
    ],
    steps: [
      'Heat oil in a pan',
      'Add mustard seeds and urad dal',
      'When they splutter, add peanuts and cashews',
      'Add AUM Curry Leaf Powder and sauté',
      'Add cooked rice and salt',
      'Mix well until rice is evenly coated',
      'Serve hot with raita or papad'
    ],
    nutrition: {
      calories: '280 kcal',
      protein: '6g',
      fiber: '2g',
      vitamins: ['Iron', 'Vitamin A', 'Antioxidants']
    },
    tips: [
      'Use day-old rice for best results',
      'Adjust spice level to taste',
      'Can add vegetables for complete meal'
    ]
  },

  // ========== NEW RECIPES FROM DOCUMENT ==========
  {
    id: 15,
    name: 'Beetroot-Carrot Pakodi',
    category: 'Main Course',
    time: '20 min',
    image: beetrootCarrotPakodi,
    powder: 'Beetroot & Carrot Powder',
    powderId: 'beetroot',
    description: 'Traditional stir-fry with cashews. AUM powders provide intense color and concentrated sweetness.',
    ingredients: [
      '1 tbsp AUM Beetroot Powder',
      '1 tbsp AUM Carrot Powder',
      'Mustard seeds',
      'Urad dal',
      'Dried red chilies',
      'Curry leaves',
      'Chopped onions',
      'Green chilies',
      'Cashews',
      'Oil for cooking'
    ],
    steps: [
      'Sauté mustard seeds, urad dal, dried red chilies, and curry leaves in oil',
      'Add chopped onions and green chilies',
      'Mix 1 tbsp AUM Beetroot Powder and 1 tbsp AUM Carrot Powder with a little water to make thick paste',
      'Add this paste to the pan',
      'Cook until the tempering is well coated',
      'Add roasted cashews and serve hot'
    ],
    nutrition: {
      calories: '180 kcal',
      protein: '4g',
      fiber: '3g',
      vitamins: ['Beta-carotene', 'Iron', 'Folate', 'Vitamin A']
    },
    tips: [
      'Make thick paste for better coating',
      'Can use only one powder or both',
      'Serve as side dish with rice'
    ]
  },
  {
    id: 16,
    name: 'Tomato Pappu',
    category: 'Main Course',
    time: '25 min',
    image: tomatoPappu,
    powder: 'Tomato Powder',
    powderId: 'tomato',
    description: 'Traditional Tomato Lentil Curry with deep tangy flavor and vibrant red hue.',
    ingredients: [
      '1 cup toor dal',
      '2 tbsp AUM Tomato Powder',
      'Garlic cloves',
      'Cumin seeds',
      'Hing (asafoetida)',
      'Salt to taste',
      'Turmeric powder',
      'Coriander for garnish'
    ],
    steps: [
      'Pressure cook toor dal until soft',
      'In a pan, make thalimpu (tempering) with garlic, cumin, and hing',
      'Add the cooked dal',
      'Whisk 2 tbsp AUM Tomato Powder in half cup water',
      'Add to the dal and simmer for 5 minutes',
      'Garnish with coriander and serve with rice'
    ],
    nutrition: {
      calories: '220 kcal',
      protein: '12g',
      fiber: '5g',
      vitamins: ['Lycopene', 'Protein', 'Vitamin C', 'Iron']
    },
    tips: [
      'Gives deeper color than fresh tomatoes',
      'Adjust tomato powder for tang level',
      'Traditional Telugu comfort food'
    ]
  },
  {
    id: 17,
    name: 'Allam Pulusu (Ginger Stew)',
    category: 'Soups',
    time: '15 min',
    image: gingerPulusu,
    powder: 'Ginger Powder',
    powderId: 'ginger',
    description: 'Traditional Ginger Tamarind Gravy - smooth, grit-free and perfect with hot rice and ghee.',
    ingredients: [
      '1 tsp AUM Ginger Powder',
      'Tamarind (lemon-sized ball)',
      '2 tbsp jaggery (bellam)',
      '2 green chilies',
      'Salt to taste',
      'Water for cooking'
    ],
    steps: [
      'Soak tamarind in warm water and extract juice',
      'Boil tamarind water with jaggery, green chilies, and salt',
      'Add 1 tsp AUM Ginger Powder instead of fresh ginger',
      'Let it thicken on medium heat',
      'The powder creates smooth, grit-free gravy',
      'Serve hot mixed with rice and ghee'
    ],
    nutrition: {
      calories: '80 kcal',
      protein: '1g',
      fiber: '1g',
      vitamins: ['Gingerol', 'Iron', 'Antioxidants']
    },
    tips: [
      'AUM Ginger Powder is more pungent than fresh',
      'Adjust jaggery for desired sweetness',
      'Traditional Andhra digestive aid'
    ]
  },
  {
    id: 18,
    name: 'Nimmakaya Pulihora (Lemon Rice)',
    category: 'Main Course',
    time: '15 min',
    image: lemonPulihora,
    powder: 'Lemon Powder',
    powderId: 'lemon',
    description: 'Tangy lemon rice that stays non-soggy with consistent zesty tartness throughout.',
    ingredients: [
      '2 cups cooked rice',
      '1-2 tsp AUM Lemon Powder',
      'Peanuts',
      'Chana dal',
      'Green chilies',
      'Mustard seeds',
      'Curry leaves',
      'Turmeric powder',
      'Oil for tempering'
    ],
    steps: [
      'Cook rice and spread to cool',
      'Heat oil and add mustard seeds',
      'Add peanuts, chana dal, green chilies, and curry leaves',
      'Once tempering is off heat, sprinkle AUM Lemon Powder over rice',
      'Add turmeric and mix well',
      'Serve at room temperature'
    ],
    nutrition: {
      calories: '250 kcal',
      protein: '5g',
      fiber: '2g',
      vitamins: ['Vitamin C', 'Citric acid', 'Antioxidants']
    },
    tips: [
      'Prevents rice from becoming soggy unlike fresh lemon',
      'Perfect for lunch boxes',
      'Consistent tartness in every bite'
    ]
  },
  {
    id: 19,
    name: 'Aratikaaya Bajji (Banana Fritters)',
    category: 'Main Course',
    time: '20 min',
    image: bananaBajji,
    powder: 'Green Banana Powder',
    powderId: 'green-banana',
    description: 'Extra crispy fritters with prebiotic fiber boost. Superior binding agent.',
    ingredients: [
      'Besan (gram flour)',
      '30% AUM Green Banana Powder (replace besan)',
      'Rice flour',
      'Chili powder',
      'Carom seeds (vaamu)',
      'Salt to taste',
      'Vegetables or bread for dipping',
      'Oil for deep frying'
    ],
    steps: [
      'Mix besan with rice flour and spices',
      'Replace 30% of besan with AUM Green Banana Powder',
      'Add water to make thick batter',
      'Dip sliced vegetables or bread pieces',
      'Deep fry until golden and crispy',
      'Serve hot with chutney'
    ],
    nutrition: {
      calories: '200 kcal',
      protein: '4g',
      fiber: '4g',
      vitamins: ['Resistant Starch', 'Fiber', 'Potassium']
    },
    tips: [
      'Makes bajjis extra crispy outside',
      'Adds prebiotic fiber boost',
      'Great binding agent'
    ]
  },
  {
    id: 20,
    name: 'Kakarakaya Karappodi',
    category: 'Condiments',
    time: '15 min',
    image: bittergourdPodi,
    powder: 'Bitter Gourd Powder',
    powderId: 'bittergourd',
    description: 'Healthy bitter-sweet-spicy spice powder to eat with rice and oil instantly.',
    ingredients: [
      '2 tbsp AUM Bitter Gourd Powder',
      'Dry red chilies',
      'Coriander seeds',
      'Cumin seeds',
      'Garlic cloves',
      'Salt to taste'
    ],
    steps: [
      'Roast dry red chilies, coriander seeds, and cumin',
      'Add 2 tbsp AUM Bitter Gourd Powder to roasted spices',
      'Add garlic cloves and salt',
      'Grind everything together to coarse powder',
      'Store in airtight container',
      'Serve with hot rice and oil'
    ],
    nutrition: {
      calories: '40 kcal',
      protein: '2g',
      fiber: '2g',
      vitamins: ['Vitamin C', 'Iron', 'Antioxidants']
    },
    tips: [
      'Eliminates need to dry and fry fresh bitter gourd',
      'Bitter-sweet-spicy balance',
      'Great for diabetics'
    ]
  },
  {
    id: 21,
    name: 'Rainbow Idli',
    category: 'Breakfast',
    time: '20 min',
    image: rainbowIdli,
    powder: 'Beetroot & Carrot Powder',
    powderId: 'beetroot',
    description: 'Colorful steamed cakes - pink, orange and white. Visually stunning for kids!',
    ingredients: [
      '3 cups idli batter (divided into 3 bowls)',
      '1 tsp AUM Beetroot Powder',
      '1 tsp AUM Carrot Powder',
      'Salt to taste'
    ],
    steps: [
      'Divide fermented idli batter into three bowls',
      'Bowl 1: Add 1 tsp AUM Beetroot Powder (deep pink)',
      'Bowl 2: Add 1 tsp AUM Carrot Powder (bright orange)',
      'Bowl 3: Keep white (plain)',
      'Layer different colors in idli mold for rainbow effect',
      'Steam for 10-12 minutes and serve'
    ],
    nutrition: {
      calories: '160 kcal',
      protein: '5g',
      fiber: '2g',
      vitamins: ['Beta-carotene', 'Iron', 'Folate', 'Calcium']
    },
    tips: [
      'Makes idlis visually stunning for kids',
      'Works for dosa and chapati too',
      'Boosts fiber without changing texture'
    ]
  },
  {
    id: 22,
    name: 'Tomato Masala Dosa',
    category: 'Breakfast',
    time: '15 min',
    image: tomatoMasalaDosa,
    powder: 'Tomato Powder',
    powderId: 'tomato',
    description: 'Crispy dosa with caramelized tomato crust - Mysore Masala style!',
    ingredients: [
      'Dosa batter',
      '1 tsp AUM Tomato Powder',
      'Chili powder or gunpowder (podi)',
      'Oil or ghee',
      'Coconut chutney',
      'Sambar'
    ],
    steps: [
      'Spread dosa batter thin on hot tawa',
      'While top is still slightly wet, sprinkle 1 tsp AUM Tomato Powder',
      'Add pinch of chili powder or podi',
      'Drizzle oil or ghee around edges',
      'Cook until bottom is crispy (karam)',
      'Fold and serve with chutney and sambar'
    ],
    nutrition: {
      calories: '200 kcal',
      protein: '4g',
      fiber: '2g',
      vitamins: ['Lycopene', 'Vitamin C', 'Carbohydrates']
    },
    tips: [
      'Tomato powder caramelizes on heat',
      'Creates sun-dried tomato flavor',
      'Beautiful red crust like Mysore Masala'
    ]
  },
  {
    id: 23,
    name: 'Triranga Chapati',
    category: 'Main Course',
    time: '25 min',
    image: tricolorChapati,
    powder: 'Beetroot & Carrot Powder',
    powderId: 'beetroot',
    description: 'Tri-color flatbreads infused with antioxidants - soft and appetizing!',
    ingredients: [
      '2 cups whole wheat flour',
      '1 tbsp AUM Beetroot Powder (for pink)',
      '1 tbsp AUM Carrot Powder (for orange)',
      'Warm water for kneading',
      'Salt to taste',
      'Oil for cooking'
    ],
    steps: [
      'Divide flour into portions',
      'Add 1 tbsp AUM Beetroot or Carrot Powder per cup of flour',
      'Add salt and knead with warm water to soft dough',
      'Rest for 10 minutes',
      'Roll out and cook on hot tawa with oil',
      'Serve hot with curry or dal'
    ],
    nutrition: {
      calories: '180 kcal',
      protein: '5g',
      fiber: '3g',
      vitamins: ['Beta-carotene', 'Iron', 'Fiber', 'Antioxidants']
    },
    tips: [
      'Fine powder keeps chapatis soft',
      'Incredibly appetizing colors',
      'Great for kids and parties'
    ]
  },
  {
    id: 24,
    name: 'Tomato-Carrot Upma',
    category: 'Breakfast',
    time: '15 min',
    image: tomatoCarrotUpma,
    powder: 'Tomato & Carrot Powder',
    powderId: 'tomato',
    description: 'Every grain of rava infused with flavor - unlike unevenly distributed fresh pieces.',
    ingredients: [
      '1 cup semolina (rava)',
      '1 tbsp AUM Tomato Powder',
      '1 tbsp AUM Carrot Powder',
      'Mustard seeds',
      'Urad dal, chana dal',
      'Green chilies, curry leaves',
      '2 cups water',
      'Salt to taste'
    ],
    steps: [
      'Heat oil and add tempering (mustard, dals, chilies, curry leaves)',
      'Add semolina and roast until golden',
      'Mix AUM Tomato and Carrot Powder into boiling water',
      'Pour flavored water over roasted rava',
      'Stir continuously until water is absorbed',
      'Serve fluffy upma hot'
    ],
    nutrition: {
      calories: '220 kcal',
      protein: '5g',
      fiber: '2g',
      vitamins: ['Lycopene', 'Beta-carotene', 'Carbohydrates']
    },
    tips: [
      'Powders dissolve completely for even flavor',
      'No uneven vegetable pieces',
      'Perfect breakfast in 15 minutes'
    ]
  },
  {
    id: 25,
    name: 'Gongura Pulihora',
    category: 'Main Course',
    time: '20 min',
    image: gonguraRice,
    powder: 'Gongura & Thotakura Powder',
    powderId: 'gongura',
    description: 'Green tangy rice with signature Andhra tartness and earthy protein boost.',
    ingredients: [
      '2 cups cooked rice',
      '2 tbsp AUM Gongura Powder',
      '1 tbsp AUM Thotakura Powder',
      'Tamarind water (small amount)',
      'Mustard seeds, peanuts',
      'Dry red chilies',
      'Oil for tempering'
    ],
    steps: [
      'Add tempering of mustard seeds, peanuts, and dry red chilies',
      'Whisk 2 tbsp AUM Gongura Powder and 1 tbsp AUM Thotakura Powder in tamarind water',
      'Add to the tempering',
      'Mix with cooked rice',
      'Toss until rice is evenly coated',
      'Serve at room temperature'
    ],
    nutrition: {
      calories: '240 kcal',
      protein: '6g',
      fiber: '3g',
      vitamins: ['Iron', 'Vitamin C', 'Calcium', 'Antioxidants']
    },
    tips: [
      'Signature Andhra tartness',
      'Adds earthy protein boost',
      'Traditional comfort food'
    ]
  },
  {
    id: 26,
    name: 'Green Protein Dosa',
    category: 'Breakfast',
    time: '15 min',
    image: greenProteinDosa,
    powder: 'Moringa & Spinach Powder',
    powderId: 'moringa',
    description: 'Deep emerald green dosa - superfood for joint health without fibrous strands.',
    ingredients: [
      '2 cups dosa or pesarattu batter',
      '1 tbsp AUM Moringa Powder',
      '1 tbsp AUM Spinach Powder',
      'Chopped onions',
      'Green chilies',
      'Oil for cooking'
    ],
    steps: [
      'Mix dosa or pesarattu batter',
      'Add 1 tbsp Moringa Powder and 1 tbsp Spinach Powder',
      'Mix well with chopped onions and green chilies',
      'Spread on hot tawa',
      'Cook until crispy and green',
      'Serve with coconut chutney'
    ],
    nutrition: {
      calories: '180 kcal',
      protein: '8g',
      fiber: '3g',
      vitamins: ['Iron', 'Calcium', 'Protein', 'Vitamin A']
    },
    tips: [
      'Deep emerald green color',
      'No fibrous leaf strands in teeth',
      'Moringa is superfood for joints'
    ]
  },
  {
    id: 27,
    name: 'Curry-Mint Karappodi',
    category: 'Condiments',
    time: '10 min',
    image: curryMintPodi,
    powder: 'Curry Leaf & Mint Powder',
    powderId: 'curry-leaf',
    description: 'Idli spice mix with hair-growth benefits and cooling mint aftertaste.',
    ingredients: [
      'Roasted chana dal (pappulu)',
      'Dried red chilies',
      'Garlic cloves',
      'Cumin seeds',
      '3 tbsp AUM Curry Leaves Powder',
      '1 tbsp AUM Mint Leaves Powder',
      'Salt to taste'
    ],
    steps: [
      'Roast chana dal, dried red chilies, garlic, and cumin',
      'Let cool completely',
      'Add 3 tbsp AUM Curry Leaves Powder',
      'Add 1 tbsp AUM Mint Leaves Powder',
      'Pulse in blender to coarse powder',
      'Store in airtight container'
    ],
    nutrition: {
      calories: '50 kcal',
      protein: '3g',
      fiber: '2g',
      vitamins: ['Iron', 'Vitamin A', 'Menthol', 'Antioxidants']
    },
    tips: [
      'Curry leaf supports hair growth',
      'Mint adds cooling aftertaste',
      'Perfect with idli and rice'
    ]
  },
  {
    id: 28,
    name: 'Kothimeera-Betel Charu',
    category: 'Soups',
    time: '15 min',
    image: kothimeeraCharu,
    powder: 'Kothimeera & Betel Leaf Powder',
    powderId: 'kothimeera',
    description: 'Aromatic rasam with instant aroma and powerful digestive aid - perfect after heavy Biryani!',
    ingredients: [
      'Tamarind (small ball)',
      'Black pepper',
      'Cumin seeds',
      '1 tsp AUM Kothimeera Powder',
      '1/2 tsp AUM Betel Leaf Powder',
      'Salt to taste',
      'Coriander for garnish'
    ],
    steps: [
      'Boil tamarind water with pepper and cumin',
      'Add salt and simmer',
      'Just before turning off heat, add AUM Kothimeera Powder',
      'Add AUM Betel Leaf Powder',
      'Mix well and garnish with fresh coriander',
      'Serve hot as digestive soup'
    ],
    nutrition: {
      calories: '40 kcal',
      protein: '1g',
      fiber: '1g',
      vitamins: ['Vitamin K', 'Vitamin C', 'Calcium', 'Antioxidants']
    },
    tips: [
      'Instant aroma from kothimeera',
      'Betel leaf is powerful digestive aid',
      'Perfect after heavy Biryani meal'
    ]
  },
  {
    id: 29,
    name: 'Neem-Papaya Healing Shot',
    category: 'Health Drinks',
    time: '3 min',
    image: neemHealingShot,
    powder: 'Neem & Papaya Leaf Powder',
    powderId: 'neem',
    description: 'Ultimate blood purifier - prevents skin infections and boosts immunity. Take twice weekly.',
    ingredients: [
      '1/4 tsp AUM Neem Powder',
      '1/4 tsp AUM Papaya Leaf Powder',
      '1 tbsp honey',
      'Pinch of black salt',
      'Warm water'
    ],
    steps: [
      'This is a health shot, not a dish',
      'Mix 1/4 tsp AUM Neem Powder with 1/4 tsp Papaya Leaf Powder',
      'Add honey and black salt',
      'Mix with small amount of warm water',
      'Consume immediately',
      'Take twice a week for best results'
    ],
    nutrition: {
      calories: '25 kcal',
      protein: '0g',
      fiber: '1g',
      vitamins: ['Antioxidants', 'Nimbidin', 'Vitamin A', 'Papain']
    },
    tips: [
      'Ultimate blood purifiers',
      'Prevents skin infections',
      'Boosts immunity significantly'
    ]
  },
  {
    id: 30,
    name: 'Banana-Apple Kajju Halwa',
    category: 'Desserts',
    time: '20 min',
    image: fruitHalwa,
    powder: 'Banana & Apple Powder',
    powderId: 'banana',
    description: 'Healthy fruit halwa with natural sweetness - significantly reduced refined sugar!',
    ingredients: [
      '1/2 cup wheat flour or semolina',
      '2 tbsp AUM Fruit Banana Powder',
      '2 tbsp AUM Apple Powder',
      'Ghee for roasting',
      'Warm milk',
      'Cardamom powder',
      'Nuts for garnish'
    ],
    steps: [
      'Roast wheat flour or semolina in ghee',
      'Whisk AUM Fruit Banana and Apple Powder into warm milk',
      'Pour flavored milk into the pan',
      'Stir until it thickens into halwa',
      'Add cardamom powder',
      'Garnish with nuts and serve'
    ],
    nutrition: {
      calories: '280 kcal',
      protein: '4g',
      fiber: '3g',
      vitamins: ['Potassium', 'Vitamin C', 'Fiber', 'Natural Sugars']
    },
    tips: [
      'Natural sweetness reduces sugar need',
      'Thick creamy texture',
      'Healthy dessert option'
    ]
  },
  {
    id: 31,
    name: 'Apple-Ginger Panakam',
    category: 'Beverages',
    time: '10 min',
    image: appleGingerPanakam,
    powder: 'Apple, Ginger & Amla Powder',
    powderId: 'apple',
    description: 'Cooling detox drink with fruity body and Vitamin C punch - perfect immunity sherbet!',
    ingredients: [
      'Jaggery (2 tbsp)',
      'Water (1 glass)',
      'Pinch of black pepper',
      '1/4 tsp AUM Ginger Powder',
      '1 tbsp AUM Apple Powder',
      '1/2 tsp AUM Amla Powder'
    ],
    steps: [
      'Dissolve jaggery in water',
      'Add pinch of black pepper and AUM Ginger Powder',
      'Stir in AUM Apple Powder',
      'Add AUM Amla Powder',
      'Mix well and serve chilled or at room temperature',
      'Perfect immunity-boosting sherbet'
    ],
    nutrition: {
      calories: '90 kcal',
      protein: '0g',
      fiber: '1g',
      vitamins: ['Vitamin C', 'Gingerol', 'Antioxidants', 'Iron']
    },
    tips: [
      'Apple adds fruity body',
      'Amla provides Vitamin C punch',
      'Traditional cooling drink'
    ]
  },
  {
    id: 32,
    name: 'Amchur Allam Pachadi',
    category: 'Condiments',
    time: '15 min',
    image: amchurPachadi,
    powder: 'Amchur Powder',
    powderId: 'amchur',
    description: 'Ginger-mango chutney with dry sourness that stays fresh longer!',
    ingredients: [
      'Fresh ginger (2 inch piece)',
      'Dried red chilies',
      'Urad dal',
      '2 tsp AUM Amchur Powder',
      'Salt to taste',
      'Oil for tempering'
    ],
    steps: [
      'Sauté ginger, red chilies, and urad dal',
      'Let cool and grind together',
      'Instead of tamarind, add 2 tsp AUM Amchur Powder',
      'Add salt to taste',
      'Mix well to desired consistency',
      'Store in refrigerator'
    ],
    nutrition: {
      calories: '35 kcal',
      protein: '1g',
      fiber: '1g',
      vitamins: ['Vitamin C', 'Gingerol', 'Antioxidants']
    },
    tips: [
      'Dry sourness keeps chutney fresh longer',
      'Better than tamarind or lemon',
      'Perfect with any South Indian meal'
    ]
  },

  // ========== SKIN CARE RECIPES ==========
  {
    id: 33,
    name: 'Anti-Acne Face Mask',
    category: 'Skin Care',
    time: '20 min',
    image: antiAcneMask,
    powder: 'Neem & Betel Leaf Powder',
    powderId: 'neem',
    description: 'Neem kills bacteria while betel leaf reduces swelling and heat of pimples.',
    ingredients: [
      '1 tsp AUM Neem Powder',
      '1 tsp AUM Betel Leaf Powder',
      '1 tbsp fresh curd',
      'Rose water (optional)'
    ],
    steps: [
      'Mix AUM Neem Powder and Betel Leaf Powder in a bowl',
      'Add fresh curd to make smooth paste',
      'Add rose water if needed for consistency',
      'Apply to acne-prone areas',
      'Leave for 15-20 minutes',
      'Wash with lukewarm water'
    ],
    nutrition: {
      calories: '0 kcal',
      protein: '0g',
      fiber: '0g',
      vitamins: ['Nimbidin', 'Antioxidants', 'Antibacterial compounds']
    },
    tips: [
      'Neem kills acne-causing bacteria',
      'Betel leaf reduces inflammation',
      'Use 2-3 times per week'
    ]
  },
  {
    id: 34,
    name: 'Glass Skin Glow Mask',
    category: 'Skin Care',
    time: '20 min',
    image: glassSkinMask,
    powder: 'Spinach & Kothimeera Powder',
    powderId: 'spinach',
    description: 'High Vitamin K reduces dark circles, coriander brightens skin tone.',
    ingredients: [
      '1 tsp AUM Spinach Powder',
      '1 tsp AUM Kothimeera Powder',
      '1 tsp honey',
      'Rose water'
    ],
    steps: [
      'Mix AUM Spinach and Kothimeera Powder',
      'Add honey to make paste',
      'Add rose water for smooth consistency',
      'Apply evenly on face and neck',
      'Leave for 15 minutes',
      'Rinse with cold water'
    ],
    nutrition: {
      calories: '0 kcal',
      protein: '0g',
      fiber: '0g',
      vitamins: ['Vitamin K', 'Vitamin C', 'Iron', 'Antioxidants']
    },
    tips: [
      'Vitamin K reduces dark circles',
      'Coriander brightens skin',
      'Use weekly for best results'
    ]
  },
  {
    id: 35,
    name: 'Scalp Strengthener Oil',
    category: 'Skin Care',
    time: '1 hour',
    image: scalpOilMask,
    powder: 'Curry Leaf & Moringa Powder',
    powderId: 'curry-leaf',
    description: 'Curry leaf prevents graying, moringa provides iron and zinc for hair follicle strength.',
    ingredients: [
      '2 tbsp AUM Curry Leaves Powder',
      '1 tbsp AUM Moringa Powder',
      'Warm coconut oil (enough to mix)'
    ],
    steps: [
      'Warm coconut oil slightly',
      'Mix AUM Curry Leaves and Moringa Powder into oil',
      'Stir to form smooth paste',
      'Massage into scalp thoroughly',
      'Leave for 1 hour or overnight',
      'Wash with mild shampoo'
    ],
    nutrition: {
      calories: '0 kcal',
      protein: '0g',
      fiber: '0g',
      vitamins: ['Iron', 'Zinc', 'Vitamin A', 'Antioxidants']
    },
    tips: [
      'Prevents premature graying',
      'Strengthens hair follicles',
      'Use once a week'
    ]
  },
  {
    id: 36,
    name: 'Detox Face Pack',
    category: 'Skin Care',
    time: '15 min',
    image: detoxFacePack,
    powder: 'Papaya Leaf & Gongura Powder',
    powderId: 'papaya-leaf',
    description: 'Papaya enzymes exfoliate dead skin, gongura acidity acts as natural toner to shrink pores.',
    ingredients: [
      '1 tsp AUM Papaya Leaf Powder',
      '1/2 tsp AUM Gongura Powder',
      'Rose water'
    ],
    steps: [
      'Mix AUM Papaya Leaf and Gongura Powder',
      'Add rose water to make paste',
      'Apply to oily skin areas',
      'Leave for 10-15 minutes',
      'Wash with cold water',
      'Pat dry and moisturize'
    ],
    nutrition: {
      calories: '0 kcal',
      protein: '0g',
      fiber: '0g',
      vitamins: ['Papain enzymes', 'Vitamin C', 'Natural acids']
    },
    tips: [
      'Enzymes exfoliate dead skin',
      'Shrinks pores naturally',
      'Best for oily skin types'
    ]
  },
  {
    id: 37,
    name: 'C-Glow Brightening Mask',
    category: 'Skin Care',
    time: '20 min',
    image: vitaminCMask,
    powder: 'Amla & Apple Powder',
    powderId: 'amla',
    description: 'Amla fades dark spots, malic acid in apple gently exfoliates dead skin cells.',
    ingredients: [
      '1 tsp AUM Amla Powder',
      '1 tsp AUM Apple Powder',
      '1 tbsp honey'
    ],
    steps: [
      'Mix AUM Amla and Apple Powder in bowl',
      'Add honey and mix well',
      'Apply evenly on face',
      'Leave for 15-20 minutes',
      'Rinse with lukewarm water',
      'Follow with moisturizer'
    ],
    nutrition: {
      calories: '0 kcal',
      protein: '0g',
      fiber: '0g',
      vitamins: ['Vitamin C', 'Malic acid', 'Antioxidants']
    },
    tips: [
      'Best source of Vitamin C for skin',
      'Fades dark spots and pigmentation',
      'Use 2-3 times per week'
    ]
  },
  {
    id: 38,
    name: 'Hydrating Plump Pack',
    category: 'Skin Care',
    time: '20 min',
    image: hydratingBananaMask,
    powder: 'Fruit Banana Powder',
    powderId: 'banana',
    description: 'All-natural botox that hydrates and plumps up dry, tired skin with potassium.',
    ingredients: [
      '1 tbsp AUM Fruit Banana Powder',
      '1 tsp milk or rose water'
    ],
    steps: [
      'Mix AUM Fruit Banana Powder with milk or rose water',
      'Make thick paste',
      'Apply thick layer to face',
      'Let it dry completely',
      'Wash off with lukewarm water',
      'Follow with light moisturizer'
    ],
    nutrition: {
      calories: '0 kcal',
      protein: '0g',
      fiber: '0g',
      vitamins: ['Potassium', 'Vitamin B6', 'Natural moisture']
    },
    tips: [
      'Natural botox effect',
      'Rich in potassium and moisture',
      'Perfect for dry, tired skin'
    ]
  },
  {
    id: 39,
    name: 'Anti-Tan Scrub',
    category: 'Skin Care',
    time: '15 min',
    image: antiTanScrub,
    powder: 'Amchur Powder',
    powderId: 'amchur',
    description: 'High citric acid acts as natural bleach to remove stubborn sun tan and pigmentation.',
    ingredients: [
      '1 tsp AUM Amchur Powder',
      '1 tbsp thick curd (yogurt)'
    ],
    steps: [
      'Mix AUM Amchur Powder with thick curd',
      'Make smooth paste',
      'Gently massage onto tanned areas (face, neck, hands)',
      'Leave for 10 minutes',
      'Rinse with cool water',
      'Apply sunscreen before going out'
    ],
    nutrition: {
      calories: '0 kcal',
      protein: '0g',
      fiber: '0g',
      vitamins: ['Citric acid', 'Vitamin C', 'Lactic acid']
    },
    tips: [
      'Natural bleaching action',
      'Removes stubborn tan',
      'Use weekly for best results'
    ]
  },

  // ========== AUM POWER MIX ==========
  {
    id: 40,
    name: 'AUM Glow & Flow Morning Drink',
    category: 'Health Drinks',
    time: '5 min',
    image: aumPowerMix,
    powder: 'ABC, Amla & Ginger Powder',
    powderId: 'abc',
    description: 'The ultimate morning wellness drink for skin, blood, immunity, and digestion.',
    ingredients: [
      '1 tbsp AUM ABC Powder (for skin and blood)',
      '1/2 tsp AUM Amla Powder (for Vitamin C boost)',
      '1/4 tsp AUM Ginger Powder (for digestion)',
      '1 tsp honey',
      '1 glass warm water'
    ],
    steps: [
      'Take 1 glass of warm water (not hot)',
      'Add AUM ABC Powder and stir well',
      'Add AUM Amla Powder',
      'Add AUM Ginger Powder',
      'Mix in honey',
      'Drink immediately on empty stomach'
    ],
    nutrition: {
      calories: '60 kcal',
      protein: '1g',
      fiber: '2g',
      vitamins: ['Vitamin C', 'Iron', 'Beta-carotene', 'Gingerol', 'Antioxidants']
    },
    tips: [
      'Best taken first thing in morning',
      'ABC for skin and blood health',
      'Amla for immunity, Ginger for digestion'
    ]
  },
  {
  id: 41,
  name: 'AUM Power Mix – Daily Wellness Schedule',
  category: 'Health Plan',
  time: 'All Day',
  image: aumPowerMix,
  powder: 'Multiple AUM Powders',
  powderId: 'power-mix',
  description:
    'Complete day-to-night wellness routine using AUM organic powders for detox, immunity, digestion, skin glow, and deep repair.',
  ingredients: [
    'AUM ABC Powder',
    'AUM Amla Powder',
    'AUM Ginger Powder',
    'AUM Moringa Powder',
    'AUM Spinach Powder',
    'AUM Beetroot Powder',
    'AUM Curry Leaf Powder',
    'AUM Mint Powder',
    'AUM Banana Powder',
    'AUM Papaya Leaf Powder',
    'AUM Neem Powder',
    'Honey',
    'Warm water / Milk / Buttermilk'
  ],
  steps: [
    '🌅 Morning (6:30–8:00 AM): Mix Amla + Ginger in warm water. Add Moringa/Spinach to breakfast batter.',
    '☀️ Mid-Morning (11:00 AM): Mix ABC Powder with water and lemon.',
    '🍛 Lunch (1:00–2:00 PM): Add Curry Leaf + Mint to buttermilk. Use Tomato/Amchur in dal.',
    '☕ Afternoon (4:00 PM): Mix Banana or Apple powder in milk/smoothie.',
    '🌙 Evening (Weekly): Apply Neem + Betel mask or Papaya + Kothimeera mask.',
    '🍲 Dinner (7:30–8:30 PM): Add Banana powder to soup or sambar.',
    '💤 Night: Mix Papaya Leaf + Moringa in warm water before bed.'
  ],
  nutrition: {
    calories: 'Varies',
    protein: 'Balanced',
    fiber: 'High',
    vitamins: [
      'Vitamin C',
      'Iron',
      'Calcium',
      'Antioxidants',
      'Potassium',
      'Beta-carotene'
    ]
  },
  tips: [
    'Follow daily for best long-term benefits',
    'Use warm water, not hot',
    'Stay consistent for 30 days',
    'Drink plenty of water throughout the day',
    'Adjust quantities as per body needs'
  ]
}


];

export const getRecipeById = (id: number): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};

export const getRecipesByCategory = (category: string): Recipe[] => {
  return recipes.filter(recipe => recipe.category.toLowerCase() === category.toLowerCase());
};

export const getRecipesByPowder = (powderId: string): Recipe[] => {
  return recipes.filter(recipe => recipe.powderId === powderId);
};

// Get unique categories
export const getRecipeCategories = (): string[] => {
  const categories = new Set(recipes.map(recipe => recipe.category));
  return Array.from(categories);
};
