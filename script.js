const submitBtn = document.getElementById("submitBtn");
const dayInput = document.getElementById("day-box");
const monthInput = document.getElementById("month-box");
const yearInput = document.getElementById("year-box");
const dayError = document.getElementById("day-error");
const monthError = document.getElementById("month-error");
const yearError = document.getElementById("year-error");
const error = document.getElementById("error");

//to reset input
const setInput = (valueA, valueB, valueC) => {
  document
    .getElementById("years-div")
    .querySelector("#result-input").textContent = valueA;
  document
    .getElementById("months-div")
    .querySelector("#result-input").textContent = valueB;
  document
    .getElementById("days-div")
    .querySelector("#result-input").textContent = valueC;
};


//Validatiion
function validation() {
  const userDay = parseInt(dayInput.value);
  const userMonth = parseInt(monthInput.value);
  const userYear = parseInt(yearInput.value);

  let isValid = true;

  const userDate = new Date(userYear, userMonth - 1, userDay); // Month is 0-indexed
  const today = new Date();

  const isFutureDate = userDate > today;

  //Future validation
  if (isFutureDate) {
    error.innerText = "Please Enter a valid previous date";
    isValid = false;
    setInput("- -", "- -", "- -");
  } else {
    error.innerText = "";
  }

  //error message
  const errorMessage = (text) => {
    dayError.style.display = "block";
    dayError.innerText = text;
    dayInput.classList.add("error-border");
    dayInput.style.borderColor = "red";
    isValid = false;
    setInput("- -", "- -", "- -");
  };

  //Validate Day Input
  if (isNaN(userDay) || userDay < 1 || userDay > 31) {
    errorMessage("Enter a valid day (1-31)");
  } else if ((userMonth === 9 || 4 || 6 || 11 || 2) && userDay > 30) {
    errorMessage("Month cannot have more that 30 Days");
  } else if (userMonth === 2 && userDay > 28) {
    errorMessage("Month cannot have more that 28 Days");
  } else {
    dayError.style.display = "none";
    dayInput.classList.remove("error-border");
    dayInput.style.borderColor = "grey";
  }

  // Validate month input
  if (isNaN(userMonth) || userMonth < 1 || userMonth > 12) {
    monthError.style.display = "block";
    monthError.innerText = "Enter a valid month (1-12)";
    monthInput.classList.add("error-border");
    monthInput.style.borderColor = "red";
    isValid = false;
    setInput("- -", "- -", "- -");
  } else {
    monthError.style.display = "none";
    monthInput.classList.remove("error-border");
    monthInput.style.borderColor = "grey";
  }

  // Validate year input
  if (
    isNaN(userYear) ||
    userYear < 1900 ||
    userYear > new Date().getFullYear()
  ) {
    yearError.style.display = "block";
    yearError.innerText = "Enter a current year";
    yearInput.classList.add("error-border");
    yearInput.style.borderColor = "red";
    isValid = false;
    setInput("- -", "- -", "- -");
  } else {
    yearError.style.display = "none";
    yearInput.classList.remove("error-border");
    yearInput.style.borderColor = "grey";
  }

  return isValid;
}

function ageCalculator() {
  if (!validation()) {
    return; // Exit if validation fails
  }

  const userDay = parseInt(dayInput.value);
  const userMonth = parseInt(monthInput.value) - 1;
  const userYear = parseInt(yearInput.value);

  const birthDate = new Date(userYear, userMonth, userDay);
  const birthTime = birthDate.getTime();

  const today = new Date();
  const currentTime = today.getTime();

  const ageInMilliseconds = currentTime - birthTime;

  const msInYear = 365.25 * 24 * 60 * 60 * 1000;
  const msInMonth = (365.25 / 12) * 24 * 60 * 60 * 1000;
  const msInDay = 24 * 60 * 60 * 1000;

  const years = Math.floor(ageInMilliseconds / msInYear);
  const remainingAfterYears = ageInMilliseconds % msInYear;

  const months = Math.floor(remainingAfterYears / msInMonth);
  const remainingAfterMonths = remainingAfterYears % msInMonth;

  const days = Math.floor(remainingAfterMonths / msInDay);

  setInput(years, months, days);
}

submitBtn.addEventListener("click", ageCalculator);
