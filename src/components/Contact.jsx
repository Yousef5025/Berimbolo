import React, { useState } from "react";

const Contact = () => {
    // State for form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });


    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const validate = () => {
        const newErrors = {};
        let isValid = true;

        if (!formData.name || formData.name.length < 3) {
            newErrors.name =
                "Name is required and should be at least 3 characters long.";
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.email || !emailPattern.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
            isValid = false;
        }

        if (!formData.message || formData.message.length < 10) {
            newErrors.message =
                "Message is required and should be at least 10 characters long.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            // Handle successful form submission (e.g., API call, form reset)
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" }); // Reset the form
        } else {
            alert("Please fill in all required fields correctly.");
        }
    };

    return (
        <section id="contact" className="py-5 bg-light">
            <div className="container text-center">
                <h1>Contact Us</h1>
                <div className="row mt-4">
                    {/* Address Section */}
                    <div className="col-md-6 text-start">
                        <h3>Address</h3>
                        <p>
                            <i className="fa-solid fa-location-dot text-warning"></i> Hosary
                            Mosque, 6 October, Egypt
                        </p>
                        <p>
                            <i className="fa-solid fa-phone text-warning"></i> Phone:
                            123456789
                        </p>
                        <p>
                            <i className="fa-regular fa-envelope text-warning"></i>{" "}
                            support@Berimbolo.com
                        </p>
                    </div>

                    {/* Contact Form Section */}
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.name && (
                                    <div className="text-danger">{errors.name}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && (
                                    <div className="text-danger">{errors.email}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <textarea
                                    name="message"
                                    className="form-control"
                                    rows="4"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                {errors.message && (
                                    <div className="text-danger">{errors.message}</div>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="btn btn-dark"
                                style={{ fontSize: "20px", padding: "10px 20px" }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
