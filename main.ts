import { bubbleSort } from './src/algorithms/bubble-sort';
import { insertionSort } from './src/algorithms/insertion-sort';
import { mergeSort } from './src/algorithms/merge-sort';
import { quickSort } from './src/algorithms/quick-sort';
import { selectionSort } from './src/algorithms/selection-sort';
import { LinkedList } from './src/data_structures/linked_list';
import { Queue } from './src/data_structures/queue';
import { Stack } from './src/data_structures/stack';

let array = [5, 3, 8, 4, 2];
console.log('Original array:', array);
console.log('Bubble Sort:', bubbleSort([...array]));
console.log('Insertion Sort:', insertionSort([...array]));
console.log('Merge Sort:', mergeSort([...array]));
console.log('Quick Sort:', quickSort([...array]));
console.log('Selection Sort:', selectionSort([...array]));

const myLinkedList = new LinkedList<number>(10);
const myStack = new Stack<number>();
const myQueue = new Queue<number>();
