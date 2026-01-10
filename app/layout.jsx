import "./globals.css";

export const metadata = {
  title: "Studio Architektur | Premium Architecture & Design",
  description: "Designing spaces that shape experiences. A curated portfolio of architectural excellence, interior design, and urban planning.",
  keywords: "architecture, interior design, urban planning, architectural portfolio, premium design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
