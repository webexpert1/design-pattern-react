

export const SmallPersonListItem = ({person}) => {
    const { name, age, hairColor } = person;
    return(
        <>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
          
        </>
    )
}