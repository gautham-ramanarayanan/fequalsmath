

export default function SlideButtons({ index, setIndex , number}) {
    function handleClick(e) {
        setIndex(e.currentTarget.id);
    }
    function decrement() {
        if (index - 1 < 0) {
            setIndex(index - 1 + number);
        } else {
            setIndex((index - 1) % number);
        }
    }
    function increment() {
        setIndex((index + 1) % number);
    }
    const showButtons = number <= 6;
    return (
        <ul className="flex flex-row mx-auto p-1 items-center justify-center">
            <li>
                <button className="text-txt" onClick={decrement}>＜</button>
            </li>
            {showButtons && [...Array(number).keys()].map((i) => (
                <button className="inline p-4" id={i} onClick={handleClick} key={i}>
                    <li >
                        <div className="rounded-full p-1 bg-primary"></div>
                    </li> 
                </button>
            ))}
            {!showButtons && <p>{index + 1}/{number}</p>}
            <li>
                <button className="text-txt" onClick={increment}>＞</button>
            </li>
        </ul>
    );
}