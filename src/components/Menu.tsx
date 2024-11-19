"use client";

import { useEffect, useState } from "react";

const Menu = () => {
  const [activeLink, setActiveLink] = useState("");

  const menuItems = [
    { label: "About me", href: "#about" },
    { label: "Project", href: "#project" },
    { label: "Guest Book", href: "#guest-book" },
  ];

  useEffect(() => {
    const sections = menuItems.map(item => document.querySelector(item.href));

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [menuItems]);

  return (
    <nav>
      <ul className="flex flex-col sticky top-10 gap-10 h-screen w-[300px]">
        {menuItems.map(item => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`font-snow text-5xl block p-2 hover:text-white ${
                activeLink === item.href && "text-white"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
