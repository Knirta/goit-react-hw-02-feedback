import React, { Component } from "react";
import Container from "./components/countainer";
import Feedback from "./components/feedback";
import Statisctics from "./components/statistics";

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  addVoice = (name) => {
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const feedbacks = Object.entries(this.state);
    const names = feedbacks.map(([name]) => name);
    return (
      <Container>
        <Feedback names={names} handler={this.addVoice} />
        <Statisctics feedbacks={feedbacks} />
      </Container>
    );
  }
}

export default App;
