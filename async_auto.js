/**
 * Created by wyq on 2015/8/6.
 */
var async = require("async");
var config = require("./config.js");
var log4js = require('log4js');
log4js.configure(config.log4jsconfig, {});
var logger = log4js.getLogger(__filename);

var show = function (text, cb) {
    logger.info("*******" + text);
    cb(null, text);
};

var task = {
    getDate: function (cb) {
        setTimeout(function () {
            show("getDate", function (err, res) {
                cb(err, res);
            })
        }, 1000);
    },
    mkDir: function (cb) {
        setTimeout(function () {
            show("mkdir", function (err, res) {
                cb(err, res);
            })
        }, 1000);
    },
    writeFile: ["getDate", "mkDir", function (cb) {
        setTimeout(function () {
            show("writeFile", function (err, res) {
                cb(err, res);
            })
        }, 3000);
    }],
    emailFiles: ["writeFile", function (cb) {
        setTimeout(function () {
            show("emailFiles", function (err, res) {
                cb(err, res);
            })
        }, 4000);
    }]
};

async.auto(task, function(err, result) {
   logger.fatal("****** err: %j, result: %j", err, result);
});