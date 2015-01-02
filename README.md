browserify-jquery-test
======================

A proof of concept that browserify encapsulates jQuery object

# Concept

When you require jQuery and set the returned object to your variable,
it should not pollute global window object.

# Proof

The following code is written in `src.js`.

```
(function() {
  var obj = {};
  obj.$ = require('jquery');
  console.log("typeof $:", typeof $);
  console.log("typeof obj.$:", typeof obj.$);
})();
```

`src.js` and jQuery are compiled to `dist.js` by grunt and browserify.

Run `./node_modules/.bin/static .` and access to `http://127.0.0.1:8080`,
so you will see the following result in your console:

```
typeof $: undefined
typeof global.$: function
```

# Conclusion

It does not set `$` or `jQuery` object to global `window` object.
