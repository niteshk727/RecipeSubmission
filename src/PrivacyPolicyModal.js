import React from "react";

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg">
        <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
        <div className="max-h-60 overflow-y-auto">
          <p className="text-gray-700">
            We value your privacy. Your submitted recipes and images will be stored securely and not shared with
            third parties. By submitting your recipe, you agree to our terms and conditions.
          </p>
          <p className="text-gray-700 mt-2">
            If you have any concerns, feel free to contact us at <strong>support@example.com</strong>.
          </p>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
