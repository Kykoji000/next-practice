type Props = {
    color: string;
    backgroundColor: string;
    children: React.ReactNode;
}

export function Tag({ color, backgroundColor, children }: Props) {
  return (
    <div
        className="w-fit p-3 rounded-xl border font-bold"
        style={{
            color: color,
            backgroundColor: backgroundColor
        }}
    >
        {/* 子要素を表示 */}
        {children}
    </div>
  );
}
