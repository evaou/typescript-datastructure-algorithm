function longestWord(words: string[]): string {
    if (words.length <= 1) {
        return "";
    }

    let sortedWords: string[] = words.sort();
    let hash: { [key: string]: number } = {};
    let result: string = "";
    let word: string;

    for (let i = 0; i < sortedWords.length; i++) {
        word = sortedWords[i];
        if (word.length === 1 || word.slice(0, word.length - 1) in hash) {
            hash[word] = 1;
            result = word.length > result.length ? word : result;
        }
    }

    return result;
}

let words: string[];
//words = ["w", "wo", "wor", "worl", "world"]; // "world"
words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]; // "apple"

console.log(longestWord(words));
