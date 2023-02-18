module.exports = function toReadable(number) {
    let result = "";
    let num_str = number.toString().split("");

    const num_obj = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    if (num_str.length == 1) {
        let z = num_str;
        for (let i in num_obj) {
            if (i == z) {
                return num_obj[num_str];
            }
        }
    }
    if (num_str.length == 3) {
        let x = num_str[1] + 0;
        for (let i in num_obj) {
            if (i == x && num_str[1] !== 0) {
                return (
                    num_obj[num_str[0]] +
                    " hundred " +
                    num_obj[i] +
                    " " +
                    num_obj[num_str[2]]
                );
            }
            if (num_str[1] == 0 && num_str[2] == 0)
                return num_obj[num_str[0]] + " hundred";
            if (num_str[1] == 0)
                return num_obj[num_str[0]] + " hundred " + num_obj[num_str[2]];
            if (num_str[2] == 0)
                return num_obj[num_str[0]] + " hundred " + num_obj[x];
            if (num_str[1] == 1)
                return (
                    num_obj[num_str[0]] +
                    " hundred " +
                    num_obj[num_str[1] + num_str[2]]
                );
        }
    }
    if (num_str.length == 2) {
        let x = num_str[0] + 0;

        for (let i in num_obj) {
            if (i == x && num_str[1] !== 0) {
                return num_obj[i] + " " + num_obj[num_str[1]];
            }
            if (num_str[1] == 0) return num_obj[x];
            if (num_str[0] == 1) return num_obj[num_str[0] + num_str[1]];
        }
    }
};

// console.log(toReadable(500));
