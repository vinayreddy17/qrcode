// App.js

import React from 'react';
import './App.css';
import QRCode2 from './QRCode';

function App() {
  return (
    <div className="App">
      <h1>QR Code Generator App</h1>
      <QRCode2 /> {/* Use the QRCode2 component */}
    </div>
  );
}

export default App;
