import './form.scss'

import { useRef, useContext} from 'react';
import { contextValue } from '../../Context';

export default function CreateForm() {

   const {form, handlerEditNote, handlerAdd, todos} = useContext(contextValue);

    let inputN = useRef(null)
    let inputD = useRef(null)
    let inputT = useRef(null)

    const generateObj = (e) => {
        e.preventDefault();

        const data = {
            id: form.id,
            name: inputN.current.value,
            note: inputD.current.value,
            teg: inputT.current.value.split(','),
            issselect: form.isselect,
        }

        handlerEditNote(data);

        inputN.current.value = null;
        inputD.current.value = null;
        inputT.current.value = null;
    }

    const addNote = (e) => {
        e.preventDefault();
        if(inputN.current.value !== '' & inputD.current.value !== ''){
        const data = {
            id: todos.length + 1,
            name: inputN.current.value,
            note: inputD.current.value,
            teg: inputT.current.value.split(','),
            issselect: false,
        }
        handlerAdd(data)

        inputN.current.value = null;
        inputD.current.value = null;
        inputT.current.value = null;

    }}

    if (form) {
        inputN.current.value = form.name || '';
        inputD.current.value = form.note || '';
        inputT.current.value = form.teg || '';
    }

       return( 
       <div className="form">
            <form action="">
                <input 
                    ref={inputN} 
                    className='name' 
                    type="text" 
                    placeholder='Назва нотатки' 
                    
                    />
                <input 
                    ref={inputD} 
                    className='note' 
                    type="text" 
                    placeholder='Опис нотатки'
                   
                    />
                <input 
                    ref={inputT} 
                    className='teg' 
                    type="text" 
                    placeholder='Теги нотатки'
                    
                    />
            
                {form ?
                    <button onClick={(e) => generateObj(e)}>Edit</button> :
                    <button onClick={(e) => addNote(e)}>Add</button>
                }
                
            </form>
        </div>
        )
    
}
