import React, { useEffect, useState } from 'react'
import { Box, Button, TextField, Typography } from "@mui/material";
import { onAddTask,onUpdateTask,onClearData } from "../actions/action";
import { useDispatch } from "react-redux";

const Task = ({targetItem,setTargetItem}) => {
  
  const [query,setQuery] = useState('')
  const dispatch = useDispatch();

  useEffect(()=>{
    setQuery(targetItem.title)
  },[targetItem])


  const onClearDataButtom = () =>{
    dispatch(onClearData(query))
    setQuery('')
  }


  const onAddButtonClick = () =>{
  if (query) {
    OnConditionMatch()
  } else {
    return;
  } 
  }


  const OnConditionMatch = () =>{
    if (targetItem) {
      dispatch(onUpdateTask(targetItem.id , query))
      setTargetItem('')
    setQuery('')
    } else {
    dispatch(onAddTask(query))
    setQuery('')
    }
  }


  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "30vh",
      fontSize: "22px",
      margin: "5px",
    }}
  >
    <Typography
      sx={{
        color: "#1976d2",
        margin:'10px',
        fontWeight:'bolder'
      }}
    >
      REDUX TODOS
    </Typography>
    <TextField
    onChange={(e)=>{
      setQuery(e.target.value)
    }}
    sx={{
      border:'1px solid #1976d2',
      color:'#1976d2',
      borderRadius:'5px',
    }}
    value={query}
      type="text"
      placeholder="Enter"
    />
    <Button
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          margin: "5px",
        }}
        variant="contained"
        onClick={onAddButtonClick}
      >
        {targetItem ? '▲' : '✢'}
      </Button>
      <Button
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          margin: "5px",
        }}
        variant="contained"
        onClick={onClearDataButtom}
      >
        {'Clear'}
      </Button>
  </Box>
  )
}

export default Task