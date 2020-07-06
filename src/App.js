import React from 'react';
import './App.css';

const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
const audios = [
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKey: ""
    };
    keys.forEach((key) => {
      this[key] = React.createRef();
    });
  }
  handleClick = (key) => {
    console.log(this[key].current);
    this[key].current.play();
    this.setState({ currentKey: key });
  };
  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      const key = e.key.toUpperCase();
      this[key].current.play();
      this.setState({ currentKey: key });
    });
  }
  render() {
    return (
      <div className="container">
        <h1>virtual drum set</h1>
        <div id="display">
          <div className="current">current key: {this.state.currentKey}</div>
          {keys.map((key, index) => (
            <div
              className="drum-pad"
              key={index}
              id={index}
              onClick={() => this.handleClick(key)}
            >
              <audio
                src={audios[index]}
                className="clip"
                id={key}
                ref={this[key]}
              />
              {key}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
