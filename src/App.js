import React, { useState } from 'react';
import { Navbar, Home} from "./components";
import Rmenu from "./components/Rmenu";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (<>
    <Navbar toggle={toggle} />
    <Rmenu isOpen={isOpen} toggle={toggle} />
    <Home />
  </>);
}

export default App;
