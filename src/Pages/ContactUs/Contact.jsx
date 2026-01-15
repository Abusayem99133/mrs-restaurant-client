import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="text-4xl mb-4">🚧</div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Work in Progress
        </h1>

        <p className="text-gray-600 mb-6">
          We’re currently working on this page. The contact section will be
          available soon.
        </p>

        <div className="border-t pt-4">
          <p className="text-sm text-gray-500">
            Thank you for your patience 🙏
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
