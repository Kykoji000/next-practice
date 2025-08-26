import { Task } from "@/types/task";
import { table } from "console";

type Props ={
    tasks: Task[];
};

export function Table({ tasks }: Props) {
    return (
        <table className="w-full [&_td]:p-2 [&_td]:border">
            <thead>
                <tr>
                    <td>タイトル</td>
                    <td className="w-2/3">内容</td>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task,index) =>(
                    <tr key={index}>
                        <td>{task.title}</td>
                        <td>{task.content}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}