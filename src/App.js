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

  addVoice = (name) => {
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, curr) => acc + curr, 0);

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = parseInt((this.state.good / total) * 100);
    return total ? percentage : 0;
  };

  render() {
    console.log(typeof this.countPositiveFeedbackPercentage());
    const total = this.countTotalFeedback();
    const feedbacks = Object.entries(this.state);
    const names = feedbacks.map(([name]) => name);
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions names={names} onLeaveFeedback={this.addVoice} />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statisctics
              feedbacks={feedbacks}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
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
