import React from 'react';
import getQuery from '../utils';
import axios from 'axios';

class Demo4a_001 extends React.Component{
    
    state = {
        fileContent: 'test'
    };

    componentDidMount() {
        this.fetchTextFile();
    }
    
    fetchTextFile(){
        var request = axios.create({
            baseURL: "https://localhost:5001",
        });
        request
        .get("/ReadFile?file=/Users/tora/Documents/mygithub/web-security-study-meeting/src/" + getQuery('file'))
        .then( (response) =>
            this.setState({ fileContent : response.data })
        )
        .catch( (error) =>
            console.error(error)
        )
    }

    render() {
        const {fileContent} = this.state;
        return (
            <div>
                {fileContent}
            </div>
        );
    }
}
export default Demo4a_001