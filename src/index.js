module.exports = function toReadable(number) {
  if (number === 0) return "zero";

  let readableNumber = "";

  let arr = String(number).split('');

  let simpleNumbers = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  tensArray = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ]

  switch (arr.length) {
    case 3: {
      if (arr[1] == 0 && arr[2] == 0) readableNumber += simpleNumbers[arr[0]] + " hundred";
      else if (arr[1] < 2) readableNumber += simpleNumbers[arr[0]] + " hundred " + simpleNumbers[+(arr[1] + "" + arr[2])]
      else if (arr[1] == 0) readableNumber += simpleNumbers[arr[0]] + " hundred " + simpleNumbers[arr[2]];
      else if (arr[2] == 0) readableNumber += simpleNumbers[arr[0]] + " hundred " + tensArray[arr[1]];
      else readableNumber += simpleNumbers[arr[0]] + " hundred " + tensArray[arr[1]] + " " + simpleNumbers[arr[2]];
      break;
    }

    case 2: {
      if (number < 20) readableNumber = simpleNumbers[number];
      else if (arr[1] == 0) readableNumber += tensArray[arr[0]];
      else readableNumber += tensArray[arr[0]] + " " + simpleNumbers[arr[1]];
      break;
    }

    case 1: {
      readableNumber += simpleNumbers[arr[0]];
      break;
    }
  }
  return readableNumber;
}

