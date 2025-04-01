export function quickSort<T extends number | string | boolean>(arr: T[]): T[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left: T[] = [];
    const right: T[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Unit tests for quickSort function
function testQuickSort() {
    console.assert(JSON.stringify(quickSort([4, 2, 3, 1, 5])) === JSON.stringify([1, 2, 3, 4, 5]), 'Test 1 Failed');
    console.assert(JSON.stringify(quickSort([])) === JSON.stringify([]), 'Test 2 Failed');
    console.assert(JSON.stringify(quickSort([1])) === JSON.stringify([1]), 'Test 3 Failed');
    console.assert(JSON.stringify(quickSort(['c', 'a', 'b', 'e', 'd'])) === JSON.stringify(['a', 'b', 'c', 'd', 'e']), 'Test 4 Failed');
    console.assert(JSON.stringify(quickSort(['beta', 'alpha', 'gamma'])) === JSON.stringify(['alpha', 'beta', 'gamma']), 'Test 5 Failed');
    console.assert(JSON.stringify(quickSort([1, 2, 3, 4, 5])) === JSON.stringify([1, 2, 3, 4, 5]), 'Test 6 Failed');
    console.log('All tests passed!');
}

testQuickSort();