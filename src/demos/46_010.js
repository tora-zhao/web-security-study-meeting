import React from 'react';
import getQuery from '../utils';
import { Link } from 'react-router-dom';

class Demo46_010 extends React.Component{
    
    render() {
        return (
            <div>
               <form action="https://localhost:5001/login?sessionId=ABC" method="post">
                    UserId: <input type="text" name="_userId"/>
                    {/* <input type="hidden" name="sessionId" value="123"/> */}
                    <button type="submit" value="Submit">Submit</button>
               </form>
            </div>
        );
    }
}
export default Demo46_010