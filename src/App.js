import React, { useRef } from 'react';
import Toolbar from './components/Toolbar';
import WorkSpace from './components/WorkSpace';
import './App.css';

function App() {
  const workSpaceRef = useRef(null)
  const addNewRect = () => {
    console.log(workSpaceRef)
    workSpaceRef.current.onAddNewRect()
  }

  return (
    <>
      <Toolbar onAddNewRect={addNewRect} />
      <WorkSpace ref={workSpaceRef} />
    </>

  );
}

export default App;
