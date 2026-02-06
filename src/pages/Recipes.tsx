import { Link } from 'react-router-dom';
import { recipes } from '@/lib/recipes';

const Recipes = () => {
  return (
    <div className="container mx-auto py-20 px-4">

      <h1 className="text-4xl font-bold mb-10">All Recipes</h1>

      <div className="grid md:grid-cols-3 gap-6">

        {recipes.map((r) => (

          <Link
            key={r.id}
            to={`/recipes/${r.id}`}
            className="bg-card rounded-xl shadow hover:shadow-lg transition"
          >
            <img src={r.image} className="h-48 w-full object-cover rounded-t-xl" />

            <div className="p-4">
              <h3 className="font-semibold">{r.name}</h3>
              <p className="text-sm text-muted-foreground">{r.time}</p>
            </div>

          </Link>
        ))}

      </div>
    </div>
  );
};

export default Recipes;
