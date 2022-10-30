"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme = (size) => {
    return {
        fontSource: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'normal',
        fontSize: size === "sm" ? '20px' : "25px"
    };
};
exports.default = theme;
//# sourceMappingURL=theme.js.map