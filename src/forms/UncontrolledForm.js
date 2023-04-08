import React from 'react';


export const UncontrolledForm = () => {
    const nameInput = React.createRef();
    const ageInput = React.createRef();
    const hairColorInput = React.createRef();

    const handleFormSubmit = (e) => {
        console.log(nameInput.current.value)
        console.log(ageInput.current.value)
        console.log(hairColorInput.current.value)
        e.preventDefault()
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <input name='name' type='text' placeholder='Name' ref={nameInput}/>  <br />
            <input name='age' type='text' placeholder='Age' ref={ageInput}/>  <br />
            <input name='hairColor' type='text' placeholder='Hair Color' ref={hairColorInput}/>  <br />
            <input value='Submit' type='submit' placeholder='Name'/>  <br />
        </form>
    )
}