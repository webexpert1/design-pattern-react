
export const ProductInfo = ({ person }) => {
    const { name, price, descripion, rating } = person;
    return(
        <>
           <h3>{name}</h3>
           <p>{price}</p>
           <h3>Description</h3>
           <p>{descripion}</p>
           <p>Average Rating: {rating}</p>
        </>
    )
}