// this is class-Component
// there is not local Storage here
// to use this file change it's name to App.js and App.js change to AppSomething.js

import React, { Component } from "react";
import Container from "./components/container";
import Description from "./components/description";
import Options from "./components/options";
import Feedback from "./components/feedback";
import Notification from "./components/notification";

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  addVoice = (option) => {
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  };

  reset = () => {
    this.setState({ good: 0, neutral: 0, bad: 0 });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, curr) => acc + curr, 0);

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = parseInt((this.state.good / total) * 100);
    return total ? percentage : 0;
  };

  render() {
    const options = Object.keys(this.state);
    const feedbacks = Object.entries(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Description />
        <Options
          options={options}
          onLeaveFeedback={this.addVoice}
          total={total}
          onReset={this.reset}
        />
        {total ? (
          <Feedback
            feedbacks={feedbacks}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification>No feedback yet</Notification>
        )}
      </Container>
    );
  }
}

export default App;
