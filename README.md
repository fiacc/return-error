# "'return' outside of function"

Adding 
```js
 ecmaFeatures: {

        // enable return in global scope
        globalReturn: true
    }

```
to (https://github.com/hapijs/lab/blob/master/lib/coverage.js#L255) gets rid of the error


## Pass
lab test.js
```
1 tests complete
Test duration: 5 ms
No global variable leaks detected
```


## Fail
lab -c test.js

```
at Parser.instance.raise.instance.raiseRecoverable (/tmp/error-test/node_modules/espree/espree.js:416:19)
at Parser.pp$1.parseReturnStatement (/tmp/error-test/node_modules/acorn/dist/acorn.js:909:12)
at Parser.pp$1.parseStatement (/tmp/error-test/node_modules/acorn/dist/acorn.js:765:35)
at Parser.pp$1.parseBlock (/tmp/error-test/node_modules/acorn/dist/acorn.js:1077:23)
at Parser.pp$1.parseStatement (/tmp/error-test/node_modules/acorn/dist/acorn.js:775:34)
at Parser.pp$1.parseIfStatement (/tmp/error-test/node_modules/acorn/dist/acorn.js:902:26)
at Parser.pp$1.parseStatement (/tmp/error-test/node_modules/acorn/dist/acorn.js:764:31)
at Parser.pp$1.parseTopLevel (/tmp/error-test/node_modules/acorn/dist/acorn.js:690:23)
at Parser.parseTopLevel (/tmp/error-test/node_modules/espree/espree.js:315:34)
at Parser.parse (/tmp/error-test/node_modules/acorn/dist/acorn.js:543:15)
at Object.parse (/tmp/error-test/node_modules/acorn/dist/acorn.js:3708:37)
at Object.parse (/tmp/error-test/node_modules/espree/espree.js:715:21)
at Object.internals.instrument (/tmp/error-test/node_modules/lab/lib/coverage.js:250:25)
at Object.require.extensions.(anonymous function) [as .js] (/tmp/error-test/node_modules/lab/lib/coverage.js:32:55)
at Module.load (module.js:554:32)
at tryModuleLoad (module.js:497:12)
at Function.Module._load (module.js:489:3)
at Module.require (module.js:579:17)
at require (internal/module.js:11:18)
at it (/tmp/error-test/test.js:14:114)
at Immediate.setImmediate [as _onImmediate] (/tmp/error-test/node_modules/lab/lib/runner.js:566:31)
at runCallback (timers.js:789:20)
at tryOnImmediate (timers.js:751:5)
at processImmediate [as _immediateCallback] (timers.js:722:5)
```
