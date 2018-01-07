"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const areEqualInternal_1 = require("./areEqualInternal");
function areEqual(arr1, arr2, selector) {
    if (arr1 === arr2) {
        return true;
    }
    if (!arr1 || !arr2 || arr1.length !== arr2.length) {
        return false;
    }
    return areEqualInternal_1.areEqualInternal(arr1, arr2, selector);
}
exports.areEqual = areEqual;
//# sourceMappingURL=areEqual.js.map