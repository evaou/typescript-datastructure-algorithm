class TrieNode {
  keys: { [key: string]: TrieNode };
  isEnd: boolean;

  constructor() {
    this.keys = {};
    this.isEnd = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string, node = this.root): void {
    if (word.length === 0) {
      node.isEnd = true;
    } else if (!node.keys[word[0]]) {
      node.keys[word[0]] = new TrieNode();
      this.insert(word.substring(1), node.keys[word[0]]);
    } else {
      this.insert(word.substring(1), node.keys[word[0]]);
    }
  }

  search(word: string, node = this.root): boolean {
    if (word.length === 0) {
      if (node.isEnd) {
        return true;
      } else {
        return false;
      }
    } else if (!node.keys[word[0]]) {
      return false;
    } else {
      return this.search(word.substring(1), node.keys[word[0]]);
    }
  }

  startsWith(prefix: string, node = this.root): boolean {
    if (prefix.length === 0) {
      return true;
    } else if (!node.keys[prefix[0]]) {
      return false;
    } else {
      return this.startsWith(prefix.substring(1), node.keys[prefix[0]]);
    }
  }
}
