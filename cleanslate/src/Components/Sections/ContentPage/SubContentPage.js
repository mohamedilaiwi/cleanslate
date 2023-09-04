import {SideDashboard} from "../Dashboard/Dashboard";
import { useState } from 'react';
import searchImg from '../../../images/search.svg'
import './SubContentPage.css';
import { getEndPoint } from "../../../utils/utils";
import exampleTestData from "../../../utils/exampleTestData";

const SubContentPage = ({media}) => {
    const [userInput, setUserInput] = useState('');
    const [displayHistory, setDisplayHistory] = useState(false);

    const sendSearchRequest = async (message) => {
        const endpointURL = getEndPoint(media.name);
        
        try {
            setDisplayHistory(true);
            console.log(document.querySelectorAll('.PostBox'));
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    }
    
    const handleSubmit = () => {
        const searchBar = document.querySelector('.SearchBar-Container');
        searchBar.classList.add("hide");
        sendSearchRequest(userInput);
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
                {displayHistory && <DisplayPostHistory name={userInput} postHistory={exampleTestData}/>}
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

const DisplayPostHistory = ({name, postHistory}) => {
    return (
        <div className='PostHistory-Wrapper'>
            <div className="PostHistory-Header">
                <p>Subreddit</p>
                <p>Date Posted</p>
                <p>Content</p>
            </div>
            {postHistory.map((item, index) => {
                return <div key={item.id} 
                            className={`PostBox fade-in`}
                            style={{ animationDelay: `${index * 0.3}s` }}
                        >
                    <div>
                        <div className="circle blink_me"></div>
                        <p id="post-subreddit">{item.subreddit}</p>
                    </div>
                    <p id="post-date">{item.date}</p>
                    <p id="post-description">{name}: {item.description}</p>
                </div>
            })}
        </div>
    )
}



export {SubContentPage};