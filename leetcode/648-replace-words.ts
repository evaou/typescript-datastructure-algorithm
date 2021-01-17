function hasWordPrefixInDictionary(dictionary: string[], word: string): string {
    if (!dictionary.length) {
        return null;
    }

    let minLength: number = Number.MAX_VALUE;
    let newWord: string = null;

    for (let rootWord of dictionary) {
        let wordPrefix = word.slice(0, rootWord.length);
        if (wordPrefix === rootWord) {
            if (rootWord.length < minLength) {
                minLength = rootWord.length;
                newWord = rootWord;
            }
        }
    }

    return newWord;
}

function replaceWords(dictionary: string[], sentence: string): string {
    let words: string[] = sentence.split(" ");
    let replacedWord: { [key: string]: string } = {};

    for (let index = 0; index < words.length; index++) {
        let word = words[index];

        if (word in replacedWord) {
            words[index] = replacedWord[word];
            continue;
        }

        let newWord = hasWordPrefixInDictionary(dictionary, word);
        if (newWord) {
            words[index] = newWord;
            replacedWord[word] = newWord;
        }
    }

    return words.join(" ");
}
