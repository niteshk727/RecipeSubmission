import React, { useState } from "react";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

const RecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ingredients: [{ name: "", quantity: "" }],
    steps: [{ instruction: "", image: null }],
    finalImages: [],
  });

  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle ingredients change
  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index][field] = value;
    setFormData({ ...formData, ingredients: newIngredients });
  };

  // Add new ingredient field
  const addIngredient = () => {
    setFormData({ ...formData, ingredients: [...formData.ingredients, { name: "", quantity: "" }] });
  };

  // Handle steps change
  const handleStepChange = (index, field, value) => {
    const newSteps = [...formData.steps];
    newSteps[index][field] = value;
    setFormData({ ...formData, steps: newSteps });
  };

  // Add new step field
  const addStep = () => {
    setFormData({ ...formData, steps: [...formData.steps, { instruction: "", image: null }] });
  };

  // Handle image upload
  const handleImageUpload = (e, index, isFinalImage = false) => {
    const file = e.target.files[0];
    if (file) {
      if (isFinalImage) {
        setFormData({ ...formData, finalImages: [...formData.finalImages, URL.createObjectURL(file)] });
      } else {
        const newSteps = [...formData.steps];
        newSteps[index].image = URL.createObjectURL(file);
        setFormData({ ...formData, steps: newSteps });
      }
    }
  };

  // Check if form is valid
  const isFormValid =
    formData.title &&
    formData.description &&
    formData.ingredients.every((ing) => ing.name && ing.quantity) &&
    formData.steps.every((step) => step.instruction) &&
    privacyChecked;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Submit Your Recipe</h2>

      {/* Recipe Title */}
      <label className="block font-semibold">Recipe Title</label>
      <input
        type="text"
        name="title"
        className="border p-2 w-full rounded mb-4"
        placeholder="Enter recipe name"
        onChange={handleChange}
        required
      />

      {/* Description */}
      <label className="block font-semibold">Quick Description</label>
      <textarea
        name="description"
        className="border p-2 w-full rounded mb-4"
        placeholder="Describe your recipe"
        onChange={handleChange}
        required
      ></textarea>

      {/* Ingredients */}
      <label className="block font-semibold">Ingredients</label>
      {formData.ingredients.map((ingredient, index) => (
        <div key={index} className="flex space-x-2 mb-2">
          <input
            type="text"
            className="border p-2 w-1/2 rounded"
            placeholder="Ingredient name"
            value={ingredient.name}
            onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
            required
          />
          <input
            type="text"
            className="border p-2 w-1/2 rounded"
            placeholder="Quantity"
            value={ingredient.quantity}
            onChange={(e) => handleIngredientChange(index, "quantity", e.target.value)}
            required
          />
        </div>
      ))}
      <button className="text-blue-500 mt-2" type="button" onClick={addIngredient}>
        + Add Ingredient
      </button>

      {/* Steps */}
      <label className="block font-semibold mt-4">Steps</label>
      {formData.steps.map((step, index) => (
        <div key={index} className="mb-4">
          <textarea
            className="border p-2 w-full rounded"
            placeholder={`Step ${index + 1} instructions`}
            value={step.instruction}
            onChange={(e) => handleStepChange(index, "instruction", e.target.value)}
            required
          ></textarea>
          <input
            type="file"
            className="border p-2 w-full rounded mt-2"
            onChange={(e) => handleImageUpload(e, index)}
          />
          {step.image && <img src={step.image} alt="Step Preview" className="mt-2 w-32 h-32 object-cover" />}
        </div>
      ))}
      <button className="text-blue-500 mt-2" type="button" onClick={addStep}>
        + Add Step
      </button>

      {/* Final Recipe Images */}
      <label className="block font-semibold mt-4">Final Recipe Images (Max 5)</label>
      <input
        type="file"
        className="border p-2 w-full rounded"
        multiple
        onChange={(e) => handleImageUpload(e, null, true)}
      />
      <div className="flex mt-2 space-x-2">
        {formData.finalImages.map((image, index) => (
          <img key={index} src={image} alt="Final Preview" className="w-20 h-20 object-cover rounded" />
        ))}
      </div>

      {/* Privacy Policy */}
      <div className="mt-4">
        <input
          type="checkbox"
          id="privacy"
          onChange={() => setPrivacyChecked(!privacyChecked)}
        />
        <label htmlFor="privacy" className="ml-2">
          I accept the{" "}
          <span className="text-blue-600 cursor-pointer" onClick={() => setIsModalOpen(true)}>
            privacy policy
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!isFormValid}
        className={`mt-4 px-4 py-2 rounded w-full ${
          isFormValid ? "bg-green-500 text-white" : "bg-gray-400 text-gray-200 cursor-not-allowed"
        }`}
      >
        Submit Recipe
      </button>

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default RecipeForm;
