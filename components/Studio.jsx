'use client';

export default function Studio() {
  return (
    <section id="studio" className="section bg-[var(--color-off-white)]">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="fade-in-up-observed">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-deep-charcoal)] mb-8">
              The Studio
            </h2>

            <div className="space-y-6 text-[var(--color-deep-charcoal)]/80 leading-relaxed">
              <p className="text-lg font-light">
                Our studio serves as a creative laboratory where ideas take shape. Located in
                the heart of the design district, our space reflects our commitment to
                innovation, collaboration, and excellence.
              </p>

              <p className="text-base font-light">
                We assemble a team of talented architects, designers, and consultants for each
                project, ensuring that every aspect—from initial concept to final execution—is
                handled with meticulous attention to detail.
              </p>

              <div className="pt-6 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-px h-12 bg-[var(--color-muted-olive)] mt-1"></div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[var(--color-deep-charcoal)] mb-2">
                      Design Approach
                    </h3>
                    <p className="text-sm font-light text-[var(--color-deep-charcoal)]/70">
                      Collaborative, research-driven design process that balances client vision
                      with architectural excellence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-px h-12 bg-[var(--color-brushed-bronze)] mt-1"></div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[var(--color-deep-charcoal)] mb-2">
                      Materials & Sustainability
                    </h3>
                    <p className="text-sm font-light text-[var(--color-deep-charcoal)]/70">
                      Commitment to sustainable materials and practices that respect both
                      environment and future generations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="fade-in-up-observed">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden shadow-subtle group cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80')`,
                  }}
                ></div>
              </div>
              <div className="relative aspect-square overflow-hidden shadow-subtle group cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=80')`,
                  }}
                ></div>
              </div>
              <div className="relative aspect-square overflow-hidden shadow-subtle col-span-2 group cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80')`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

