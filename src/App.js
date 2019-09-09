import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/hello">to hello</Link></li>
          <li> <Link to="/42_002">42-002</Link></li>
          <li> <Link to="/42_010">42-010</Link></li>
          <li> <Link to="/42_013">42-013</Link></li>
        </ul>
      </div>
    )
  }
}
export default App;