/**
 * Created by wyq on 2015/8/7.
 */
var _ = require("underscore");
var async = require("async");

var testArr = [1, 2, 3, 4];

async.mapSeries(testArr, function (item, cb) {
    console.log("begin: %j", item);
    setTimeout(function () {
        cb(null, item * 3);
    }, 2000);
}, function (err, result) {
    console.log(arguments);
});



