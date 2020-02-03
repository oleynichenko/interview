// Enums allow us to define a set of named constants.
// Using enums can make it easier to document intent, or create a set of distinct cases.
// TypeScript provides both numeric and string-based enums.

enum Answer {
  No = 0,
  Yes = 1,
}

enum Direction {
  Up = 1,
  Down, // Direction.Down === 2
  Left,
  Right,
}

function getSomeValue(): number { return 1; }

// enum E {
//   A = getSomeValue(),
//   B, // Error! Enum member must have initializer.
// }
