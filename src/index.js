'use strict'


const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10]

function binarySearch(array, searchValue) {
    let start = 0;
    let end = array.length - 1;
    let middle = Math.round((start + end) / 2);

    while (true) {
        if (searchValue === array[middle]) {
            return (middle)
        }
        if (searchValue > array[middle]) {
            start = middle;
            middle = Math.ceil((start + end) / 2);
        } else {
            end = middle;
            middle = Math.floor((start + end) / 2);
        }
    }
}