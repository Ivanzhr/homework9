 import './header.scss';
 import { useContext } from 'react';
 import { contextValue } from '../../Context';


 function CreateHed() {
    const {handlerFilterByTagClear} = useContext(contextValue);

    return (
        <>
            <h1>Список нотаток</h1>
            <div className='res' onClick = {() => handlerFilterByTagClear()}>Відмінити фільтр</div>
        </>
    )
 } 

 export default CreateHed