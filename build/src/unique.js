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
function uniqueBy(arr, by) {
    const set = new Set();
    return arr.filter(item => {
        const key = by(item);
        if (set.has(key)) {
            return false;
        }
        set.add(key);
        return true;
    });
}
exports.uniqueBy = uniqueBy;
//# sourceMappingURL=unique.js.map