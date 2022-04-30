document.addEventListener("DOMContentLoaded" , (e)=>{
    //elements needed
    const todoInput= document.querySelector("#todo-title")
    const todoBtn = document.querySelector("#add-todo")
    const todoList = document.querySelector("#todo-list")
    const alertMessage= document.querySelector("#alert-message")
    const errorMessage = document.querySelector("#error-message")
    //functions and data needed
    const todos = []
    const addTodoItem = (value)=>{
        if (value==="") {
          const invalid = errorMessage.style.display='block'     
        } 
        else {
            todos.push(value)
            todoInput.value = ""
            displayTodos()
            const message= alertMessage.style.display='block'   
        }
    }
    const displayTodos = ()=> {
        todoList.innerHTML= `<li class="collection-header"><h4>Todos ${todos.length> 0 ? "(" + todos.length + " )" : ""}</h4></li>`
        for (let i = 0; i < todos.length; i++) {
            todoList.innerHTML += `
                <li class="collection-item">
                    <div>${i+1}. ${todos[i]}
                      <a href="#!" class="secondary-content">
                         <i class="material-icons red-text" id="todo-item-${i}">delete</i>
                      </a>
                   </div>
                </li>
               `

        }

    }
    const deleteTodoItem = (index)=> {
        todos.splice(index , 1)
            displayTodos()
    }

    //How will the app flow
    todoBtn.addEventListener("click" , ()=> {
        const value = todoInput.value
        addTodoItem(value)
    })

    todoInput.addEventListener("input" , (e)=>{
        
    })

    todoInput.addEventListener("keypress" , (e)=>{
        if (e.key=== "Enter") {
            const value = todoInput.value
            addTodoItem(value)
        }
    })

    todoList.addEventListener("click" , (e)=>{
        if (e.target.id.includes("todo-item") ) {
            const splitId = e.target.id.split("-")
            const indexToRemove = splitId[2]
            deleteTodoItem(indexToRemove)
        }
    })

    

    
})
