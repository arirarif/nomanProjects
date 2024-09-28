import { registerUser } from "./user-module.js";

document
  .getElementById("reg-login-button")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const phoneNumber = getInputValueById("reg-phone-number");
    const pinNumber = getInputValueById("reg-pin-number");

    // validation phone and pin number

    const isValidPhone = validatePhoneNumber(phoneNumber);
    const isValidPin = validatePin(pinNumber);

    if (!isValidPhone) {
      alert("provide a valid phone number");
      return;
    }

    if (!isValidPin) {
      alert(
        "PIN must be at least 5 characters and include letters, numbers, and symbols."
      );
      return; // Stop the registration process if PIN is invalid
    }

    const isRegistered = registerUser(phoneNumber, pinNumber);

    if (isRegistered) {
      alert("Registration Successful !");

      clearFormInputs("reg-form");

      window.location.href = "index.html";
    }
  });

// Redirect to Register Page

document
  .getElementById("register-log-button")
  .addEventListener("click", function () {
    window.location.href = "index.html";
  });
