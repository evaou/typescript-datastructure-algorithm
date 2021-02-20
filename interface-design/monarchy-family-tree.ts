class Person {
  name: string;
  isAlive: boolean;
  children: Person[];

  constructor(name: string) {
    this.name = name;
    this.isAlive = true;
    this.children = [];
  }
}

class Monarchy {
  king: Person;
  _persons: {};

  constructor(kingName: string) {
    this.king = new Person(kingName);
    this._persons[kingName] = this.king;
  }

  // time: O(1)
  birth(childName: string, parentName: string): void {
    const parent = this._persons[parentName];
    const newChild = new Person(childName);
    parent.children.push(newChild);
    this._persons[childName] = newChild;
  }

  // time: O(1)
  death(name: string): Person | null {
    const person = this._persons[name];

    if (person === undefined) {
      return null;
    }

    person.isAlive = false;
    return person;
  }

  getOrderOfSuccession(): Person[] {
    const order: Person[] = [];
    this._dfs(this.king, order);

    return order;
  }

  // time: O(N)
  _dfs(currentPerson: Person, order: Person[]): void {
    if (currentPerson.isAlive) {
      order.push(currentPerson);
    }

    for (let child of currentPerson.children) {
      this._dfs(child, order);
    }
  }
}
