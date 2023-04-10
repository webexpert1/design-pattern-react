import React from "react";
import { withEditableUser } from "./withEditableUser";
import { withEditableResource } from './withEditableResource';

export const UserInfoForm = withEditableResource(({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};
 
    return (
       user ? (
       <form>
            <label>
                Name :
                <input type="text" value={name} onChange={e => onChangeUser({ name: Number(e.target.value) })} placeholder="name"

                  />
            </label>
            <label>
                Age :
                <input type="number" value={age} onChange={e => onChangeUser({ age: e.target.value })} placeholder="name"

                  />
            </label>

            <label>
                Hair Color :
                <input value={hairColor} onChange={e => onChangeUser({ hairColor: e.target.value })} placeholder="name"

                  />
            </label>

            <button onClick={onResetUser}>Reset</button>
            <button onClick={onSaveUser}>Save Changes</button>
        </form>) : <p>Loading</p>
    )
}, '/users/123', 'user') 
