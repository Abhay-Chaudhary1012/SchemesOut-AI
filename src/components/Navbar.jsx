import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <h2>SchemeScout</h2>

      <div style={styles.links}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      <button
        style={styles.aiBtn}
        onClick={() => navigate("/form", { state: { runAI: true } })}
      >
         AI
      </button>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#0f172a",
    color: "white",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  aiBtn: {
    background: "#22c55e",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Navbar; 