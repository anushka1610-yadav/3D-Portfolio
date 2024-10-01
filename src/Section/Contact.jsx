import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      emailjs.send(
        "service_el8tboc",
        "template_rtsdn3v",
        {
          from_name: form.name,
          to_name: "Anushka",
          from_email: form.email,
          to_email: "annushkaydv1610@gmail.com",
          message: form.message,
        },
        "ZTDFIb9c2zi6eJGs1"
      );
      setLoading(false);
      alert("Your message has been sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="c-space my-20">
      <div
        className="relative min-h-screen flex items-center justify-center flex-col"
        style={{
          border: "1px solid #757575",
          paddingBottom: "3rem",
          borderRadius: "1rem",
          boxShadow: "12px 12px 18px #232323c2",
          background: "#101010",
        }}
      >
        {/* <img
          src="/assets/terminal.png"
          alt="terminal-background"
          className="absolute inset-0 min-h-screen"
        /> */}
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Full Name"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="name@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Hi! I'm interested in ..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending" : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
