import { createContext, useState } from "react";

export const CounterContext = createContext();

export default function Context({children}) {

    const [clicks, setClicks] = useState(0);

    return (
        <CounterContext.Provider
            value={{clicks, setClicks}}>
                {children}
        </CounterContext.Provider>

    )


}