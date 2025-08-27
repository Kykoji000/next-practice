"use client";


import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/button";
import { Task } from "@/types/task"
import { Modal } from "@/components/modal";

type Props = {
    
    params: Promise<{
        index: string;
    }>;
};

function Page({ params }: Props) {


    const index = parseInt(use(params). index);
    const router = useRouter();
    const [task, setTask] = useState<Task>();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {

        const storedTasks = localStorage.getItem("tasks");


        if (storedTasks) {
            const parsedTasks = JSON.parse(storedTasks);
            setTasks(parsedTasks);
            setTask(parsedTasks[index]);
        }
    }, [index]);


    if (!task) {
        return;
    }

    return(
        <div className="flex flex-col gap-8 items-center p-16">
            <h1 className="text-4xl font-bold">タスク詳細</h1>

            <div className="w-full flex flex-col gap-8 border rounded-2xl p-8">
                <div className="flex gap-2 border-b">
                    <label className="font-bold">タスク名</label>
                    <p>{task.title}</p>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold border-b">内容</label>
                    <p>{task.content}</p>
                </div>
            </div>
            
            <div className="w-full flex justify-between">
                <Button
                    onClick={() => {
                        router.push("/task");
                    }}
                >
                    戻る
                </Button>
            </div>
        </div>
    );
}

export default Page;