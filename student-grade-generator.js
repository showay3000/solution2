const readline = require("readline-sync")
function getGrade() {
  //prompt the userto input marks
  let marks = readline.question("Input marks(0-100)");

  marks = Number(marks);

  //check if the user has input a valid number
  while (true) {
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
      break;
    }


    else {
     return console.log("please input a number between 0 and 100");
    }
  }
  //Get the Grade:
  let grade;

  if (marks >= 79) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 50) {
    grade = "C";
  } else if (marks >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }
  // Display the result
  console.log(`The grade for the marks ${marks} is: ${grade}`);
}
getGrade();