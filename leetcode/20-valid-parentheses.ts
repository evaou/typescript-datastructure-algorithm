function isValid(s: string): boolean {
    if (s.length === 0) {
        return true;
    }

    if (s.length % 2 !== 0) {
        return false;
    }

    let bracketMap = { "(": ")", "[": "]", "{": "}" };
    let stackArr: string[] = [];
    let topChar: string;

    for (let currentChar of s) {
        if (currentChar in bracketMap) {
            stackArr.push(currentChar);
        } else {
            topChar = stackArr.pop();
            if (bracketMap[topChar] !== currentChar) {
                return false;
            }
        }
    }

    if (stackArr.length > 0) {
        return false;
    }

    return true;
}
