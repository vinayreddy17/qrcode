// QRCode2.js

import React, { useState, useEffect } from 'react';
import './QRcode.css'

function QRCode2() {

  const [data, setData] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [bcolor, setBColor] = useState('');
  const [format, setFormat] = useState('');
  const [qrCode, setQRCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${size}x${size}&color=${color}&bgcolor=${bcolor}&format=${format}`;
    setQRCode(qrCodeURL);
  };

  
  useEffect(() => {
   
    handleSubmit({ preventDefault: () => {} });
  }, []);

  return (
    <div className="QRCode2Container"> 
      <h2 className="QRCode2Title">QR Code Generator</h2>
      <form onSubmit={handleSubmit} className="QRCode2Form"> 
        <div className="QRCode2InputWrapper"> 
          <label htmlFor="input1">Data:</label>
          <input
            type="text"
            id="input1"
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="Enter data"
          />
        </div>
        <div className="QRCode2InputWrapper"> 
          <label htmlFor="input1">size :</label>
          <input
            type="number"
            id="input2"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="Enter data"
          />
        </div>
        <div className="QRCode2InputWrapper"> 
          <label htmlFor="input1">Color :</label>
          <input
            type="color"
            id="input3"
            value={color}
            onChange={(e) => setColor(e.target.value.substring(1))}
            placeholder=""
          />
        </div>
        <div className="QRCode2InputWrapper"> 
          <label htmlFor="input1">Background-Color:</label>
          <input
            type="color"
            id="input4"
            value={bcolor}
            onChange={(e) => setBColor(e.target.value.substring(1))}
            placeholder="Enter data"
          />
        </div>
        <div className="QRCode2InputWrapper"> 
          <label>Format:</label>
          <select value={format} onChange={(e) => setFormat(e.target.value)}>
            <option value="png">png</option>
            <option value="gif">gif</option>
            <option value="jpeg">jpeg</option>
            <option value="jpg">jpg</option>
            <option value="svg">svg</option>
            <option value="eps">eps</option>
          </select>
        </div>
        
        <button type="submit" className="QRCode2SubmitButton">Generate QR Code</button>
      </form>
      {qrCode && (
        <div className="QRCode2Result"> 
          <h3 className="QRCode2ResultTitle">Generated QR Code:</h3>
          <img src={qrCode} alt="QR Code" className="QRCode2Image" /> 
        </div>
      )}
    </div>
        
  );
}

export default QRCode2;
