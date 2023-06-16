const currentTask = [];
const onCRUD = (state = currentTask, action) => {
  const obj = {
    id: Math.random() * 99,
    title: action.query?.query,
    isComplete: false,
  };

  switch (action.type) {

    case "onAddTask":
      return [...state, obj];

    case "onDeleteTask":
      const newTodos = state.filter(
        (item) => parseInt(item.id) !== parseInt(action.deleteId?.targetId)
      );
      return newTodos;

    case "onUpdateTask":
      const updateItem = state.find(
        (item) => parseInt(item.id) === parseInt(action.updateId?.id)
      );
      updateItem.title = action.updateQuery?.query;
      return state;


      case "onClearData": 
      return []
        
        
    default:
      return state;
  }
}
export default onCRUD;
