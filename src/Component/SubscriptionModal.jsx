// components/SubscriptionModal.jsx
import React from "react";

export default function SubscriptionModal({ onSubscribe, onCancel }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-white text-black p-6 rounded-2xl shadow-lg max-w-sm w-full mx-4 text-center animate-fade-in">
                <h2 className="text-2xl font-bold mb-4">🎵 Unlimited Music Access</h2>
                <p className="mb-4 text-gray-700">
                    Your free access to <strong>My Library</strong> has expired.<br />
                    Subscribe now to unlock unlimited songs and features!
                </p>
                <div className="flex justify-center gap-4 mt-6">
                    <button
                        onClick={onSubscribe}
                        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl transition-all"
                    >
                        💳 Subscribe
                    </button>
                    <button
                        onClick={onCancel}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-xl transition-all"
                    >
                        Cancel
                    </button>
                </div>
            </div>

            {/* Optional animation class */}
            <style>
                {`
                    @keyframes fade-in {
                        from { opacity: 0; transform: scale(0.95); }
                        to { opacity: 1; transform: scale(1); }
                    }
                    .animate-fade-in {
                        animation: fade-in 0.3s ease-out;
                    }
                `}
            </style>
        </div>
    );
}
