const onAddTask = (query) => {
    return{
        type: 'onAddTask',
        query: {query}
    }
}
const onDeleteTask = (targetId) => {
    return{
        type: 'onDeleteTask',
        deleteId: {targetId}
    }
}
const onUpdateTask = (id , query) => {
    console.log('targetId,query',id,query)
    return{
        type: 'onUpdateTask',
        updateId: {id},
        updateQuery: {query}
    }
}

const onApiFetch = (data) => {
    console.log('objData',data)
    return{
        type: 'onApiFetch',
        objData: {data},
    }
}

const onClearData = () => {
    return{
        type: 'onClearData',

    }

}

export { onAddTask , onDeleteTask , onUpdateTask , onClearData , onApiFetch }