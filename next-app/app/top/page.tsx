"use client";

import { useRouter } from "next/navigation";

function Page() {
    const router = useRouter();

    return (
        <button
            className="p-3 rounded -xl border"
            onClick={() =>{
                router.push("/");
            }}
        >
            トップページ
        </button>
    );
}

export default Page;