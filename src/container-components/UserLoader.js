import axios from 'axios'
import React, { useState, useEffect } from 'react'

export const UserLoader = ({ userId, children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        (async () => {
            const response = await axios.get(`users/${userId}`);
            console.log(response)
            setUser(response.data)
        })()
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

// Usage
/* <UserLoader userId='1234'>
<UserInfo />
</UserLoader> */