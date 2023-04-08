import logo from './logo.svg';
import './App.css';
import { CurrentUserLoader } from './CurrentUserLoader';
import { UserInfo } from './UserInfo';
import { UserLoader } from './UserLoader';
import { ResourceLoader } from './loaders/ResourceLoader';
import { useState } from 'react';
import { ControlledModal } from './ControlledModal';




function App() {
  const [showModal, setShouldShow] = useState(false);

  function closeModal() {
    this.setShouldShow(false);
  }

  return (
    <>
   
    <button onClick={() => setShouldShow(true)}>
      Show Modal
    </button>
    <ControlledModal shouldShow={showModal} onRequestClose={() => setShouldShow(false)}>
      <p>Hell Modal</p>
    </ControlledModal>

    </>
  );
}

export default App;
