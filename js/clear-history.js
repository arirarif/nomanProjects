import {
  loadUsersFromLocalStorage,
  saveUsersToLocalStorage,
} from "./user-module.js";

document
  .getElementById("history-clear-btn")
  .addEventListener("click", function () {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
      let users = loadUsersFromLocalStorage(); // Load the latest users
      const currentUser = users.find(
        (user) => user.phone === loggedInUser.phone
      );

      if (currentUser) {
        currentUser.transactions = []; // Clear transaction history
        saveUsersToLocalStorage(users); // Save the updated users back to localStorage

        // Clear the history section in the DOM
        document.getElementById("history-section").innerHTML = "";
        alert("Transaction history cleared.");
      }
    }
  });
