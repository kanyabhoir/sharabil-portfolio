// Utility function to handle smooth scrolling with offset
export const scrollToSection = (id, offset = 80) => {
  const element = document.querySelector(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

// Intersection Observer for fade-in animations
export const observeElements = () => {
  if (typeof window === 'undefined') return () => {};

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  // Observe all elements with fade-in-up-observed class
  const elements = document.querySelectorAll('.fade-in-up-observed');
  elements.forEach((el) => observer.observe(el));

  return () => {
    elements.forEach((el) => observer.unobserve(el));
    observer.disconnect();
  };
};

