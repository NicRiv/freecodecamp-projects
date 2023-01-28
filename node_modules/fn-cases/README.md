# fn-cases

A simple way to test your JavaScript functions.

## Installation
```
npm i fn-cases
```

## Easy to use!
Test your expected output

```javascript
const fnCases = require('fn-cases')

const passed = (parameter) => parameter * 2

fnCases([
    [passed(2), 4],
    [passed(7), 14]
])
// All test passed: (2/2)

const fail = (parameter) => parameter + 1

fnCases([
    [fail(1), 3]
])
// Test case 1 fail.
```