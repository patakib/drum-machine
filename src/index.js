import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const sound = [
{
  keyCode: 81,
  keyTrigger: 'Q',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
},
{
  keyCode: 87,
  keyTrigger: 'W',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
},
{
  keyCode: 69,
  keyTrigger: 'E',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
},
{
  keyCode: 65,
  keyTrigger: 'A',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
},
{
  keyCode: 83,
  keyTrigger: 'S',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
},
{
  keyCode: 68,
  keyTrigger: 'D',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
},
{
  keyCode: 90,
  keyTrigger: 'Z',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
},
{
  keyCode: 88,
  keyTrigger: 'X',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
},
{
  keyCode: 67,
  keyTrigger: 'C',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      vol: 0.50,
      display: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.setVolume = this.setVolume.bind(this)
  }
  handleClick = (event) => {
    document.getElementById(event.currentTarget.value).volume=this.state.vol;
    document.getElementById(event.currentTarget.value).play()
    this.setState({
      display: event.target.id
    })
  };
  setVolume = (event) => {
    this.setState({
      vol: event.target.value
    })
  }

  render() {
    return (
      <div id="drum-machine">
          <div id="drum-pad-container">
            <button className="drum-pad" id="Heater-1" value="Q" onClick={this.handleClick}>Q
              <audio
                  preload="auto"
                  src={sound[0].url}
                  type="audio/wav"
                  className="clip"
                  id="Q">
                </audio>
              </button>
            <button className="drum-pad" id="Heater-2" value="W" onClick={this.handleClick}>W
            <audio
                preload="auto"
                src={sound[1].url}
                type="audio/wav"
                className="clip"
                id="W">
              </audio>
            </button>
            <button className="drum-pad" id="Heater-3" value="E" onClick={this.handleClick}>E
              <audio
                preload="auto"
                src={sound[2].url}
                type="audio/wav"
                className="clip"
                id="E">
              </audio>
            </button>
            <button className="drum-pad" id="Open-HH" value="A" onClick={this.handleClick}>A
              <audio
                preload="auto"
                src={sound[3].url}
                type="audio/wav"
                className="clip"
                id="A">
              </audio>
            </button>
            <button className="drum-pad" id="Clap" value="S" onClick={this.handleClick}>S
              <audio
                preload="auto"
                src={sound[4].url}
                type="audio/wav"
                className="clip"
                id="S">
              </audio>
            </button>
            <button className="drum-pad" id="Heater-4" value="D" onClick={this.handleClick}>D
              <audio
                preload="auto"
                src={sound[5].url}
                type="audio/wav"
                className="clip"
                id="D">
              </audio>
            </button>
            <button className="drum-pad" id="Kick-n'-Hat" value="Z" onClick={this.handleClick}>Z
              <audio
                preload="auto"
                src={sound[6].url}
                type="audio/wav"
                className="clip"
                id="Z">
              </audio>
            </button>
            <button className="drum-pad" id="Kick" value="X" onClick={this.handleClick}>X
              <audio
                preload="auto"
                src={sound[7].url}
                type="audio/wav"
                className="clip"
                id="X">
              </audio>
            </button>
            <button className="drum-pad" id="Closed-HH" value="C" onClick={this.handleClick}>C
              <audio
                preload="auto"
                src={sound[8].url}
                type="audio/wav"
                className="clip"
                id="C">
              </audio>
            </button>
          </div>
          <div id="display">
            {this.state.display}
          </div>
          <div className='volume-slider'>
            <input
              max='1'
              min='0'
              onChange={this.setVolume}
              step='0.01'
              type='range'
              value={this.state.vol}
            />
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
