import { useState } from 'react';

function WorkoutForm() {
  const [workout, setWorkout] = useState({
    type: '',
    duration: '',
    caloriesBurned: ''
  });

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Workout Submitted:', workout);
    // TODO: send workout data to backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log a New Workout</h2>
      <input
        name="type"
        placeholder="Workout Type (e.g. Running)"
        value={workout.type}
        onChange={handleChange}
      />
      <input
        name="duration"
        placeholder="Duration (minutes)"
        value={workout.duration}
        onChange={handleChange}
      />
      <input
        name="caloriesBurned"
        placeholder="Calories Burned"
        value={workout.caloriesBurned}
        onChange={handleChange}
      />
      <button type="submit">Submit Workout</button>
    </form>
  );
}

export default WorkoutForm;
