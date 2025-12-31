import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const IdeaInput = () => {
    const [idea, setIdea] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Idea submitted: ${idea}`);
        // Here you can save to state or API
    };
    return (_jsxs("section", { children: [_jsx("h2", { children: "\uC2A4\uD0C0\uD2B8\uC5C5 \uC544\uC774\uB514\uC5B4 \uC785\uB825" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("textarea", { value: idea, onChange: (e) => setIdea(e.target.value), placeholder: "\uC2A4\uD0C0\uD2B8\uC5C5 \uC544\uC774\uB514\uC5B4\uB97C \uC124\uBA85\uD558\uC138\uC694...", rows: 4 }), _jsx("button", { type: "submit", children: "\uC544\uC774\uB514\uC5B4 \uC81C\uCD9C" })] })] }));
};
export default IdeaInput;
