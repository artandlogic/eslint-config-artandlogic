# `eslint-config-artandlogic`

An [ESLint](https://eslint.org/)
[Shareable Config](https://eslint.org/docs/latest/developer-guide/shareable-configs)
for Art+Logic coding style.

## Usage

Shareable configs are designed to work with the `extends` feature of .eslintrc
files. You can learn more about
[Shareable Configs](https://eslint.org/docs/latest/developer-guide/shareable-configs)
on the official ESLint website.

To install the config, run

```
npm install --save-dev eslint git+https://github.com/artandlogic/eslint-config-artandlogic
```

If [Prettier](https://prettier.io/) will be used for code formatting, then
install it as well:

```
npm install --save-dev prettier eslint-config-prettier
```

Then to enable the config, create a `.eslintrc.cjs` file in your project root
with the following content:

```js
module.exports = {
    extends: [
        "@artandlogic",
        // If using Prettier for code formatting, enable the ESLint plugin to
        // ensure that no rules are enabled which conflict with Prettier.
        // "prettier",
    ],
    env: {
        // Configure your project environments here, e.g. `browser: true` or
        // `node: true`. If your repository has multiple projects, then instead
        // of defining environments here you can define them in additional
        // `.eslintrc.cjs` files in subdirectories, whose config will
        // extend/override the root config.
        // https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-environments
        //
    },
    rules: {
        // Override rules here if necessary (discouraged in the name of
        // consistency)
    },
};
```

## Motivation

This config is configured based on a few general principles:

1.  **Consistency:** An imperfect coding style applied consistently is better
    than a perfect coding style applied inconsistently. In other words, the
    readability benefit derived from only having a single style to read is
    usually greater than the readability benefit of using the best style for
    each circumstance. This doesn't justify any single style decision so much as
    it justifies making so many decisions in the first place.
2.  **All-or-nothing:** Linter warnings are too easily ignored, and once once
    they have accumulated, it becomes overwhelming to address them. Either a
    rule is important enough that no merged code may violate it, or it's
    unimportant enough to be left to developers' discretion.
3.  **Automation:** An imperfect coding style that's easy to maintain is better
    than a perfect coding style that requires time and effort to maintain. In
    other words, the time cost of burdening developers with selecting the best
    style to use on a case-by-case basis is usually greater than the readability
    cost of an automated tool selecting the "worse" style in some cases.

As well as a number of case-by-case principles:

1. **Readability:** Code is written once but read many times, so it is always
   more important to optimize for reading code than for writing it.
2. **Failing fast:** The cost of fixing a bug increases dramatically further it
   goes through the development process (dev, review, testing, release) without
   being caught. The cost of having to override the occasional false positive
   from automated tooling is usually far less than not having any automation at
   all to catch potential bugs early.
3. **Compatibility:** Given that A+L developers are part of the broader
   development ecosystem, then when there is not another compelling reason to
   choose one style/practice over another, preference goes to the one that is
   most compatible with the broader ecosystem. In particular, official language
   recommendations must be followed, but so should any practice that is popular
   with a majority of developers.
4. **Modernity:** Any use of deprecated or obsolete features must be forbidden
   in favour of their replacements; deprecated features are explicitly at risk
   of breaking in future updates, and similarly, obsolete features are at risk
   of becoming less understood as they become less relevant. Note that this does
   not mean reflexively embracing the "new and shiny", since doing so often
   comes at the expense of other principles (e.g. Readability, Non-burdensome).
5. **Non-burdensome:** In the pursuit of other principles, style enforcement can
   become overly strict and reject uncommon but justifiable code; a
   style/practice must only be forbidden if the reasons to use it are rare
   enough that it's justified to expect developers to add an override comment
   each time it is done. Similarly, enforcing the use of very recent or advanced
   features can overly burden developers with the depth and breadth of language
   features they need to know just to get work done.
6. **Limited scope:** Rules must enforce some specific style or practice, not a
   broader subjective notion of code quality (e.g. by setting arbitrary limits
   for cyclomatic complexity or number of function parameters). While there is
   value in having automated tooling to access broader code quality, those
   assessments are not appropriate in a lint tool that's used for gating code
   merges. Any issue reported at that stage should be easy to address.

Each rule setting is annotated with the principles which justify the choice.

Generally, Art+Logic would prefer to adopt a widely-used style/configuration
rather than create a custom one, in the name of keeping compatible with the
wider ecosystem and of spending our time focusing on the real problems that need
solving. However, of these popular configurations,

1. The
   [`eslint:recommended`](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#using-eslintrecommended)
   config is quite conservative, choosing not to enable a variety of rules that
   forbid what are usually bugs or antipatterns. We would rather be notified
   when these potentially-problematic situations arise, and override the linter
   with an `// eslint-disable-line` comment when it's justified.
2. The so-called ["StandardJS"](https://standardjs.com/index.html) project is
   compelling in principle since it's a popular and opinionated style with
   automatic formatting, but it makes a few choices which are non-starters for
   Art+Logic (mainly 2-space tabs and no semicolons, both of which we find
   reduces code clarity and readability), and unlike Prettier it provides no
   customization options.

This config is effectively the `eslint:recommended` configuration extended with
many of the "suggestion" rules. The only reason it doesn't explicitly extend
`eslint:recommended` is for stability; given we've reviewed all those rules
anyway, then setting them explicitly ensures that future changes to
`eslint:recommended` won't introduce expected changes to linting output.

## License

MIT. Copyright (c) [Art+Logic](https://artandlogic.com/).
