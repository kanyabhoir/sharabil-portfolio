'use client';

export default function Journal() {
  const journalEntries = [
    {
      id: 1,
      title: 'The Art of Material Selection',
      category: 'Materials',
      excerpt:
        'Exploring how material choices shape spatial experience and contribute to architectural narrative.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
      date: 'March 2024',
    },
    {
      id: 2,
      title: 'Sustainable Architecture in Modern Context',
      category: 'Sustainability',
      excerpt:
        'Balancing environmental responsibility with design excellence in contemporary architectural practice.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80',
      date: 'February 2024',
    },
    {
      id: 3,
      title: 'Light and Space: A Dialogue',
      category: 'Design Philosophy',
      excerpt:
        'Understanding the transformative power of natural light in architectural composition and human perception.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
      date: 'January 2024',
    },
  ];

  return (
    <section id="journal" className="section bg-[var(--color-off-white)]">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up-observed">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-deep-charcoal)] mb-4">
            Journal
          </h2>
          <p className="text-base text-[var(--color-deep-charcoal)]/70 max-w-2xl mx-auto font-light">
            Insights, reflections, and observations on architecture, design, and the
            creative process.
          </p>
        </div>

        {/* Journal Entries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journalEntries.map((entry, index) => (
            <article
              key={entry.id}
              className="group cursor-pointer fade-in-up-observed hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-[var(--color-concrete-gray)]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${entry.image})`,
                  }}
                ></div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs tracking-wider uppercase text-[var(--color-deep-charcoal)]/60 font-medium">
                  <span>{entry.category}</span>
                  <span>{entry.date}</span>
                </div>

                <h3 className="text-2xl font-serif font-semibold text-[var(--color-deep-charcoal)] group-hover:text-[var(--color-muted-olive)] transition-colors duration-300">
                  {entry.title}
                </h3>

                <p className="text-sm font-light text-[var(--color-deep-charcoal)]/70 leading-relaxed">
                  {entry.excerpt}
                </p>

                <div className="pt-2">
                  <span className="text-xs tracking-wider uppercase text-[var(--color-deep-charcoal)] font-medium link-underline">
                    Read More
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

