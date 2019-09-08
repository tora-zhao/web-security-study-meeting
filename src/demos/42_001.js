import React from 'react';
import url from 'url';
import getQuery from '../utils';

class Demo42_001 extends React.Component{

    componentDidMount() {
        console.log(getQuery('name'));
    }
    
    render() {
        return (
            <div>Hello!!</div>
        );
    }
}
export default Demo42_001