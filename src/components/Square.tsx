
interface Props {
    onclick: (a: boolean) => boolean;
    status: boolean;
}

const Square = ({ status, onclick }: Props) => {

    return (
        <>
            <div className="flex items-center justify-center bg-yellow-500 border rounded-sm cursor-pointer"
                onClick={() => onclick(!status)}
            >
                {status === true ?
                    <img src="/src/assets/icons8-tick-50.png" /> : status === false ?
                        <img src="/src/assets/icons8-cross-52.png" /> : null}
            </div>
        </>
    )
}

export default Square