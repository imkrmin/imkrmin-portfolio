"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "About me", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Guest Book", href: "#guest-book" },
  { label: "Contact", href: "#contact" },
];

const Menu = () => {
  const [activeLink, setActiveLink] = useState("");

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
      { threshold: 0.6 }
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
      <ul className="flex flex-col sticky top-10 gap-8 h-screen w-[220px]">
        {menuItems.map(item => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`font-snow text-[35px] block hover:text-white ${
                activeLink === item.href ? "text-white" : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
