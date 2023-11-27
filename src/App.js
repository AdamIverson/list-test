import './App.css';
import List from './components/List';
import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

function App() {
  // TODO: IN THIS ORDER
  // 1. list of lists
  // 2. connect autocomplete
  // 3. in order to connect autocomplete, must implement appropriate data structure 
  const [name, setName] = useState("barry");
  const [colors, setColors] = useState(["blue", "green", "purps"]);
  const [dangit, setDangit] = useState([])
  const [title, setTitle] = useState('')
  const [primary, setPrimary] = useState('');
  const [secondary, setSecondary] = useState('');
  const [tertiary, setTertiary] = useState('');
  const [dangitObject, setDangitObject] = useState({
    title: "state",
    colors: {
      primary: "state",
      secondary: "state",
      tertiary: "state"
    }
  })

  const colorHistory = [];

  const saveColors = () => {
    console.log("input states", title, primary, secondary, tertiary)
    // setDangitObject({ title: title, colors: { primary: primary, secondary: secondary, tertiary: tertiary } })
    colorHistory.push(...colorHistory, { title: title, colors: { primary: primary, secondary: secondary, tertiary: tertiary } })
    setTitle("");
    setPrimary("");
    setSecondary("");
    setTertiary("");
  }

  const printList = () => {
    console.log("colorHistory", colorHistory)
    colorHistory?.map((row, i) => console.log("printList row", row, i))
  }

  return (
    <div className="App" style={{ 'display': "flex" }}>
      <div style={{ 'flex': 1 }}>
        <TextField value={title} label="title" onChange={(e) => { setTitle(e.target.value) }} />
        <TextField value={primary} label="primary" onChange={(e) => { setPrimary(e.target.value) }} />
        <TextField value={secondary} label="secondary" onChange={(e) => { setSecondary(e.target.value) }} />
        <TextField value={tertiary} label="tertiary" onChange={(e) => { setTertiary(e.target.value) }} />
      </div>
      <div style={{ 'flex': 1 }}>
        <button onClick={saveColors}>save</button>
        <button onClick={printList}>print</button>
        <div style={{ 'flex': 1 }}>
          {colorHistory.map((row, i) => <List key={i} colors={row} />)}
        </div>
      </div>
      <div>
        <Autocomplete selectOnFocus clearOnBlur sx={{ width: 300 }} options={dangit} renderInput={(params) => <TextField {...params} label="colorsets" />} />
      </div>
    </div>
  );
}

export default App;
