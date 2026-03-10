const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

const fields = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  session: document.getElementById("session"),
  date: document.getElementById("date"),
  message: document.getElementById("message"),
};

function showError(input, message) {
  const group = input.parentElement;
  const error = group.querySelector(".error-message");
  error.textContent = message;
  error.style.display = "block";
  input.classList.add("error");
}

function clearError(input) {
  const group = input.parentElement;
  const error = group.querySelector(".error-message");
  error.textContent = "";
  error.style.display = "none";
  input.classList.remove("error");
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^[0-9\-\+\s\(\)]{7,15}$/.test(phone);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  // Name
  if (fields.name.value.trim() === "") {
    showError(fields.name, "Name is required");
    valid = false;
  } else {
    clearError(fields.name);
  }

  // Email
  if (!validateEmail(fields.email.value.trim())) {
    showError(fields.email, "Enter a valid email");
    valid = false;
  } else {
    clearError(fields.email);
  }

  // Phone
  if (!validatePhone(fields.phone.value.trim())) {
    showError(fields.phone, "Enter a valid phone number");
    valid = false;
  } else {
    clearError(fields.phone);
  }

  // Session type
  if (fields.session.value.trim() === "") {
    showError(fields.session, "Please select a session type");
    valid = false;
  } else {
    clearError(fields.session);
  }

  // Date
  if (fields.date.value === "") {
    showError(fields.date, "Please choose a date");
    valid = false;
  } else {
    clearError(fields.date);
  }

  // Message
  if (fields.message.value.trim().length < 10) {
    showError(fields.message, "Message must be at least 10 characters");
    valid = false;
  } else {
    clearError(fields.message);
  }

  // If everything is valid
  if (valid) {
    successMessage.textContent = "Thanks! We'll get back to you soon.";
    successMessage.style.display = "block";

    form.reset();

    // Hide success message after 3 seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  }
});

// Remove errors while typing
Object.values(fields).forEach((input) => {
  input.addEventListener("input", () => clearError(input));
});
