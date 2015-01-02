(function() {
  var obj = {};
  obj.$ = require('jquery');
  console.log("typeof $:", typeof $);
  console.log("typeof obj.$:", typeof obj.$);
})();
