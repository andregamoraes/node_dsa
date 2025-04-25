# Data Structures & Algorithms

A simple and well-structured collection of classic **algorithms** (like sorting, searching) and **data structures** implemented in **TypeScript**.

## Features
- **Sorting algorithms** implementation
- Extensible for other sorting algorithms (Bubble Sort, Quick Sort, etc.)
- **Unit tests included** for validation
- **Data structures** implementation
- Written in TypeScript for **strong typing and safety**

## Installation
```sh
# Clone the repository
git clone https://github.com/andregamoraes/node_dsa.git
cd node_dsa

# Install dependencies
npm install
```

## Building the Project
Since this project is written in TypeScript, you need to compile it before running:
```sh
npm run build
```
This will generate the compiled JavaScript files in the `dist/` directory.

## Running the Code
After building, you can run the compiled code with:
```sh
node dist/index.js
```
Or, if using TypeScript directly:
```sh
npx ts-node src/index.ts
```

## Usage Example
You can use the sorting functions in your project by importing them:

```ts
import { selectionSort } from './src/algorithms/selectionSort';
import { LinkedList } from './src/data_structures/linked_list';

const numbers = [4, 2, 3, 1, 5];
console.log(selectionSort(numbers)); // Output: [1, 2, 3, 4, 5]

const myLinkedList = new LinkedList<number>(10);
myLinkedList.append(1)
myLinkedList.prepend(10)
```

## Contributing
Feel free to fork this repository, create new sorting algorithms, and open pull requests!
