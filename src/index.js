module.exports = function toReadable(n) {
    let result = "";

    let oneToNine = [ "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", ];
    oneToNine[n - 1];

    let tenToNineteen = [ "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", ];
    tenToNineteen[n - 10];

    let twentyToNinety = [ "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", ];
    twentyToNinety[Math.floor(n / 10) - 2];

    let hundredNumbers = "hundred";
    if (n === 0) {
        return "zero";
    }
    if (n >= 1 && n <= 9) {
        result += oneToNine[n - 1];
    } else if (n >= 10 && n <= 19) {
        result += tenToNineteen[n - 10];
    } else if (n >= 20 && n <= 99) {
        result += twentyToNinety[Math.floor(n / 10) - 2];
        if (n % 10 !== 0) {
            result += " " + oneToNine[(n % 10) - 1];
        }
    } else if (n >= 100 && n <= 999) {
        let hundred = Math.floor(n / 100);
        result += oneToNine[hundred - 1] + " " + hundredNumbers;
        let restNumbers = n % 100;
        if (restNumbers > 0) {
            result += " ";
        }
        if (restNumbers >= 1 && restNumbers <= 9) {
            result += oneToNine[restNumbers - 1];
        } else if (restNumbers >= 10 && restNumbers <= 19) {
            result += tenToNineteen[restNumbers - 10];
        } else if (restNumbers >= 20 && restNumbers <= 99) {
            result += twentyToNinety[Math.floor(restNumbers / 10) - 2];
            if (restNumbers % 10 !== 0) {
                result += " " + oneToNine[(restNumbers % 10) - 1];
            }
        }
    }
    return result;
};
