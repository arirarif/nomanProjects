// import { registerUser } from "./user-module.js";

// document
//   .getElementById("forgot-pin-btn")
//   .addEventListener("click", function () {
//     // Show the reset modal
//     document.getElementById("reset-form").classList.remove("hidden");
//   });

// document.getElementById("reset-button").addEventListener("click", function () {
//   const phoneNumber = getInputValueById("reset-phone-number");
//   const isValidPhone = validatePhoneNumber(phoneNumber);

//   if (!isValidPhone) {
//     alert("Please provide a valid phone number.");
//     return;
//   }

//   const user = users.find((user) => user.phone === phoneNumber);

//   if (!user) {
//     alert("This phone number is not registered.");
//     return;
//   }

//   // Allow the user to reset their PIN
//   const newPin = prompt(
//     "Enter a new PIN (at least 5 characters, including letters, numbers, and symbols):"
//   );

//   if (validatePin(newPin)) {
//     user.pin = newPin;
//     saveUsersToLocalStorage(users); // Update local storage with the new PIN
//     alert("Your PIN has been reset successfully.");
//     document.getElementById("reset-modal").classList.add("hidden");
//   } else {
//     alert(
//       "Invalid PIN. It must be at least 5 characters, include letters, numbers, and symbols."
//     );
//   }
// });
