import {
  saveUsersToLocalStorage,
  loadUsersFromLocalStorage,
} from "./user-module.js";

document.getElementById("out-button").addEventListener("click", function (e) {
  e.preventDefault();

  const cashOutMoney = parseFloat(getInputValueById("out-amount"));
  const pin = getInputValueById("out-pin-number");

  // Retrieve logged-in user from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
    alert("No user is logged in.");
    return;
  }

  let users = loadUsersFromLocalStorage(); // Load the latest users
  const currentUser = users.find((user) => user.phone === loggedInUser.phone);

  if (!currentUser) {
    alert("User not found.");
    return;
  }

  if (pin === currentUser.pin) {
    if (currentUser.balance < cashOutMoney) {
      alert("you have not enough money");
      return;
    }
    const newBalance = currentUser.balance - cashOutMoney;
    currentUser.balance = newBalance;

    // Save transaction in the current user's transactions array
    const transaction = {
      type: "cash-out",
      amount: cashOutMoney,
      balance: currentUser.balance,
      date: new Date().toLocaleString(),
    };
    currentUser.transactions.push(transaction);

    // Save the updated users array back to localStorage
    saveUsersToLocalStorage(users);

    document.getElementById("balance").innerText = newBalance;

    const div = document.createElement("div");
    div.innerHTML = `
      <h4 class="text-red-400 text-xl">Cash-Out</h4>
      <p>cash-out ${cashOutMoney}, New-Balance ${newBalance} on ${transaction.date}</p>
    `;

    document.getElementById("history-section").appendChild(div);
  } else {
    alert("provide valid pin");
  }

  clearFormInputs("out-form");
});
