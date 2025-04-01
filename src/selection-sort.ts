export function selectionSort<T extends number | string | boolean>(arr: T[]): T[] {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

// Unit tests for selectionSort function
function testSelectionSort() {
    console.assert(JSON.stringify(selectionSort([4, 2, 3, 1, 5])) === JSON.stringify([1, 2, 3, 4, 5]), 'Test 1 Failed');
    console.assert(JSON.stringify(selectionSort([])) === JSON.stringify([]), 'Test 2 Failed');
    console.assert(JSON.stringify(selectionSort([1])) === JSON.stringify([1]), 'Test 3 Failed');
    console.assert(JSON.stringify(selectionSort(['c', 'a', 'b', 'e', 'd'])) === JSON.stringify(['a', 'b', 'c', 'd', 'e']), 'Test 4 Failed');
    console.assert(JSON.stringify(selectionSort(['beta', 'alpha', 'gamma'])) === JSON.stringify(['alpha', 'beta', 'gamma']), 'Test 5 Failed');
    console.assert(JSON.stringify(selectionSort([1, 2, 3, 4, 5])) === JSON.stringify([1, 2, 3, 4, 5]), 'Test 6 Failed');
    console.log('All tests passed!');
}

testSelectionSort();