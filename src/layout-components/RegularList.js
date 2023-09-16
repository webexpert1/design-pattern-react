
export const RegularList = ({
    items,
    resourceName, 
    itemComponent: ItemComponent
}) => {
    return(
        <>
            {items.map((item, i) => (
                <ItemComponent key={i} {...{[resourceName]: item}} />
            ))}
        </>
    )
}


// Usage
{/* <>
   
<RegularList 
  items={products}
  resourceName='product'
  itemComponent={SmallProductListItem} />

<RegularList 
  items={people}
  resourceName='person'
  itemComponent={LargePersonListItem} />
</> */}