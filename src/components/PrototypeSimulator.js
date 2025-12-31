import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const PrototypeSimulator = () => {
    const [clicks, setClicks] = useState(0);
    return (_jsxs("section", { children: [_jsx("h2", { children: "\uD504\uB85C\uD1A0\uD0C0\uC785 \uC2DC\uBBAC\uB808\uC774\uD130" }), _jsx("p", { children: "\uC0AC\uC6A9\uC790 \uC0C1\uD638\uC791\uC6A9\uC744 \uC2DC\uBBAC\uB808\uC774\uC158\uD558\uC138\uC694." }), _jsx("button", { onClick: () => setClicks(clicks + 1), children: "\uD074\uB9AD\uD558\uC138\uC694!" }), _jsxs("p", { children: ["\uD074\uB9AD \uC218: ", clicks] })] }));
};
export default PrototypeSimulator;
