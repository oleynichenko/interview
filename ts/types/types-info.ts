// UNION TYPE
// A union type describes a value that can be one of several types.
function padLeft(value: string, padding: string | number) {
  // ...
}

// LITERAL TYPE
// String literal types allow you to specify the exact value a string must have.
let word1: "hello" | "bye";


// TYPE ALIASES
// Type aliases create a new name for a type.
// Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.

type Word = "hello" | "bye";
let word2: Word;