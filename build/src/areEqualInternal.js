"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function areEqualInternal(arr1, arr2, selector) {
    let i = arr1.length;
    if (selector) {
        while (i--) {
            if (selector(arr1[i]) !== selector(arr2[i])) {
                return false;
            }
        }
    }
    else {
        while (i--) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
    }
    return true;
}
exports.areEqualInternal = areEqualInternal;
//# sourceMappingURL=areEqualInternal.js.map