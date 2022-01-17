import React from 'react';
import RemoteApp1 from './components/RemoteApp1';
import RemoteApp2 from './components/RemoteApp2';

const App = () => {
  return (
    <div>
      <h1>App shell - serves as container for remote applications</h1>
      <RemoteApp1/>
      <RemoteApp2/>
    </div>
  )
};

export default App;
