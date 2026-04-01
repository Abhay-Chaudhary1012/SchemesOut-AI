import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Form() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    state: "",
    occupation: "",
    income: "",
    category: "",
  });

  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAI = () => {
    setLoading(true);
    setResponse("");

    setTimeout(() => {
      setResponse(`
1. Pradhan Mantri Awas Yojana  
2. Ayushman Bharat Yojana  
3. PM Kisan Samman Nidhi  
      `);
      setLoading(false);
    }, 1500);
  };

  // 🔥 RUN ONLY WHEN AI BUTTON CLICKED
  useEffect(() => {
    if (location.state?.runAI) {
      handleAI();
    }
  }, [location.state]);

  return (
    <div className="container">
      <h1>Find My Schemes </h1>

      <input name="age" placeholder="Age" onChange={handleChange} /><br />

      <select name="gender" onChange={handleChange}>
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select><br />

      <input name="state" placeholder="State" onChange={handleChange} /><br />

      <input name="occupation" placeholder="Occupation" onChange={handleChange} /><br />

      <input name="income" placeholder="Annual Income" onChange={handleChange} /><br />

      <select name="category" onChange={handleChange}>
        <option value="">Category</option>
        <option>General</option>
        <option>OBC</option>
        <option>SC</option>
        <option>ST</option>
      </select><br /><br />

      {/* 🔥 SHOW ONLY WHEN AI CLICKED */}
      {loading && <p>Loading AI suggestions...</p>}

      {response && (
        <div style={{ whiteSpace: "pre-line" }}>
          {response}
        </div>
      )}
    </div>
  );
}

export default Form;