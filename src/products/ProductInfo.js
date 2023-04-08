

export const ProductInfo = ({product}) => {
    const { name, price, description, rating } = product || {};
    console.log('prod', product)
    return(
        <>
        {product ?
            <>
                <h1>{name}</h1>
                <p>Price: {price}</p>
                <p>Description: {description}</p>
                <h3>Rating {rating}</h3>
             </>
            :
            <p>Loading</p>
        }
        </>
        
    )
}