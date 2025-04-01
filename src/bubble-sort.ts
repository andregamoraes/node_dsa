export function bubbleSort<T extends number | string | boolean>(arr: T[]): T[] {
    let done = false;

    while (!done) {
        done = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                done = false;
            }
        }
    }

    return arr;
}

// Example test cases (you can run these directly in Node.js or any TypeScript environment)
function testBubbleSort() {
    console.assert(JSON.stringify(bubbleSort([4, 2, 3, 1, 5])) === JSON.stringify([1, 2, 3, 4, 5]), 'Test 1 Failed');
    console.assert(JSON.stringify(bubbleSort([])) === JSON.stringify([]), 'Test 2 Failed');
    console.assert(JSON.stringify(bubbleSort([1])) === JSON.stringify([1]), 'Test 3 Failed');
    console.assert(JSON.stringify(bubbleSort(['c', 'a', 'b', 'e', 'd'])) === JSON.stringify(['a', 'b', 'c', 'd', 'e']), 'Test 4 Failed');
    console.assert(JSON.stringify(bubbleSort(['beta', 'alpha', 'gamma'])) === JSON.stringify(['alpha', 'beta', 'gamma']), 'Test 5 Failed');
    console.assert(JSON.stringify(bubbleSort(['beta', 'alpha', 'gamma'].map(s => s.toString()))) === JSON.stringify(['alpha', 'beta', 'gamma']), 'Test 6 Failed');
    console.assert(JSON.stringify(bubbleSort([1, 2, 3, 4, 5])) === JSON.stringify([1, 2, 3, 4, 5]), 'Test 7 Failed');
    console.log('All tests passed!');
}

// Call the test function to execute the test cases
testBubbleSort();
