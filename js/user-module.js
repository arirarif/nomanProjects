// Save users to local storage
function saveUsersToLocalStorage(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Load users from local storage
function loadUsersFromLocalStorage() {
  const storedUsers = localStorage.getItem("users");
  return storedUsers ? JSON.parse(storedUsers) : [];
}

let users = loadUsersFromLocalStorage();

function registerUser(phone, pin) {
  const userExists = users.some((user) => user.phone === phone);

  if (userExists) {
    alert(
      "This phone number is already registered. Please use a different number."
    );
    return false; // Exit the function to prevent registration
  }

  users.push({ phone, pin, balance: 0, transactions: [] });
  saveUsersToLocalStorage(users); // Save the updated user list to local storage
  return true;
}

function loginUser(phone, pin) {
  return users.find((user) => user.phone === phone && user.pin === pin);
}

export {
  registerUser,
  loginUser,
  saveUsersToLocalStorage,
  loadUsersFromLocalStorage,
};
