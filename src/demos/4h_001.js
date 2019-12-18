import React from 'react';
import getQuery from '../utils';
import { Link } from 'react-router-dom';

class Demo4h_001 extends React.Component{
    
    componentDidMount() {
        window.addEventListener("hashchange", this.chghash, false);
        window.addEventListener("load", this.chghash, false);
        // test link
        // http://localhost:1404/4h_001#<img src=/ onerror=alert(1)>
    }

    chghash() {
        var hash = decodeURIComponent(window.location.hash.slice(1));
        var color = document.getElementById('color');
        //color.innerHTML = hash;
        // 対策版
        color.textContent = decodeURIComponent(window.location.hash.slice(1));
    }

    render() {
        return (
            <div>
                <a href="#赤">赤</a>
                <a href="#緑">緑</a>
                <a href="#青">青</a>
                <p id="color"></p>
            </div>
        );
    }
}
export default Demo4h_001