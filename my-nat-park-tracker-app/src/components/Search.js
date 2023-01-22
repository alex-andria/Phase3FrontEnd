import React, {useCallback, useState} from 'react';
import {useHistory, Link} from 'react-router-dom';

function Search ({setResults, allParksData}){

    const [searchTerm, setSearchTerm] = useState("");

    const filteredParks = allParksData.filter(park => {
        return ((park.park_name != null ? park.park_name.toLowerCase().includes(searchTerm.toLowerCase()) : null)
       || (park.states != null ? park.states.toLowerCase().includes(searchTerm.toLowerCase()) : null)
        )})

    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/browsepage'), [history]
    );
    
    return (
        <div className='Search'>
            <input
                id='searchBar'
                className='searchBar'
                type='text'
                placeholder='Search National Park Name or State...'
                value={searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value)}}
                onKeyPress={(e) => {if(e.key === 'Enter') {return (
                    handleOnClick(),
                    setResults(filteredParks),
                    setSearchTerm("")
                    )}}}
            />
            <Link id='browsepage' to='/browsepage'><button id='browsePage'></button></Link>
        </div>

    );
}

export default Search;