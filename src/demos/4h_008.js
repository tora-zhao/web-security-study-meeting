import React from 'react';
import getQuery from '../utils';
import { Link } from 'react-router-dom';

class Demo4h_008 extends React.Component{

    // test link
    // http://localhost:1404/4h_008#2
    // http://localhost:1404/4h_008#2');alert(document.domain);alert('
    componentDidMount() {
        var sec = location.hash.slice(1);
        //setTimeout("alert('" + sec + "秒経ちました')", sec * 1000);
        // 対策版
        setTimeout(function() {alert(sec + '秒経ちました')}, sec * 1000);
    }

    render() {
        return (
            <div>
                Demo4h_008
            </div>
        );
    }
}
export default Demo4h_008