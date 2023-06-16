import axios from "axios";

const todoApi = () =>{
    axios({
        url: `https://jsonplaceholder.typicode.com/todos/1`,
      })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    console.log("todoApi", todoApi)
export default todoApi