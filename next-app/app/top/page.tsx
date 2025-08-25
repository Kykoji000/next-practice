"use client";

import { useState } from "react";

function Page() {
    const [text, setText] = useState("");

    return (
        <div>
            <input
                className="p-2rounded-xl border"
                onChange={(e) =>{
                    setText(e.target.value);
                }}
            />
            <p>入力値: {text}</p>
        </div>
    );
}

export default Page;