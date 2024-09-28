import { loginUser } from "./user-module.js";

document.getElementById("login-button").addEventListener("click", function (e) {
  e.preventDefault();
  const phoneNumber = getInputValueById("phone-number");
  const pinNumber = getInputValueById("pin-number");

  const user = loginUser(phoneNumber, pinNumber);

  if (user) {
    // Assuming login is successful and you have the user object
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    //move to home page
    window.location.href = "home.html";
  } else {
    alert("provide valid information");
  }

  clearFormInputs("login-form");
});

document
  .getElementById("register-button")
  .addEventListener("click", function () {
    window.location.href = "register.html";
  });
