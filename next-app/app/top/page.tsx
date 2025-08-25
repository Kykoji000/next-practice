"use client";

import { useState, useEffect } from "react";

function Page() {
    const [text,setText] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(text.length);
    }, [text]);

    return (
        <div>
            <input
                className="p-2 rounded border"
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <p>入力値: {text}</p>
            <p>文字数: {count}</p>
        </div>
    );
}

export default Page;