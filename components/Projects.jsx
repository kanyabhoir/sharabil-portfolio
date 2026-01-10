'use client';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Modern Residence',
      location: 'Seattle, WA',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    },
    {
      id: 2,
      name: 'Corporate Headquarters',
      location: 'New York, NY',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    },
    {
      id: 3,
      name: 'Luxury Penthouse',
      location: 'San Francisco, CA',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    },
    {
      id: 4,
      name: 'Coastal Villa',
      location: 'Malibu, CA',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    },
    {
      id: 5,
      name: 'Urban Loft',
      location: 'Brooklyn, NY',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    },
    {
      id: 6,
      name: 'Mixed-Use Development',
      location: 'Portland, OR',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80',
    },
  ];

  return (
    <section id="projects" className="section bg-[var(--color-off-white)]">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up-observed">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-deep-charcoal)] mb-4">
            Selected Projects
          </h2>
          <p className="text-base text-[var(--color-deep-charcoal)]/70 max-w-2xl mx-auto font-light">
            A collection of our most recent work, showcasing architectural innovation
            and design excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div
      className="group relative overflow-hidden cursor-pointer fade-in-up-observed"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-concrete-gray)]">
        {/* Project Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `url(${project.image})`,
            filter: 'grayscale(100%) brightness(0.95)',
          }}
        >
          <div
            className="absolute inset-0 transition-all duration-700 group-hover:opacity-0"
            style={{
              background: 'linear-gradient(135deg, rgba(44,44,42,0.1) 0%, rgba(122,132,113,0.1) 100%)',
            }}
          ></div>
        </div>

        {/* Hover Overlay with Project Info */}
        <div className="absolute inset-0 bg-[var(--color-deep-charcoal)]/0 group-hover:bg-[var(--color-deep-charcoal)]/95 transition-all duration-700 flex items-end">
          <div className="p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">
            <p className="text-xs tracking-widest uppercase text-[var(--color-off-white)]/70 mb-2 font-medium">
              {project.category}
            </p>
            <h3 className="text-2xl font-serif font-semibold text-[var(--color-off-white)] mb-2">
              {project.name}
            </h3>
            <p className="text-sm text-[var(--color-off-white)]/80 font-light">
              {project.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

