"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map