import { Component } from "react";
import "./App.css";
const btnStyle = {
  margin: "20px",
  padding: "10px 20px",
};
let intervalId = null;
export default class App extends Component {
  // const [time, setState] = useState({ count: 0 });
  state = {
    count: 0,
  };

  handleSetTime = (value) => {
    this.setState({ count: value });
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  startTimer = () => {
    if (this.state.count > 0 && !intervalId) {
      intervalId = setInterval(() => {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            clearInterval(intervalId);
            // this.setState({ count: 0 });s

            intervalId = null;
          }
        });
      }, 1000);
    }
  };
  stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };
  resetTimer = () => {
    clearInterval(intervalId);
    this.setState({ count: 0 });
    intervalId = null;
  };

  render() {
    return (
      <div className="App">
        <div
          style={{
            width: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <button
            style={btnStyle}
            onClick={() => this.handleSetTime(this.state.count + 1)}
          >
            +
          </button>
          <h2>{this.state.count}</h2>

          <button style={btnStyle} onClick={this.decrement}>
            -
          </button>
        </div>
        <div
          style={{
            width: "400px",
            display: "flex",
            justifyContent: "space-between",

            alignItems: "center",
            margin: "auto",
          }}
        >
          <button style={btnStyle} onClick={this.startTimer}>
            start
          </button>
          <button style={btnStyle} onClick={() => this.stopTimer()}>
            pause
          </button>

          <button style={btnStyle} onClick={() => this.resetTimer()}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
