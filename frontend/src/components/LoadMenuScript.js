"use client";
import { useEffect } from "react";

export default function LoadMenuScript() {
  useEffect(() => {
    const menu = document.querySelector(".menu");
    const menuInner = menu?.querySelector(".menu__inner");
    const menuArrow = menu?.querySelector(".menu__arrow");
    const menuTitle = menu?.querySelector(".menu__title");
    const burger = document.querySelector(".burger");
    const overlay = document.querySelector(".overlay");
    let subMenu; // Initialize subMenu as undefined

    // Navbar Menu Toggle Function
    function toggleMenu() {
      menu?.classList.toggle("is-active");
      overlay?.classList.toggle("is-active");
    }

    // Show Mobile Submenu Function
    function showSubMenu(children) {
      subMenu = children.querySelector(".submenu");
      subMenu.classList.add("is-active");
      subMenu.style.animation = "slideLeft 0.35s ease forwards";
      const menuTitle = children.querySelector("svg").parentNode.childNodes[0].textContent;
      menu.querySelector(".menu__title").textContent = menuTitle;
      menu.querySelector(".menu__header").classList.add("is-active");
    }

    // Hide Mobile Submenu Function
    function hideSubMenu() {
      if (subMenu) {
        subMenu.style.animation = "slideRight 0.35s ease forwards";
        setTimeout(() => {
          subMenu.classList.remove("is-active");
        }, 300);
        menu.querySelector(".menu__title").textContent = "";
        menu.querySelector(".menu__header").classList.remove("is-active");
      }
    }

    // Toggle Mobile Submenu Function
    function toggleSubMenu(e) {
      if (!menu?.classList.contains("is-active")) {
        return;
      }
      if (e.target.closest(".menu__dropdown")) {
        const children = e.target.closest(".menu__dropdown");
        showSubMenu(children);
      }
    }

    // Fixed Navbar Menu on Window Resize
    function handleResize() {
      if (window.innerWidth >= 768 && menu?.classList.contains("is-active")) {
        toggleMenu();
      }
    }

    // Initialize Event Listeners
    if (burger && overlay && menuArrow && menuTitle && menuInner) {
      burger.addEventListener("click", toggleMenu);
      overlay.addEventListener("click", toggleMenu);
      menuArrow.addEventListener("click", hideSubMenu);
      menuTitle.addEventListener("click", hideSubMenu);
      menuInner.addEventListener("click", toggleSubMenu);
      window.addEventListener("resize", handleResize);
    }
    // Cleanup function to remove event listeners when component unmounts
    return () => {
      if (burger && overlay && menuArrow && menuTitle && menuInner) {
        burger.removeEventListener("click", toggleMenu);
        overlay.removeEventListener("click", toggleMenu);
        menuArrow.removeEventListener("click", hideSubMenu);
        menuTitle.removeEventListener("click", hideSubMenu);
        menuInner.removeEventListener("click", toggleSubMenu);
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return null;
}
