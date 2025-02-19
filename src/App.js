import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import RecipeForm from "./RecipeForm";

const App = () => {
  // return (
  //   <div className="bg-blue-500 text-white p-6">
  //     Tailwind is working! 🚀
  //   </div>
  // );
  // return (
  //   <Router>
  //     <div className="min-h-screen flex flex-col">
  //       <Header />
  //       <main className="flex-grow p-4">
  //         <Routes>
  //           <Route path="/" element={<Home />} />
  //           <Route path="/submit-recipe" element={<RecipeForm />} />
  //         </Routes>
  //       </main>
  //       <Footer />
  //     </div>
  //   </Router>
  // );
  return(
    <Router>
      <div className="min-h-screen flex flex-col">
      <Header />
      <div><p><br></br></p></div>
      <main className="flex-grow p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit-recipe" element={<RecipeForm />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
