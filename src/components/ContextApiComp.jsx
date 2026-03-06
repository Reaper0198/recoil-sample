import { useContext } from "react";
import Context, { CounterContext } from "./context";

export default function ContextApiComp() {

    const {clicks, setClicks} = useContext(CounterContext);

    return (
        <>
            <div>
                <p>value : {clicks}</p>
            </div>
            <div>
                <button onClick={()=>setClicks(prev=> prev+1)}>Increase</button>
                <button onClick={()=>setClicks(prev=> prev-1)}>Decrease</button>
            </div>
        </>
    )
}