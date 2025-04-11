document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const sunIcon = document.getElementById("sunIcon");
  const moonIcon = document.getElementById("moonIcon");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  }

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

  sunIcon.addEventListener("click", toggleTheme);
  moonIcon.addEventListener("click", toggleTheme);
});

document.querySelectorAll(".switch").forEach((el) => {
  el.addEventListener("click", () => {
    if (!el.classList.contains("disabled")) {
      el.classList.toggle("active");
    }
  });
});

const actionBtn = document.querySelector(".action-btn");
const balanceTable = document.querySelector(".balance-table");

actionBtn.addEventListener("click", () => {
  const isActive = actionBtn.classList.contains("active");

  if (isActive) {
    actionBtn.textContent = "Включить";
    actionBtn.classList.remove("active");
    balanceTable.classList.remove("trading-active");

    document.querySelectorAll(".switch").forEach((el) => {
      el.classList.remove("disabled");
    });
  } else {
    actionBtn.textContent = "Выключить";
    actionBtn.classList.add("active");
    balanceTable.classList.add("trading-active");

    document.querySelectorAll(".switch").forEach((el) => {
      el.classList.add("disabled");
    });
  }
});
