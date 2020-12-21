
import React from 'react';
import Home from './Home';
import Grade from './Grade';

function App() {
  return (
    <div>
      <Home name = "Aadhi" id = "180" branch = "CSE" />
      <Home name = "vihaan" id = "170" branch = "CSE" />
      <Home name = "sravan" id = "160" branch = "CSE" />
      <Grade CGPA = "9.3"/>
      <Grade CGPA = "8.3"  />
      <Grade CGPA = "9.5"  />
    </div>
  )
}

export default App

