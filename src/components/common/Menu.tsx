"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "About me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "GuestBook", href: "#guestbook" },
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
      { threshold: 0.3 }
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
    <nav className="tablet:w-full">
      <ul className="sticky top-10 tablet:top-0 z-20 mt-1 flex flex-col tablet:flex-row tablet:justify-center tablet:items-center gap-8 mobile:gap-5 h-screen tablet:h-[80px] mobile:h-[50px] w-[220px] tablet:w-full bg-[#232323]">
        {menuItems.map(item => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`font-snow text-[35px] tablet:text-[25px] mobile:text-[15px] block hover:text-white ${
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
