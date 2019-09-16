export const STORAGE_KEY = 'todos-vuejs'
if(navigator.userAgent.indexOf("PlantomJS")>-1){
    window.localStorage.clear()
}

export const mutations={
    addTodo(state,todo){
        state.todos.push(todo)
    },
    removeTodo(state,todo){
        state.todos.splice(state.todos.indexOf(todo),1);
    },
    editTodo(state,{todo,text=todo.text,done=todo.done}){
        todo.text=text
        todo.done=done
    }
}