function Contact() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <input type="text" placeholder="Name" /><br />
      <input type="email" placeholder="Email" /><br />
      <textarea placeholder="Message"></textarea><br />
      <button>Send</button>
    </div>
  );
}

export default Contact;