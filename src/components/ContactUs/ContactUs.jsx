import React, { useState } from "react";
import Banner from "./Banner";
import Footer from "../Footer/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: handle form submission logic here
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <Banner />
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-md p-3 focus:outline-blue-400"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md p-3 focus:outline-blue-400"
                placeholder="youremail@gmail.com"
                required
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="mb-1 text-gray-700">Phone no</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-md p-3 focus:outline-blue-400"
                placeholder="+91"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="mb-1 text-gray-700">Message content</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="border rounded-md p-3 focus:outline-blue-400"
                placeholder="Your Message..."
                required
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-all duration-300"
              >
                Send
              </button>
            </div>
          </form>

          {/* Embedded Google Map */}
          <div className="w-full h-[400px] rounded-md overflow-hidden shadow-md">
            <iframe
              title="SMP Negeri 1 Cibadak Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224408.21865806595!2d77.35118478539344!3d28.498260405148766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea64b8f89aef%3A0xec0ccabb5317962e!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1754071904377!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
