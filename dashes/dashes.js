require('console-group').install();

/**
 * Get character based on index
 *
 * @param index
 * @param defaultValue
 * @returns {string}
 */
function character(index, defaultValue) {
    return index % 2 === 0 ? '-' : '|';
}

/**
 * Log array to see the draw better
 *
 * @param arr
 */
function log(arr) {
    arr.forEach(item => console.log(item));
}

/**
 * @param n - spaces in the array
 * @return array
 */
function buildDraw(n) {
    let counter = 1;
    const result = [];
    const length = n + (n - 1);
    const arr = Array(length).fill(' ');
    let index = n - 1;

    arr[index] = index % 2 === 0 ? '-' : '|';
    result.push([...arr].join());

    if (n === 1) return result;

    // Build upper part
    while (counter < n) {
        arr[index - counter] = character(index - counter);
        arr[index + counter] = character(index + counter);
        result.push([...arr].join());
        counter++;
    }

    // Build lower part
    counter--;
    while (counter > 0) {
        arr[index - counter] = ' ';
        arr[index + counter] = ' ';
        result.push([...arr].join());
        counter--;
    }

    return result;
}

function createDraw(index) {
    console.time(`Dashes - ${index} - buildStrImproved`);
    console.group(`Dashes - ${index}`);
    log(buildDraw(index));
    console.groupEnd();
    console.timeEnd(`Dashes - ${index} - buildStrImproved`);
}

function dashes(n) {
    console.group('Dashes');
    for (let i = 1; i <=8; i++) {
        createDraw(i)
    }
    createDraw(20);
    console.groupEnd();
}
dashes();

require('console-group').teardown();