"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function all(array, func) {
    return !array.some(item => !func(item));
}
exports.all = all;
//# sourceMappingURL=all.js.map