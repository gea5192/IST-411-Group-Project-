import { useState } from 'react';
import '../App.css'; // Adjust path if needed

function GoalForm() {
  const [formData, setFormData] = useState({
    target: '',
    deadline: '',
  });

  const [goals, setGoals] = useState([]); // ✅ local goal list

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.target && formData.deadline) {
      setGoals([...goals, formData]); // ✅ add new goal
      setFormData({ target: '', deadline: '' }); // clear form
    }
  };

  return (
    <div className="goal-page-container">
      <div className="goal-form">
        <h2>Set a New Goal 🎯</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="target"
            placeholder="Your fitness goal"
            value={formData.target}
            onChange={handleChange}
          />
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
          />
          <button type="submit">Add Goal</button>
        </form>
      </div>

      <div className="goal-list">
        <h3>🎉 Your Goals</h3>
        <ul>
          {goals.map((goal, index) => (
            <li key={index}>
              <strong>{goal.target}</strong> — due by <em>{goal.deadline}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GoalForm;
