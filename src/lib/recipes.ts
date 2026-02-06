import recipe1 from '@/assets/recipes/recipe1.jpg';
import recipe2 from '@/assets/recipes/recipe2.jpg';
import recipe3 from '@/assets/recipes/recipe3.jpg';

export const recipes = [
  {
    id: 1,
    name: 'Moringa Power Bowl',
    image: recipe1,
    time: '10 min',
    powder: 'Moringa Powder',
    steps: [
      'Add banana and milk',
      'Mix moringa powder',
      'Blend well',
      'Serve chilled',
    ],
  },
  {
    id: 2,
    name: 'Beetroot Smoothie',
    image: recipe2,
    time: '5 min',
    powder: 'Beetroot Powder',
    steps: [
      'Add fruits',
      'Add beetroot powder',
      'Blend',
      'Drink fresh',
    ],
  },
  {
    id: 3,
    name: 'Spinach Paratha',
    image: recipe3,
    time: '25 min',
    powder: 'Spinach Powder',
    steps: [
      'Prepare dough',
      'Add powder',
      'Roll',
      'Cook on pan',
    ],
  },
];
