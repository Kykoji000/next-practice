"use client";

function Page(){
    return (
        <button
            className="w-fit p-3 rounded-xl border fonr-bold"
            onClick={() =>{
                alert("ボタンが押されました");
            }}
        >
            ボタン
        </button>
    );
}

export default Page;