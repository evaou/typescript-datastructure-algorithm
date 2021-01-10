function reverseStringIterative(str: string): string {
    let strArray: string[] = str.split("");
    let strLength: number = str.length;
    let tmp: string;

    for (let i = 0; i < strLength / 2; i++) {
        tmp = strArray[i];
        strArray[i] = strArray[strLength - 1 - i];
        strArray[strLength - 1 - i] = tmp;
    }

    return strArray.join("");
}

function reverseStringRecursive(str: string): string {
    if (!str.length) {
        return "";
    }

    return reverseStringRecursive(str.substr(1)) + str[0];
}

console.log(reverseStringIterative("yoyo mastery"));
console.log(reverseStringRecursive("yoyo mastery"));
