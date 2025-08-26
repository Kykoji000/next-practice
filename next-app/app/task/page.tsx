"use client";

import { useState } from "react";

import { Table } from "@/components/table";

import { Task } from "@/types/task";

function Page() {
    const [tasks, setTasks] = useState<Task[]>([
        { title: "タスク1", content: "タスク1の内容"},
        { title: "タスク2", content: "タスク2の内容"},
        { title: "タスク3", content: "タスク3の内容"},
    ]);

    return (
        <div className="flex flex-col gap-8 items-center p-16">
            <h1 className="text-4xl font-bold">タスク一覧</h1>
            <Table tasks={tasks}></Table>
        </div>
    );
}

export default Page;