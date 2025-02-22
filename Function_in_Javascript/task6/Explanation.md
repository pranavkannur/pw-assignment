# Explanation

## 1. Curry Function:
- The curry function takes a function fn as input.
- It returns a new function curried that accepts arguments one at a time.
- If the number of arguments passed to curried is greater than or equal to the number of arguments expected by fn, it calls fn with those arguments.
- If not enough arguments are provided, it returns a new function that continues to accept more arguments until all required arguments are collected.

## 2. Add Function:
- The add function simply takes two numbers and returns their sum.

## 3. Curried Add Function:
- The curriedAdd function is the curried version of add.
- It can accept arguments one at a time (e.g., curriedAdd(2)(3)) or all at once (e.g., curriedAdd(2, 3)).

## 4. Test Cases:
- curriedAdd(2)(3):
  - First, curriedAdd(2) returns a new function that expects the second argument.
  - Then, (3) is passed to this new function, which finally calls add(2, 3) and returns 5.
- curriedAdd(2, 3):
  - Both arguments are provided at once, so add(2, 3) is called directly, returning 5.
- curriedAdd(2)(3, 4):
  - The extra argument 4 is ignored because the add function only expects two arguments.
  

# Key TakeaWays
- The curry function allows you to transform any function into a curried version, enabling partial application of arguments.
- Currying is useful in functional programming for creating reusable and composable functions.
- The test cases demonstrate how the curried function works with both partial and complete argument application.
