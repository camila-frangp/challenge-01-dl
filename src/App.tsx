import React from 'react';
import Content01 from './sections/content-01/Content01';
import Content02 from './sections/content-02/Content02';
import Content03 from './sections/content-03/Content03';
import Content04 from './sections/content-04/Content04';


import './App.scss';

function App() {
  return (
    <div className="challenge">
      <h1 className='challenge_title'>Desafío 01</h1>
      {/* Exercise 01 */}
      <Content01 />
      {/* Exercise 02 */}
      <Content02 />
      {/* Exercise 03 */}
      <Content03 />
      {/* Exercise 04 */}
      <Content04 />

    </div>
  );
}

export default App;
