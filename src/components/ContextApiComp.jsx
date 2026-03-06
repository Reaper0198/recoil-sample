import { useContext } from "react"
import { CounterContext } from "../context";

export default function ContextApiComp() {

    const {clicks, setClicks} = useContext(CounterContext);

    

    return (
        <div>

        </div>
    )
}