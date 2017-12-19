"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function last(items, func) {
    if (!items || !items.length) {
        return undefined;
    }
    if (!func) {
        return items[items.length - 1];
    }
    let i = items.length;
    while (i--) {
        if (func(items[i])) {
            return items[i];
        }
    }
    return undefined;
}
exports.last = last;
function first(items, func) {
    if (!items) {
        return undefined;
    }
    if (!func) {
        return items[0];
    }
    for (let item of items) {
        if (func(item)) {
            return item;
        }
    }
    return undefined;
}
exports.first = first;
//# sourceMappingURL=last-first.js.map