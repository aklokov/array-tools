"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const areEqualInternal_1 = require("./areEqualInternal");
const sort_1 = require("./sort");
function areEquivalent(arr1, arr2, selector) {
    if (arr1 === arr2) {
        return true;
    }
    if (!arr1 || !arr2 || arr1.length !== arr2.length) {
        return false;
    }
    return areEqualInternal_1.areEqualInternal(sort_1.sort(arr1, selector), sort_1.sort(arr2, selector), selector);
}
exports.areEquivalent = areEquivalent;
//# sourceMappingURL=areEquivalent.js.map