import React, {useState} from 'react';


const Home = props => {

    const [word, setWord] = useState('')
    const [getWord, setGetWord] = useState(JSON.parse(window.localStorage.getItem('word')));


    const saveWord = word => {
        window.localStorage.setItem('word', JSON.stringify(word));
    }
    const handleChange = e => {
        setWord(e.target.value)
    }
return (
    <div>
        <h1>Hello world from home component</h1>
        <form>
            <input 
            type="text"
            placeholder='add some text here'
            value={word}
            onChange={handleChange}
            />
        </form>
        <button onClick={()=> saveWord(word)}>Add to Local Storage</button>
        <button>Clear Local Storage </button>
        <button>Clear Input</button>
        <p>{getWord}</p>
    </div>
)
}

export default Home;