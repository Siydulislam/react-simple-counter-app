import Button from "./Button";
import Count from "./Count";

export default function Counter() {
    return (
        <div
            class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
            <Count />
            <div class="flex space-x-3">
                <Button>Increment</Button>
                <Button>Decrement</Button>
            </div>
        </div>
    )
}