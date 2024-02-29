import './todoList.scss'
import Item from '../todoItem/TodoItem'
import { useSelector } from 'react-redux'

function CreateTodoList() {

    const todos = useSelector(todos => todos);
    console.log(todos)
    return (
        <div className="todoItems">
            {
                todos.map((elem, index) => 
                <Item key={index} {...elem}/>)
            }
        </div>
    )
}

export default CreateTodoList