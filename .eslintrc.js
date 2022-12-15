/* eslint-env node */
/**
 *
 * @file Defines ESLint rules for Art+Logic coding style.
 *       ESLint rules: https://eslint.org/docs/latest/rules/
 */
module.exports = {
    rules: {
        /*
         * Possible Problems
         */

        // Rule: Enforce `return` statements in callbacks of array methods.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/array-callback-return
        "array-callback-return": "error",
        // Rule: Require `super()` calls in constructors.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/constructor-super
        "constructor-super": "error",
        // Rule: Enforce `for` loop update clause moving the counter in the
        //       right direction.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/for-direction
        "for-direction": "error",
        // Rule: Enforce `return` statements in getters.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/getter-return
        "getter-return": "error",
        // Rule: Disallow using an async function as a Promise executor.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-async-promise-executor
        "no-async-promise-executor": "error",
        // Rule: Disallow `await` inside of loops.
        // Disable reason(s): Non-burdensome (often intentional, and often only
        //                    a perf issue, not a correctness issue).
        // https://eslint.org/docs/latest/rules/no-await-in-loop
        "no-await-in-loop": "off",
        // Rule: Disallow reassigning class members.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-class-assign
        "no-class-assign": "error",
        // Rule: Disallow comparing against -0.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-compare-neg-zero
        "no-compare-neg-zero": "error",
        // Rule: Disallow assignment operators in conditional expressions.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-cond-assign
        "no-cond-assign": "error",
        // Rule: Disallow reassigning `const` variables.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-const-assign
        "no-const-assign": "error",
        // Rule: Disallow expressions where the operation doesn't affect the
        //       value.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-constant-binary-expression
        "no-constant-binary-expression": "error",
        // Rule: Disallow constant expressions in conditions.
        // Enable reason(s): Readability; Failing fast.
        // https://eslint.org/docs/latest/rules/no-constant-condition
        "no-constant-condition": "error",
        // Rule: Disallow returning value from constructor.
        // Enable reason(s): Readability; Failing fast.
        // https://eslint.org/docs/latest/rules/no-constructor-return
        "no-constructor-return": "error",
        // Rule: Disallow control characters in regular expressions.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-control-regex
        "no-control-regex": "error",
        // Rule: Disallow the use of `debugger`.
        // Enable reason(s): Modernity.
        // https://eslint.org/docs/latest/rules/no-debugger
        "no-debugger": "error",
        // Rule: Disallow duplicate arguments in function definitions.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-dupe-args
        "no-dupe-args": "error",
        // Rule: Disallow duplicate class members.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-dupe-class-members
        "no-dupe-class-members": "error",
        // Rule: Disallow duplicate conditions in if-else-if chains.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-dupe-else-if
        "no-dupe-else-if": "error",
        // Rule: Disallow duplicate keys in object literals.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-dupe-keys
        "no-dupe-keys": "error",
        // Rule: Disallow duplicate case labels.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-duplicate-case
        "no-duplicate-case": "error",
        // Rule: Disallow duplicate module imports.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-duplicate-imports
        "no-duplicate-imports": "error",
        // Rule: Disallow empty character classes in regular expressions.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-empty-character-class
        "no-empty-character-class": "error",
        // Rule: Disallow empty destructuring patterns.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-empty-pattern
        "no-empty-pattern": "error",
        // Rule: Disallow reassigning exceptions in `catch` clauses.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-ex-assign
        "no-ex-assign": "error",
        // Rule: Disallow fallthrough of `case` statements.
        // Enable reason(s): Failing fast (this is usually a bug);
        //                   Non-burdensome (fallthrough in an empy `case` is
        //                   rarely unintentional so this part is relaxed).
        // https://eslint.org/docs/latest/rules/no-fallthrough
        "no-fallthrough": ["error", { allowEmptyCase: true }],
        // Rule: Disallow reassigning `function` declarations.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-func-assign
        "no-func-assign": "error",
        // Rule: Disallow assigning to imported bindings.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-import-assign
        "no-import-assign": "error",
        // Rule: Disallow variable or function declarations in nested blocks.
        // Disable reason(s): Applies only to ES5 and earlier.
        // https://eslint.org/docs/latest/rules/no-inner-declarations
        "no-inner-declarations": "off",
        // Rule: Disallow invalid regular expression strings in RegExp
        //       constructors.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-invalid-regexp
        "no-invalid-regexp": "error",
        // Rule: Disallow irregular whitespace.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-irregular-whitespace
        "no-irregular-whitespace": "error",
        // Rule: Disallow literal numbers that lose precision.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-loss-of-precision
        "no-loss-of-precision": "error",
        // Rule: Disallow characters which are made with multiple code points in
        //       character class syntax.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-misleading-character-class
        "no-misleading-character-class": "error",
        // Rule: Disallow `new` operators with global non-constructor functions.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
        "no-new-native-nonconstructor": "error",
        // Rule: Disallow `new` operators with the `Symbol` object.
        // Disable reason(s): Superseded by `no-new-native-nonconstructor`.
        // https://eslint.org/docs/latest/rules/no-new-symbol
        "no-new-symbol": "off",
        // Rule: Disallow calling global object properties as functions.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-obj-calls
        "no-obj-calls": "error",
        // Rule: Disallow returning values from Promise executor functions.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-promise-executor-return
        "no-promise-executor-return": "error",
        // Rule: Disallow calling some `Object.prototype` methods directly on
        //       objects.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-prototype-builtins
        "no-prototype-builtins": "error",
        // Rule: Disallow assignments where both sides are exactly the same.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-self-assign
        "no-self-assign": "error",
        // Rule: Disallow comparisons where both sides are exactly the same.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-self-compare
        "no-self-compare": "error",
        // Rule: Disallow returning values from setters
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-setter-return
        "no-setter-return": "error",
        // Rule: Disallow sparse arrays.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-sparse-arrays
        "no-sparse-arrays": "error",
        // Rule: Disallow template literal placeholder syntax in regular
        //       strings.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-template-curly-in-string
        "no-template-curly-in-string": "error",
        // Rule: Disallow `this`/`super` before calling super() in constructors.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-this-before-super
        "no-this-before-super": "error",
        // Rule: Disallow the use of undeclared variables unless mentioned in
        //       `/*global */` comments.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-undef
        "no-undef": "error",
        // Rule: Disallow confusing multiline expressions.
        // Enable reason(s): Readability; Failing fast.
        // https://eslint.org/docs/latest/rules/no-unexpected-multiline
        "no-unexpected-multiline": "error",
        // Rule: Disallow unmodified loop conditions.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
        "no-unmodified-loop-condition": "error",
        // Rule: Disallow unreachable code after `return`, `throw`, `continue`,
        //       and `break` statements.
        // Enable reason(s): Readability; Failing fast.
        // https://eslint.org/docs/latest/rules/no-unreachable
        "no-unreachable": "error",
        // Rule: Disallow loops with a body that allows only one iteration.
        // Enable reason(s): Readability; Failing fast.
        // https://eslint.org/docs/latest/rules/no-unreachable-loop
        "no-unreachable-loop": "error",
        // Rule: Disallow control flow statements in `finally` blocks
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-unsafe-finally
        "no-unsafe-finally": "error",
        // Rule: Disallow negating the left operand of relational operators.
        // Enable reason(s): Readability; Failing fast.
        // https://eslint.org/docs/latest/rules/no-unsafe-negation
        "no-unsafe-negation": "error",
        // Rule: Disallow use of optional chaining in contexts where the
        //       `undefined` value is not allowed.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
        "no-unsafe-optional-chaining": "error",
        // Rule: Disallow unused private class members.
        // Enable reason(s): Readability; Failing fast.
        // https://eslint.org/docs/latest/rules/no-unused-private-class-members
        "no-unused-private-class-members": "error",
        // Rule: Disallow unused variables.
        // Enable reason(s): Readability; Failing fast.
        // https://eslint.org/docs/latest/rules/no-unused-vars
        "no-unused-vars": "error",
        // Rule: Disallow the use of variables before they are defined.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-use-before-define
        "no-use-before-define": "error",
        // Rule: Disallow useless backreferences in regular expressions.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-useless-backreference
        "no-useless-backreference": "error",
        // Rule: Disallow assignments that can lead to race conditions due to
        //       usage of `await` or `yield`.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/require-atomic-updates
        "require-atomic-updates": "error",
        // Rule: Require calls to `isNaN()` when checking for `NaN`.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/use-isnan
        "use-isnan": "error",
        // Enforce comparing `typeof` expressions against valid strings.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/valid-typeof
        "valid-typeof": "error",

        /*
         * Suggestions
         */

        // Rule: Enforce getter and setter pairs in objects and classes.
        // Disable reason(s): Non-burdensome (often has legitimate use cases).
        // https://eslint.org/docs/latest/rules/accessor-pairs
        "accessor-pairs": "off",
        // Rule: Require braces around arrow function bodies.
        // Enable reason(s): Non-burdensome (Omitting braces is often a
        //                   readability improvement).
        // https://eslint.org/docs/latest/rules/arrow-body-style
        "arrow-body-style": ["error", "as-needed"],
        // Rule: Enforce the use of variables within the scope they are defined.
        // Enable reason(s): Readability; Failing fast.
        // https://eslint.org/docs/latest/rules/block-scoped-var
        "block-scoped-var": "error",
        // Rule: Enforce camelcase naming convention.
        // Disable reason(s): Non-burdensome (a consistent naming convention is
        //                    great, but in JS it too often needs to be
        //                    disobeyed for reasons of interop or special use
        //                    cases).
        // https://eslint.org/docs/latest/rules/camelcase
        camelcase: "off",
        // Rule: Enforce or disallow capitalization of the first letter of a
        //       comment.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/capitalized-comments
        "capitalized-comments": "off",
        // Rule: Enforce that class methods utilize `this`.
        // Disable reason(s): Non-burdensome (method vs static is also a public
        //                    interface consideration)
        // https://eslint.org/docs/latest/rules/class-methods-use-this
        "class-methods-use-this": "off",
        // Rule: Enforce a maximum cyclomatic complexity allowed in a program.
        // Disable reason(s): Limited scope.
        // https://eslint.org/docs/latest/rules/complexity
        complexity: "off",
        // Rule: Require `return` statements to either always or never specify
        //       values.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/consistent-return
        "consistent-return": "error",
        // Rule: Enforce consistent naming when capturing the current execution
        //       context.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/consistent-this
        "consistent-this": "off",
        // Rule: Enforce consistent brace style for all control statements.
        // Enable reason(s): Readability (the potential confusion introduced by
        //                   brace-less blocks outweighs the readability
        //                   benefits of compactness).
        // https://eslint.org/docs/latest/rules/curly
        curly: "error",
        // Rule: Require `default` cases in `switch` statements.
        // Disable reason(s): Non-burdensome (often has legitimate use cases).
        // https://eslint.org/docs/latest/rules/default-case
        "default-case": "off",
        // Rule: Enforce default clauses in switch statements to be last.
        // Enable reason(s): Readability; Compatibility.
        // https://eslint.org/docs/latest/rules/default-case-last
        "default-case-last": "error",
        // Rule: Enforce default parameters to be last.
        // Disable reason(s): Non-burdensome (often has legitimate use cases).
        // https://eslint.org/docs/latest/rules/default-param-last
        "default-param-last": "off",
        // Rule: Enforce dot notation whenever possible.
        // Enable reason(s): Readability; Compatibility.
        // https://eslint.org/docs/latest/rules/dot-notation
        "dot-notation": "error",
        // Require the use of `===` and `!==`
        // Enable reason(s): Readability; Failing fast.
        // https://eslint.org/docs/latest/rules/eqeqeq
        eqeqeq: "error",
        // Rule: Require function names to match the name of the variable or
        //       property to which they are assigned.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/func-name-matching
        "func-name-matching": "error",
        // Rule: Require or disallow named `function` expressions.
        // Enable reason(s): Readability (but "always" requires
        //                   redundant-looking names that reduce readability, so
        //                   "as-needed" is used instead).
        // https://eslint.org/docs/latest/rules/func-names
        "func-names": ["error", "as-needed"],
        // Rule: Enforce the consistent use of either function declarations or
        //       expressions.
        // Enable reason(s): Readability; Compatibility.
        // https://eslint.org/docs/latest/rules/func-style
        "func-style": "error",
        // Rule: Require grouped accessor pairs in object literals and classes.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/grouped-accessor-pairs
        "grouped-accessor-pairs": "error",
        // Rule: Require for-in loops to include an if statement.
        // Disable reason(s): Non-burdensome (rarely-used feature).
        // https://eslint.org/docs/latest/rules/guard-for-in
        "guard-for-in": "off",
        // Rule: Disallow specified identifiers.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/id-denylist
        "id-denylist": "off",
        // Rule: Enforce minimum and maximum identifier lengths.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/id-length
        "id-length": "off",
        // Rule: Require identifiers to match a specified regular expression.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/id-match
        "id-match": "off",
        // Rule: Require or disallow initialization in variable declarations.
        // Enable reason(s): Failing fast (`undefined` should be avoided as a
        //                   deliberately-assigned value).
        // https://eslint.org/docs/latest/rules/init-declarations
        "init-declarations": "off",
        // Rule: Require or disallow logical assignment logical operator
        //       shorthand.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/logical-assignment-operators
        "logical-assignment-operators": "off",
        // Rule: Enforce a maximum number of classes per file.
        // Disable reason(s): Limited scope.
        // https://eslint.org/docs/latest/rules/max-classes-per-file
        "max-classes-per-file": "off",
        // Rule: Enforce a maximum depth that blocks can be nested.
        // Disable reason(s): Limited scope.
        // https://eslint.org/docs/latest/rules/max-depth
        "max-depth": "off",
        // Rule: Enforce a maximum number of lines per file.
        // Disable reason(s): Limited scope.
        // https://eslint.org/docs/latest/rules/max-lines
        "max-lines": "off",
        // Rule: Enforce a maximum number of lines of code in a function.
        // Disable reason(s): Limited scope.
        // https://eslint.org/docs/latest/rules/max-lines-per-function
        "max-lines-per-function": "off",
        // Rule: Enforce a maximum depth that callbacks can be nested.
        // Disable reason(s): Limited scope.
        // https://eslint.org/docs/latest/rules/max-nested-callbacks
        "max-nested-callbacks": "off",
        // Rule: Enforce a maximum number of parameters in function definitions.
        // Disable reason(s): Limited scope.
        // https://eslint.org/docs/latest/rules/max-params
        "max-params": "off",
        // Rule: Enforce a maximum number of statements allowed in function
        //       blocks.
        // Disable reason(s): Limited scope.
        // https://eslint.org/docs/latest/rules/max-statements
        "max-statements": "off",
        // Rule: Enforce a particular style for multiline comments.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/multiline-comment-style
        "multiline-comment-style": "off",
        // Rule: Require constructor names to begin with a capital letter.
        // Enable reason(s): Readability; Compatibility.
        // https://eslint.org/docs/latest/rules/new-cap
        "new-cap": "error",
        // Rule: Disallow the use of `alert`, `confirm`, and `prompt`
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/no-alert
        "no-alert": "off",
        // Rule: Disallow `Array` constructors.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-array-constructor
        "no-array-constructor": "error",
        // Rule: Disallow bitwise operators.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/no-bitwise
        "no-bitwise": "off",
        // Rule: Disallow the use of `arguments.caller` or `arguments.callee`.
        // Enable reason(s): Modernity.
        // https://eslint.org/docs/latest/rules/no-caller
        "no-caller": "error",
        // Rule: Disallow lexical declarations in case clauses.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-case-declarations
        "no-case-declarations": "error",
        // Rule: Disallow arrow functions where they could be confused with
        //       comparisons.
        // Enable reason(s): Readability; Failing fast.
        // https://eslint.org/docs/latest/rules/no-confusing-arrow
        "no-confusing-arrow": "error",
        // Rule: Disallow the use of `console`.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/no-console
        "no-console": "off",
        // Rule: Disallow `continue` statements.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/no-continue
        "no-continue": "off",
        // Rule: Disallow deleting variables.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-delete-var
        "no-delete-var": "error",
        // Rule: Disallow division operators explicitly at the beginning of
        //       regular expressions.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/no-div-regex
        "no-div-regex": "off",
        // Rule: Disallow `else` blocks after `return` statements in `if`
        //       statements.
        // Disable reason(s): Non-burdensome (often clearer to break this rule).
        // https://eslint.org/docs/latest/rules/no-else-return
        "no-else-return": "off",
        // Rule: Disallow empty block statements.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-empty
        "no-empty": "error",
        // Rule: Disallow empty functions.
        // Enable reason(s): Readability (borderline violates Non-burdensome,
        //                   but all it takes is an explanatory comment in the
        //                   function body to satisfy the rule).
        // https://eslint.org/docs/latest/rules/no-empty-function
        "no-empty-function": "error",
        // Rule: Disallow empty static blocks.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-empty-static-block
        "no-empty-static-block": "error",
        // Rule: Disallow `null` comparisons without type-checking operators.
        // Disable reason(s): Unnecessary due to `eqeqeq` rule.
        // https://eslint.org/docs/latest/rules/no-eq-null
        "no-eq-null": "off",
        // Rule: Disallow the use of `eval()`.
        // Enable reason(s): Failing fast (often a security vulnerability, so it
        //                   deserves an explicit rule-disabling each time).
        // https://eslint.org/docs/latest/rules/no-eval
        "no-eval": "error",
        // Rule: Disallow extending native types.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-extend-native
        "no-extend-native": "error",
        // Rule: Disallow unnecessary calls to `.bind()`.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-extra-bind
        "no-extra-bind": "error",
        // Rule: Disallow unnecessary boolean casts.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-extra-boolean-cast
        "no-extra-boolean-cast": "error",
        // Rule: Disallow unnecessary labels.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-extra-label
        "no-extra-label": "error",
        // Rule: Disallow unnecessary semicolons.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-extra-semi
        "no-extra-semi": "error",
        // Rule: Disallow leading or trailing decimal points in numeric
        //       literals.
        // Enable reason(s): Readability; Failing fast.
        // https://eslint.org/docs/latest/rules/no-floating-decimal
        "no-floating-decimal": "error",
        // Rule: Disallow assignments to native objects or read-only global
        //       variables.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-global-assign
        "no-global-assign": "error",
        // Rule: Disallow shorthand type conversions.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-implicit-coercion
        "no-implicit-coercion": "error",
        // Rule: Disallow declarations in the global scope in scripts.
        // Enable reason(s): Readability; Failing fast.
        // https://eslint.org/docs/latest/rules/no-implicit-globals
        "no-implicit-globals": "error",
        // Rule: Disallow the use of `eval()`-like methods.
        // Enable reason(s): Failing fast (often a security vulnerability, so it
        //                   deserves an explicit rule-disabling each time).
        // https://eslint.org/docs/latest/rules/no-implied-eval
        "no-implied-eval": "error",
        // Rule: Disallow inline comments after code.
        // Disable reason(s): Readability; Non-burdensome.
        // https://eslint.org/docs/latest/rules/no-inline-comments
        "no-inline-comments": "off",
        // Rule: Disallow use of this in contexts where the value of `this` is
        //       `undefined`.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-invalid-this
        "no-invalid-this": "error",
        // Rule: Disallow the use of the `__iterator__` property.
        // Enable reason(s): Modernity.
        // https://eslint.org/docs/latest/rules/no-iterator
        "no-iterator": "error",
        // Rule: Disallow labels that share a name with a variable.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-label-var
        "no-label-var": "error",
        // Rule: Disallow labeled statements.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/no-labels
        "no-labels": "off",
        // Rule: Disallow unnecessary nested blocks.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-lone-blocks
        "no-lone-blocks": "error",
        // Rule: Disallow `if` statements as the only statement in `else`
        //       blocks.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-lonely-if
        "no-lonely-if": "error",
        // Rule: Disallow function declarations that contain unsafe references
        //       inside loop statements
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-loop-func
        "no-loop-func": "error",
        // Rule: Disallow magic numbers.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/no-magic-numbers
        "no-magic-numbers": "off",
        // Rule: Disallow mixed binary operators.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-mixed-operators
        "no-mixed-operators": "error",
        // Rule: Disallow use of chained assignment expressions.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-multi-assign
        "no-multi-assign": "error",
        // Rule: Disallow multiline strings.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/no-multi-str
        "no-multi-str": "off",
        // Rule: Disallow negated conditions.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/no-negated-condition
        "no-negated-condition": "off",
        // Rule: Disallow nested ternary expressions.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/no-nested-ternary
        "no-nested-ternary": "off",
        // Rule: Disallow `new` operators outside of assignments or comparisons
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/no-new
        "no-new": "off",
        // Rule: Disallow `new` operators with the `Function` object.
        // Enable reason(s): Failing fast (often a security vulnerability, so it
        //                   deserves an explicit rule-disabling each time).
        // https://eslint.org/docs/latest/rules/no-new-func
        "no-new-func": "error",
        // Rule: Disallow `Object` constructors.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-new-object
        "no-new-object": "error",
        // Rule: Disallow `new` operators with the `String`, `Number`, and
        //       `Boolean` objects.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-new-wrappers
        "no-new-wrappers": "error",
        // Rule: Disallow `\8` and `\9` escape sequences in string literals.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
        "no-nonoctal-decimal-escape": "error",
        // Rule: Disallow octal literals.
        // Enable reason(s): Modernity.
        // https://eslint.org/docs/latest/rules/no-octal
        "no-octal": "error",
        // Rule: Disallow octal escape sequences in string literals.
        // Enable reason(s): Modernity.
        // https://eslint.org/docs/latest/rules/no-octal-escape
        "no-octal-escape": "error",
        // Rule: Disallow reassigning `function` parameters.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-param-reassign
        "no-param-reassign": "error",
        // Rule: Disallow the unary operators `++` and `--`.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/no-plusplus
        "no-plusplus": "off",
        // Rule: Disallow the use of the `__proto__` property.
        // Enable reason(s): Modernity.
        // https://eslint.org/docs/latest/rules/no-proto
        "no-proto": "error",
        // Rule: Disallow variable redeclaration.
        // Enable reason(s): Readability; Failing fast.
        // https://eslint.org/docs/latest/rules/no-redeclare
        "no-redeclare": "error",
        // Rule: Disallow multiple spaces in regular expressions.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-regex-spaces
        "no-regex-spaces": "error",
        // Rule: Disallow specified names in exports.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/no-restricted-exports
        "no-restricted-exports": "off",
        // Rule: Disallow specified global variables.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/no-restricted-globals
        "no-restricted-globals": "off",
        // Rule: Disallow certain properties on certain objects.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/no-restricted-properties
        "no-restricted-properties": "off",
        // Rule: Disallow specified syntax.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/no-restricted-syntax
        "no-restricted-syntax": "off",
        // Rule: Disallow assignment operators in `return` statements.
        // Enable reason(s): Readability; Failing fast.
        // https://eslint.org/docs/latest/rules/no-return-assign
        "no-return-assign": "error",
        // Rule: Disallow unnecessary `return await`.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-return-await
        "no-return-await": "error",
        // Rule: Disallow `javascript:` urls.
        // Enable reason(s): Failing fast (often a security vulnerability, so it
        //                   deserves an explicit rule-disabling each time).
        // https://eslint.org/docs/latest/rules/no-script-url
        "no-script-url": "error",
        // Rule: Disallow comma operators.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-sequences
        "no-sequences": "error",
        // Rule: Disallow variable declarations from shadowing variables
        //       declared in the outer scope.
        // Enable reason(s): Readability; Failing fast.
        // https://eslint.org/docs/latest/rules/no-shadow
        "no-shadow": "error",
        // Rule: Disallow identifiers from shadowing restricted names.
        // Enable reason(s): Readability; Failing fast.
        // https://eslint.org/docs/latest/rules/no-shadow-restricted-names
        "no-shadow-restricted-names": "error",
        // Rule: Disallow ternary operators.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/no-ternary
        "no-ternary": "off",
        // Rule: Disallow throwing literals as exceptions.
        // Enable reason(s): Compatibility (considered best practice).
        // https://eslint.org/docs/latest/rules/no-throw-literal
        "no-throw-literal": "error",
        // Rule: Disallow initializing variables to `undefined`.
        // Enable reason(s): Failing fast (`undefined` should be avoided as a
        //                   deliberately-assigned value).
        // https://eslint.org/docs/latest/rules/no-undef-init
        "no-undef-init": "error",
        // Rule: Disallow the use of `undefined` as an identifier.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-undefined
        "no-undefined": "error",
        // Rule: Disallow dangling underscores in identifiers.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/no-underscore-dangle
        "no-underscore-dangle": "off",
        // Rule: Disallow ternary operators when simpler alternatives exist.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-unneeded-ternary
        "no-unneeded-ternary": "error",
        // Rule: Disallow unused expressions.
        // Enable reason(s): Failing fast.
        // https://eslint.org/docs/latest/rules/no-unused-expressions
        "no-unused-expressions": "error",
        // Rule: Disallow unused labels.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-unused-labels
        "no-unused-labels": "error",
        // Rule: Disallow unnecessary calls to `.call()` and `.apply()`.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-useless-call
        "no-useless-call": "error",
        // Rule: Disallow unnecessary `catch` clauses.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-useless-catch
        "no-useless-catch": "error",
        // Rule: Disallow unnecessary computed property keys in objects and
        //       classes.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-useless-computed-key
        "no-useless-computed-key": "error",
        // Rule: Disallow unnecessary concatenation of literals or template
        //       literals.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-useless-concat
        "no-useless-concat": "error",
        // Rule: Disallow unnecessary constructors.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-useless-constructor
        "no-useless-constructor": "error",
        // Rule: Disallow renaming import, export, and destructured assignments
        //       to the same name.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-useless-rename
        "no-useless-rename": "error",
        // Rule: Disallow redundant return statements.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-useless-return
        "no-useless-return": "error",
        // Rule: Require `let` or `const` instead of `var`.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-var
        "no-var": "error",
        // Rule: Disallow `void` operators.
        // Enable reason(s): Modernity.
        // https://eslint.org/docs/latest/rules/no-void
        "no-void": "error",
        // Rule: Disallow specified warning terms in comments.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/no-warning-comments
        "no-warning-comments": "off",
        // Rule: Disallow `with` statements.
        // Enable reason(s): Readability; Failing fast.
        // https://eslint.org/docs/latest/rules/no-with
        "no-with": "error",
        // Rule: Require or disallow method and property shorthand syntax for
        //       object literals.
        // Enable reason(s): Readability (this would be overly burdensome if it
        //                   could not be auto-fixed, but it can).
        // https://eslint.org/docs/latest/rules/object-shorthand
        "object-shorthand": "error",
        // Rule: Enforce variables to be declared either together or separately
        //       in functions.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/one-var
        "one-var": "off",
        // Rule: Require or disallow newlines around variable declarations.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/one-var-declaration-per-line
        "one-var-declaration-per-line": "off",
        // Rule: Require or disallow assignment operator shorthand where
        //       possible.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/operator-assignment
        "operator-assignment": "off",
        // Rule: Require using arrow functions for callbacks.
        // Enable reason(s): Readability (although it's a valid use case to use
        //                   a function when the caller binds `this` in the
        //                   callback, so this circumstance is allowed).
        // https://eslint.org/docs/latest/rules/prefer-arrow-callback
        "prefer-arrow-callback": ["error", { allowUnboundThis: true }],
        // Rule: Require `const` declarations for variables that are never
        //       reassigned after declared.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/prefer-const
        "prefer-const": "error",
        // Rule: Require destructuring from arrays and/or objects.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/prefer-destructuring
        "prefer-destructuring": "off",
        // Rule: Disallow the use of `Math.pow` in favor of the `**` operator.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
        "prefer-exponentiation-operator": "error",
        // Rule: Enforce using named capture group in regular expression.
        // Enable reason(s): Readability (avoids accidental named capture
        //                   groups).
        // https://eslint.org/docs/latest/rules/prefer-named-capture-group
        "prefer-named-capture-group": "error",
        // Rule: Disallow `parseInt()` and `Number.parseInt()` in favor of
        //       binary, octal, and hexadecimal literals.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/prefer-numeric-literals
        "prefer-numeric-literals": "error",
        // Rule: Disallow use of `Object.prototype.hasOwnProperty.call()` and
        //       prefer use of `Object.hasOwn()`.
        // Disable reason(s): Non-burdensome (too recent a feature to enforce).
        // https://eslint.org/docs/latest/rules/prefer-object-has-own
        "prefer-object-has-own": "off",
        // Rule: Disallow using Object.assign with an object literal as the
        //       first argument and prefer the use of object spread instead.
        // Enable reason(s): Readability; Modernity.
        // https://eslint.org/docs/latest/rules/prefer-object-spread
        "prefer-object-spread": "error",
        // Rule: Require using Error objects as Promise rejection reasons.
        // Enable reason(s): Style convention.
        // https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
        "prefer-promise-reject-errors": "error",
        // Rule: Disallow use of the `RegExp` constructor in favor of regular
        //       expression literals.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/prefer-regex-literals
        "prefer-regex-literals": "error",
        // Rule: Require rest parameters instead of `arguments`.
        // Enable reason(s): Readability; Modernity.
        // https://eslint.org/docs/latest/rules/prefer-rest-params
        "prefer-rest-params": "error",
        // Rule: Require spread operators instead of `.apply()`.
        // Enable reason(s): Readability; Modernity.
        // https://eslint.org/docs/latest/rules/prefer-spread
        "prefer-spread": "error",
        // Rule: Require template literals instead of string concatenation.
        // Enable reason(s): Readability; Modernity.
        // https://eslint.org/docs/latest/rules/prefer-template
        "prefer-template": "error",
        // Rule: Require quotes around object literal property names.
        // Enable reason(s): Readability; Compatibility.
        // https://eslint.org/docs/latest/rules/quote-props
        "quote-props": ["error", "as-needed"],
        // Rule: Enforce the consistent use of the radix argument when using
        //       `parseInt()`
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/radix
        radix: "error",
        // Rule: Disallow async functions which have no `await` expression.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/require-await
        "require-await": "off",
        // Rule: Enforce the use of `u` flag on RegExp
        // Enable reason(s): Failing fast (avoids certain bugs).
        // https://eslint.org/docs/latest/rules/require-unicode-regexp
        "require-unicode-regexp": "off",
        // Rule: Require generator functions to contain `yield`.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/require-yield
        "require-yield": "off",
        // Rule: Enforce sorted import declarations within modules.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/sort-imports
        "sort-imports": "error",
        // Rule: Require object keys to be sorted.
        // Disable reason(s): Readability (often reduces readability since keys
        //                    cannot be logically ordered and grouped).
        // https://eslint.org/docs/latest/rules/sort-keys
        "sort-keys": "off",
        // Rule: Require variables within the same declaration block to be
        //       sorted.
        // Disable reason(s): Readability (often reduces readability since
        //                    variables cannot be logically ordered and
        //                    grouped).
        // https://eslint.org/docs/latest/rules/sort-vars
        "sort-vars": "off",
        // Rule: Enforce consistent spacing after the `//` or `/*` in a comment.
        // Disable reason(s): Non-burdensome.
        // https://eslint.org/docs/latest/rules/spaced-comment
        "spaced-comment": "off",
        // Rule: Require or disallow strict mode directives.
        // Disable reason(s): Unnecessary in ES modules.
        // https://eslint.org/docs/latest/rules/strict
        strict: "off",
        // Rule: Require symbol descriptions.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/symbol-description
        "symbol-description": "error",
        // Rule: Require `var` declarations be placed at the top of their
        //       containing scope.
        // Disable reason(s): Readability; Non-burdensome.
        // https://eslint.org/docs/latest/rules/vars-on-top
        "vars-on-top": "off",
        // Rule: Require or disallow "Yoda" conditions.
        // Enable reason(s): Readability; Compatibility.
        // https://eslint.org/docs/latest/rules/yoda
        yoda: ["error", "never"],

        /*
         * Layout & Formatting
         */

        // This config is designed for using an alternate tool (Prettier) for
        // handling code formatting, so these rules are disabled with few
        // exceptions.

        // Rule: Disallow mixed spaces and tabs for indentation.
        // Enable reason(s): Readability.
        // https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
        "no-mixed-spaces-and-tabs": "error",
    },
};
