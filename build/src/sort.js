"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sort(array, func) {
    if (!func) {
        return [...array].sort();
    }
    return [...array].sort((item1, item2) => func(item1) - func(item2));
}
exports.sort = sort;
//# sourceMappingURL=sort.js.map