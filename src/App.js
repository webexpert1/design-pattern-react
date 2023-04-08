import logo from './logo.svg';
import './App.css';
import { Modal } from './Modal';
import { RegularList } from './RegularList';
import { LargePersonListItem} from './people/LargePersonListItem';
import { SmallPersonListItem } from './people/SmallPersonListItem';

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
    hobbies: ['golf', 'mathematics']
  },
  {
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics']
  },
]

function App() {
  return (
    <>
      <Modal>
        <RegularList  
           items={people}
           resourceName='person'
           itemComponent={SmallPersonListItem} />
      </Modal>

      {/* </Modal> */}
    </>
  );
}

export default App;
