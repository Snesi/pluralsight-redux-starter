import React, {PropTypes} from 'react';
import Header from './common/Header';


class App extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }
  
  render () {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}


export default App;