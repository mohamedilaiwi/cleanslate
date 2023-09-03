import {SideDashboard} from "../Dashboard/Dashboard";
import { useState } from 'react';
import searchImg from '../../../images/search.svg'
import './SubContentPage.css';


const SubContentPage = ({media}) => {
    const [userInput, setUserInput] = useState('');

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    }
    
    const handleSubmit = () => {
        const searchBar = document.querySelector('.SearchBar-Container');
        searchBar.classList.add("hide");
        console.log('User input:', userInput);
    }


    return (
        <div className='SubContentPage-Wrapper'>
            <SideDashboard />
            <div className='SubContentPage-Text'>
                <h2>{media.name}</h2>
                <SearchBar 
                    value={userInput}
                    onChange={handleInputChange}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}

const SearchBar = ({value, onChange, onSubmit}) => {
    return (
        <div className='SearchBar-Container'>
            <textarea 
                rows="2" 
                cols="50" 
                placeholder="Enter your username"
                value={value}
                onChange={onChange}
            />
            <button onClick={onSubmit}><img src={searchImg} alt='' id='search-image'/></button>
        </div>
    )
}



export {SubContentPage};