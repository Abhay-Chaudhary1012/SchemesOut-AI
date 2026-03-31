import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to SchemeScout AI 🚀</h1>
      <p>Find government schemes you are eligible for in just 2 minutes.</p>

      <Link to="/form">
        <button>Find My Schemes</button>
      </Link>
    </div>
  );
}

export default Home;