import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);
    setResult("");

    try {
      const response = await fetch("http://127.0.0.1:5001/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      alert("Backend not running on port 5001");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-200">

      {/* Top Navigation */}
      <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-800">
        <h1 className="text-xl font-semibold tracking-wide text-cyan-400">
          CyberGuard Intelligence
        </h1>
        <div className="text-sm text-gray-400">
          Real-Time Threat Analysis
        </div>
      </nav>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">

        {/* Input Panel */}
        <div className="bg-[#111827] rounded-xl p-8 shadow-xl border border-gray-800">

          <h2 className="text-2xl font-semibold mb-4">
            Message Inspection Panel
          </h2>

          <p className="text-gray-400 mb-6">
            Submit a message to evaluate potential phishing or spam threats.
          </p>

          <textarea
            className="w-full bg-[#0f172a] border border-gray-700 
            rounded-lg p-4 focus:outline-none 
            focus:ring-2 focus:ring-cyan-500 transition duration-300"
            rows="6"
            placeholder="Enter suspicious message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            onClick={analyzeMessage}
            className="mt-6 w-full bg-cyan-600 hover:bg-cyan-500 
            py-3 rounded-lg font-semibold 
            transition duration-300 active:scale-95"
          >
            {loading ? "Analyzing Threat..." : "Run Threat Analysis"}
          </button>

        </div>

        {/* Result Panel */}
        <div className="bg-[#111827] rounded-xl p-8 shadow-xl border border-gray-800">

          <h2 className="text-2xl font-semibold mb-4">
            Analysis Result
          </h2>

          {!result && (
            <div className="text-gray-500 text-center mt-20">
              Awaiting message inspection...
            </div>
          )}

          {result && (
            <div className="mt-10 text-center transition-all duration-500">

              <div className={`text-5xl font-bold mb-4 ${
                result === "Spam"
                  ? "text-red-500"
                  : "text-green-400"
              }`}>
                {result === "Spam" ? "THREAT DETECTED" : "SECURE MESSAGE"}
              </div>

              <div className="text-gray-400">
                {result === "Spam"
                  ? "The system flagged this message as potentially malicious."
                  : "No malicious indicators detected in this message."}
              </div>

            </div>
          )}

        </div>

      </div>

      {/* Footer */}
      <footer className="text-center text-gray-600 text-sm pb-6">
        © 2026 CyberGuard Intelligence Platform
      </footer>

    </div>
  );
}

export default App;
