import {createContext, useReducer, useState} from 'react';
import arr from './demo';
export const contextValue = createContext();

export default function Context({children}) {
   
    function reducer(todos, action) {
        switch(action.type) {
                    case "ADD": return [...todos, action.payload];
                    case "REMOVE": return todos.filter((elem) => elem.id !== action.payload);
                    case "EDIT": return  todos.map((elem) => {
                        if (elem.id === action.payload.id) {
                            return {...action.payload}
                        } else {
                            return {...elem}
                        }
                    });
                    case "SEARCH": return todos.map((elem) => {
                        if(elem.teg.includes(action.payload)) {
                            return {...elem, isselect: false};
                        } else {
                            return {...elem, isselect: true}
                        }
                    });
                    case "CLEARSEARCH": return todos.map((elem)=>{
                        return {...elem, isselect: false}
                    });
                    default: return todos;
                }
    }

    
    const [todos, dispatch] = useReducer(reducer, arr);
    const [form, setForm] = useState(null);

    const handlerFilterByTeg = (teg) => {
        console.log(teg);
        dispatch({type:"SEARCH", payload:teg})
    }

    const handlerFilterByTagClear = () => {
        dispatch({type: "CLEARSEARCH" })
    }

    const handlerAddNoteForEdit = (id) => {
        setForm(todos.find(elem => elem.id === id))
    }
    
    const handlerEditNote = (data) => {
        console.log(data);
        dispatch({type:"EDIT", payload:data})
        setForm(null);
    }

    const handlerAdd = (data) => {
        dispatch({ type: "ADD", payload: data});
        console.log(data)
    }

    const handlerdel = (e) => {
        dispatch({ type: "REMOVE", payload: e});
        console.log(e)
    }


    const value = {
        todos, 
        handlerFilterByTeg, 
        handlerFilterByTagClear,
        handlerAddNoteForEdit,
        form,
        handlerEditNote,
        handlerAdd,
        handlerdel
    };

    return <contextValue.Provider value={value}>{children}</contextValue.Provider>
}




