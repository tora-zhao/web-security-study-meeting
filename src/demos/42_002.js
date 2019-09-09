import React from 'react';
import getQuery from '../utils';

class Demo42_002 extends React.Component{

    componentDidMount() {
        //this.checkFoo(getQuery('foo'));
    }

    checkFoo(foo) {
        alert(foo);
    }

    checkInt(p) {
        var regex = new RegExp('^[0-9]+$');
        return regex.test(p);
    }
    
    render() {
        return (
            <div>{this.checkInt(getQuery('p')) ? '整数値です' : '整数値を入力してください!' }</div>
        );
    }
}
export default Demo42_002