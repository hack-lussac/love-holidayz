document.addEventListener("DOMContentLoaded", () => {
    const page = location.pathname.split("/").pop();
    document.querySelectorAll(".main-nav a").forEach(link => {
      if (link.getAttribute("href") === page) {
        link.classList.add("active");
      }
    });
  });
  