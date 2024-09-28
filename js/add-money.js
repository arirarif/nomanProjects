import {
  saveUsersToLocalStorage,
  loadUsersFromLocalStorage,
} from "./user-module.js";

// Load balance and transaction history from localStorage when the page loads

document.addEventListener("DOMContentLoaded", function () {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedInUser) {
    // Load the users from localStorage and find the logged-in user
    let users = loadUsersFromLocalStorage(); // Load the latest users
    const currentUser = users.find((user) => user.phone === loggedInUser.phone);

    if (currentUser) {
      // Update the balance on page load
      document.getElementById("balance").innerText = currentUser.balance;

      // Load and display transaction history
      const historySection = document.getElementById("history-section");
      historySection.innerHTML = ""; // Clear existing history

      currentUser.transactions.forEach((transaction) => {
        const div = document.createElement("div");
        div.innerHTML = `
          <h4 class="text-amber-400 text-xl">${transaction.type}</h4>
          <p>${transaction.type} ${transaction.amount}, New-Balance: ${currentUser.balance} on ${transaction.date}</p>
        `;
        historySection.appendChild(div);
      });
    }
  }
});

document.getElementById("add-button").addEventListener("click", function (e) {
  e.preventDefault();

  const addMoney = parseFloat(getInputValueById("add-amount"));
  const pin = getInputValueById("add-pin-number");

  // Retrieve logged-in user from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
    alert("No user is logged in.");
    return;
  }

  // Load the users from localStorage and find the logged-in user
  let users = loadUsersFromLocalStorage(); // Load the latest users
  const currentUser = users.find((user) => user.phone === loggedInUser.phone);

  if (!currentUser) {
    alert("User not found.");
    return;
  }

  if (pin === currentUser.pin) {
    const newBalance = currentUser.balance + addMoney;
    currentUser.balance = newBalance;

    // Save transaction in the current user's transactions array
    const transaction = {
      type: "cash-in",
      amount: addMoney,
      balance: currentUser.balance,
      date: new Date().toLocaleString(),
    };
    currentUser.transactions.push(transaction); // Add transaction to user's history

    // Save the updated users array back to localStorage
    saveUsersToLocalStorage(users);

    document.getElementById("balance").innerText = newBalance;

    const div = document.createElement("div");
    div.innerHTML = `
      <h4 class="text-amber-400 text-xl">Cash-in</h4>
      <p>cash-in ${addMoney}, New-Balance ${newBalance} on ${transaction.date}</p>
    `;

    document.getElementById("history-section").appendChild(div);
  } else {
    alert("provide valid pin");
  }

  clearFormInputs("add-form");
});
