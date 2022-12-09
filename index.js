/**
 * @file Defines ESLint rules for Art+Logic coding style.
 *       ESLint Rule documentation: https://eslint.org/docs/latest/rules/
 */
module.exports = {
    /**
     * In order to be explicit, and to control changes to the configuration,
     * this config does not extend `eslint:recommended`, however it _is_
     * more-or-less based on that configuration. Rules which match the
     * `eslint:recommended` config are labeled as such.
     */
    // extends: [
    //     "eslint:recommended",
    // ],

    rules: {
        /**
         * Possible Problems
         */

        // Rule: Enforce `return` statements in callbacks of array methods.
        // Enable reason: Usually a bug or antipattern.
        // https://eslint.org/docs/latest/rules/array-callback-return
        "array-callback-return": "error",
        // Rule: Require `super()` calls in constructors.
        // Enable reason: Usually a bug or antipattern.
        // https://eslint.org/docs/latest/rules/constructor-super
        "construction-super": "error",
        // Rule: Enforce `for` loop update clause moving the counter in the
        //       right direction.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/for-direction
        "for-direction": "error",
        // Rule: Enforce `return` statements in getters.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/getter-return
        "getter-return": "error",
        // Rule: Disallow using an async function as a Promise executor.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-async-promise-executor
        "no-async-promise-executor": "error",
        // Rule: Disallow `await` inside of loops.
        // Disable reason: Often intentional, and often only a perf issue, not a
        //                 correctness issue.
        // https://eslint.org/docs/latest/rules/no-await-in-loop
        "no-await-in-loop": "off",
        // Rule: Disallow reassigning class members.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-class-assign
        "no-class-assign": "error",
        // Rule: Disallow comparing against -0.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-compare-neg-zero
        "no-compare-neg-zero": "error",
        // Rule: Disallow assignment operators in conditional expressions.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-cond-assign
        "no-cond-assign": "error",
        // Rule: Disallow reassigning `const` variables.
        // Enable reason: Always a bug.
        // https://eslint.org/docs/latest/rules/no-const-assign
        "no-const-assign": "error",
        // Rule: Disallow expressions where the operation doesn't affect the
        //       value.
        // Enable reason: Usually a bug.
        // https://eslint.org/docs/latest/rules/no-constant-binary-expression
        "no-constant-binary-expression": "error",
        // Rule: Disallow constant expressions in conditions.
        // Enable reason: Usually a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-constant-condition
        "no-constant-condition": "error",
        // Rule: Disallow returning value from constructor.
        // Enable reason: Always an antipattern.
        // https://eslint.org/docs/latest/rules/no-constructor-return
        "no-constructor-return": "error",
        // Rule: Disallow control characters in regular expressions.
        // Enable reason: Usually a bug.
        // https://eslint.org/docs/latest/rules/no-control-regex
        "no-control-regex": "error",
        // Rule: Disallow the use of `debugger`.
        // Enable reason: Always an antipattern.
        // https://eslint.org/docs/latest/rules/no-debugger
        "no-debugger": "error",
        // Rule: Disallow duplicate arguments in function definitions.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-dupe-args
        "no-dupe-args": "error",
        // Rule: Disallow duplicate class members.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-dupe-class-members
        "no-dupe-class-members": "error",
        // Rule: Disallow duplicate conditions in if-else-if chains.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-dupe-else-if
        "no-dupe-else-if": "error",
        // Rule: Disallow duplicate keys in object literals.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-dupe-keys
        "no-dupe-keys": "error",
        // Rule: Disallow duplicate case labels.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-duplicate-case
        "no-duplicate-case": "error",
        // Rule: Disallow duplicate module imports.
        // Enable reason: Easily fixable style issue.
        // https://eslint.org/docs/latest/rules/no-duplicate-imports
        "no-duplicate-imports": "error",
        // Rule: Disallow empty character classes in regular expressions.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-empty-character-class
        "no-empty-character-class": "error",
        // Rule: Disallow empty destructuring patterns.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-empty-pattern
        "no-empty-pattern": "error",
        // Rule: Disallow reassigning exceptions in `catch` clauses.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-ex-assign
        "no-ex-assign": "error",
        // Rule: Disallow fallthrough of `case` statements.
        // Enable reason: Usually a bug or antipattern, however fallthrough in
        //                empty `case` statements is rarely unintentional, so
        //                this part is relaxed..
        // https://eslint.org/docs/latest/rules/no-fallthrough
        "no-fallthrough": ["error", { allowEmptyCase: true }],
        // Rule: Disallow reassigning `function` declarations.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-func-assign
        "no-func-assign": "error",
        // Rule: Disallow assigning to imported bindings.
        // Enable reason: Always a bug.
        // https://eslint.org/docs/latest/rules/no-import-assign
        "no-import-assign": "error",
        // Rule: Disallow variable or function declarations in nested blocks.
        // Disable reason: Is valid and justifiable syntax in ES6+.
        // https://eslint.org/docs/latest/rules/no-inner-declarations
        "no-inner-declarations": "off",
        // Rule: Disallow invalid regular expression strings in RegExp
        //       constructors.
        // Enable reason: Always a bug.
        // https://eslint.org/docs/latest/rules/no-invalid-regexp
        "no-invalid-regexp": "error",
        // Rule: Disallow irregular whitespace.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-irregular-whitespace
        "no-irregular-whitespace": "error",
        // Rule: Disallow literal numbers that lose precision.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-loss-of-precision
        "no-loss-of-precision": "error",
        // Rule: Disallow characters which are made with multiple code points in
        //       character class syntax.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-misleading-character-class
        "no-misleading-character-class": "error",
        // Rule: Disallow `new` operators with global non-constructor functions.
        // Enable reason: Always a bug.
        // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
        "no-new-native-nonconstructor": "error",
        // Rule: Disallow `new` operators with the `Symbol` object.
        // Disable reason: Superseded by `no-new-native-nonconstructor`.
        // https://eslint.org/docs/latest/rules/no-new-symbol
        "no-new-symbol": "off",
        // Rule: Disallow calling global object properties as functions.
        // Enable reason: Always a bug.
        // https://eslint.org/docs/latest/rules/no-obj-calls
        "no-obj-calls": "error",
        // Rule: Disallow returning values from Promise executor functions.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-promise-executor-return
        "no-promise-executor-return": "error",
        // Rule: Disallow calling some `Object.prototype` methods directly on
        //       objects.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-prototype-builtins
        "no-prototype-builtins": "error",
        // Rule: Disallow assignments where both sides are exactly the same.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-self-assign
        "no-self-assign": "error",
        // Rule: Disallow comparisons where both sides are exactly the same.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-self-compare
        "no-self-compare": "error",
        // Rule: Disallow returning values from setters
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-setter-return
        "no-setter-return": "error",
        // Rule: Disallow sparse arrays.
        // Enable reason: Usually a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-sparse-arrays
        "no-sparse-arrays": "error",
        // Rule: Disallow template literal placeholder syntax in regular
        //       strings.
        // Enable reason: Often a bug.
        // https://eslint.org/docs/latest/rules/no-template-curly-in-string
        "no-template-curly-in-string": "error",
        // Rule: Disallow `this`/`super` before calling super() in constructors.
        // Enable reason: Usually a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-this-before-super
        "no-this-before-super": "error",
        // Rule: Disallow the use of undeclared variables unless mentioned in
        //       `/*global */` comments.
        // Enable reason: Usually a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-undef
        "no-undef": "error",
        // Rule: Disallow confusing multiline expressions.
        // Enable reason: Usually a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-unexpected-multiline
        "no-unexpected-multiline": "error",
        // Rule: Disallow unmodified loop conditions.
        // Enable reason: Often a bug.
        // https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
        "no-unmodified-loop-condition": "error",
        // Rule: Disallow unreachable code after `return`, `throw`, `continue`,
        //       and `break` statements.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-unreachable
        "no-unreachable": "error",
        // Rule: Disallow loops with a body that allows only one iteration.
        // Enable reason: Often a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-unreachable-loop
        "no-unreachable-loop": "error",
        // Rule: Disallow control flow statements in `finally` blocks
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-unsafe-finally
        "no-unsafe-finally": "error",
        // Rule: Disallow negating the left operand of relational operators.
        // Enable reason: Usually a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-unsafe-negation
        "no-unsafe-negation": "error",
        // Rule: Disallow use of optional chaining in contexts where the
        //       `undefined` value is not allowed.
        // Enable reason: Usually a bug.
        // https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
        "no-unsafe-optional-chaining": "error",
        // Rule: Disallow unused private class members.
        // Enable reason: Often a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-unused-private-class-members
        "no-unused-private-class-members": "error",
        // Rule: Disallow unused variables.
        // Enable reason: Often a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-unused-vars
        "no-unused-vars": "error",
        // Rule: Disallow the use of variables before they are defined.
        // Enable reason: Always a bug.
        // https://eslint.org/docs/latest/rules/no-use-before-define
        "no-use-before-define": "error",
        // Rule: Disallow useless backreferences in regular expressions.
        // Enable reason: Always a bug or antipattern.
        // https://eslint.org/docs/latest/rules/no-useless-backreference
        "no-useless-backreference": "error",
        // Rule: Disallow assignments that can lead to race conditions due to
        //       usage of `await` or `yield`.
        // Enable reason: Usually a bug.
        // https://eslint.org/docs/latest/rules/require-atomic-updates
        "require-atomic-updates": "error",
        // Rule: Require calls to `isNaN()` when checking for `NaN`.
        // Enable reason: Usually a bug.
        // https://eslint.org/docs/latest/rules/use-isnan
        "use-isnan": "error",
        // Enforce comparing `typeof` expressions against valid strings.
        // Enable reason: Usually a bug.
        // https://eslint.org/docs/latest/rules/valid-typeof
        "valid-typeof": "error",

        /**
         * Suggestions
         */

        // Rule: Enforce getter and setter pairs in objects and classes.
        // Disable reason: Often has legitimate use cases.
        // https://eslint.org/docs/latest/rules/accessor-pairs
        "accessor-pairs": "off",
        // Rule: Require braces around arrow function bodies.
        // Enable reason: Omitting braces is often a readability improvement.
        // https://eslint.org/docs/latest/rules/arrow-body-style
        "arrow-body-style": ["error", "as-needed"],
        // Rule: Enforce the use of variables within the scope they are defined.
        // Enable reason: Usually an antipattern.
        // https://eslint.org/docs/latest/rules/block-scoped-var
        "block-scoped-var": "error",
        // Rule: Enforce camelcase naming convention.
        // Disable reason: Too often needs to be disobeyed for interop or
        //                 special use cases.
        // https://eslint.org/docs/latest/rules/camelcase
        camelcase: "off",
        // Rule: Enforce or disallow capitalization of the first letter of a
        //       comment.
        // Disable reason: Overly restrictive.
        // https://eslint.org/docs/latest/rules/capitalized-comments
        "capitalized-comments": "off",
        // Rule: Enforce that class methods utilize `this`.
        // Disable reason: Often has legitimate use cases.
        // https://eslint.org/docs/latest/rules/class-methods-use-this
        "class-methods-use-this": "off",
        // Rule: Enforce a maximum cyclomatic complexity allowed in a program.
        // Disable reason: Too subjective a measure of code quality.
        // https://eslint.org/docs/latest/rules/complexity
        complexity: "off",
        // Rule: Require `return` statements to either always or never specify
        //       values.
        // Enable reason: Often a bug.
        // https://eslint.org/docs/latest/rules/consistent-return
        "consistent-return": "error",
        // Rule: Enforce consistent naming when capturing the current execution
        //       context.
        // Disable reason: Overly restrictive.
        // https://eslint.org/docs/latest/rules/consistent-this
        "consistent-this": "off",
        // Rule: Enforce consistent brace style for all control statements.
        // Enable reason: Potential confusion introduced by brace-less blocks
        //                outweighs the readability benefits of compactness.
        // https://eslint.org/docs/latest/rules/curly
        curly: ["error", "all"],
        // Rule: Require `default` cases in `switch` statements.
        // Disable reason: Often has legitimate use cases.
        // https://eslint.org/docs/latest/rules/default-case
        "default-case": "off",
        // Rule: Enforce default clauses in switch statements to be last.
        // Enable reason: A consistent convention improves readability.
        // https://eslint.org/docs/latest/rules/default-case-last
        "default-case-last": "error",
        // Rule: Enforce default parameters to be last.
        // Disable reason: Often has legitimate use cases.
        // https://eslint.org/docs/latest/rules/default-param-last
        "default-param-last": "error",
        // Rule: Enforce dot notation whenever possible.
        // Enable reason: A consistent convention improves readability.
        // https://eslint.org/docs/latest/rules/dot-notation
        "dot-notation": "error",
        // Require the use of `===` and `!==`
        // Enable reason: Usually a bug or antipattern.
        // https://eslint.org/docs/latest/rules/eqeqeq
        eqeqeq: "error",
        // Rule: Require function names to match the name of the variable or
        //       property to which they are assigned.
        // Enable reason: A consistent convention improves readability.
        // https://eslint.org/docs/latest/rules/func-name-matching
        "func-name-matching": "error",
        // Rule: Require or disallow named `function` expressions.
        // Enable reason: A consistent convention improves readability, but
        //                "always" requires redundant-looking names that reduce
        //                readability.
        // https://eslint.org/docs/latest/rules/func-names
        "func-names": ["error", "as-needed"],
        // Rule: Enforce the consistent use of either function declarations or
        //       expressions.
        // Enable reason: A consistent convention improves readability.
        // https://eslint.org/docs/latest/rules/func-style
        "func-style": "error",
        // Rule: Require grouped accessor pairs in object literals and classes.
        // Enable reason: A consistent convention improves readability.
        // https://eslint.org/docs/latest/rules/grouped-accessor-pairs
        "grouped-accessor-pairs": "error",
    },
};
