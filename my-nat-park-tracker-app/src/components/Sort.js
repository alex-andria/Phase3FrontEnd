import React from 'react';
import '../ahmet.css'

function Sort({setSort, setResults, sortResults}) {
//alphabetical
//free
//cost
    return (
        <div className = "Sort">
        {/* <label for="selectSort">Sort By: </label>     */}
        <select id = "sort" onChange={(e) => {
            setSort(e.target.value)}}>
        <option value="ascending" onClick={(e) => {setResults(sortResults)}}>A-Z</option>  
        <option value="descending" onClick={(e) => {setResults(sortResults)}}>Z-A</option>
        <option value="low-to-high" onClick={(e) => {setResults(sortResults)}}>Cost</option>
        </select>
        </div>
    )
}

export default Sort;