
import './App.css';
import { SplitScreen } from './layout-components/SplitScreen';

const RightComponent = () => {
  return (
    <div style={{backgroundColor: 'red'}}>Right</div>
  )
}

const LeftComponent = () => {
  return (
    <div style={{backgroundColor: 'green'}}>Left</div>
  )
}

function App() {
  return (
     <SplitScreen leftWeight={1} rightWeight={3}>
         <LeftComponent />
         <RightComponent />
     </SplitScreen>
  );
}

export default App;
