'use client';

export default function About() {
  return (
    <section id="about" className="section bg-[var(--color-warm-beige)]">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="fade-in-up-observed order-2 lg:order-1">
            <div className="relative aspect-[3/4] overflow-hidden shadow-gentle">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80')`,
                }}
              ></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="fade-in-up-observed order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-deep-charcoal)] mb-8">
              Our Philosophy
            </h2>

            <div className="space-y-6 text-[var(--color-deep-charcoal)]/80 leading-relaxed">
              <p className="text-lg font-light">
                Architecture is more than structures—it's the art of creating spaces that
                resonate with human experience. Every project begins with understanding the
                unique narrative of place, purpose, and people.
              </p>

              <div className="pt-6 border-t border-[var(--color-concrete-gray)]">
                <p className="text-2xl font-serif italic text-[var(--color-deep-charcoal)] mb-4 leading-relaxed">
                  "We believe in the power of minimalism, where every element serves a purpose
                  and nothing is superfluous. Our designs emerge from careful consideration of
                  light, material, and form."
                </p>
              </div>

              <p className="text-base font-light">
                With over two decades of experience, we've established a reputation for
                thoughtful, timeless architecture that transcends trends. Our approach combines
                technical precision with artistic vision, resulting in spaces that are both
                functional and inspiring.
              </p>

              <div className="pt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-serif font-semibold text-[var(--color-deep-charcoal)] mb-2">
                    150+
                  </div>
                  <div className="text-sm text-[var(--color-deep-charcoal)]/70 uppercase tracking-wider font-medium">
                    Projects Completed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-semibold text-[var(--color-deep-charcoal)] mb-2">
                    20+
                  </div>
                  <div className="text-sm text-[var(--color-deep-charcoal)]/70 uppercase tracking-wider font-medium">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

