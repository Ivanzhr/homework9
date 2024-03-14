import { useRef} from 'react';
import './todoitem.scss'
import { MdDeleteOutline as Delete, MdOutlineEdit } from "react-icons/md";
import { useContext } from 'react';
import { contextValue } from '../../Context';


function CreateItem({id, name, note, teg, isselect }) {


  const refName = useRef(null)
  const refNote = useRef(null)
  const refTag = useRef(null)

  const {handlerFilterByTeg, handlerAddNoteForEdit, handlerdel} = useContext(contextValue);


    return (
      <div className="todoItem" style = {{display: !isselect ? 'flex': 'none'}} >
        <div className='name' ref={refName}>{name}</div>
        <div className='note' ref={refNote}>{note}</div>
        <div className='tags' ref={refTag}>
          {teg.map((elem, index) => (
            <p key={index} className='tag' onClick ={() => handlerFilterByTeg(elem)}>{elem}</p>
          ))}
       </div>
       <Delete onClick={() => handlerdel(id)}/>
       <MdOutlineEdit className='pen' onClick = {()=> handlerAddNoteForEdit(id)}/>
      </div>
    );
  }

export default CreateItem