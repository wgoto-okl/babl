"use strict";

var foo = 1;

console.log(foo);

var obj = {
    val: 10,
    test: function test() {
        var _this = this;

        window.setTimeout(function () {
            console.log(_this.val);
        }, 10);
    }
};

var arr = [0, 0, 10, 1];

var arrCopy = [].concat(arr);

var alpha = arr[0];
var beta = arr[1];
var charlie = arr[2];
//# sourceMappingURL=es6.js.map
