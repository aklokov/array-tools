"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function unique(arr, func) {
    if (func) {
        return uniqueVal(arr, func);
    }
    else {
        return uniqueItem(arr);
    }
}
exports.unique = unique;
function uniqueItem(arr) {
    const set = new Set(arr);
    return [...set];
}
function uniqueVal(arr, func) {
    const set = new Set(arr.map(func));
    return [...set];
}
//# sourceMappingURL=unique.js.map