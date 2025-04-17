import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("contactForm");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      localStorage.setItem("contactForm", JSON.stringify(formData));
    }
  }, [formData, errors]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) setErrors(validate());
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <div
          className="glass-card shadow p-4 mx-auto"
          style={{ maxWidth: 600 }}
          data-aos="fade-up"
        >
          <form noValidate>
            <div className="mb-3">
              <label className="form-label fw-semibold" htmlFor="name">Name</label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your name"
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold" htmlFor="email">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold" htmlFor="message">Message</label>
              <textarea
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Write your message..."
                rows="5"
              />
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={Object.keys(validate()).length > 0}
              title="Send functionality disabled for demo"
            >
              Send (Disabled)
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
