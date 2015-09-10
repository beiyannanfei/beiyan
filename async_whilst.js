/**
 * Created by wyq on 2015/7/16.
 */
var async = require("async");

var testList = [1,2,3,4,5,6,7];

var index = 0;
var exec = function() {
    async.whilst(
        function() {
            return index < testList.length;
        },
        function(cb) {
            show();
            ++index;
            setTimeout(cb, 1000);

        },
        function(err) {
            console.error(err);
        }
    );
};

var show = function() {
    console.log("******************* ", testList[index]);
};

exec();