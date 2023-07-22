interface SquareProps {
    value: string;
    onClick: () => void;
}

const Square = ({ value, onClick }: SquareProps) => {
    return (
        <>
            <div
                className="flex items-center justify-center bg-yellow-500 border rounded-sm cursor-pointer"
                onClick={onClick}
            >
                {value === "x" ? (
                    <img src="/src/assets/icons8-cross-52.png" alt="Cross" height='40px' width='40px' />
                ) : value === "o" ? (
                    <img src="/src/assets/icons8-tick-50.png" alt="Tick" height='40px' width='40px' />
                ) : null}
            </div>
        </>
    );
};

export default Square;