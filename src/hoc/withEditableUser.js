import React, { useEffect, useState } from 'react';
import  { api } from '../axios/api'

export const withEditableUser = (Component, userId) => {
    return props => {
        const [user , setUser] = useState(null)
        const [originalUser, setOriginalUser] = useState(null);

        useEffect(() => {
           (async () => {
            const response = await api.get(`/users/${userId}`);
            setUser(response.data);
            setOriginalUser(response.data);
           })()
        }, [])

        const onChangeUser = changes => {
            setUser({...user, ...changes})
        }

        const onResetUser = () => {
            setUser(originalUser)
        }

        const onSaveUser = async (e) => {
            const response = await api.post(`/users/${userId}`, {user});
            setOriginalUser(response.data)
            setUser(response.data)
            e.preventDefault()
        }
        return <Component user={user} onSaveUser={onSaveUser} {...props} onChangeUser={onChangeUser} onResetUser={onResetUser} />
    }
}