import { useState, useEffect } from "react";
import Container from "./components/container";
import Description from "./components/description";
import Options from "./components/options";
import Feedback from "./components/feedback";
import Notification from "./components/notification";

const App = () => {
  let [feedbacks, setFeedbacks] = useState(() => {
    let feedbacks = window.localStorage.getItem("feedbacks");
    if (feedbacks) return JSON.parse(feedbacks);

    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  let addVoice = (option) => {
    setFeedbacks((prevState) => ({
      ...feedbacks,
      [option]: prevState[option] + 1,
    }));
  };

  let reset = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };

  let countTotalFeedback = () =>
    Object.values(feedbacks).reduce((acc, curr) => acc + curr, 0);

  let countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percentage = parseInt((feedbacks.good / total) * 100);
    return total ? percentage : 0;
  };

  const options = Object.keys(feedbacks);
  const feedbackItems = Object.entries(feedbacks);
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <Container>
      <Description />
      <Options
        options={options}
        onLeaveFeedback={addVoice}
        total={total}
        onReset={reset}
      />
      {total ? (
        <Feedback
          feedbacks={feedbackItems}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification>No feedback yet</Notification>
      )}
    </Container>
  );
};

export default App;
