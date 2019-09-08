import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
    render() {
      return (
        <div>
            <Link to="/hello" target="_blank">to hello</Link>
        </div>
      )
    }
  }
  export default App;