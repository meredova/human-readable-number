module.exports = function toReadable (number) {
    if (number === 0) {
        return 'zero';
    } else {
        let result = ''
        let definition = [
        {value: 100, string: "hundred"},
        {value: 90, string: "ninety"},
        {value: 80, string: "eighty"},
        {value: 70, string: "seventy"},
        {value: 60, string: "sixty"},
        {value: 50, string: "fifty"},
        {value: 40, string: "forty"},
        {value: 30, string: "thirty"},
        {value: 20, string: "twenty"},
        {value: 19, string: "nineteen"},
        {value: 18, string: "eighteen"},
        {value: 17, string: "seventeen"},
        {value: 16, string: "sixteen"},
        {value: 15, string: "fifteen"},
        {value: 14, string: "fourteen"},
        {value: 13, string: "thirteen"},
        {value: 12, string: "twelve"},
        {value: 11, string: "eleven"},
        {value: 10, string: "ten"},
        {value: 9, string: "nine"},
        {value: 8, string: "eight"},
        {value: 7, string: "seven"},
        {value: 6, string: "six"},
        {value: 5, string: "five"},
        {value: 4, string: "four"},
        {value: 3, string: "three"},
        {value: 2, string: "two"},
        {value: 1, string: "one"},
        ];

        for (let i of definition) {
            if (number >= i.value) {
                if (number <= 99) {
                    result = (result + i.string);
                    number = (number - i.value);
                    if (number > 0) result = (result + ' ');
                } else {
                    let t = Math.floor(number / i.value);
                    let d = (number % i.value);
                    if (d > 0) {
                        return toReadable(t) + ' ' + i.string + ' ' + toReadable(d);
                    } else {
                        return toReadable(t) + ' ' + i.string;
                    }
                }
            }
        }
        return result;
    }
}
