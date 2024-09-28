function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;

  return inputValue;
}

function getTextValueById(id) {
  const textValue = document.getElementById(id).innerText;
  return textValue;
}

// clear input forms
function clearFormInputs(id) {
  const inputs = document.querySelectorAll(`#${id} input`);
  inputs.forEach((input) => {
    input.value = "";
  });
}

// for changing section
function selectSectionById(id) {
  //Hide section
  document.getElementById("add-form").classList.add("hidden");
  document.getElementById("out-form").classList.add("hidden");
  document.getElementById("transaction-section").classList.add("hidden");

  // only show section
  document.getElementById(id).classList.remove("hidden");
}

// Function to validate phone number
function validatePhoneNumber(phone) {
  // Check if phone starts with '01' and is exactly 11 digits
  const phoneRegex = /^01\d{9}$/;
  return phoneRegex.test(phone);
}

// Function to validate PIN
function validatePin(pin) {
  // Check if PIN is at least 5 characters long and includes letters, numbers, and symbols
  const pinRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{5,}$/;
  return pinRegex.test(pin);
}
