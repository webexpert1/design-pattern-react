import React, { useEffect, useState } from "react";
import { api } from "../axios/api";

export const withUser = (Component, userId) => {
    return props => {
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await api.get(`users/${userId}`)
                setUser(response.data)
            })()
        }, [])

        return <Component user={user} />
    }
}