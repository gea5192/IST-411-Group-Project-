import { useState } from 'react';

function GoalForm() {
  const [goal, setGoal] = useState({
    target: '',
    deadline: ''
  });

  const handleChange = (e) => {
    setGoal({ ...goal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Goal Submitted:', goal);
    // TODO: send goal data to backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Set a Fitness Goal</h2>
      <input
        name="target"
        placeholder="Goal (e.g. Run 5 miles)"
        value={goal.target}
        onChange={handleChange}
      />
      <input
        name="deadline"
        type="date"
        value={goal.deadline}
        onChange={handleChange}
      />
      <button type="submit">Set Goal</button>
    </form>
  );
}

export default GoalForm;
