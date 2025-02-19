import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Welcome to Recipe Hub!</h1>
      <p className="mt-2 text-gray-600">Discover and share amazing recipes from around the world.</p>

      <div className="mt-6">
        <Link to="/submit-recipe" className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
          Submit Your Recipe
        </Link>
      </div>
    </div>
  );
};

export default Home;
