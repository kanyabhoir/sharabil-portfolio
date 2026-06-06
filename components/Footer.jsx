'use client';

export default function Footer() {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Studio', href: '#studio' },
    { name: 'Journal', href: '#journal' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[var(--color-off-white)] border-t border-[var(--color-concrete-gray)]">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-[var(--color-deep-charcoal)] mb-4">
              Studio BinKhotArchitects
            </h3>
            <p className="text-sm font-light text-[var(--color-deep-charcoal)]/60 leading-relaxed">
              Designing spaces that shape experiences. Premium architecture and design
              services for discerning clients.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-wider uppercase text-[var(--color-deep-charcoal)]/60 font-medium mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-light text-[var(--color-deep-charcoal)]/70 hover:text-[var(--color-deep-charcoal)] transition-colors duration-300 link-underline w-fit"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xs tracking-wider uppercase text-[var(--color-deep-charcoal)]/60 font-medium mb-4">
              Connect
            </h4>
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-sm font-light text-[var(--color-deep-charcoal)]/70 hover:text-[var(--color-deep-charcoal)] transition-colors duration-300 link-underline w-fit"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm font-light text-[var(--color-deep-charcoal)]/70 hover:text-[var(--color-deep-charcoal)] transition-colors duration-300 link-underline w-fit"
              >
                LinkedIn
              </a>
              {/* <a
                href="#"
                className="text-sm font-light text-[var(--color-deep-charcoal)]/70 hover:text-[var(--color-deep-charcoal)] transition-colors duration-300 link-underline w-fit"
              >
                Pinterest
              </a> */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[var(--color-concrete-gray)]">
          <p className="text-xs text-[var(--color-deep-charcoal)]/50 text-center font-light">
            © {new Date().getFullYear()} Studio BinKhotArchitects. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

