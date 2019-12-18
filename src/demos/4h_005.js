import React from 'react';
import getQuery from '../utils';
import $ from 'jquery';
import URI from 'urijs';


class Demo4h_005 extends React.Component{
    
    componentDidMount() {
        var uri = new URI();
        var color = uri.query(true).color;
        
        if(!color) {
            color = 1;
        }
        console.log($('form').html());
        console.log(color);
        console.log('input[name="color"][value="' + color + '"]');
        $('input[name="color"][value="' + color + '"]').attr("checked", true);
        // test link
        // http://localhost:1404/4h_005?color=3
        // http://localhost:1404/4h_005?color="]<img+src=/+onerror=alert(1)>
    }

    render() {
        return (
            <div>
                <form id="form1">
                    <input type="radio" name="color" value="1"/>赤<br/>
                    <input type="radio" name="color" value="2"/>緑<br/>
                    <input type="radio" name="color" value="3"/>青<br/>
                </form>
            </div>
        );
    }
}
export default Demo4h_005