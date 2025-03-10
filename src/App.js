import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="다정" color="blue" isSpecial/>
      {/* props 값을 설정하게 될 때 값 설정을 생략한다면 ={true}와 같다. */}
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;