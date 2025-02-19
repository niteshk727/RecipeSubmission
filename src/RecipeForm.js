import React, { useState } from "react";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

const RecipeForm = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ title: "", description: "", ingredients: "", steps: "" });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = formData.title && formData.description && formData.ingredients && formData.steps && privacyChecked;

  return (
    <div>
      <h2 className="text-lg font-semibold">Submit Your Recipe</h2>
      <form className="mt-4 bg-white shadow-md p-4 rounded-lg">
        <label className="block">Recipe Title</label>
        <input type="text" name="title" className="border p-2 w-full rounded" placeholder="Enter recipe name" onChange={handleChange} required />

        <label className="block mt-4">Quick Description</label>
        <textarea name="description" className="border p-2 w-full rounded" placeholder="Describe your recipe" onChange={handleChange} required></textarea>

        <label className="block mt-4">Ingredients</label>
        <div className="border p-2 rounded bg-gray-100">(Dynamic list coming soon)</div>

        <label className="block mt-4">Steps</label>
        <div className="border p-2 rounded bg-gray-100">(Dynamic steps coming soon)</div>

        <label className="block mt-4">Final Recipe Image</label>
        <input type="file" className="border p-2 w-full rounded" onChange={handleImageUpload} />
        {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 w-32 h-32 object-cover" />}

        <div className="mt-4">
          <input type="checkbox" id="privacy" onChange={() => setPrivacyChecked(!privacyChecked)} />
          <label htmlFor="privacy" className="ml-2">I accept the <span className="text-blue-600 cursor-pointer" onClick={() => setIsModalOpen(true)}>privacy policy</span></label>
        </div>

        <button type="submit" disabled={!isFormValid} className={`mt-4 px-4 py-2 rounded ${isFormValid ? "bg-green-500 text-white" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}>
          Submit
        </button>
      </form>

      <PrivacyPolicyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default RecipeForm;
