import React from "react";
import { useState, useEffect } from "react";
import { api } from "../axios/api";

export const ResourceLoader = ({ resourceName, resourceUrl, children}) => {
    const [state, setState] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await api.get(resourceUrl);
            setState(response.data)
        })()
    }, [resourceUrl])

    return(
        <>
           {React.Children.map(children, child => {
            if(React.isValidElement(child)) {
                return React.cloneElement(child, { [resourceName]: state })
            }
            return child
           })}
        </>
    )
}