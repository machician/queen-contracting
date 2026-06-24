// app/contact/page.tsx - Working contact form
"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          formType: "contact",
          fullName: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      
      if (response.ok) {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="container-custom py-20 max-w-2xl mx-auto">
        <div className="border border-gray-200 p-12 text-center">
          <h2 className="text-2xl font-light mb-3">Message Sent</h2>
          <p className="text-gray-500">Thank you for reaching out. We'll respond within one business day.</p>
          <button 
            onClick={() => setSent(false)} 
            className="btn-primary mt-6"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-20">
      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        {/* Left - Contact Info */}
        <div>
          <span className="text-gray-400 text-sm uppercase tracking-wider">Reach Out</span>
          <h1 className="mt-4 mb-8 text-4xl md:text-5xl font-light">Contact Us</h1>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-2">Phone</h3>
              <p className="text-xl font-light">(404) 222-4143</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-2">Email</h3>
              <p className="text-xl font-light">info@queencontracting.com</p>
              {/* <p className="text-gray-500 text-sm">rfp@queencontracting.com (opportunities)</p> */}
            </div>
            {/* <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-2">Office</h3>
              <p className="text-gray-700">Washington, D.C. Metropolitan Area</p>
            </div> */}
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="border-t md:border-t-0 md:border-l border-gray-200 md:pl-12 pt-8 md:pt-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Name *</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition" 
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email *</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition" 
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Message *</label>
              <textarea 
                rows={5} 
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-gray-200 p-3 focus:outline-none focus:border-black transition" 
              />
            </div>
            <button 
              type="submit" 
              className="btn-primary w-full" 
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-16 pt-8 border-t border-gray-100">
        <p className="text-gray-400 text-sm">Queen Contracting is an accessible workplace. Persons with disabilities are welcome to apply.</p>
      </div>
    </div>
  );
}