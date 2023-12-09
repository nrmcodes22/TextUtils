// Navbar.js

import React from 'react';
 // Assuming you're using React Router

 export default function Navbar(props) {
  return (
    <nav className={`bg-${props.mode}  p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <h2 to="/" className={`text-${props.mode} text-xl font-bold`}>{props.title}</h2>
        <div className="flex space-x-4">
          <h2 className={`text-${props.mode}`}>Home</h2>
          <h2 className={`text-${props.mode}`}>About</h2>
        </div>
        <button className="bg-blue-500  px-4 py-2 rounded-md w-64" onClick={props.toggleMode}>Change Mode</button>
      </div>
    </nav>
  );
};


