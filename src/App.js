import './App.css';
import React from 'react';
import TodoList from './components/TodoList';
import { Box, Typography } from '@material-ui/core';
import img from './pen.png';
import img2 from './pen2.png';


function App() {
  
  return (
  <div>
    <img src={img} width='100%'/>

    <div className='todo-app'>
      <Typography component="div">
        <Box fontSize='30px' color="white" fontFamily="cursive" letterSpacing={10} m={5}>
            TASK List:
        </Box>
      </Typography>
      
      <TodoList />
    </div>

    <img src={img2} width='100%'/>

  </div>
  );
}

export default App;

