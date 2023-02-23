import { useState } from "react";
import Button from "./Button";
import Count from "./Count";

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrementHandler = () => {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <div
            class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
            <Count count={count} />
            <div class="flex space-x-3">
                <Button handler={incrementHandler}>Increment</Button>
                <Button handler={decrementHandler}>Decrement</Button>
            </div>
        </div>
    )
}