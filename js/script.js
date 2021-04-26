const form = document.getElementById("form");
const ccv = document.getElementById("ccv");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get the values from the inputs
  const ccvValue = ccv.value.trim();

  if (ccvValue === "") {
    //show error
    //add error classes
    setErrorFor(ccv);
  } else {
    // add success class
    setSuccessFor(ccv);
  }
}
function setErrorFor(input) {
  const formControl = input.parentElement; // MAYBE THE PROBLEM
  // const small = row.querySelector("small");

  // add error message inside small
  // small.innerText = message;

  // add error class
  // row.className = "row-right error";
  formControl.className = "form-control error";
}

function setSuccessFor(input) {}
