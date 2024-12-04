function getGrade() {
  //prompt the user to input marks
  let marks = prompt("Input marks(0-100)");

  marks = Number(marks);

  //check if the user has input a valid number
  if (isNaN(marks)) {
    alert("please input a number");
  }
  if (marks < 0 || marks > 100);
  {
    alert("please input a number between 0 and 100");
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
  } else {grade = "E";
}
// Display the result
alert(`The grade for the marks ${marks} is: ${grade}`);
}
getGrade();