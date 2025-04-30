function WorkoutHistory({ workouts }) {
  return (
    <div className="workout-history">
      <h2>Workout History</h2>
      <ul>
        {workouts.map((w, index) => (
          <li key={index}>
            {w.date} * {w.type} for {w.duration} , {w.caloriesBurned} Calories Burned
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutHistory;
