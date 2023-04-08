import { useEffect, useState } from "react"
import { api } from "./axios/api";
import React from "react";

export const UserLoader = ({ userId, children}) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        (async () => {
            const response = await api.get(`users/${userId}`)
            setUser(response.data);
        } )()
    }, [userId])
    return(
        <>
            {React.Children.map(children, child => {
                if(React.isValidElement(child)) {
                    return React.cloneElement(child, { user })
                }
                return child;
            })}
        </>
    )
}