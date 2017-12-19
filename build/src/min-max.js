"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function max(array, func) {
    if (!func) {
        return Math.max.apply(null, array);
    }
    else {
        return Math.max.apply(null, array.map(func));
    }
}
exports.max = max;
function min(array, func) {
    if (!func) {
        return Math.min.apply(null, array);
    }
    else {
        return Math.min.apply(null, array.map(func));
    }
}
exports.min = min;
function maxBy(array, func) {
    if (!array || !array.length) {
        return undefined;
    }
    let i = array.length - 1;
    let maxItem = array[i];
    let maxVal = func(maxItem);
    while (i--) {
        const nextItem = array[i];
        const nextVal = func(nextItem);
        if (maxVal < nextVal) {
            maxItem = nextItem;
            maxVal = nextVal;
        }
    }
    return maxItem;
}
exports.maxBy = maxBy;
function minBy(array, func) {
    if (!array || !array.length) {
        return undefined;
    }
    let i = array.length - 1;
    let minItem = array[i];
    let minVal = func(minItem);
    while (i--) {
        const nextItem = array[i];
        const nextVal = func(nextItem);
        if (minVal > nextVal) {
            minItem = nextItem;
            minVal = nextVal;
        }
    }
    return minItem;
}
exports.minBy = minBy;
//# sourceMappingURL=min-max.js.map