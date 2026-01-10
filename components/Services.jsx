'use client';

export default function Services() {
  const services = [
    {
      title: 'Architectural Design',
      description:
        'Comprehensive design services from concept development to construction documentation, ensuring every detail aligns with your vision and site requirements.',
    },
    {
      title: 'Interior Design',
      description:
        'Thoughtful interior spaces that harmonize with architectural form, creating cohesive environments that enhance daily living and working experiences.',
    },
    {
      title: 'Urban Planning',
      description:
        'Strategic planning and design for larger scale developments, considering community impact, sustainability, and long-term urban fabric integration.',
    },
    {
      title: '3D Visualization',
      description:
        'Photorealistic renderings and immersive virtual experiences that bring designs to life before construction, facilitating informed decision-making.',
    },
    {
      title: 'Project Consultation',
      description:
        'Expert guidance throughout all phases of development, from initial feasibility studies to project completion and post-occupancy evaluation.',
    },
  ];

  return (
    <section id="services" className="section bg-[var(--color-warm-beige)]">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up-observed">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-deep-charcoal)] mb-4">
            Our Services
          </h2>
          <p className="text-base text-[var(--color-deep-charcoal)]/70 max-w-2xl mx-auto font-light">
            Comprehensive architectural and design services tailored to your unique needs
            and aspirations.
          </p>
        </div>

        {/* Services List */}
        <div className="max-w-4xl mx-auto space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="fade-in-up-observed"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-12 border-b border-[var(--color-concrete-gray)] last:border-b-0 last:pb-0">
                <div className="md:w-1/3">
                  <h3 className="text-2xl font-serif font-semibold text-[var(--color-deep-charcoal)] mb-2">
                    {service.title}
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-base font-light text-[var(--color-deep-charcoal)]/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

