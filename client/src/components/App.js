import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate';
import StreamDelete from './Streams/StreamDelete';
import StreamEdit from './Streams/StreamEdit';
import StreamList from './Streams/StreamList';
import StreamShow from './Streams/StreamShow';
import Header from './Header';


const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList}>List</Route>
                    <Route path="/streams/new" component={StreamCreate}>Creat</Route>
                    <Route path="/streams/delete" component={StreamDelete}>Delete</Route>
                    <Route path="/streams/edit" component={StreamEdit}>Edit</Route>
                    <Route path="/streams/show" component={StreamShow}>Show</Route>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;