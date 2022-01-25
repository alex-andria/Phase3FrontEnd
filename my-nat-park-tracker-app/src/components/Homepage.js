import React from 'react';
import { Route } from 'react-router-dom';
import ListPage from './ListsPage';
//import ParkDetails from './components/parkdetails'

function HomePage(){

    return (
        <div className="HomePage">
            
            <Route exact path='/listpage'>
                <ListPage/>
            </Route>
            <Route exact path='/'>
                <h2 id='heading'>Featured National Park</h2>
            </Route>
        </div>
    );
}

export default HomePage