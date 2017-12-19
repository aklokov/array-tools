"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function regexToArray(regex, content) {
    const matches = [];
    let match = regex.exec(content);
    while (match) {
        matches.push(match);
        match = regex.exec(content);
    }
    return matches;
}
exports.regexToArray = regexToArray;
//# sourceMappingURL=regexToArray.js.map