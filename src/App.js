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
          <li> <Link to="/46_001">46-001</Link></li>
          <li> <Link to="/46_003">46-003</Link></li>
          <li> <Link to="/46_010">46-010</Link></li>
          <li> <Link to="/4a_001">4a-001</Link></li>
          <li> <Link to="/4h_001">4h-001</Link></li>
          <li> <Link to="/4h_002">4h-002</Link></li>
          <li> <Link to="/4h_004">4h-004</Link></li>
          <li> <Link to="/4h_005">4h-005</Link></li>
          <li> <Link to="/4h_006">4h-006</Link></li>
          <li> <Link to="/4h_008">4h-008</Link></li>
          <li> <Link to="/4h_010">4h-010</Link></li>
        </ul>
      </div>
    )
  }
}
export default App;