const form = document.getElementById("form");
const ccv = document.getElementById("ccv");
const checkCircle = document.getElementById("check-circle");
const exclamationCircle = document.getElementById("exclamation-circle");

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
  } else if (ccvValue.length === 3) {
    setSuccessFor(ccv);
  } else {
    // add success class
    setErrorFor(ccv);
  }
}

// TRYING TO FIGURE OUT HOW TO CHECK if .length === 3 digits. Kinda stuck rn

// if (ccvValue === "") {
//   //show error
//   //add error classes
//   setErrorFor(ccv);
// } else if (ccvValue.length === 3 && typeof ccvValue === "Number") {
//   setSuccessFor(ccv);
// } else {
//   // add success class
//   setErrorFor(ccv);
// }

function setErrorFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  exclamationCircle.style.visibility = "visible";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
  checkCircle.style.visibility = "visible";
}

function setSuccessFor2(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
  checkCircle.style.visibility = "visible";
}
