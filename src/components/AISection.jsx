import { useState, useEffect } from "react";
import axios from "axios";

function AISection({ formData }) {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAI = async () => {
    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY`,
        {
          contents: [
            {
              parts: [
                {
                  text: `User details:
Age: ${formData.age}
State: ${formData.state}
Income: ${formData.income}
Category: ${formData.category}

Suggest 3 government schemes in simple Hindi.`
                }
              ]
            }
          ]
        }
      );

      const text =
        res?.data?.candidates?.[0]?.content?.parts?.[0]?.text;

      setResponse(text || "No response");

    } catch (error) {
      console.error(error);

      // fallback demo
      setResponse(`
1. Pradhan Mantri Awas Yojana  
2. Ayushman Bharat Yojana  
3. PM Kisan Samman Nidhi  

(⚠️ Demo mode)
      `);
    }

    setLoading(false);
  };

  // 🔥 AUTO RUN
  useEffect(() => {
    handleAI();
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      {loading && <p>Loading AI suggestions...</p>}

      <div style={{ whiteSpace: "pre-line" }}>
        {response}
      </div>
    </div>
  );
}

export default AISection;