"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function except(src, exclusion) {
    const set = new Set(exclusion);
    return src.filter(item => !set.has(item));
}
exports.except = except;
function intersect(src, inter) {
    const set = new Set(inter);
    return src.filter(item => set.has(item));
}
exports.intersect = intersect;
//# sourceMappingURL=except.js.map