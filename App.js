          // MATH METHODS//

//           function calculateValues() {
//             const inputNumber = parseInt(document.getElementById('number').value);
//      if (isNaN(inputNumber) || inputNumber <= 0) {
//       document.getElementById('output').innerHTML = "Please enter a valid positive integer.";            return;
//             }
//             const roundValue = Math.round(inputNumber);
//             const floorValue = Math.floor(inputNumber);
//             const ceilValue = Math.ceil(inputNumber);

//           s
//             document.getElementById('output').innerHTML = `
//                 a. Number: ${inputNumber} <br>
//                 b. Round Value: ${roundValue} <br>
//                 c. Floor Value: ${floorValue} <br>
//                 d. Ceil Value: ${ceilValue} <br>
//             `;
//         }


//         function analyzeNumber() {
//           var userInput = parseFloat(document.getElementById("userInput").value);

          
//           if (isNaN(userInput) || userInput >= 0) {
//               alert("Please enter a valid negative floating-point number.");
//               return;
//           }
//           document.getElementById("originalNumber").textContent = userInput;
//           var roundOff = Math.round(userInput * 100) / 100;
//           document.getElementById("roundOffValue").textContent = roundOff;

//           var floorVal = Math.floor(userInput);
//           document.getElementById("floorValue").textContent = floorVal;

//           var ceilVal = Math.ceil(userInput);
//           document.getElementById("ceilingValue").textContent = ceilVal;
//       }
  

//       function absoluteValue(number) {
//         if (number < 0) {
//           return -number;
//         } else {
//           return number;
//         }
//       }
//       var inputNumber = -4;
//       var result = absoluteValue(inputNumber);
// console.log("The absolute value of " + inputNumber + " is " + result);

// var randomvalues = "123456"
// for (var i=1; i<=6; i++){
//   var randomnumber = Math.round(Math.random() * randomvalues.length);
//   console.log(randomvalues[randomnumber]);
// }


// function parseWeight() {
//   var userInput = document.getElementById("weightInput").value;
//   var weight = parseFloat(userInput);
//   if (!isNaN(weight)) {
//     document.getElementById("parsedWeight").innerHTML = "Your weight is: " + weight.toFixed(2) + " kg";
//   } else {
//     document.getElementById("parsedWeight").innerHTML = "Invalid input. Please enter a valid weight.";
//   }
// }

// var date = new Date();
// var dayNames =["sun","Mon","Tue","Wed","Thu","Fri","Sat"]

// console.log(dayNames[date.getDay()])


// var d = new Date();
// var monthNames = ['Jan','Feb','March','April','May','June','July','August','Sep','Oct','Nov','Dec']
// console.log(monthNames[d.getMonth()])


// const ramadanStartDate = new Date('2023-06-18');
// const currentDate = new Date();


// const timeDifference = currentDate - ramadanStartDate;

// const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert(`Number of days passed since 1st Ramadan (June 18, 2015): ${daysPassed} days`);