"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flatMap(input, selector) {
    let result = [];
    if (selector) {
        input.forEach(item => {
            const selected = selector(item);
            if (Array.isArray(selected) && selected.length) {
                result = result.concat(selected);
            }
        });
    }
    else {
        input.forEach(item => {
            if (Array.isArray(item) && item.length) {
                result = result.concat(item);
            }
        });
    }
    return result;
}
exports.flatMap = flatMap;
//# sourceMappingURL=flatMap.js.map