import React from 'react';
import ReactDOM from 'react-dom';
import { HelloWorld } from '@views-library'

// This is for building a common views library. By starting the server, the UI library can be implemented and tested.
function MainApp() {
  return (
    <div><HelloWorld/></div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
