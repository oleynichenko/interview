// Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same.
let x: [string, number];

// Initialize it
x = ["hello", 10]; // OK

// Initialize it incorrectly
// x = [10, "hello"]; // Error