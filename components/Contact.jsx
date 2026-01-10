'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      projectType: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="section bg-[var(--color-warm-beige)]">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="fade-in-up-observed">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-deep-charcoal)] mb-8">
                Get in Touch
              </h2>

              <p className="text-base font-light text-[var(--color-deep-charcoal)]/80 mb-12 leading-relaxed">
                We're always interested in new projects and collaborations. Whether you're
                planning a new build, renovation, or simply exploring possibilities, we'd
                love to hear from you.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm tracking-wider uppercase text-[var(--color-deep-charcoal)]/60 font-medium mb-2">
                    Studio Address
                  </h3>
                  <p className="text-base font-light text-[var(--color-deep-charcoal)]/80">
                    123 Design Street
                    <br />
                    Architecture District
                    <br />
                    New York, NY 10001
                  </p>
                </div>

                <div>
                  <h3 className="text-sm tracking-wider uppercase text-[var(--color-deep-charcoal)]/60 font-medium mb-2">
                    Contact Email
                  </h3>
                  <a
                    href="mailto:hello@studioarchitektur.com"
                    className="text-base font-light text-[var(--color-deep-charcoal)]/80 link-underline hover:text-[var(--color-muted-olive)] transition-colors duration-300"
                  >
                    hello@studioarchitektur.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm tracking-wider uppercase text-[var(--color-deep-charcoal)]/60 font-medium mb-4">
                    Connect
                  </h3>
                  <div className="flex space-x-6">
                    <a
                      href="#"
                      className="text-[var(--color-deep-charcoal)]/60 hover:text-[var(--color-deep-charcoal)] transition-colors duration-300 text-sm tracking-wider uppercase font-medium link-underline"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="text-[var(--color-deep-charcoal)]/60 hover:text-[var(--color-deep-charcoal)] transition-colors duration-300 text-sm tracking-wider uppercase font-medium link-underline"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="text-[var(--color-deep-charcoal)]/60 hover:text-[var(--color-deep-charcoal)] transition-colors duration-300 text-sm tracking-wider uppercase font-medium link-underline"
                    >
                      Pinterest
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in-up-observed">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm tracking-wider uppercase text-[var(--color-deep-charcoal)]/60 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-[var(--color-concrete-gray)] text-[var(--color-deep-charcoal)] focus:outline-none focus:border-[var(--color-deep-charcoal)] transition-colors duration-300 font-light"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm tracking-wider uppercase text-[var(--color-deep-charcoal)]/60 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-[var(--color-concrete-gray)] text-[var(--color-deep-charcoal)] focus:outline-none focus:border-[var(--color-deep-charcoal)] transition-colors duration-300 font-light"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm tracking-wider uppercase text-[var(--color-deep-charcoal)]/60 font-medium mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-[var(--color-concrete-gray)] text-[var(--color-deep-charcoal)] focus:outline-none focus:border-[var(--color-deep-charcoal)] transition-colors duration-300 font-light appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'12\\' height=\\'12\\' viewBox=\\'0 0 12 12\\'><path fill=\\'%232C2C2A\\' d=\\'M6 9L1 4h10z\\'/></svg>')] bg-no-repeat bg-right-4 bg-[length:12px_12px]"
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="interior">Interior Design</option>
                    <option value="urban-planning">Urban Planning</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm tracking-wider uppercase text-[var(--color-deep-charcoal)]/60 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-transparent border border-[var(--color-concrete-gray)] text-[var(--color-deep-charcoal)] focus:outline-none focus:border-[var(--color-deep-charcoal)] transition-colors duration-300 font-light resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 border border-[var(--color-deep-charcoal)] text-[var(--color-deep-charcoal)] text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-[var(--color-deep-charcoal)] hover:text-[var(--color-off-white)] focus:outline-none"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

