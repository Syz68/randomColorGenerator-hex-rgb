import { useState } from "react";
function App() {

  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('grey');

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  return (
    <div
      className="w-screen h-screen p-4"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-3xl font-bold mt-3 underline text-center text-gray-300">Random Color Generator</h1>

      <div className="flex justify-center items-center space-x-4 mt-4 "> 
        <button className="bg-sky-400 p-3 rounded-md font-semibold hover:bg-sky-500 shadow-md" onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
        <button className="bg-sky-400 p-3 rounded-md font-semibold hover:bg-sky-500 shadow-md" onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
        <button className="bg-sky-400 p-3 rounded-md font-semibold hover:bg-sky-500 shadow-md" onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
      </div>

      <div className="flex flex-col justify-center items-center mt-8 text-3xl font-bold text-gray-300">
        <h2>{typeOfColor === 'rgb' ? "RGB Color" : "Hex Color"}</h2>
        <h3>{color}</h3>
      </div>
    </div>
  )
}

export default App
