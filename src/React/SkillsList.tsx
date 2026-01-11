import React, { useState } from "react";

const CategoryIcons = {
  "Full Stack Development": (
    // Icono: Navegador Web con código (Representa Web/Full Stack)
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "Cybersecurity & DevOps": (
    // Icono: Escudo de Seguridad (Representa Ciberseguridad/Protección)
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 2L3 5V11C3 16.55 12 22 12 22C12 22 21 16.55 21 11V5L12 2ZM12 11.99V13H11V11.99H12ZM13 13V15H11V13H13ZM12 16C12 16 12 16 12 16C12 16 12 16 12 16ZM12 6C13.66 6 15 7.34 15 9V11H9V9C9 7.34 10.34 6 12 6Z"></path>
      <path d="M12 8C11.45 8 11 8.45 11 9V11H13V9C13 8.45 12.55 8 12 8Z" fill="white"></path> </svg>
  ),
  "Multiplatform & Mobile": (
    // Icono: Dispositivos (Monitor + Móvil) (Representa Multiplataforma/DAM)
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M4 6H20V16H4V6ZM2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V16C22 17.1046 21.1046 18 20 18H15V20H9V18H4C2.89543 18 2 17.1046 2 16V4ZM18 8H16V14H18V8ZM19 19H22V21H19V22H17V19H19V19Z"></path>
      </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Full Stack Development": [
      "Scalable REST APIs (Spring Boot & FastAPI)",
      "Modern SPAs with React & TypeScript",
      "Secure Database Management (SQL)",
    ],
    "Cybersecurity & DevOps": [
      "Secure Coding & Vulnerability Prevention",
      "Linux Administration & Scripting (Python)",
      "Containerization with Docker",
    ],
      "Multiplatform & Mobile": [
        "Responsive Web Applications (PWA)",
        "Java/Android App Development",
        "Cross-platform Solutions",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
