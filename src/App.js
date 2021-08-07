import React, { Component } from "react";
import Container from "./components/countainer";
import FeedbackOptions from "./components/feedbackOptions";
import Statisctics from "./components/statistics";
import Section from "./components/section";
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
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.addVoice} />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statisctics
              feedbacks={feedbacks}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
