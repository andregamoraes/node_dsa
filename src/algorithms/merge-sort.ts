export function mergeSort<T extends number | string | boolean>(arr: T[]): T[] {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge<T extends number | string | boolean>(left: T[], right: T[]): T[] {
    let result: T[] = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)];
}

// Unit tests for mergeSort function
function testMergeSort() {
    console.assert(JSON.stringify(mergeSort([4, 2, 3, 1, 5])) === JSON.stringify([1, 2, 3, 4, 5]), 'Test 1 Failed');
    console.assert(JSON.stringify(mergeSort([])) === JSON.stringify([]), 'Test 2 Failed');
    console.assert(JSON.stringify(mergeSort([1])) === JSON.stringify([1]), 'Test 3 Failed');
    console.assert(JSON.stringify(mergeSort(['c', 'a', 'b', 'e', 'd'])) === JSON.stringify(['a', 'b', 'c', 'd', 'e']), 'Test 4 Failed');
    console.assert(JSON.stringify(mergeSort(['beta', 'alpha', 'gamma'])) === JSON.stringify(['alpha', 'beta', 'gamma']), 'Test 5 Failed');
    console.assert(JSON.stringify(mergeSort(['beta', 'alpha', 'gamma'].map(s => s.toString()))) === JSON.stringify(['alpha', 'beta', 'gamma']), 'Test 6 Failed');
    console.assert(JSON.stringify(mergeSort([1, 2, 3, 4, 5])) === JSON.stringify([1, 2, 3, 4, 5]), 'Test 7 Failed');
    console.log('All tests passed!');
}

testMergeSort();