import { useParams, Link } from 'react-router-dom';
import { recipes } from '@/lib/recipes';

const RecipeDetails = () => {
  const { id } = useParams();

  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className="container mx-auto py-20 px-4">

      <Link to="/recipes" className="text-primary mb-6 block">
        ← Back
      </Link>

      <img
        src={recipe.image}
        className="w-full max-h-96 object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-6">{recipe.name}</h1>

      <p className="mt-2">Time: {recipe.time}</p>

      <h3 className="text-xl font-semibold mt-6">Steps</h3>

      <ul className="list-decimal ml-6 mt-3 space-y-2">

        {recipe.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}

      </ul>

    </div>
  );
};

export default RecipeDetails;
