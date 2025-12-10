import { useState } from "react";

export default function Example() {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="relative">
      {/* Trigger Div */}
      <div
        className="p-4 bg-blue-500 text-white w-fit cursor-pointer rounded"
        onClick={() => setShowCard(true)}
      >
        Click to open card
      </div>

      {/* Overlay Card */}
      {showCard && (
        <div className="fixed z-20 bg-black bg-opacity-50 ">
          <div className="bg-white rounded-xl p-6 shadow-xl w-80">
            <h2 className="text-xl font-semibold mb-2">Card Title</h2>
            <p className="text-gray-600 mb-4">
              This is the content of the card component.
            </p>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => setShowCard(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
