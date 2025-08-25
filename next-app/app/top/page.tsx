"use client";

function Page() {
    return (
        <form
            onSubmit={() => {
                alert("送信しました");
            }}
        >
            <label htmlFor="name">名前: </label>
            <input className="p-1 rounded-xl border" name="name" />
            <button className="p-1 rounded-xl border">送信</button>
        </form>
    );
}

export default Page;