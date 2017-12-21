"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flatMap(input, selector) {
    let result = [];
    input.forEach(item => {
        const selected = selector(item);
        if (Array.isArray(selected) && selected.length) {
            result = result.concat(selector(item));
        }
    });
    return result;
}
exports.flatMap = flatMap;
//# sourceMappingURL=flatMap.js.map