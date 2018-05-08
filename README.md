# OLX's Coding Styles

## Quick Start

Add ESLint script to run it in `package.json` and check the devDependencies:

```json
{
  "scripts": {
    "lint": "eslint ."
  },
  "devDependencies": {
    "eslint-config-panamera": "latest"
  }
}
```

Add `.eslintrc` file and extend from this package

```json
{
  "extends": "panamera"
}
```

If you want **es6** and **react** configs

```json
{
  "extends": [ "panamera", "panamera/es6", "panamera/react", "panamera/mocha", "panamera/jasmine" ]
}
```

## Rules

### Whitespace

 - (#whitespace--spaces) Use soft tabs (space character) set to 2 spaces. eslint: [`indent`](https://eslint.org/docs/rules/indent.html) jscs: [`validateIndentation`](http://jscs.info/rule/validateIndentation)

   ```javascript
   // bad
   function foo() {
   ∙∙∙∙let name;
   }

   // bad
   function bar() {
   ∙let name;
   }

   // good
   function baz() {
   ∙∙let name;
   }
   ```

 - (#whitespace--before-blocks) Place 1 space before the leading brace. eslint: [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks.html) jscs: [`requireSpaceBeforeBlockStatements`](http://jscs.info/rule/requireSpaceBeforeBlockStatements)

   ```javascript
   // bad
   function test(){
     console.log('test');
   }

   // good
   function test() {
     console.log('test');
   }

   // bad
   dog.set('attr',{
     age: '1 year',
     breed: 'Bernese Mountain Dog',
   });

   // good
   dog.set('attr', {
     age: '1 year',
     breed: 'Bernese Mountain Dog',
   });
   ```

 - (#whitespace--around-keywords) Place 1 space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space between the argument list and the function name in function calls and declarations. eslint: [`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing.html) 

   ```javascript
   // bad
   if(isJedi) {
     fight ();
   }

   // good
   if (isJedi) {
     fight();
   }

   // bad
   function fight () {
     console.log ('Swooosh!');
   }

   // good
   function fight() {
     console.log('Swooosh!');
   }
   ```

 - (#whitespace--infix-ops) Set off operators with spaces. eslint: [`space-infix-ops`](https://eslint.org/docs/rules/space-infix-ops.html)

   ```javascript
   // bad
   const x=y+5;

   // good
   const x = y + 5;
   ```
 - (#whitespace--in-parens) Do not add spaces inside parentheses. eslint: [`space-in-parens`](https://eslint.org/docs/rules/space-in-parens.html)

     ```javascript
     // bad
     function bar( foo ) {
       return foo;
     }

     // good
     function bar(foo) {
       return foo;
     }

     // bad
     if ( foo ) {
       console.log(foo);
     }

     // good
     if (foo) {
       console.log(foo);
     }
     ```
 - (#whitespace--in-brackets) Add spaces inside brackets. eslint: [`array-bracket-spacing`](https://eslint.org/docs/rules/array-bracket-spacing.html) 

   ```javascript
   // bad
   const foo = [1, 2, 3];
   console.log(foo[0]);

   // good
   const foo = [ 1, 2, 3 ];
   console.log(foo[0]);
   ```
   
 - (#whitespace--in-braces) Add spaces inside curly braces. eslint: [`object-curly-spacing`](https://eslint.org/docs/rules/object-curly-spacing.html) 

   ```javascript
   // bad
   const foo = {clark: 'kent'};

   // good
   const foo = { clark: 'kent' };
   ```

 - (#whitespace--max-len) Avoid having lines of code that are longer than 120 characters (including whitespace). Note: per [above](#strings--line-length), long strings are exempt from this rule, and should not be broken up. eslint: [`max-len`](https://eslint.org/docs/rules/max-len.html) jscs: [`maximumLineLength`](http://jscs.info/rule/maximumLineLength)

 ### Commas

- (#commas--leading-trailing) Leading commas: **Nope.** eslint: [`comma-style`](https://eslint.org/docs/rules/comma-style.html) 

  ```javascript
  // bad
  const story = [
      once
    , upon
    , aTime
  ];

  // good
  const story = [
    once,
    upon,
    aTime,
  ];

  // bad
  const hero = {
      firstName: 'Ada'
    , lastName: 'Lovelace'
    , birthYear: 1815
    , superPower: 'computers'
  };

  // good
  const hero = {
    firstName: 'Ada',
    lastName: 'Lovelace',
    birthYear: 1815,
    superPower: 'computers',
  };
  ```

- (#commas--dangling) Additional trailing comma: **Yup.** eslint: [`comma-dangle`](https://eslint.org/docs/rules/comma-dangle.html)

  > Why? This leads to cleaner git diffs. Also, transpilers like Babel will remove the additional trailing comma in the transpiled code which means you don’t have to worry about the [trailing comma problem](https://github.com/airbnb/javascript/blob/es5-deprecated/es5/README.md#commas) in legacy browsers.

  ```diff
  // bad - git diff without trailing comma
  const hero = {
       firstName: 'Florence',
  -    lastName: 'Nightingale'
  +    lastName: 'Nightingale',
  +    inventorOf: ['coxcomb chart', 'modern nursing']
  };

  // good - git diff with trailing comma
  const hero = {
       firstName: 'Florence',
       lastName: 'Nightingale',
  +    inventorOf: ['coxcomb chart', 'modern nursing'],
  };
  ```

  ```javascript
  // bad
  const hero = {
    firstName: 'Dana',
    lastName: 'Scully'
  };

  const heroes = [
    'Batman',
    'Superman'
  ];

  // good
  const hero = {
    firstName: 'Dana',
    lastName: 'Scully',
  };

  const heroes = [
    'Batman',
    'Superman',
  ];

  // bad
  function createHero(
    firstName,
    lastName,
    inventorOf
  ) {
    // does nothing
  }

  // good
  function createHero(
    firstName,
    lastName,
    inventorOf,
  ) {
    // does nothing
  }

  // good (note that a comma must not appear after a "rest" element)
  function createHero(
    firstName,
    lastName,
    inventorOf,
    ...heroArgs
  ) {
    // does nothing
  }

  // bad
  createHero(
    firstName,
    lastName,
    inventorOf
  );

  // good
  createHero(
    firstName,
    lastName,
    inventorOf,
  );

  // good (note that a comma must not appear after a "rest" element)
  createHero(
    firstName,
    lastName,
    inventorOf,
    ...heroArgs
  );
  ```
    
### Semicolons

- **Yup.** eslint: [`semi`](https://eslint.org/docs/rules/semi.html)

> Why? When JavaScript encounters a line break without a semicolon, it uses a set of rules called [Automatic Semicolon Insertion](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion) to determine whether or not it should regard that line break as the end of a statement, and (as the name implies) place a semicolon into your code before the line break if it thinks so. ASI contains a few eccentric behaviors, though, and your code will break if JavaScript misinterprets your line break. These rules will become more complicated as new features become a part of JavaScript. Explicitly terminating your statements and configuring your linter to catch missing semicolons will help prevent you from encountering issues.

  ```javascript
  // bad - raises exception
  const luke = {}
  const leia = {}
  [luke, leia].forEach(jedi => jedi.father = 'vader')

  // bad - raises exception
  const reaction = "No! That's impossible!"
  (async function meanwhileOnTheFalcon() {
    // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
    // ...
  }())

  // bad - returns `undefined` instead of the value on the next line - always happens when `return` is on a line by itself because of ASI!
  function foo() {
    return
      'search your feelings, you know it to be foo'
  }

  // good
  const luke = {};
  const leia = {};
  [luke, leia].forEach((jedi) => {
    jedi.father = 'vader';
  });

  // good
  const reaction = "No! That's impossible!";
  (async function meanwhileOnTheFalcon() {
    // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
    // ...
  }());

  // good
  function foo() {
    return 'search your feelings, you know it to be foo';
  }
  ```
