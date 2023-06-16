const todoApi = (query) =>{
    return fetch(
        `https://jsonplaceholder.typicode.com/todos/${query}`
      );
    }
export {todoApi}