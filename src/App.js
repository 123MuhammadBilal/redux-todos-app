import React , {useState} from 'react';
import './App.css';
import '../src/css/style.css';
import Task from './components/Task'
import List from './components/List'
import { Box } from "@mui/material";


function App() {
  const [targetItem , setTargetItem] = useState('')
  return (
    <Box sx={{maxWidth:'1000px'}}>
      <Task targetItem={targetItem}  setTargetItem={setTargetItem}/>
      <List setTargetItem={setTargetItem} />
    </Box>
  );
}

export default App;
