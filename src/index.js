import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div id="drum-machine">
        <div id="display">
          <div id="drum-pad-container">
            <div class="drum-pad" id="">Q</div>
            <div class="drum-pad" id="">W</div>
            <div class="drum-pad" id="">E</div>
            <div class="drum-pad" id="">A</div>
            <div class="drum-pad" id="">S</div>
            <div class="drum-pad" id="">D</div>
            <div class="drum-pad" id="">Z</div>
            <div class="drum-pad" id="">X</div>
            <div class="drum-pad" id="">C</div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
