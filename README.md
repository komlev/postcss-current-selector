# PostCSS Current Selector [![Build Status][ci-img]][ci]

[PostCSS] plugin which helps you get your current selector.
[postcss-simple-vars]: https://github.com/postcss/postcss-simple-vars

Works great with [postcss-simple-vars] for example to get your current selector as a variable

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/komlev/postcss-current-selector.svg
[ci]:      https://travis-ci.org/komlev/postcss-current-selector

```css
.foo {
    $c: %@;
}
```

```css
.foo {
    $c: .foo;
}
```

## Usage

```js
postcss([ require('postcss-current-selector') ])
```

## Options

### `symbol`

By default, plugin will replace `%@` match in the declaration, but it could be changed with this option:

```js
postcss([ require('postcss-nested')({ symbol: '*@' }) ]
```
will look for `*@` text in declaration

```css
.foo {
    content: "*@";
}
```

```css
.foo {
    content: ".foo";
}
```
