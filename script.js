const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

/* Utility functions */
function showError(input, message) {
  const error = input.nextElementSibling;
  input.classList.add("error-input");
  input.classList.remove("success");
  error.innerText = message;
  error.classList.add("show");
}

function showSuccess(input) {
  const error = input.nextElementSibling;
  input.classList.remove("error-input");
  input.classList.add("success");
  error.classList.remove("show");
}

/* Validation functions */
function validateName() {
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    return false;
  }
  showSuccess(nameInput);
  return true;
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    showError(emailInput, "Enter a valid email");
    return false;
  }
  showSuccess(emailInput);
  return true;
}

function validatePassword() {
  if (passwordInput.value.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters");
    return false;
  }
  showSuccess(passwordInput);
  return true;
}

function validateConfirmPassword() {
  if (confirmPasswordInput.value !== passwordInput.value || confirmPasswordInput.value === "") {
    showError(confirmPasswordInput, "Passwords do not match");
    return false;
  }
  showSuccess(confirmPasswordInput);
  return true;
}

/* Real-time validation */
nameInput.addEventListener("keyup", validateName);
emailInput.addEventListener("keyup", validateEmail);
passwordInput.addEventListener("keyup", validatePassword);
confirmPasswordInput.addEventListener("keyup", validateConfirmPassword);

/* Form submit */
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmValid = validateConfirmPassword();

  if (isNameValid && isEmailValid && isPasswordValid && isConfirmValid) {
    alert("Registration Successful!");
    form.reset();
    document.querySelectorAll("input").forEach(input => {
      input.classList.remove("success");
    });
  }
});
