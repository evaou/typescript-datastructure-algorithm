function reverseString(s: string[]): void {
    let sLength: number = s.length;
    let tmp: string;

    for (let i = 0; i < sLength / 2; i++) {
        tmp = s[i];
        s[i] = s[sLength - 1 - i];
        s[sLength - 1 - i] = tmp;
    }
}

let input: string[] = ["h", "e", "l", "l", "o"];
reverseString(input);
console.log(input);
// Output: ["o","l","l","e","h"]
