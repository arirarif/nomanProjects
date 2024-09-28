document
  .getElementById("add-money-button")
  .addEventListener("click", function () {
    selectSectionById("add-form");
  });

document
  .getElementById("out-money-button")
  .addEventListener("click", function () {
    selectSectionById("out-form");
  });

document.getElementById("transactions").addEventListener("click", function () {
  selectSectionById("transaction-section");
});
