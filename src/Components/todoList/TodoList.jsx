import './todoList.scss'
import Item from '../todoItem/TodoItem'
import { useContext } from 'react';
import { contextValue } from '../../Context';

function CreateTodoList() {
    const {todos} = useContext(contextValue);
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