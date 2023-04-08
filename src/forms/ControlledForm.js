
import React from "react";
import { useState, useEffect } from "react";

export const ControlledForm = () => {
    const [name, setName] = useState('')
    const [nameInputError, setNameInputError] = useState('')
    const [age, setAge] = useState();
    const [hairColor, setHairColor] = useState('')

    useEffect(() => {
        if(name.length < 2) {
            setNameInputError('Name must be greater than two characters');
        } else {
            setNameInputError('')
        }
    }, [name])
    const handleFormSubmit = (e) => {
        console.log(name);
        console.log(age);
        console.log(hairColor);
        e.preventDefault()
    }



    return(
        <form onSubmit={handleFormSubmit}>
            {nameInputError && <p>{nameInputError}</p>}
            <input 
                name='name'
                placeholder="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                 />

             <input 
                name='age'
                placeholder="age"
                type="text"
                value={age}
                onChange={e => setAge(e.target.value)}
                 />
             <input 
                name='hairColor'
                placeholder="Hair"
                type="text"
                value={hairColor}
                onChange={e => setHairColor(e.target.value)}
                 />

            <input type="submit" value='Submit' />
        </form>
    )
}