exports.elfUtils = require('./elf-utils');
exports.elfLog = function(name) {
    var elvenLog = require('./elven-log');
    return new elvenLog(name);
}
exports.elvenLog = function(name) {
    var elvenLog = require('./elven-log');
    return new elvenLog(name);
};
exports.elfConfig = require('./elf-config');
exports.walker = require('./walker');

exports.getPackageDescription = function() {
    'use strict';
    var myDescription = 'This is Michael Warren\'s package';
    console.log(myDescription);
    return myDescription;
};
