class QueueNode<T> {
    value: T;
    next: QueueNode<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export class Queue<T> {
    first: QueueNode<T> | null;
    last: QueueNode<T> | null;
    size: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value: T): void {
        const newNode = new QueueNode(value);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            if (this.last) {
                this.last.next = newNode;
            }
            this.last = newNode;
        }
        this.size++;
    }

    dequeue(): T | null {
        if (this.size === 0) {
            return null;
        }
        const value = this.first?.value || null;
        this.first = this.first?.next || null;
        this.size--;
        if (this.size === 0) {
            this.last = null;
        }
        return value;
    }
    peek(): T | null {
        return this.first?.value || null;
    }
    isEmpty(): boolean {
        return this.size === 0;
    }
    getSize(): number {
        return this.size;
    }
    clear(): void {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    toArray(): T[] {
        const result: T[] = [];
        let current = this.first;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
}