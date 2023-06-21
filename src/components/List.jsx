import React from "react";
import { Box, Typography, ListItem, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { onDeleteTask } from "../actions/action";

const List = ({setTargetItem}) => {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.onCRUD);
  console.log('myState',myState)

  // on delet button 
  const onDeleteButtonClick = (e) => {
    const targetId = e.target.id;
    dispatch(onDeleteTask(targetId));
  };
  // on edit button 
  const onEditButtonClick = (e) => {
    const targetId = e.target.id;
    const editItem = myState.find((item) => parseInt(item.id) === parseInt(targetId));
    setTargetItem(editItem)
  };
  return (
    <Box>
      <Typography
        sx={{
          color: "#1976d2",
          margin: "10px",
          fontWeight: "bolder",
          display: "flex",
          justifyContent: "center",
        }}
      >
        TODOS LIST
      </Typography>
      <Box
        className="liststyling"
        sx={{
          height: "50vh",
          fontSize: "22px",
          margin: "20px",
          border: "2px solid #1976d2",
          color: "#1976d2",
          borderRadius: "5px",
          overflow: "scroll",
          overflowX: "hidden",
        }}
      >
        {myState?.map((item) => {
          return (
            <ListItem id={item?.id}>
              {item?.title}
              <Box sx={{ display: "flex", gap: "5px" }}>
                <Button variant="contained"
                id={item?.id}
                onClick={(e) => {
                  onEditButtonClick(e);
                }}
                >Edit</Button>
                <Button
                  variant="contained"
                  id={item?.id}
                  onClick={(e) => {
                    onDeleteButtonClick(e);
                  }}
                >Delete
                </Button>
              </Box>
            </ListItem>
          );
        })}
      </Box>
    </Box>
  );
};

export default List;
