function lengthOfLongestSubstring(s: string): number {
    let left = 0;
    let maxLen = 0;
    let seenChar: { [key: string]: number } = {};

    for (let right = 0; right < s.length; right++) {
        let rightChar = s[right];
        let charIdx = seenChar[rightChar];

        if (charIdx >= left) {
            left = charIdx + 1;
        }

        seenChar[rightChar] = right;
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

function lengthOfLongestSubstring2(s: string): number {
    let maxLength = 0;
    let visitedChar: { [key: string]: boolean };

    for (let startIdx = 0; startIdx < s.length; startIdx++) {
        let tmpIdx = startIdx;
        let tmpChar = s[tmpIdx];

        visitedChar = {};

        while (!(tmpChar in visitedChar)) {
            visitedChar[tmpChar] = true;
            tmpIdx++;
            if (tmpIdx >= s.length) {
                break;
            }
            tmpChar = s[tmpIdx];
        }

        let subStrLength = Object.keys(visitedChar).length;
        maxLength = Math.max(maxLength, subStrLength);

        if (tmpIdx === s.length - 1) {
            break;
        }
    }

    return maxLength;
}
