import './form.scss'
import { useDispatch } from 'react-redux';
import { useRef, useEffect } from 'react';

export default function CreateForm({editItem}) {

    const despatch = useDispatch()

    const inputN = useRef(null)
    const inputD = useRef(null)
    const inputT = useRef(null)

    useEffect(() => {
        if (editItem) {
            inputN.current.value = editItem.name;
            inputD.current.value = editItem.note;
            inputT.current.value = editItem.teg.join(" ");
        }
    }, [editItem]);

    function handlerClick(event) {
        event.preventDefault();
        if(inputN.current.value && inputD.current.value !== '') {
            const name = inputN.current.value ;
            const note = inputD.current.value ;
            const teg = inputT.current.value.split(" ");
        
        despatch({type: "ADD", payload: {name, note, teg}});

            inputN.current.value = '';
            inputD.current.value = '';
            inputT.current.value = '';
        }
    }

    return (
        <div className="form">
            <form action="">
                <input ref={inputN} className='name' type="text" placeholder='Назва нотатки'/>
                <input ref={inputD} className='note' type="text" placeholder='Опис нотатки'/>
                <input  ref={inputT}className='teg' type="text" placeholder='Теги нотатки'/>
                <button onClick={handlerClick}>Add</button>
            </form>
        </div>
    )
}
