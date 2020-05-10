import React, { Component } from "react";
import Germany from "./Germany";
import Usa from './usa.js'
import './main.css'

export default class App extends Component {

     state = {germany: true, usa: false}


    render() {
        return (
            <div>
                <div id="navigation">
                <button onClick={() => {this.setState({germany: true,usa: false})}}>Germany</button>
                <button onClick={() => {this.setState({germany: false,usa: true})}}>United States</button>
                <a href="https://newsapi.org/">Powered by: NewsAPI.org</a>
                </div>
            { this.state.germany ? <Germany/>: <Usa/>}
            </div>
        );
    }
}
