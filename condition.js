isLogin = true;
if (isLogin) {
  console.log("you are Logged in ");
} else {
  console.log("Please Login");
}
age = 25;
isIndian = true;
if (age < 18 && isIndian) {
  console.log("You cannot Vote");
} else {
  console.log("You can vote");
}

marks = 96;
if (marks <= 100 && marks >= 75) {
  console.log("Disti");
} else if (marks <= 75 && marks >= 60) {
  console.log("First Class");
} else if (marks <= 60 && marks >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}

n = 10;
if (n % 2 == 0) {
  console.log("number is even");
} else if (n % 2 != 0) {
  console.log("number is odd");
} else {
  ("you have enter ZERO");
}

day = 7;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day")
}
