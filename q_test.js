/**
 * Created by wyq on 2015/8/24.
 */
var Q = require('q');
require('q-flow');  // extends q

Q.longStackSupport = true;

/*
Q.ninvoke(this, "test", "Q.ninvoke")
    .then(function (res) {
        console.log("****** res: %j", res);
        return Q.resolve(res);  //将res传递给下一个then
    })
    .then(function (res) {
        console.log("******0 res: %j", res);
        return Q.reject(res);   //直接抛出错误，被catch捕获到
    })
    .then(function (res) {
        console.log("******1 res: %j", res);
    })
    .catch(function (err) {
        console.log("****** err: %j", err);
    })
    .done(function () {
        console.log("******done******");
    });

exports.test = function (txt, callback) {
    console.log("Q.ninvoke****** %j ******", txt);
    return callback(null, {state: "success"});
};
*/

/*
Q.nfcall(test, "asdf")
    .then(function (res) {
        console.log("****** res: %j", res);
    })
    .catch(function (err) {
        console.log("****** err: %j", err);
    })
    .done(function () {
        console.log("******* done *******");
    });

function test(txt, cb) {
    console.log("Q.nfcall******** %j ********", txt);
    return cb(null, {state: "success"});
};
*/

/*
var jobs = [Q.ninvoke(this, 'test1', "aaa"), Q.ninvoke(this, 'test2', "bbb"), Q.ninvoke(this, 'test3', "ccc")];
Q.all(jobs)
    .then(function (res) {
        console.log("******** res: %j", res);
    })
    .catch(function (err) {
        console.log("******** err: %j", err);
    })
    .done(function () {
        console.log("******** done ********");
    });


exports.test1 = function (txt, cb) {
    console.log("test1*******%j", txt);
    return cb(null, txt);
};

exports.test2 = function (txt, cb) {
    console.log("test2*******%j", txt);
    return cb(null, txt);
};

exports.test3 = function (txt, cb) {
    console.log("test3*******%j", txt);
    return cb(null, txt);
};
*/

/*
var fun = Q.nbind(function (a, b, c, cb) {
    console.log("******this: %j, a: %j, b: %j, c: %j", this, a, b, c);
    return cb(null, this + a + b + c);
}, 1, 2, 3);

Q.fcall(fun, 4)
    .then(function (res) {
        console.log("************* res: %j", res);
    })
    .catch(function (err) {
        console.log("************* err: %j", err);
    })
    .done(function () {
        console.log("******* done *******");
    });
*/


var jobs = [Q.ninvoke(this, 'test1', "aaa"), Q.ninvoke(this, 'test2', "bbb"), Q.ninvoke(this, 'test3', "ccc")];
Q.all(jobs)
    .spread(function (res0, res1, res2) {
        console.log("******** res0: %j, res1: %j, res2: %j", res0, res1, res2);
    })
    .catch(function (err) {
        console.log("******** err: %j", err);
    })
    .done(function () {
        console.log("******** done ********");
    });


exports.test1 = function (txt, cb) {
    setTimeout(function () {
        console.log("[%j] test1*******%j", new Date().toLocaleString(), txt);
        return cb(null, txt);
    }, 1000);
};

exports.test2 = function (txt, cb) {
    setTimeout(function () {
        console.log("[%j] test2*******%j", new Date().toLocaleString(), txt);
        return cb(null, txt);
    }, 2000);
};

exports.test3 = function (txt, cb) {
    setTimeout(function () {
        console.log("[%j] test3*******%j", new Date().toLocaleString(), txt);
        return cb(null, txt);
    }, 3000);
};








