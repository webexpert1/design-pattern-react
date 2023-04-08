import React, { useEffect, useState } from "react"
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      post: {
        "Access-Control-Allow-Origin": true
      }
    }
  })


export const CurrentUserLoader = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await api.get('/current-user');
            setUser(response.data)
        })()
    },[])

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