import { useRouter } from "next/navigation";
import { Button } from "@/components/button";
import { Task } from "@/types/task";

type Props = {
    tasks: Task[];
};

export function Table({ tasks }: Props){
    const router = useRouter();
    return (
        <table className="w-full [&_td]:p-2 [&_td]:border">
            <thead>
                <tr>
                    <td>タイトル</td>
                    <td className="w-2/3">内容</td>
                    <td className="w-20"></td>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => (
                    <tr key={index}>
                        <td>{task.title}</td>
                        <td>{task.content}</td>
                        <td>
                            <Button
                                onClick={() => {
                                    router.push(`/task/${index}`);
                                }}
                            >
                            詳細
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}