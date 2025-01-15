function numberToWords(n) {
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", 
                  "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    
    const thousands = ["", "Thousand", "Million", "Billion", "Trillion"];

    function convertHundred(num) {
        if (num === 0) return "";
        else if (num < 20) return ones[num];
        else if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + ones[num % 10] : "");
        else return ones[Math.floor(num / 100)] + " Hundred" + (num % 100 !== 0 ? " " + convertHundred(num % 100) : "");
    }

    if (n === 0) return "Zero";

    let result = "";
    let thousandCounter = 0;

    while (n > 0) {
        if (n % 1000 !== 0) {
            result = convertHundred(n % 1000) + " " + thousands[thousandCounter] + " " + result;
        }
        n = Math.floor(n / 1000);
        thousandCounter++;
    }

    return result.trim();
}

// Example usage
let number = 123456789;
console.log(numberToWords(number));
