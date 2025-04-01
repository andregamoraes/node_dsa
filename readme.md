# Node Sort

A simple TypeScript sorting library implementing various sorting algorithms, including **Selection Sort** and more.

## Features
- 📌 **Selection Sort** implementation
- 🛠️ Extensible for other sorting algorithms (Bubble Sort, Quick Sort, etc.)
- ✅ **Unit tests included** for validation
- 🔥 Written in TypeScript for **strong typing and safety**

## Installation
```sh
# Clone the repository
git clone https://github.com/andregamoraes/node_sort.git
cd node_sort

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
import { selectionSort } from './selectionSort';

const numbers = [4, 2, 3, 1, 5];
console.log(selectionSort(numbers)); // Output: [1, 2, 3, 4, 5]
```

## Contributing
Feel free to fork this repository, create new sorting algorithms, and open pull requests!
