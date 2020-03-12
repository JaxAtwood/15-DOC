import {useState} from 'react';

export const useLocalStorage = () => {

   const [storedData, setStoredData] = useState([
       localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : '' ]);

       const storeList = e => {
           e.preventDefault();
           localStorage.setItem('movies', JSON.stringify(storedData))
       }
    
    return [storedData, setStoredData, storeList]
    }