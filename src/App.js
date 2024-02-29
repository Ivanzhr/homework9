import './app.scss'
import Heder from './Components/header/Header'
import Form from './Components/form/Form'
import TodoList from './Components/todoList/TodoList'
import { createStore } from 'redux';
import { Provider } from 'react-redux';


function App() {

  const reducer = (todos = [], action) => {
    console.log(action.payload)
    switch(action.type) {
        case "ADD": return [...todos, {name: action.payload.name, note: action.payload.note, teg: action.payload.teg}];
        case "REMOVE": return todos.filter((elem) => elem.name !== action.payload);
        case "EDIT": return  todos.filter((elem) => elem.name == action.payload);
        case "SEARCH": return todos.filter(elem => elem.teg.includes(action.payload));
        default: return todos;
    }
  }

  const store = createStore(reducer);

  return (
    
      <div className="todo">
        <Provider store={store}>
          <Form></Form>
          <Heder></Heder>
          <TodoList></TodoList>

        </Provider>
     </div>
  );
}

export default App;

