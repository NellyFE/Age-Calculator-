// // // The dates
// // const birthDate = new Date(2000, 11, 20);
// // const currentDate = new Date();

// // let age = currentDate - birthDate;

// // let years = age / (1000 * 86400 * 365);

// // let months = (years - Math.floor(years)) * 12;

// // let days = (months - Math.floor(months)) * 30;

// // years = Math.floor(years);
// // months = Math.floor(months);
// // days = Math.floor(days);

// // console.log(`Age: ${years} years, ${months} months , ${days} days`);

// //converting my ages to function

// function differentAges(birthday) {

//   const birthDate = new Date(birthday);

//   const currentDate = new Date();

//   let age = currentDate - birthDate;

//   if (isNaN(birthDate)) {
//     alert("Please enter a valid date with numbers.");
//     return;
//   }

//   let years = age / (1000 * 86400 * 365);

//   let months = (years - Math.floor(years)) * 12;

//   let days = (months - Math.floor(months)) * 30;

//   years = Math.floor(years);
//   months = Math.floor(months);
//   days = Math.floor(days);

//   return `Age: ${years} years, ${months} months, and ${days} days.`;
// }

// console.log(differentAges("2002 , 1 , 1p"));

// const submitBtn = document.getElementById('submitBtn')

// function ageCalculator() {

//  const userDay = parseInt(document.getElementById("day-box").value);
//   const userMonth = parseInt(document.getElementById("month-box").value);
//   const userYear = parseInt(document.getElementById("year-box").value);

//   const today = new Date();
//   let currentYear = today.getFullYear();
//   let currentMonth = today.getMonth() + 1;
//   let currentDay = today.getDate();

//   let years = currentYear - userYear;
//   let months = currentMonth - userMonth;
//   let days = currentDay - userDay;

//   console.log("gotcha");
// }

// submitBtn.addEventListener("click", ageCalculator);

// if (isNaN(day) || isNaN(month) || isNaN(year)) {
//   alert('Please enter valid numbers for day, month, and year.');

// }

// const submitBtn = document.getElementById("submitBtn");
// const dayError = document.getElementById("day-error");
// const monthError = document.getElementById("month-error");
// const yearError = document.getElementById("year-error");

// function validation() {

//   const userDay = parseInt(document.getElementById("day-box").value);
// const userMonth = parseInt(document.getElementById("month-box").value) - 1;
// const userYear = parseInt(document.getElementById("year-box").value);

//   // validation
//   console.log(userMonth);
//   console.log(userDay);
// console.log(userYear);
//   if (
//     isNaN(userDay) == true ||
//     isNaN(userMonth) === true ||
//     isNaN(userYear) === true
//   ) {
//     dayError.style.display = "block";
//     monthError.style.display = "block";
//     yearError.style.display = "block";
//     console.log("validation worked");
//     return;
//   }else{
//     dayError.style.display = 'none'
//     monthError.style.display = "none";
//     yearError.style.display = "none";
//   }

//   // if (+userDay === 1 || +userDay <= 31) {
//   //   console.log("clicked");
//   // } else {
//   //   console.log("day must be between 1");
//   //   dayError.style.display = "block";
//   //   dayError.innerText = "Day must be between 1 and 31";
//   //   return;
//   // }
// }

// function ageCalculator() {
//   validation();


//   const userDay = parseInt(document.getElementById("day-box").value);
// const userMonth = parseInt(document.getElementById("month-box").value) - 1;
// const userYear = parseInt(document.getElementById("year-box").value);


//   const birthDate = new Date(userYear, userMonth, userDay);
//   const birthTime = birthDate.getTime();

//   const today = new Date();
//   const currentTime = today.getTime();

//   const ageInMilliseconds = currentTime - birthTime;

//   const msInYear = 365.25 * 24 * 60 * 60 * 1000;
//   const msInMonth = (365.25 / 12) * 24 * 60 * 60 * 1000;
//   const msInDay = 24 * 60 * 60 * 1000;

//   const years = Math.floor(ageInMilliseconds / msInYear);
//   const remainingAfterYears = ageInMilliseconds % msInYear;

//   const months = Math.floor(remainingAfterYears / msInMonth);
//   const remainingAfterMonths = remainingAfterYears % msInMonth;

//   const days = Math.floor(remainingAfterMonths / msInDay);

//   document
//     .getElementById("years-div")
//     .querySelector("#result-input").textContent = years;
//   document
//     .getElementById("months-div")
//     .querySelector("#result-input").textContent = months;
//   document
//     .getElementById("days-div")
//     .querySelector("#result-input").textContent = days;
// }

// submitBtn.addEventListener("click", ageCalculator);


const submitBtn = document.getElementById("submitBtn");
const dayInput = document.getElementById("day-box");
const monthInput = document.getElementById("month-box");
const yearInput = document.getElementById("year-box");
const dayError = document.getElementById("day-error");
const monthError = document.getElementById("month-error");
const yearError = document.getElementById("year-error");

function validation() {
  const userDay = parseInt(dayInput.value);
  const userMonth = parseInt(monthInput.value);
  const userYear = parseInt(yearInput.value);

  let isValid = true;

  // Validate day input
  if (isNaN(userDay) || userDay < 1 || userDay > 31) {
    dayError.style.display = "block";
    dayError.innerText = "Enter a valid day (1-31)";
    dayInput.classList.add("error-border");
    dayInput.style.borderColor = 'red'
    isValid = false;
  } else {
    dayError.style.display = "none";
    dayInput.classList.remove("error-border");
  }

  // Validate month input
  if (isNaN(userMonth) || userMonth < 1 || userMonth > 12) {
    monthError.style.display = "block";
    monthError.innerText = "Enter a valid month (1-12)";
    monthInput.classList.add("error-border");
    monthInput.style.borderColor = 'red'
    isValid = false;
  } else {
    monthError.style.display = "none";
    monthInput.classList.remove("error-border");
  }

  // Validate year input
  if (isNaN(userYear) || userYear < 1900 || userYear > new Date().getFullYear()) {
    yearError.style.display = "block";
    yearError.innerText = "Enter a valid year";
    yearInput.classList.add("error-border");
    yearInput.style.borderColor = 'red'
    isValid = false;
  } else {
    yearError.style.display = "none";
    yearInput.classList.remove("error-border");
  }

  return isValid; // Return true if all fields are valid
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

  document
    .getElementById("years-div")
    .querySelector("#result-input").textContent = years;
  document
    .getElementById("months-div")
    .querySelector("#result-input").textContent = months;
  document
    .getElementById("days-div")
    .querySelector("#result-input").textContent = days;
}

submitBtn.addEventListener("click", ageCalculator);
