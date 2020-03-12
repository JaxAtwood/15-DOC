import React, {useState} from 'react';
import Movie from './Movie';
import {useLocalStorage} from './useLocalStorage';


const Home = () => {

    const [storedData, setStoredData, storeList] = useLocalStorage();
    const [input, setInput] = useState('')

    const handleChange = e => {
        e.preventDefault();
        setInput(e.target.value);
    }

    const submitHandler = e =>{
        e.preventDefault();
        setStoredData([...storedData, input]);
        setInput('');
    }

return (
    <div>
        <h1>Add a movie to watch list</h1>
        <form>
            <input 
            type="text"
            placeholder='add movie here'
            value={input}
            onChange={handleChange}
            />
        </form>
        <button onClick={submitHandler}>Add movie to watch list</button>
        <h1>Watch List</h1>
        <div>{storedData.map(movie => (
            <Movie movie={movie} key={movie}/> 
        ))}</div>
        <button onClick={storeList}>Add to Local Storage</button>
        <button>Clear Local Storage </button>
        <button>Removed Watched Movie</button>
    </div>
)
}

export default Home;