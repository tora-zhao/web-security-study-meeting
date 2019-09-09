import React from 'react';
import getQuery from '../utils';

class Demo42_010 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            p: getQuery('p'),
        };
    }

    checkInt(p) {
        var regex = new RegExp('^[a-z0-9]{1,5}$');
        return regex.test(p);
    }

    render() {
        const {p} = this.state;
        return (
            <div>
                { 
                    this.checkInt(p)
                    ? 'pは' + p
                    : '1文字以上5文字以下の英数字を入力してください!'
                }
            </div>
        );
    }
}
export default Demo42_010