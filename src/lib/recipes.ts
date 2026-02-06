// Recipe images
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
    powderId: 'mint',
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
    powderId: 'curryleaf',
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
