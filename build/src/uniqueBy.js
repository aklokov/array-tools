"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectHash = require("object-hash");
function uniqueBy(arr, ...by) {
    switch (by.length) {
        case 0: return arr;
        case 1: return uniqueByOne(arr, by[0]);
        default: return uniqueBySeveral(arr, by);
    }
}
exports.uniqueBy = uniqueBy;
function uniqueByOne(arr, by) {
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
function uniqueBySeveral(arr, by) {
    const map = new Map();
    return arr.filter(item => {
        const obj = createObj(item, by);
        const hash = objectHash(obj);
        const mappedItems = map.get(hash);
        if (!mappedItems) {
            map.set(hash, [obj]);
            return true;
        }
        if (mappedItems.some(item => compareObj(item, obj, by.length))) {
            return false;
        }
        mappedItems.push(obj);
        return true;
    });
}
function createObj(item, by) {
    const obj = {};
    let i = by.length;
    while (i--) {
        obj[i] = by[i](item);
    }
    return obj;
}
function compareObj(obj1, obj2, length) {
    let i = length;
    while (i--) {
        if (obj1[i] !== obj2[i]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=uniqueBy.js.map