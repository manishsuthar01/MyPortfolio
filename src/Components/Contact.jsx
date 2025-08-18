import React, { useState, useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_quwae1f",
        "template_z6fk0wi",
        form.current,
        "pVwbg4C3i_Qli7pti"
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("❌ Failed to send. Please try again.");
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="py-16 bg-[#0F172A] flex flex-col  items-center justify-center gap-8 lg:gap-20 px-4"
    >
      <h2 className="text-3xl text-white mb-6 text-center ">
        Get in Touch
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-center  lg:text-left gap-8 lg:gap-20 px-4">
        {/* Contact Form */}
        <div className="w-full max-w-md">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="bg-[#0f1625] p-6 rounded-lg shadow space-y-4 text-white"
          >
            <input type="hidden" name="title" value="Contact Form Submission" />
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 rounded text-gray-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 rounded text-gray-500"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border p-2 rounded text-gray-500"
              rows="4"
              required
            />

            <button
              type="submit"
              className="w-full text-gray-300 bg-gray-800 py-2 rounded font-semibold hover:bg-gray-900"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div id="contact-me" className="w-full max-w-md bg-[#0f1625] rounded-lg gap-8 lg:gap-20 px-10 py-12">
          <h2 className="text-2xl  mb-6 text-white text-center lg:text-left">
            Contact Information
          </h2>
          <div className="space-y-5 text-gray-300">
            <div className="flex items-start gap-3">
              <MapPin className="text-gray-800 mt-1" size={20} />
              <div>
                <p className="font-semibold text-white">Address</p>
                <p>Jaipur, Rajasthan</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-gray-800 mt-1" size={20} />
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p>(+91) 8000740967</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-gray-800 mt-1" size={20} />
              <div>
                <p className="font-semibold text-white">Email</p>
                <p>manishsuthar78775@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
