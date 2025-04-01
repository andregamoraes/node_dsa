import { bubbleSort } from './src/bubble-sort';
import { insertionSort } from './src/insertion-sort';
import { mergeSort } from './src/merge-sort';
import { quickSort } from './src/quick-sort';
import { selectionSort } from './src/selection-sort';

let array = [5, 3, 8, 4, 2];
console.log('Original array:', array);
console.log('Bubble Sort:', bubbleSort([...array]));
console.log('Insertion Sort:', insertionSort([...array]));
console.log('Merge Sort:', mergeSort([...array]));
console.log('Quick Sort:', quickSort([...array]));
console.log('Selection Sort:', selectionSort([...array]));
