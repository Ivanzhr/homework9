import './app.scss'
import Heder from './Components/header/Header'
import Form from './Components/form/Form'
import TodoList from './Components/todoList/TodoList'


function App() {

  
  return (
    
      <div className="todo">
        
          <Form></Form>
          <Heder></Heder>
          <TodoList></TodoList>

      
     </div>
  );
}

export default App;

