import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* 
  Should export a mount function that can be called to boot the app

  When running in development, the app will mounted on a container in the local public/index.html

  On production, the mount function can be called on a remote container element
 */

const mount = (containerEl) => {
  ReactDOM.render(<App/>, containerEl);
}

if (process.env.NODE_ENV === 'development') { 
    const targetEl = document.querySelector('#_remote-dev-root')
    if (targetEl) mount(targetEl);
}

export default mount;
