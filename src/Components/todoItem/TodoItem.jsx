import { useRef, useState } from 'react';
import './todoitem.scss'
import { MdDeleteOutline as Delete, MdOutlineEdit } from "react-icons/md";
import { useDispatch } from 'react-redux';

function CreateItem({ name, note, teg }) {

  const despatch = useDispatch()

  const refName = useRef(null)
  const refNote = useRef(null)
  const refTag = useRef(null)

  function handlerSort(elem) {

    despatch({type: "SEARCH", payload: elem});
  }

  function handlerDel() {

    const text = refName.current.textContent;

    despatch({type: "REMOVE", payload: text});
  }

  function handlerEdit() {

    const text = refName.current.textContent;

    despatch({type: "EDIT", payload: text});
  }

    return (
      <div className="todoItem">
        <div className='name' ref={refName}>{name}</div>
        <div className='note' ref={refNote}>{note}</div>
        <div className='tags' ref={refTag}>
          {teg.map((elem, index) => (
            <p key={index} className='tag' onClick={() => handlerSort(elem)}>{elem}</p>
          ))}
       </div>
       <Delete onClick={handlerDel}/>
       <MdOutlineEdit className='pen' onClick={handlerEdit}/>
      </div>
    );
  }

export default CreateItem