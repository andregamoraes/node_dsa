class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  head: LinkedListNode<T>;
  tail: LinkedListNode<T>;
  length: number;

  constructor(value: T) {
    const newNode = new LinkedListNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  append(value: T): this {
    const newNode = new LinkedListNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value: T): this {
    const newNode = new LinkedListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index: number, value: T): this {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new LinkedListNode(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }

  remove(index: number): this {
    if (index >= this.length) {
      return this;
    }

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    if (unwantedNode) {
      leader.next = unwantedNode.next;
      this.length--;
    }
    return this;
  }

  traverseToIndex(index: number): LinkedListNode<T> {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next!;
      counter++;
    }
    return currentNode;
  }

  print(): void {
    const array: T[] = [];
    let currentNode: LinkedListNode<T> | null = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

  reverse(): this {
    if (!this.head.next) {
      return this;
    }

    let first: LinkedListNode<T> | null = this.head;
    this.tail = this.head;
    let second: LinkedListNode<T> | null = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;

    return this;
  }
}