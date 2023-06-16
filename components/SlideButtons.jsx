

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
    return (
        <ul className="flex flex-row mx-auto p-1 items-center justify-center">
            <li>
                <button className="text-txt" onClick={decrement}>＜</button>
            </li>
            {[...Array(number).keys()].map((i) => (
                <li className="inline p-4" key={i}>
                    <button id={i} onClick={handleClick}>
                        <div className="rounded-full p-1 bg-primary"></div>
                    </button>
                </li> 
            ))}
            <li>
                <button className="text-txt" onClick={increment}>＞</button>
            </li>
        </ul>
    );
}