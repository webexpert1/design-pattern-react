import React from "react";
import { useEffect, useState } from "react";

export const DataSource = ({getDataFunc = () => {}, resourceName, children}) => {
    const [state, setState] = useState(null);

    useEffect(async() => {
        (async () => {
            const data = await getDataFunc();
            setState(data)
        })()
    }, [getDataFunc])

    return(
        <>
            {React.Children.map(children, child => {
                if(React.isValidElement(child)) {
                    return React.cloneElement(child, {[resourceName]: state})
                }
                return child
            })}
        </>
    )
}
