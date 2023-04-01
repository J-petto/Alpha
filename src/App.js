//react 전체 패키지를 불러옴
import React from 'react';
// styled-components에 있는 createGlobalStyle라는 패키지만 불러와 적용
//상단 { ~ }의 유무는 해당 패키지만 가져옴 VS 전체를 가져옴의 차이.
import { createGlobalStyle } from 'styled-components';

import TodoTemplate from './components/TodoTemplate'; 
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

//GlobalStyle의 함수를 만들어 사용
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
  <>
    <GlobalStyle />
    <TodoTemplate>
      <TodoHead />
      <TodoList />
      <TodoCreate />
    </TodoTemplate>
  </>
  );
}

//exprot defalut app > index.js에서 가져다 씀
export default App;