import React from 'react';
import ReactDOM from 'react-dom';
//import AwesomeComponent from './AwesomeComponent.jsx';
//import Resume from './resume.jsx';
import TicTacToe from './tictactoe.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        {/* <AwesomeComponent />
            <Resume />
        */}
        <TicTacToe />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));
