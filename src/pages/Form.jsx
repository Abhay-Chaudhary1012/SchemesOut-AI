import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    state: "",
    occupation: "",
    income: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted! (Check console)");
  };

  return (
    <div className="container">
      <h1>Find My Schemes 🧾</h1>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Check Eligibility</button>
      </form>
    </div>
  );
}

export default Form;