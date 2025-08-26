"use client";


import { useEffect , useState } from "react";
import { Table } from "@/components/table";
import { Modal } from "@/components/modal";
import { Task } from "@/types/task";
import { Button } from "@/components/button";

function Page() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [newTask, setNewTask] = useState<Task>({
        title: "",
        content: "",
    });
    useEffect(() =>{
        const tasks = localStorage.getItem("tasks");
        if (tasks) {
            setTasks(JSON.parse(tasks));
        }
    }, []);
    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        } else {
            localStorage.removeItem("tasks");
        }
    }, [tasks]);

    return (
        <div className="flex flex-col gap-8 items-center p-16">
            <h1 className="text-4xl font-bold">タスク一覧</h1>
            <div className="w-full flex justify-end">
                <Button onClick={() => setIsOpen(true)}>タスクを追加</Button>
            </div>
            <Table tasks={tasks}></Table>
            {isOpen && (
                <Modal onClose={() => setIsOpen(false)}>
                    <form className="flex flex-col gap-4 text-black border-black">
                        <div className="flex flex-col gap-2">
                            <label>タスク名</label>
                            <input
                                className="border p-2 rounded-xl"
                                value={newTask.title}
                                onChange={(e) =>
                                    setNewTask({ ...newTask, title: e.target.value })
                                }
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>内容</label>
                            <textarea
                                className="border p-2 rounded-xl"
                                value={newTask.content}
                                onChange={(e) =>
                                    setNewTask({ ...newTask, content: e.target.value})
                                }
                            />
                        </div>
                        <div className="flex justify-end gap-4">
                            <Button onClick={() => setIsOpen(false)}>キャンセル</Button>
                            <Button
                                onClick = {() => {
                                    setTasks([...tasks, newTask]);
                                    setIsOpen(false);
                                    setNewTask({ title: "", content: ""});
                                }}
                            >
                                追加
                            </Button>
                        </div>
                    </form>
                </Modal>
            )}
        </div>
    );
}

export default Page;