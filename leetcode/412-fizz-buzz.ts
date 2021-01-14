/*
# problem
- input
    single number, >= 1
- output
    string array
    x3 > Fizz
    x5 > Buzz
    x3, x5 > FizzBuzz
- example 
    7 => ["1", "2", "Fizz", 4, "Buzz", "Fizz", 7]
- goal

# naive
- idea
    go thru number from 1 to n
        empty string
        if %3 is 0
            append string as Fizz
        else if %5 is 0
            append string as Buzz
        else 
            append string as string number
        
        push string to result array
- time/space complexity        
*/

function fizzBuzz(n: number): string[] {
    let str: string;
    let result: string[] = [];

    for (let num = 1; num <= n; num++) {
        str = "";

        if (num % 3 === 0) {
            str += "Fizz";
        }

        if (num % 5 === 0) {
            str += "Buzz";
        }

        if (str.length === 0) {
            str = num.toString();
        }

        result.push(str);
    }

    return result;
}

console.log(fizzBuzz(15));
