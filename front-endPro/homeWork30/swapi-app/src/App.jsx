import React from "react";
import Header from "./components/Header/Header";
import DataDisplay from "./components/DataDisplay/DataDisplay";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
    return (
        <div className="app">
            <Header/>
            <DataDisplay/>
            <Footer/>
        </div>
    );
};

export default App;