import { cn } from '@/lib/utils';

export const RECIPE_CATEGORIES = [
  { id: 'all', label: 'All', icon: '🍽️' },
  { id: 'Breakfast', label: 'Breakfast', icon: '🌅' },
  { id: 'Soups', label: 'Soups', icon: '🍲' },
  { id: 'Condiments', label: 'Condiments', icon: '🫙' },
  { id: 'Beverages', label: 'Beverages', icon: '🥤' },
  { id: 'Desserts', label: 'Desserts', icon: '🍰' },
  { id: 'Health Drinks', label: 'Health Drinks', icon: '💚' },
  { id: 'Baby Food', label: 'Baby Food', icon: '👶' },
  { id: 'Main Course', label: 'Main Course', icon: '🍛' },
] as const;

interface RecipeCategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  recipeCounts?: Record<string, number>;
}

const RecipeCategoryFilter = ({ 
  selectedCategory, 
  onCategoryChange,
  recipeCounts 
}: RecipeCategoryFilterProps) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide pb-2">
      <div className="flex gap-2 md:gap-3 min-w-max md:flex-wrap md:justify-center">
        {RECIPE_CATEGORIES.map((category) => {
          const isActive = selectedCategory === category.id;
          const count = recipeCounts?.[category.id] || 0;
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                "border-2 whitespace-nowrap",
                "hover:scale-105 active:scale-95",
                isActive
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                  : "bg-card text-foreground border-border hover:border-primary/50 hover:bg-primary/5"
              )}
            >
              <span className="text-base">{category.icon}</span>
              <span>{category.label}</span>
              {recipeCounts && count > 0 && (
                <span 
                  className={cn(
                    "px-1.5 py-0.5 rounded-full text-xs font-bold min-w-[20px] text-center",
                    isActive 
                      ? "bg-primary-foreground/20 text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeCategoryFilter;
