const openButtons = document.querySelectorAll(".nav_center");
const closeBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

openButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

const loginButton = document.querySelector(".nav_right");
const loginModal = document.getElementById("loginModal");
const closeLoginBtn = document.getElementById("closeLoginModal");
const showRegisterBtn = document.getElementById("showRegister");
const showLoginBtn = document.getElementById("showLogin");
const loginSection = document.querySelector(".login_section");
const registerSection = document.querySelector(".register_section");

// Open Login Modal
loginButton.addEventListener("click", () => {
  loginModal.classList.add("active");
  // Reset to login view when opening modal
  loginSection.style.display = "block";
  registerSection.style.display = "none";
});

// Close Modal
closeLoginBtn.addEventListener("click", () => {
  loginModal.classList.remove("active");
});

loginModal.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.classList.remove("active");
  }
});

// Switch to Register
showRegisterBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginSection.style.display = "none";
  registerSection.style.display = "block";
});

// Switch back to Login
showLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginSection.style.display = "block";
  registerSection.style.display = "none";
});
