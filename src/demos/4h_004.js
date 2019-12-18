import React from 'react';
import getQuery from '../utils';
import { Link } from 'react-router-dom';

class Demo4h_004 extends React.Component{
    
    componentDidMount() {
        window.addEventListener("hashchange", this.cxhash, false);
        window.addEventListener("load", this.cxhash, false);

        // test link
        // http://localhost:1404/4h_004#menu_a
    }

    cxhash() {
        var req = new XMLHttpRequest();
        var url = location.hash.slice(1);
        // if(url === '.html') 
        //     url = 'menu_a.html';
        req.open("GET", "https://localhost:5001/" + url);
        req.onreadystatechange = function() {
            if(req.readyState == 4 && req.status == 200) {
                var div = document.getElementById("content");
                div.innerHTML = req.responseText;
            }
        };
        req.send(null);
    }

    render() {
        return (
            <div>
                <a href="#menu_a">A</a>
                <a href="#menu_b">B</a>
                <div id="content"></div>
            </div>
        );
    }
}
export default Demo4h_004