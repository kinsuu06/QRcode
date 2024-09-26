import React, { useState } from 'react';

const QR = () => {
  const [url, Seturl] = useState('');
  const [state, SetState] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    SetState(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-gradient-to-r from-blue-400 to-teal-500 p-10 rounded-3xl shadow-2xl max-w-lg w-full transition-transform transform hover:scale-105 hover:shadow-3xl">
        <div className="backdrop-blur-md bg-white/40 border border-white/20 p-8 rounded-2xl shadow-lg w-full">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
            QR Code Generator
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="url"
              name="url"
              placeholder="Enter URL"
              value={url}
              onChange={(event) => Seturl(event.target.value)}
              className="w-full px-4 py-3 border border-gray-300 bg-white/60 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 placeholder-gray-500 text-gray-700"
            />
            <div className="text-center">
              <input
                type="submit"
                value="Generate QR"
                className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 hover:shadow-xl transform transition duration-300 cursor-pointer"
              />
            </div>
          </form>
          <div className="mt-8 flex justify-center">
            {state && (
              <img
                src={`https://quickchart.io/qr?text=${url}&size=200`}
                alt="QR Code"
                className="border border-gray-200 rounded-xl shadow-lg"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QR;
