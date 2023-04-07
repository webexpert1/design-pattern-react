import logo from './logo.svg';
import './App.css';
import { SplitScreen } from './SplitScreen';


const LeftComponent = ({ name}) => {
  return <p style={{ backgroundColor: 'green '}}>{name}</p>
}

const RightComponent = ({ message }) => {
  return <p style={{ backgroundColor: 'blue '}}>{message}</p>
}

function App() {
  return (
    <SplitScreen 
      leftWeight={3}
      rightWeight={1}>
        <LeftComponent name='Richard' />
        <RightComponent message='Message' />
      </SplitScreen>

  //   <SplitScreen 
  //   left={LeftComponent}
  //   right={RightComponent}
  //   leftWeight={3}
  //   rightWeight={1}
  // />
  );
}

export default App;
