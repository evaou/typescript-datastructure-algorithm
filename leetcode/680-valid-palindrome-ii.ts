function isPalindrome(s: string, left: number, right: number): boolean {
    if (right - left + 1 <= 1) {
        return true;
    }

    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }

    return true;
}

function validPalindrome(s: string): boolean {
    if (s.length <= 2) {
        return true;
    }

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            if (right - left + 1 <= 2) {
                return true;
            }

            if (
                isPalindrome(s, left + 1, right) ||
                isPalindrome(s, left, right - 1)
            ) {
                return true;
            } else {
                return false;
            }
        }
    }

    return true;
}
