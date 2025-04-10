document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const sunIcon = document.getElementById("sunIcon");
  const moonIcon = document.getElementById("moonIcon");

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  }

  // Toggle function
  function toggleTheme() {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (isDark) {
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
    } else {
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
    }
  }

  // Event listeners
  sunIcon.addEventListener("click", toggleTheme);
  moonIcon.addEventListener("click", toggleTheme);
});

document.querySelectorAll(".switch").forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
  });
});
