"use client";

function Page() {
    return (
        <input
            className="p-2 rounded-xl border"
            
            onChange={(e) => {
                alert(e.target.value);
            }}
        />
    )
}

export default Page;