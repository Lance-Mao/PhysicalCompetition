function setArray(arr) {
    return Array.from(new Set(arr));
}

console.log(setArray(['s', 'a', 's', 'b', 'a', 1, '1', 1]));
