
import './App.css';
import { RegularList } from './layout-components/RegularList';
import { SplitScreen } from './layout-components/SplitScreen';
import { LargePersonListItem } from './people/LargePersonListItem';
import { SmallPersonListItem } from './people/SmallPersonListItem';
import { SmallProductListItem } from './products/SmallProductListItem';

const people = [
  {
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games']
  },
  {
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics', '']
  },
  {
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics']
  },
]

const products = [
  {
    name: 'Flat-Screen TV',
    price: '$300',
    descripion: 'Huge LCD Screen, a great deal',
    rating: 4.5
  },
  {
    name: 'Basketball',
    price: '$10',
    descripion: 'Just like the pros use',
    rating: 3.8
  },
  {
    name: 'Running Shoes',
    price: '$120',
    descripion: 'State of the art technology for optimum running',
    rating: 4.2
  },
]

function App() {
  return (
    <>
   
      <RegularList 
        items={products}
        resourceName='product'
        itemComponent={SmallProductListItem} />

      <RegularList 
        items={people}
        resourceName='person'
        itemComponent={LargePersonListItem} />
    </>
  );
}

export default App;
