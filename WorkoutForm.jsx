import { useState } from 'react';

function WorkoutForm({ onAddWorkout }) {
  const [formData, setFormData] = useState({
    type: '',
    duration: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddWorkout) {
      onAddWorkout(formData);  // ← Add to global state
    }
    setFormData({ type: '', duration: '', date: '' });  // Clear form
  }; //TODO: set workout data to backed

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log a New Workout</h2>
      <input
        name="type"
        placeholder="Workout Type (e.g. Running)"
        value={formData.type}
        onChange={handleChange}
      />
      <input
        name="duration"
        placeholder="Duration (minutes)"
        value={formData.duration}
        onChange={handleChange}
      />
      <input
        name="caloriesBurned"
        placeholder="Calories Burned"
        value={formData.caloriesBurned}
        onChange={handleChange}
      />
      <button type="submit">Submit Workout</button>
    </form>
  );
}

export default WorkoutForm;
