import React, {useEffect, useState} from "react";
import Header from "./Header";
import Homepage from "./Homepage";


function App (){
    
    const [allParksData, setAllParksData] = useState([])
    const [results, setResults] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:9292/parks')
        .then(r => r.json())
        .then(data => {
            setAllParksData(data) 
            setResults(data) 
        })}, [])
    
    return (
        <div className="App">
            <Header setResults = {setResults} allParksData = {allParksData}/>
            <Homepage results = {results} setResults ={setResults}/>
        </div>
    );
}


export default App;