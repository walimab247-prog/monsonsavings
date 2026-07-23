// Monson Savings Bank — front-end interactions
// Handles the FAQ accordion, the mobile navigation menu, and smooth anchor scrolling.
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initFaqAccordion();
    initMobileMenu();
    initSmoothScroll();
  });

  // --- FAQ accordion -------------------------------------------------------
  function initFaqAccordion() {
    var items = document.querySelectorAll("[data-faq]");

    items.forEach(function (item) {
      var answer = item.querySelector(".faq-answer");
      var icon = item.querySelector("svg");

      function toggle() {
        var isOpen = item.getAttribute("aria-expanded") === "true";
        setState(!isOpen);
      }

      function setState(open) {
        item.setAttribute("aria-expanded", open ? "true" : "false");
        if (answer) {
          answer.classList.toggle("grid-rows-[1fr]", open);
          answer.classList.toggle("grid-rows-[0fr]", !open);
        }
        if (icon) {
          // Rotate the "+" into an "x" to signal the open state.
          icon.style.transform = open ? "rotate(45deg)" : "rotate(0deg)";
        }
      }

      // Start collapsed.
      setState(false);

      item.addEventListener("click", toggle);
      item.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  // --- Mobile navigation menu ---------------------------------------------
  function initMobileMenu() {
    var toggle = document.getElementById("menu-toggle");
    var menu = document.getElementById("mobile-menu");
    if (!toggle || !menu) return;

    function closeMenu() {
      menu.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var willOpen = menu.hidden;
      menu.hidden = !willOpen;
      toggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });

    // Close the menu after choosing a destination.
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Close on resize to a desktop width so state never gets stuck.
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) closeMenu();
    });
  }

  // --- Smooth scrolling for on-page anchors --------------------------------
  function initSmoothScroll() {
    var NAV_OFFSET = 96; // clearance for the fixed navbar

    document.querySelectorAll('a[href*="#"]').forEach(function (link) {
      var href = link.getAttribute("href");
      if (!href) return;

      // Only intercept links that target an anchor on the current page.
      var hashIndex = href.indexOf("#");
      var target = href.slice(hashIndex);
      var pathPart = href.slice(0, hashIndex);
      var samePage = pathPart === "" || pathPart === "#" ||
        pathPart === location.pathname.split("/").pop() ||
        pathPart === "index.html";

      if (target.length <= 1 || !samePage) return;

      link.addEventListener("click", function (e) {
        var el = document.querySelector(target);
        if (!el) return; // let the browser handle cross-page links normally
        e.preventDefault();
        var top = el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
        window.scrollTo({ top: top, behavior: "smooth" });
        history.replaceState(null, "", target);
      });
    });
  }
})();
