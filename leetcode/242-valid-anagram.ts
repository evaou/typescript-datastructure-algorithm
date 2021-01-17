function buildLetterFreq(str: string): { [key: string]: number } {
    let letterFreq: { [key: string]: number } = {};

    for (let letter of str) {
        if (!(letter in letterFreq)) {
            letterFreq[letter] = 0;
        }

        letterFreq[letter]++;
    }

    return letterFreq;
}

function isAnagram(firstStr: string, secondStr: string): boolean {
    if (firstStr.length !== secondStr.length) {
        return false;
    }

    let letterFreqOfFirstStr: { [key: string]: number } = buildLetterFreq(
        firstStr
    );
    let letterFreqOfSecondStr: { [key: string]: number } = buildLetterFreq(
        secondStr
    );

    for (let letter in letterFreqOfFirstStr) {
        if (!(letter in letterFreqOfSecondStr)) {
            return false;
        } else {
            if (
                letterFreqOfFirstStr[letter] !== letterFreqOfSecondStr[letter]
            ) {
                return false;
            }
        }
    }

    return true;
}
