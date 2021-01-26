function minRemoveToMakeValid(s: string): string {
    if (s.length === 0) {
        return s;
    }

    let strArr = s.split("");
    let openIdx: number[] = [];

    for (let index = 0; index < strArr.length; index++) {
        let char = strArr[index];

        if (char === "(") {
            openIdx.push(index);
        } else if (char === ")") {
            if (openIdx.length > 0) {
                openIdx.pop();
            } else {
                strArr[index] = "";
            }
        }
    }

    for (let index of openIdx) {
        strArr[index] = "";
    }

    return strArr.join("");
}
