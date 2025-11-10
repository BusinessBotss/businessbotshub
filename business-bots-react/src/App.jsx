import Galaxy from './Galaxy';

export default function App() {
  const menuItems = [
    { label: "Contacto", href: "#" },
    { label: "WhatsApp", href: "https://wa.me/34600000000", target: "_blank" },
    { label: "Email", href: "mailto:info@businessbots.hub" },
    { label: "Business Bots", href: "#" },
    { label: "Servicios", href: "#" },
    { label: "Portfolio", href: "#" }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#0b0f12] to-[#071012] text-[#e6f0ea] font-sans">
      {/* Fondo Galaxy interactivo */}
      <div className="absolute inset-0 -z-10">
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.6}
          saturation={50}
          hueShift={220}
          speed={1.2}
        />
      </div>

      {/* Contenido principal centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8 text-center backdrop-blur-sm">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-5xl font-bold tracking-widest uppercase mb-2">
            Business Bots
          </h1>
          <p className="text-lg text-[#9aa6a1] font-light">
            Soluciones tecnológicas inteligentes
          </p>
        </div>

        {/* Menú de opciones */}
        <ul className="flex flex-col space-y-4 text-xl font-medium">
          {menuItems.map((item, index) => (
            <li key={index} className="group">
              <a
                href={item.href}
                target={item.target}
                rel={item.target === "_blank" ? "noopener noreferrer" : ""}
                className="transition-all duration-300 hover:scale-110 hover:text-[#00d46a] cursor-pointer block px-6 py-2 rounded-lg hover:bg-[rgba(0,212,106,0.1)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="absolute bottom-8 text-sm text-[#6f7a78]">
          <p>© {new Date().getFullYear()} Business Bots Hub — Palma de Mallorca</p>
        </div>
      </div>
    </div>
  );
}
