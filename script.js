// ==============================
// 🌙 Dark Mode Toggle
// ==============================
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ==============================
// 🎮 Counter
// ==============================
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const countDisplay = document.getElementById("count");

counterBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// ==============================
// ❓ FAQ (Collapsible)
// ==============================
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// ==============================
// 📋 Form Validation
// ==============================
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting immediately

  // Get inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error spans
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const successMsg = document.getElementById("successMsg");

  let valid = true;

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  successMsg.textContent = "";

  // Name validation
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  // Password validation
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // Success message
  if (valid) {
    successMsg.textContent = "🎉 Registration successful!";
    form.reset();
  }
});
