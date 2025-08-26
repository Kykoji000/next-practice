type Props = {
    onClick: () =>void;
    children: React.ReactNode;
};

export function Button({ onClick, children }: Props) {
    return(
        <button
        type="button"
        className="w-fit border rounded-xl p-3 font-bold"
        onClick={() => onClick()}
        >
            {children}
        </button>
    );
}