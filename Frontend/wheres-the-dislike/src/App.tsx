import React from 'react';
import MainPage from "./contentpages/MainPage";
import Header from "./components/Header";

function App() {
    return (
        <div className="App" >
            <Header/>
            <h1>Hello World</h1>
            <MainPage/>
        </div>
    );
}

export default App;
