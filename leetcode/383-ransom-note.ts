function canConstruct(noteStr: string, letterStr: string): boolean {
    let noteHashMap = buildHashMap(noteStr);
    let letterHashMap = buildHashMap(letterStr);

    for (let key in noteHashMap) {
        if (key in letterHashMap) {
            if (letterHashMap[key] < noteHashMap[key]) {
                return false;
            } else {
                letterHashMap[key] = letterHashMap[key] - 1;
            }
        } else {
            return false;
        }
    }

    return true;
}

function buildHashMap(str: string): { [key: string]: number } {
    let hashMap: { [key: string]: number } = {};

    for (let char of str) {
        if (char in hashMap) {
            hashMap[char]++;
        } else {
            hashMap[char] = 1;
        }
    }

    return hashMap;
}
